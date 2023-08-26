import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {width} from '../Helper/Constant';
import {colors} from '../Utils/Colors';

const CustomDropdownComponent = props => {
  const [value, setValue] = useState(props.SelectedValue);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[styles.label, isFocus && {color: colors.AppDefaultColor}]}>
          {props.label}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={[styles.container, {borderBottomWidth: props.bottomWidth}]}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        maxHeight={props.height}
        labelField="label"
        valueField="label"
        placeholder={!isFocus ? props.placeholder : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.label);
          setIsFocus(false);
          props.Getvalue(item.label);
        }}
      />
    </View>
  );
};

export default CustomDropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.AppDefaultColor,
    width: width - 10,
  },
  dropdown: {
    height: 52,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    borderBottomColor: colors.AppDefaultColor,
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
    paddingLeft: 10,
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
