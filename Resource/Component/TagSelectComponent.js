import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {TagSelect} from 'react-native-tag-select';
import {width} from '../Helper/Constant';
import {colors} from '../Utils/Colors';
import {radious} from '../Utils/Size';

function TagSelectionCompoent() {
  const data = [
    {id: 1, label: 'Under ₹ 99'},
    {id: 2, label: 'Under ₹ 199'},
    {id: 3, label: 'Under ₹ 150'},
    {id: 4, label: 'Under ₹ 299'},
    {id: 5, label: 'Under ₹ 499'},
    {id: 6, label: 'Under ₹ 999'},
    {id: 7, label: 'Above ₹ 499'},
    {id: 8, label: 'Above ₹ 999'},
    {id: 9, label: 'Above ₹ 1499'},
    {id: 10, label: 'Under ₹ 2000'},
  ];
  return (
    <ScrollView>
      <TagSelect
        data={data}
        itemStyle={styles.item}
        itemLabelStyle={styles.label}
        itemStyleSelected={styles.itemSelected}
        itemLabelStyleSelected={styles.labelSelected}
        containerStyle={styles.container}
      />
    </ScrollView>
  );
}
export default TagSelectionCompoent;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    width: width - 40,
  },

  item: {
    borderWidth: 1,
    borderColor: colors.txtgrey,
    backgroundColor: '#FFF',
    borderRadius: radious.tagsradious,
  },
  label: {
    color: colors.txtgrey,
  },
  itemSelected: {
    backgroundColor: colors.AppDefaultColor,
    borderColor: colors.AppDefaultColor,
  },
  labelSelected: {
    color: '#FFF',
  },
});
