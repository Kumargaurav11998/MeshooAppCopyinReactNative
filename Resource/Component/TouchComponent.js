import React from 'react';
import {Image, TouchableOpacity, Text, Pressable} from 'react-native';

function TouchComponent(props) {
  //console.log(props.press)
  return (
    <Pressable
      onPress={() => props.press()}
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        paddingVertical: props.paddingVertical,
        paddingHorizontal: props.paddingHorizontal,
        width: props.width,
        marginTop: props.marginTop,
        alignSelf: props.alignSelf,
        marginLeft: props.marginLeft,
        marginBottom: props.marginBottom,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: props.titlecolor,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
        }}>
        {props.title}
      </Text>
    </Pressable>
  );
}
export default TouchComponent;
