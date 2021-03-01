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
    disabled={disabled}
    style={{
      ...styles.wrapper,
      ...(style as object),
      ...(isActive
        ? styles.wrapperActive
        : disabled
        ? styles.wrapperDisabled
        : {}),
    }}
    {...props}
  >
    {Icon && (
      <Icon
        fill={
          isActive
            ? palette.secondary.main
            : disabled
            ? palette.grey[200]
            : palette.common.white
        }
      />
    )}
    <Text
      style={{
        ...styles.title,
        ...(isActive
          ? styles.titleActive
          : disabled
          ? styles.titleDisabled
          : {}),
      }}
    >
      {title}
    </Text>
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
  wrapperActive: {
    backgroundColor: palette.common.white,
  },
  wrapperDisabled: {
    backgroundColor: palette.grey[100],
    borderColor: palette.grey[100],
  },
  titleActive: {
    color: palette.common.black,
  },
  titleDisabled: {
    color: palette.grey[200],
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
    color: palette.common.white,
  },
});
