import {Avatar, BottomSheet, Card, Divider, Icon, SearchBar} from '@rneui/base';
import {Overlay} from '@rneui/themed';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {height, width} from '../Helper/Constant';
import {colors} from '../Utils/Colors';
import {useDispatch} from 'react-redux';
import {SearchAction} from '../Action/SearchAction';
import {fontSize, radious} from '../Utils/Size';
function SearchOverlayComponent(props) {
  const [visible, setVisible] = useState(props.isOpen);
  const [search, setSearch] = useState('');
  const [isloadingSearch, setloadingsearch] = useState(false);
  const [isproducts, setproduct] = useState([]);
  const dispatch = useDispatch();
  const toggleOverlay = () => {
    setVisible(!props.isOpen);
    props.Getbackpress(!props.isOpen);
  };

  const updateSearch = search => {
    setSearch(search);
    if (search) {
      setloadingsearch(true);
    } else {
      setloadingsearch(false);
    }
    dispatch(SearchAction.GetProductBySearch(search)).then(async data => {
      if (data) {
        console.log(data);
        setloadingsearch(false);
        setproduct(data);
      }
    });
  };

  const ProductPressed = item => {
    props.navigation.push('ProductDeatilsScreen', {
      Data: item,
    });
    setTimeout(() => {
      props.Getbackpress(!props.isOpen);
    }, 500);
  };
  return (
    // <Overlay
    //   isVisible={visible}
    //   overlayStyle={styles.modalcontaner}
    //   onBackdropPress={toggleOverlay}>

    <SafeAreaView style={[styles.modalcontaner]}>
      <View style={styles.searchview}>
        <Pressable onPress={() => toggleOverlay()}>
          <Icon
            name="left"
            type="antdesign"
            size={25}
            color={colors.white}
            style={{paddingTop: '80%'}}
          />
        </Pressable>

        <SearchBar
          round
          containerStyle={[styles.searchcontainer]}
          inputContainerStyle={[styles.searchinputecontainer]}
          placeholder={'Search'}
          placeholderTextColor={colors.grey}
          onChangeText={updateSearch}
          value={search}
          showLoading={isloadingSearch}
          loadingProps={{color: colors.AppDefaultColor}}
        />
        <Icon
          name="filter"
          type="antdesign"
          color={colors.white}
          style={[styles.filtericon]}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={isproducts}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => ProductPressed(item)}
              style={[styles.Cardsty]}>
              <Card
                containerStyle={[styles.itemcard]}
                wrapperStyle={{margin: 0, padding: 0}}>
                <Card.Image
                  source={{uri: item.img}}
                  resizeMode="cover"
                  style={styles.categoryimg}></Card.Image>
                <Avatar
                  onPress={() => AddWishList(item)}
                  icon={{
                    name: 'heart-outlined',
                    type: 'entypo',
                    color: colors.black,
                    size: 25,
                  }}
                  containerStyle={[styles.wishlisticon]}
                />
                <Text style={[styles.label]}>
                  {item.title.slice(0, 18).trim()}
                </Text>

                <View style={styles.rS}>
                  <View>
                    <View style={[styles.priceview]}>
                      <Avatar
                        size={20}
                        icon={{
                          name: 'inr',
                          type: 'fontisto',
                          color: colors.black,
                          size: 10,
                        }}
                        iconStyle={{color: colors.black}}
                      />
                      <View>
                        <Text style={[styles.inrtxt, {color: colors.grey}]}>
                          {item.price}
                        </Text>
                        <Divider
                          style={[styles.pricecut]}
                          width={2}
                          color={colors.AppDefaultColor}></Divider>
                      </View>
                    </View>

                    <View style={[styles.priceview]}>
                      <Avatar
                        size={20}
                        icon={{
                          name: 'inr',
                          type: 'fontisto',
                          color: colors.black,
                          size: 10,
                        }}
                        iconStyle={{color: colors.black}}
                      />

                      <Text style={[styles.inrtxt, {color: colors.black}]}>
                        {item.discount_price}
                      </Text>
                    </View>
                  </View>
                  {/* ratiings */}
                  <View style={[styles.ratingview]}>
                    <Avatar
                      size={20}
                      icon={{
                        name: 'star',
                        type: 'antdesign',
                        colors: colors.white,
                        size: 13,
                      }}
                    />
                    <Text style={[styles.label, styles.ratingtxt]}>
                      {item.rating && item.rating.substring(0, 3)}
                    </Text>
                  </View>
                </View>
              </Card>
            </Pressable>
          );
        }}
        initialNumToRender={5}
        numColumns={2}></FlatList>
    </SafeAreaView>
  );
}

