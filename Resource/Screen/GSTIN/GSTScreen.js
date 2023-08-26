import {Avatar} from '@rneui/base';
import React, {useLayoutEffect, useState} from 'react';
import {Pressable, SafeAreaView, Text, Dimensions, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import TouchComponent from '../../Component/TouchComponent';
import {colors} from '../../Utils/Colors';
import {radious} from '../../Utils/Size';
import {styles} from './GSTStyle';
const {width, height} = Dimensions.get('window');
export default GSTScreen = props => {
  const [text, setText] = useState('');
  const [ishsncode, setishsncode] = useState('');
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => props.navigation.pop()}>
          <Avatar
            size={35}
            icon={{
              name: 'left',
              type: 'antdesign',
              color: colors.white,
            }}
            containerStyle={{marginTop: '5%'}}
          />
        </Pressable>
      ),
    });
  }, [props.navigation]);
  return (
    <SafeAreaView style={[styles.container]}>
      <TextInput
        label="GSTIN"
        placeholder="GSTIN"
        value={text}
        onChangeText={text => setText(text)}
        selectionColor={colors.black}
        style={styles.txtinpute}
        underlineColor={colors.Brikcolor}
        activeUnderlineColor={colors.AppDefaultColor}
        placeholderTextColor={colors.grey}
        autoCapitalize={true}
      />

      <TextInput
        label="HSN Code"
        placeholder="HSN"
        value={text}
        onChangeText={text => setishsncode(text)}
        selectionColor={colors.black}
        style={styles.txtinpute}
        underlineColor={colors.Brikcolor}
        activeUnderlineColor={colors.AppDefaultColor}
        placeholderTextColor={colors.grey}
        autoCapitalize={true}
      />
      <View style={[styles.btn]}>
        <TouchComponent
          title="Verify"
          titlecolor={colors.white}
          backgroundColor={colors.AppDefaultColor}
          width={width}
          alignSelf="center"
          paddingVertical="3.5%"
          // borderRadius={radious.borderradious}
          marginTop={'15%'}
          press={() => props.navigation.push('PickUpAddressScreen')}
        />
      </View>
    </SafeAreaView>
  );
};
