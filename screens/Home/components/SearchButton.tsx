import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../../../components/Themed';
import { palette } from '../../../config';

export type TouchableOpacityProps = Omit<TouchableOpacity['props'], 'onPress'>;

interface SearchButtonProps extends TouchableOpacityProps {
  onPress: () => any;
  title: string;
}

const SearchButton = ({
  onPress,
  title,
  style,
  ...props
}: SearchButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ ...styles.wrapper, ...(style as object) }}
    {...props}
  >
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default SearchButton;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: palette.secondary.main,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.common.white,
  },
});
