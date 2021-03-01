import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import AutocompleteBase from 'react-native-autocomplete-input';
import { palette, strings } from '../config';

interface AutocompleteProps {
  placeholder?: string;
  data: any[];
  style?: any;
}

const Autocomplete = ({
  placeholder,
  data,
  style,
  ...props
}: AutocompleteProps) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const filteredData = data.filter(
    (item) =>
      item &&
      item.text &&
      item.text.toLowerCase().startsWith(query.toLowerCase())
  );
  return (
    <View style={{ ...styles.wrapper, ...style }}>
      <AutocompleteBase
        hideResults={query.length < 3 || !showResults}
        data={filteredData}
        value={query}
        placeholder={placeholder}
        onChangeText={(text) => {
          setShowResults(true);
          setQuery(text);
        }}
        listStyle={styles.list}
        inputContainerStyle={styles.input}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setShowResults(false);
              setQuery(item.text);
            }}
            style={styles.autocompleteItem}
          >
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
        style={styles.autocomplete}
      />
    </View>
  );
};

export default Autocomplete;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    borderWidth: 0,
    top: 0,
    zIndex: 1,
    left: 0,
    right: 0,
  },
  autocomplete: {
    borderWidth: 0,
    height: 50,
    borderRadius: 4,
    padding: 10,
    fontSize: 20,
    backgroundColor: palette.common.white,
  },
  autocompleteItem: {
    height: 40,
    fontSize: 16,
    padding: 10,
    // backgroundColor: palette.common.white,
    minWidth: '100%',
  },
  input: {
    borderWidth: 0,
  },
  list: {
    alignSelf: 'stretch',
    left: -10,
    borderColor: palette.grey[200],
    borderRadius: 4,
    borderWidth: 1,
    minWidth: '100%',
    padding: 0,
  },
});
