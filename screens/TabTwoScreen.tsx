import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Autocomplete } from '../components';
import { Text, View } from '../components/Themed';
import { CitiesMocked } from './Home/Home.config';
import { AppContext } from '../utils/Context';
import { strings } from '../config';
import { Actions } from '../utils/reducers';

export default function Search({ navigation }: any) {
  const {
    dispatch,
    state: { searchType, doctor, location },
  } = useContext(AppContext);
  const onSelect = (value: string) => {
    dispatch({
      type: searchType === 'doctor' ? Actions.SET_DOCTOR : Actions.SET_LOCATION,
      payload: value,
    });
    navigation.navigate('TabOne');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Autocomplete
          data={CitiesMocked}
          value={searchType === 'doctor' ? doctor : location}
          placeholder={strings.TYPE_TO_SEARCH}
          onSelect={onSelect}
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
});