export default SearchOverlayComponent;

const styles = StyleSheet.create({
  modalcontaner: {
    backgroundColor: colors.white,
    flex: 1,
    width: width,
    margin: 0,
    padding: 0,
    height: height,
  },
  searchcontainer: {
    backgroundColor: colors.AppDefaultColor,
    borderColor: colors.AppDefaultColor,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: width - 60,
  },
  searchinputecontainer: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginLeft: 0,
    padding: 0,
  },
  searchview: {
    backgroundColor: colors.AppDefaultColor,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filtericon: {
    marginTop: '50%',
    paddingRight: 10,
  },
  label: {
    color: colors.AppDefaultColor,
    alignSelf: 'flex-start',
    fontSize: fontSize.lable,
  },
  itemcard: {
    alignSelf: 'center',
    width: width / 2.05,
    borderRadius: radious.borderradious,
    padding: 5,
  },
  Cardsty: {
    padding: 0,
    alignSelf: 'center',
    width: width / 2,
  },
  categorycard: {
    borderRadius: 10,
    margin: 10,
  },
  txtcategory: {
    textAlign: 'center',
    color: colors.AppDefaultColor,
  },
  bannerstyle: {
    borderRadius: radious.borderradious,
    width: '97%',
    marginTop: 5,
  },
  subheadertxt: {
    fontSize: fontSize.lable,
  },
  productimg: {
    resizeMode: 'contain',
    padding: 5,
    margin: 5,
  },
  imgcateogycontainer: {
    alignSelf: 'center',
  },
  itemavatar: {alignSelf: 'center'},
  des: {textAlign: 'center', color: colors.grey},
  rS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inrtxt: {
    color: colors.black,
    fontSize: fontSize.txt,
    alignSelf: 'flex-start',
    marginLeft: '15%',
  },
  wishlisticon: {
    color: colors.black,
    fontSize: fontSize.lable,
    position: 'absolute',
    right: '0%',
  },
  pricecut: {
    position: 'relative',
    bottom: '40%',
    marginLeft: '15%',
    marginRight: '15%',
  },
  ratingview: {
    backgroundColor: colors.AppDefaultColor,
    flexDirection: 'row',
    height: 21,
    borderRadius: radious.borderradious,
  },
  ratingtxt: {
    color: colors.white,
    paddingRight: '5%',
    fontSize: fontSize.txt,
  },
  priceview: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: '5%',
  },
  ruppeiconconatner: {
    marginTop: '8%',
  },
  subcategoryavatar: {
    borderWidth: 1,
    marginHorizontal: '2%',
    backgroundColor: colors.black,
    borderColor: colors.lightygrey,
  },
  divider: {
    marginVertical: '2%',
  },
  sortlisttxt: {
    color: colors.txtgrey,
    paddingTop: '2%',
    fontSize: fontSize.txt,
  },
  checkboccategorycontainer: {
    alignSelf: 'flex-start',
  },
  checkboxtitlecategory: {
    fontSize: fontSize.txt,
    fontWeight: '500',
    color: colors.txtgrey,
  },
  label: {
    color: colors.AppDefaultColor,
    alignSelf: 'flex-start',
    fontSize: fontSize.lable,
  },
});
