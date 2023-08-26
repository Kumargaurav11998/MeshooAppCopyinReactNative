import {Avatar} from '@rneui/base';
import React, {useLayoutEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {Switch, TextInput} from 'react-native-paper';
import {colors} from '../../Utils/Colors';
import {styles} from './SettingStyle';
import FlipCard from 'react-native-flip-card';
import {ScrollView} from 'react-native-gesture-handler';
import TouchComponent from '../../Component/TouchComponent';
import {fontSize, radious} from '../../Utils/Size';
import ExpandableView from '@pietile-native-kit/expandable-view';
function SettingScreen(props) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  function onPress() {
    setShow(!show);
  }
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
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
      <View style={[styles.flexDirectionWithJustify, styles.cardstyle]}>
        <Text style={[styles.label]}>Enable Notification</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color={colors.AppDefaultColor}
          trackColor={{false: colors.black, true: colors.AppDefaultColor}}
          focusable={true}
        />
      </View>

      <Pressable
        style={[styles.cardstyle, styles.flexDirectionWithJustify]}
        onPress={onPress}>
        <Text style={[styles.label]}>Change Password</Text>
        <Avatar
          icon={{
            name: !show ? 'right' : 'down',
            type: 'antdesign',
            color: !show ? colors.black : colors.AppDefaultColor,
            size: 25,
          }}
        />
      </Pressable>

      <ExpandableView show={show}>
        <TextInput
          label="Old Password"
          value={text}
          onChangeText={text => setText(text)}
          selectionColor={colors.black}
          style={styles.txtinpute}
          underlineColor={colors.Brikcolor}
          activeUnderlineColor={colors.AppDefaultColor}
          placeholderTextColor={colors.AppDefaultColor}
          secureTextEntry={true}
        />
        <TextInput
          label="New password"
          value={text}
          onChangeText={text => setText(text)}
          selectionColor={colors.black}
          style={styles.txtinpute}
          underlineColor={colors.Brikcolor}
          activeUnderlineColor={colors.AppDefaultColor}
          placeholderTextColor={colors.AppDefaultColor}
          secureTextEntry={true}
        />
        <TextInput
          label="Confirm Password"
          value={text}
          onChangeText={text => setText(text)}
          selectionColor={colors.black}
          style={styles.txtinpute}
          underlineColor={colors.Brikcolor}
          activeUnderlineColor={colors.AppDefaultColor}
          placeholderTextColor={colors.AppDefaultColor}
          secureTextEntry={true}
        />

        <TouchComponent
          backgroundColor={colors.AppDefaultColor}
          title="Submit"
          marginTop="10%"
          paddingVertical="4%"
          width="90%"
          alignSelf="center"
          borderRadius={radious.borderradious}
          titlecolor={colors.white}
          fontSize={fontSize.lable}
          press={() => onPress()}
        />
      </ExpandableView>
    </SafeAreaView>
  );
}
export default SettingScreen;
