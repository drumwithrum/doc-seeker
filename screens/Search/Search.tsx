import React, { useContext } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Autocomplete } from '../../components';
import { View } from '../../components/Themed';
import { CitiesMocked } from '../Home/Home.config';
import { AppContext } from '../../utils/Context';
import { strings } from '../../config';
import ArrowLeft from '../../assets/images/arrowLeft.svg';
import { Actions } from '../../utils/reducers';

export default function Search({ navigation }: any) {
  const {
    dispatch,
    state: { searchType, doctor, doctors, location },
  } = useContext(AppContext);
  const isSearchingDoctors = searchType === 'doctor';
  const navigateBack = () => {
    navigation.navigate('TabOne');
  };
  const onSelect = (value: string) => {
    dispatch({
      type: isSearchingDoctors ? Actions.SET_DOCTOR : Actions.SET_LOCATION,
      payload: value,
    });
    navigateBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.returnButton} onPress={navigateBack}>
          <ArrowLeft />
        </TouchableOpacity>
        <Autocomplete
          data={isSearchingDoctors ? doctors : CitiesMocked}
          value={isSearchingDoctors ? doctor : location}
          showRawData={isSearchingDoctors}
          placeholder={strings.TYPE_TO_SEARCH}
          onSelect={onSelect}
          onChange={async (query) => {
            if (!isSearchingDoctors) return;
            const response = await axios.post(
              'https://docplanner-1.algolia.io/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.2.0)%3B%20Browser%20(lite)&x-algolia-api-key=90a529da12d7e81ae6c1fae029ed6c8f&x-algolia-application-id=docplanner',
              {
                requests: [
                  {
                    indexName: 'pl_autocomplete_item',
                    query,
                    params: 'hitsPerPage=5',
                  },
                ],
              }
            );
            dispatch({
              type: Actions.SET_DOCTORS,
              payload: response.data.results
                .map((item: any) =>
                  item.hits.map((hit: any) => {
                    const name = hit.fullname_formatted || hit.name;
                    return name.charAt(0).toUpperCase() + name.slice(1);
                  })
                )
                .flat()
                .map((item: any) => ({ text: item })),
            });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 100,
    padding: 10,
    paddingTop: 20,
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 100,
  },
  returnButton: {
    position: 'absolute',
    top: 0,
    left: -10,
  },
});
