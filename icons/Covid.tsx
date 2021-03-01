import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Svg } from 'react-native-svg';

const Covid = ({ ...props }: any) => (
  <Svg viewBox="0 0 24 24" fill="white" width="24px" height="24px">
    <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z" />
  </Svg>
);

export default Covid;
