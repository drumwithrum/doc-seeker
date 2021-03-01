import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import AutocompleteBase from 'react-native-autocomplete-input';
import { palette } from '../config';

interface AutocompleteProps {
  placeholder?: string;
  data: any[];
  onSelect: (val: string) => any;
  style?: any;
  value: string;
  onChange: (value: string) => any;
  showRawData?: boolean;
}

const Autocomplete = ({
  placeholder,
  data,
  style,
  onSelect,
  value,
  onChange,
  showRawData,
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
  useEffect(() => {
    if (value) setQuery(value);
  }, [value]);
  useEffect(() => {
    if (query.length >= 3) {
      onChange(query);
    }
  }, [query]);

  return (
    <View style={{ ...styles.wrapper, ...style }}>
      <AutocompleteBase
        hideResults={query.length < 3 || !showResults}
        data={showRawData ? data : filteredData}
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
              onSelect(item.text);
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
    left: 40,
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
    minWidth: '100%',
  },
  input: {
    borderWidth: 0,
  },
  list: {
    alignSelf: 'stretch',
    left: -50,
    borderColor: palette.grey[200],
    borderRadius: 4,
    borderWidth: 1,
    minWidth: Dimensions.get('window').width - 20,
    padding: 0,
  },
});
