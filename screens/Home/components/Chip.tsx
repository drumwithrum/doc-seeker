import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../../../components/Themed';

import { palette } from '../../../config';

export type TouchableOpacityProps = Omit<TouchableOpacity['props'], 'onPress'>;

interface SearchButtonProps extends TouchableOpacityProps {
  onPress: () => any;
  title: string;
  isActive?: boolean;
  disabled?: boolean;
  Icon?: Component | any;
}

const SearchButton = ({
  onPress,
  title,
  style,
  disabled,
  Icon,
  isActive,
  ...props
}: SearchButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ ...styles.wrapper, ...(style as object) }}
    {...props}
  >
    {Icon && <Icon />}
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default SearchButton;

const styles = StyleSheet.create({
  wrapper: {
    borderColor: palette.common.white,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
    color: palette.common.white,
  },
});
