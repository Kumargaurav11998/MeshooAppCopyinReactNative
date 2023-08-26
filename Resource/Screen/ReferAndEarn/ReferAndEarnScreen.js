import {Avatar} from '@rneui/base';
import React, {useLayoutEffect} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Share,
} from 'react-native';
import TouchComponent from '../../Component/TouchComponent';
import {colors} from '../../Utils/Colors';
import {styles} from './ReferAndEarnStyle';

function ReferAndEarnScreen(props) {
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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Refer & Earn',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={colors.AppDefaultColor} translucent={true} />
      <Avatar
        source={{
          uri: 'https://www.zingoy.com/blog/wp-content/uploads/2021/07/How-to-earn-money-online2.jpg',
        }}
        avatarStyle={[styles.avatarStyle]}
        containerStyle={[styles.containerStyle]}
      />
      <Pressable
        onPress={() => onShare()}
        style={[
          styles.FlexDirectionWithoutJustify,
          styles.btn,
          styles.spacingtopmargin,
        ]}>
        <Avatar
          icon={{
            name: 'sharealt',
            type: 'antdesign',
            color: colors.white,
            size: 22,
          }}
          containerStyle={styles.useravtarconatner}
        />
        <Text style={[styles.btntitle]}>Refer & Earn</Text>
      </Pressable>

      <View style={[styles.FlexDirectionWithoutJustify]}>
        <Text style={[styles.termtxt]}>Terms & Conditons</Text>
        <Text
          style={[
            styles.termtxt,
            {
              color: colors.txtgrey,
              marginHorizontal: '2%',
              fontSize: 22,
              fontWeight: '800',
              marginTop: '2%',
            },
          ]}>
          .
        </Text>
        <Text style={[styles.termtxt]}>FAQs</Text>
      </View>
    </SafeAreaView>
  );
}
export default ReferAndEarnScreen;
