import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { SearchCategory } from '../Home.types';
import Chip from './Chip';

import { palette } from '../../../config';

interface MenuProps {
  data: SearchCategory[];
}

const Menu = ({ data, ...props }: MenuProps) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Chip
          Icon={item.Icon}
          title={item.title}
          onPress={() => null}
          style={styles.listItem}
          isActive={!index}
          disabled={!!index}
        />
      )}
      keyExtractor={(item) => `menu-item-${item.title}`}
      style={styles.test}
    />
  );
};

export default Menu;

const styles = StyleSheet.create({
  listItem: {
    marginRight: 8,
  },
  test: {
    height: 40,
    flexGrow: 0,
    marginBottom: 8,
  },
});
