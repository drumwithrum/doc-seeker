import React, { useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Autocomplete } from '../components';
import { Text, View } from '../components/Themed';
import { CitiesMocked } from './Home/Home.config';
import { strings } from '../config';

export default function Search({ navigation }: any) {
  console.log(navigation);
  const nav = () => {
    navigation.navigate('TabTwo');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Autocomplete
          data={CitiesMocked}
          placeholder={strings.TYPE_TO_SEARCH}
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
