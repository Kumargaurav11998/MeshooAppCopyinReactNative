import {SearchBar} from '@rneui/base';
import {set} from 'immer/dist/internal';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../Utils/Colors';
function SearchbarComponent(props) {
  const [search, setSearch] = useState('');
  const [isloadingSearch, setloadingsearch] = useState(false);
  const updateSearch = search => {
    setSearch(search);
    if (search) {
      setloadingsearch(true);
      var data = props.Data.filter(item => {
        if (search == item.order_id) {
          props.getSearchData([item]);
        } else {
          props.getSearchData(props.reset);
        }
      });
      console.log(data);
    } else {
      props.getSearchData(props.reset);
      setloadingsearch(false);
    }
  };
  return (
    <SearchBar
      round
      containerStyle={[
        styles.searchcontainer,
        {backgroundColor: props.backgroundColor, width: props.width},
      ]}
      inputContainerStyle={[styles.searchinputecontainer]}
      placeholder={props.placeholder}
      placeholderTextColor={colors.grey}
      onChangeText={updateSearch}
      value={search}
      showLoading={isloadingSearch}
      loadingProps={{color: colors.AppDefaultColor}}
      spellCheck={props.spellCheck}
    />
  );
}
export default SearchbarComponent;
const styles = StyleSheet.create({
  searchcontainer: {
    borderColor: colors.AppDefaultColor,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 0,
  },
  searchinputecontainer: {
    backgroundColor: colors.white,
  },
});
