import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../../components/Themed';
import { Input } from '../../../components';
import SearchButton from './SearchButton';
import Menu from './Menu';
import { categoriesMocked } from '../Home.config';
import { AppContext } from '../../../utils/Context';
import { palette, strings } from '../../../config';
import { Actions } from '../../../utils/reducers';

interface SearchFormProps {
  onInputClick: any;
}

const SearchForm = ({ onInputClick }: SearchFormProps) => {
  const {
    state: { doctor, location },
    dispatch,
  } = useContext(AppContext);
  return (
    <View style={styles.wrapper}>
      <Menu data={categoriesMocked} />

      <Input
        value={doctor}
        onChange={() => null}
        placeholder={strings.SPECIALIZATION_OR_LAST_NAME}
        style={styles.input}
        onFocus={() => {
          dispatch({ type: Actions.SET_SEARCH_TYPE, payload: 'doctor' });
          onInputClick();
        }}
      />
      <Input
        onChange={() => null}
        value={location}
        placeholder={strings.COVID_TESTS}
        onFocus={() => {
          dispatch({ type: Actions.SET_SEARCH_TYPE, payload: 'location' });
          onInputClick();
        }}
        style={styles.input}
      />
      <SearchButton
        onPress={() => null}
        title={strings.SEARCH}
        style={styles.button}
      />
    </View>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 100,
    padding: 10,
    borderRadius: 6,
    backgroundColor: palette.actions.hover,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.common.white,
  },
  input: {
    alignSelf: 'stretch',
    marginVertical: 4,
  },
  inputWrapper: {
    alignSelf: 'stretch',
  },
  button: {
    marginTop: 8,
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});
