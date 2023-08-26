import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {width} from '../Helper/Constant';
import {colors} from '../Utils/Colors';

const data = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Other', value: 'Other'},
];

const GenderDropdownComponent = props => {
  const [value, setValue] = useState(props.SelectedValue);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[styles.label, isFocus && {color: colors.AppDefaultColor}]}>
          Gender
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="value"
        valueField="value"
        placeholder={!isFocus ? 'Gender' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          props.GetValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default GenderDropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width - 10,
    alignSelf: 'center',
    borderBottomWidth: 1.1,
    borderBottomColor: colors.AppDefaultColor,
  },
  dropdown: {
    height: 52,
    borderColor: 'gray',

    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 10,
    bottom: '80%',
    zIndex: 999,

    fontSize: 13,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingLeft: 5,
    color: colors.grey,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.txtgrey,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
