import React from 'react';
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

const Menu = ({ data, ...props }: MenuProps) => (
  <FlatList
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => (
      <Chip
        Icon={item.Icon}
        title={item.title}
        onPress={() => null}
        style={styles.listItem}
      />
    )}
    keyExtractor={(item) => `menu-item-${item.title}`}
  />
);

export default Menu;

const styles = StyleSheet.create({
  listItem: {
    marginRight: 8,
  },
});
