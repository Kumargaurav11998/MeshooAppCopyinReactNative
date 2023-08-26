import {Avatar} from '@rneui/base';
import React, {useState} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../Utils/Colors';

export const ProdctListheader = props => {
  const [issearch, setsearch] = useState(props.search);
  const [ActiveSearch, setActiveSeach] = useState(false);

  const isclick = () => {
    props.getsearch(issearch);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.AppDefaultColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Avatar
        onPress={() => props.sendback()}
        size={26}
        icon={{
          name: 'left',
          type: 'antdesign',
          size: props.size,
          color: colors.white,
        }}
        containerStyle={{marginLeft: '2%'}}
      />
      <Text
        style={{
          fontSize: props.fontSize,
          color: colors.white,
          fontWeight: props.fontWeight,
          marginTop: props.marginTop,
          paddingTop: props.paddingTop,
        }}>
        {props.title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Pressable onPress={() => isclick()}>
          <Avatar
            icon={{
              name: 'search1',
              type: 'antdesign',
              size: props.size,
              color: colors.white,
            }}
          />
        </Pressable>
        <Avatar
          onPress={() => props.navigation.push('CartScreen')}
          icon={{
            name: 'shoppingcart',
            type: 'antdesign',
            size: props.size,
            color: colors.white,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
