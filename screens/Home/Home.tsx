import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../../components/Themed';
import { SearchForm } from './components';

import { palette, strings } from '../../config';

export default function Home() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/znanylogo2.jpg')}
        />
        <Text style={styles.title}>{strings.UNKNOWN}</Text>
      </View>
      <View style={styles.infoBlockLayout}>
        <Image
          style={styles.infoImage}
          source={require('../../assets/images/doctor.png')}
        />
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>{strings.FIND_DOCTOR}</Text>
          <Text style={styles.infoSubtitle}>{strings.SEEK_ACROSS}</Text>
        </View>
      </View>
      <SearchForm />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.common.white,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  header: {
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    marginBottom: 30,
  },
  infoBlockLayout: {
    resizeMode: 'contain',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingRight: 20,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  infoSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'rgba(255,255,255, 0.6)',
  },
  infoImage: {
    height: 200,
    width: 140,
  },
  infoWrapper: {
    flex: 1,
    alignSelf: 'center',
  },
});
