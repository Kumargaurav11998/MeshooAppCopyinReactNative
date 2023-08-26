import {Avatar} from '@rneui/base';
import {Overlay} from '@rneui/themed';
import React, {useState} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {RadioButton} from 'react-native-paper';
import {colors} from '../Utils/Colors';
import {radious} from '../Utils/Size';
const {width, height} = Dimensions.get('screen');
function FilterDropDownReactNative(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [checked, setChecked] = useState('first');
  const [items, setItems] = useState([
    {label: 'All'},
    {label: 'Ordered'},
    {label: 'Shiped'},
    {label: 'Delivred'},
    {label: 'Cancelled'},
    {label: 'Exchanged'},
    {label: 'Return'},
    {label: 'Other'},
  ]);
  const selcted = item => {
    setChecked(item.label);
    setOpen(false);
    props.Getname(item.label);
  };
  return (
    <View
      style={[
        {
          paddingVertical: props.paddingTop,
          position: 'absolute',
          right: 0,
          paddingTop: '40%',
          backgroundColor: props.backgroundColor,
          // width: width / 10.6,
          // height: height / 11.7,
        },
      ]}>
      <Avatar
        onPress={() => setOpen(!open)}
        icon={{
          name: 'filter',
          type: 'antdesign',
          color: colors.white,
          size: 25,
        }}
        containerStyle={{
          alignSelf: 'flex-end',
          backgroundColor: colors.AppDefaultColor,
        }}
      />

      <Overlay
        visible={open}
        animationType="fade"
        overlayStyle={[style.filtercontaner]}
        transparent={true}
        fullScreen={false}
        onBackdropPress={() => setOpen(!open)}
        backdropStyle={{backgroundColor: 'transparent'}}>
        {open &&
          items.map((item, index) => {
            return (
              <View key={index + 55}>
                <View
                  style={[style.flexDirectionWithoutJustify, style.modalsty]}>
                  <RadioButton
                    value={item.label}
                    status={checked === item.label ? 'checked' : 'unchecked'}
                    onPress={() => selcted(item)}
                    color={colors.AppDefaultColor}
                  />
                  <Text style={[style.label]}>{item.label}</Text>
                </View>
              </View>
            );
          })}
      </Overlay>
    </View>
  );
}
export default FilterDropDownReactNative;

const style = StyleSheet.create({
  flexDirectionWithJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexDirectionWithoutJustify: {
    flexDirection: 'row',
  },

  filtercontaner: {
    backgroundColor: colors.white,
    position: 'absolute',
    top: height / 8.0,
    right: 0,
  },
  label: {
    color: colors.black,
    marginTop: '6%',
  },
  drowpboxconatner: {position: 'absolute', top: 500},
  modalsty: {
    backgroundColor: 'white',
    width: width / 3,
    alignSelf: 'flex-end',

    // shadowOpacity: 0.25,
  },
});
