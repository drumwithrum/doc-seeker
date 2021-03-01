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
  disabled,
  ...props
}: SearchButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={{
      ...styles.wrapper,
      ...(style as object),
      ...(disabled ? styles.disabledWrapper : {}),
    }}
    {...props}
  >
    <Text
      style={{ ...styles.title, ...(disabled ? styles.titleDisabled : {}) }}
    >
      {title}
    </Text>
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
  disabledWrapper: {
    backgroundColor: palette.grey[100],
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.common.white,
  },
  titleDisabled: {
    color: palette.grey[200],
  },
});
