import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextInput, View } from 'react-native';
import { palette, strings } from '../config';

export type InputDefaultProps = Omit<TextInput['props'], 'onChange'>;

interface InputProps extends InputDefaultProps {
  placeholder?: string;
  onChange: (val: string) => any;
  value: string;
}

const Input = ({
  onChange,
  placeholder,
  value,
  style: passedStyle,
  ...props
}: InputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={value}
      style={{ ...styles.input, ...(passedStyle as object) }}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 4,
    padding: 10,
    fontSize: 20,
    backgroundColor: palette.common.white,
  },
});
