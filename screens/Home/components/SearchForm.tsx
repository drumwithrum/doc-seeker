import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../../../components/Themed';
import { Input } from '../../../components';
import SearchButton from './SearchButton';
import Menu from './Menu';
import { categoriesMocked } from '../Home.config';

import { palette, strings } from '../../../config';

export default function SearchForm() {
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  return (
    <View style={styles.wrapper}>
      <Menu data={categoriesMocked} />
      <Input
        onChange={setLocation}
        value={location}
        placeholder={strings.SPECIALIZATION_OR_LAST_NAME}
        style={styles.input}
      />
      <Input
        onChange={setCity}
        value={city}
        placeholder={strings.COVID_TESTS}
        style={styles.input}
      />
      <SearchButton
        onPress={() => null}
        title={strings.SEARCH}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 100,
    padding: 10,
    borderRadius: 6,
    backgroundColor: palette.actions.hover,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.common.white,
  },
  input: {
    alignSelf: 'stretch',
    marginVertical: 4,
  },
  button: {
    marginTop: 8,
  },
});
