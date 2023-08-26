import {Avatar} from '@rneui/base';
import React, {useRef, useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  category,
  categoryListSub,
  height,
  width,
  CategoryList,
} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {styles} from './CategoriesStyle';

function CategoriesScreen() {
  const Topref = useRef();
  const thumbref = useRef();
  const [isindex, setindex] = useState(0);
  const setActiveIndex = actindex => {
    setindex(actindex);
    Topref?.current?.scrollToOffset({
      offset: actindex * (height / 8),
      Animated: true,
    });

    if (actindex * 60 - 25 > height / 8) {
      thumbref?.current?.scrollToOffset({
        offset: actindex * 60 - height / 8 + 25,
        Animated: true,
      });
    }
    if (actindex * 60 - 25 < height / 8) {
      thumbref?.current?.scrollToOffset({
        offset: actindex * 60 - height / 8 + 25,
        Animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      {/* Statusbar */}
      {/* <StatusBar backgroundColor={colors.AppDefaultColor} /> */}
      {/* Header */}
      <View style={[styles.flexDirectionWithJustify, styles.headerview]}>
        <View style={[styles.flexDirectionWithoutJustify]}>
          <Avatar
            icon={{
              name: 'hearto',
              type: 'antdesign',
              color: colors.AppDefaultColor,
            }}
          />
          <Avatar
            icon={{
              name: 'shoppingcart',
              type: 'antdesign',
              color: colors.AppDefaultColor,
            }}
          />
        </View>
        <Text style={[styles.headertxt]}>Categories</Text>
        <View style={[styles.flexDirectionWithoutJustify]}>
          <Avatar
            icon={{
              name: 'hearto',
              type: 'antdesign',
              color: colors.white,
            }}
          />
          <Avatar
            icon={{
              name: 'shoppingcart',
              type: 'antdesign',
              color: colors.white,
            }}
          />
        </View>
      </View>
      <View>
        <FlatList
          ref={thumbref}
          horizontal
          style={[
            {
              alignSelf: 'flex-start',

              width: width,
            },
          ]}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          data={CategoryList}
          contentContainerStyle={{margin: 10}}
          renderItem={({item, index}) => {
            return (
              <View style={[styles.thumbmainview]}>
                <Avatar
                  onPress={() => setActiveIndex(index)}
                  /// size={180}

                  avatarStyle={styles.avatarimg}
                  source={item.img}
                  containerStyle={[
                    styles.contnerthumbnail,
                    {
                      borderColor:
                        isindex == index
                          ? colors.AppDefaultColor
                          : 'transparent',
                    },
                  ]}
                />
                <Text style={[styles.categoryname]}>
                  {item.name.split(' ')[0]}
                </Text>
                <Text style={[styles.categoryname]}>
                  {item.name.split(' ')[1] && item.name.split(' ')[1]}
                </Text>
              </View>
            );
          }}
        />

        <FlatList
          ref={Topref}
          style={[styles.FlatListstyle]}
          showsHorizontalScrollIndicator={false}
          data={categoryListSub}
          numColumns={3}
          onMomentumScrollEnd={ev => {
            setActiveIndex(
              Math.floor(ev.nativeEvent.contentOffset.y / (height / 8)),
            );
          }}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={[styles.mainview]}>
                <Avatar
                  /// size={180}
                  avatarStyle={styles.avatarimg}
                  source={item.img}
                  containerStyle={styles.conterimg}
                />
                <Text style={[styles.subitemtxt]}>
                  {item.name.split(' ')[0]}
                </Text>
                <Text style={[styles.subitemtxt]}>
                  {item.name.split(' ')[1] && item.name.split(' ')[1]}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
export default CategoriesScreen;

////////////////////Product de tails

<View style={[styles.sizeview]}>
  <View style={[styles.flexrowWitjSpaceBetween, {marginTop: paddview.s}]}>
    <Text style={[styles.label]}>Brand Name :</Text>
    <Text style={[styles.Sublabel]}>{Data.Brand}</Text>
  </View>
  <View style={[styles.flexrowWitjSpaceBetween, {marginTop: paddview.s}]}>
    <Text style={[styles.label]}>Seller Name :</Text>
    <Text style={[styles.Sublabel]}>{Data.seller_id}</Text>
  </View>
  {/* Skin Type */}
  <View style={[styles.flexrowWitjSpaceBetween, {marginTop: paddview.s}]}>
    <Text style={[styles.label]}>Skin Type :</Text>
    <Text style={[styles.Sublabel]}>{}</Text>
  </View>
  {/* Weight */}
  <View style={[styles.flexrowWitjSpaceBetween, {marginTop: paddview.s}]}>
    <Text style={[styles.label]}>Weight :</Text>
    <Text style={[styles.Sublabel]}>{Data.Weight}</Text>
  </View>
  <View style={[styles.flexrowWitjSpaceBetween, {marginTop: paddview.s}]}>
    <Text style={[styles.label]}>Flavor :</Text>
    <Text style={[styles.Sublabel]}>Rose</Text>
  </View>
  <View style={[styles.flexrowWitjSpaceBetween, {marginTop: paddview.s}]}>
    <Text style={[styles.label]}>Policy :</Text>
    <Text style={[styles.Sublabel]}>7 days Return Policy</Text>
  </View>
  <View style={[styles.flexrowWitjSpaceBetween, {marginTop: paddview.s}]}>
    <Text style={[styles.label]}>Concern :</Text>
    <Text style={[styles.Sublabel]}>Whitening</Text>
  </View>
  <View style={[styles.flexrowWitjSpaceBetween, {marginTop: paddview.s}]}>
    <Text style={[styles.label]}>Deliver area :</Text>
    <Text style={[styles.Sublabel]}>Any One</Text>
  </View>
</View>;
