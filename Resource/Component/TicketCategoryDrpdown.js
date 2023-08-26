import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {MultiSelect, Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {width} from '../Helper/Constant';
import {colors} from '../Utils/Colors';

const data = [
  {label: 'English', value: 'English'},
  {label: 'Hindi', value: 'Hindi'},
  {label: 'Punjabi', value: 'Punjabi'},
  {label: 'Bangali', value: 'Bangali'},
  {label: 'Bhojpuri', value: 'Bhojpuri'},
  {label: 'Tamil', value: 'Tamil'},
  {label: 'Telgu', value: 'Telgu'},
];

const TicketCategoryDropDown = props => {
  const [selected, setSelected] = useState([]);

  return (
    <View style={styles.container}>
      <Dropdown
        activeColor={colors.lightygrey}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        labelField="category"
        valueField="value"
        placeholder="Select Category"
        value={selected}
        onChange={item => {
          setSelected(item);
          props.GetValue(item.category);
        }}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

export default TicketCategoryDropDown;

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.AppDefaultColor,
    borderRadius: 5,
  },
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
  },
  placeholderStyle: {
    fontSize: 18,
    color: colors.txtgrey,
    paddingLeft: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    left: 10,
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
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 10,
  },
});
