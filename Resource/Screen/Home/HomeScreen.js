import {Avatar, Card, Divider} from '@rneui/base';

import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  StatusBar,
  Pressable,
} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {SliderBox} from 'react-native-image-slider-box';
import {colors} from '../../Utils/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './HomeStyle';
import {HotDeals, image} from '../../Helper/Constant';
import {WishListAction} from '../../Action/WishListAction';
import Toast from 'react-native-toast-message';
import LoginCompoent from '../../Component/LoginComponent';
import {SearchAction} from '../../Action/SearchAction';
import {ProdcutAction} from '../../Action/ProductsAction';
import {LogBox} from 'react-native';
function HomeScreen(props) {
  LogBox.ignoreAllLogs();

  const GetAllProducts = useSelector(
    state => state.ProductsReducer.GetAllProducts[0],
  );
  const [search, setSearch] = useState('');
  const [isloadingSearch, setloadingsearch] = useState(false);
  const ScrollY = useRef(new Animated.Value(0)).current;
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const dispatch = useDispatch();
  const [productdata, setproductdata] = useState([]);
  const [AllProductData, setallProductData] = useState(GetAllProducts);
  const TranslateY = ScrollY.interpolate({
    inputRange: [10, 10],
    outputRange: [0, -45],
  });
  const translateTop = ScrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [0, -10],
  });

  str="Welcome to Programiz!"
console.log(str.reverce());
  // Search
  const updateSearch = search => {
    setSearch(search);
    if (search) {
      setloadingsearch(true);
      dispatch(SearchAction.GetProductBySearch(search)).then(async data => {
        if (data) {
          setloadingsearch(false);
          setproductdata(data);
        }
      });
    } else {
      setloadingsearch(false);
      setproductdata(GetAllProducts);
    }
  };

  const Getcategory = useSelector(
    state => state.CategoryReducer.GetCategoryList[0],
  );

  useEffect(() => {
    GetProducts();
  }, [GetProducts]);

  const userdetails = useSelector(state => state.Authreducer.Login[0]);

  const AddWishList = item => {
    if (userdetails) {
      dispatch(
        WishListAction.AddWishListAction(userdetails[0].id, item.product_id),
      ).then(async data => {
        if (data) {
          console.log(data);
          Toast.show({
            type: 'success',
            text1: data.message,
            position: 'bottom',
            visibilityTime: 2000,
            autoHide: true,
          });
        }
      });
    } else {
      setIsBottomSheetVisible(true);
    }
  };

  // Get All Pruducts
  const GetProducts = () => {
    dispatch(ProdcutAction.GetAllProductsAction()).then(async data => {
      if (data) {
        setallProductData(data);
      }
    });
  };

  const productClick = item => {
    props.navigation.push('ProductDeatilsScreen', {Data: item});
    setTimeout(() => {
      setSearch('');
    }, 500);
  };

  const isLogin = () => {
    if (userdetails) {
      if (userdetails.length > 0) {
        if (userdetails[0].mobile_no) {
          props.navigation.push('UserProfileScreen');
        } else {
          setIsBottomSheetVisible(true);
        }
      } else {
        setIsBottomSheetVisible(true);
      }
    } else {
      setIsBottomSheetVisible(true);
    }
  };

  return (
    <SafeAreaView style={[styles.Container]}>
      <StatusBar backgroundColor={colors.AppDefaultColor} />
      {/* haeader */}

      <View style={styles.HeaderTop}>
        <View style={[styles.subheaderLeft]}>
          <Avatar
            onPress={() => props.navigation.push('WishListScrren')}
            rounded
            size={30}
            icon={{
              name: 'hearto',
              type: 'antdesign',
              color: colors.white,
              size: 22,
            }}
            // iconStyle={[styles.usericon]}
            containerStyle={[styles.usericonleft]}
          />

          <Avatar
            onPress={() => props.navigation.push('CartScreen')}
            size={30}
            rounded
            icon={{
              name: 'shoppingcart',
              type: 'antdesign',
              color: colors.white,
              size: 22,
            }}
            // iconStyle={[styles.usericon]}
            containerStyle={[styles.usericonleft]}
          />
        </View>
        <View style={[styles.subheader]}>
          <Avatar
            size={30}
            rounded
            icon={{
              name: 'bell',
              type: 'entypo',
              color: colors.white,
              size: 22,
            }}
            // iconStyle={[styles.usericon]}
            containerStyle={{marginTop: '10%'}}
          />
          <Avatar
            onPress={() => isLogin()}
            rounded
            size={30}
            icon={{
              name: 'user',
              type: 'entypo',
              color: colors.grey,
              size: 20,
            }}
            // iconStyle={[styles.usericon]}
            containerStyle={[styles.usericon]}
          />
          <Text style={[styles.username]}>
            {userdetails
              ? userdetails.length > 0
                ? userdetails[0].name
                  ? userdetails[0].name
                  : 'Guest'
                : 'Guest'
              : 'Guest'}
          </Text>
        </View>
      </View>

      {/* Searchbar  */}
      <Animated.View style={{transform: [{translateY: TranslateY}]}}>
        <SearchBar
          round
          containerStyle={[styles.searchcontainer]}
          inputContainerStyle={[styles.searchinputecontainer]}
          // autoFocus={true}
          placeholder={'Search'}
          placeholderTextColor={colors.grey}
          onChangeText={updateSearch}
          value={search}
          showLoading={isloadingSearch}
          loadingProps={{color: colors.AppDefaultColor}}
        />
      </Animated.View>

      {/* flat list */}
      {!search ? (
        <View style={[{flex: 1}]}>
          <Animated.FlatList
            scrollEventThrottle={100}
            disableVirtualization={false}
            showsVerticalScrollIndicator={false}
            data={AllProductData}
            style={{marginBottom: -45, transform: [{translateY: TranslateY}]}}
            ListHeaderComponent={() => {
              return (
                <>
                  {/* Category */}
                  <View>
                    <FlatList
                      data={Getcategory}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      initialNumToRender={5}
                      renderItem={({item}) => {
                        return (
                          <TouchableOpacity
                            onPress={() =>
                              props.navigation.navigate('CategoriesScreen')
                            }
                            style={[styles.categorycard]}>
                            <Avatar
                              resizeMode="contain"
                              size={43}
                              source={{uri: item.category_img}}
                              avatarStyle={[styles.categoryimg]}
                              containerStyle={[styles.imgcateogycontainer]}
                            />
                            <Text style={[styles.txtcategory]}>
                              {item.category.split(' ')[0]}
                              {'\n'}
                              {item.category.split(' ')[1] &&
                                item.category.split(' ')[1]}
                            </Text>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </View>
                  {/* bannerr */}
                  <View style={[styles.hedimg]}>
                    <SliderBox
                      images={image}
                      resizeMode="contain"
                      //  resizeMethod={'resize'}
                      autoplay={true}
                      imageLoadingColor={colors.AppDefaultColor}
                      dotColor={colors.AppDefaultColor}
                      circleLoop
                      ImageComponentStyle={[styles.bannerstyle]}
                    />
                  </View>

                  {/* Hot Deals */}
                  <View style={[styles.hedimg]}>
                    {/* <Text style={[styles.label]}>Hot Deals</Text> */}
                    <SliderBox
                      images={HotDeals}
                      resizeMode="contain"
                      imageLoadingColor={colors.AppDefaultColor}
                      autoplay={true}
                      sliderBoxHeight={110}
                      dotColor={colors.white}
                      circleLoop
                      ImageComponentStyle={[styles.bannerstyle]}
                    />
                  </View>
                </>
              );
            }}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() =>
                    props.navigation.push('ProductDeatilsScreen', {Data: item})
                  }
                  style={[styles.Cardsty]}>
                  <Card
                    containerStyle={[styles.itemcard]}
                    wrapperStyle={{margin: 0, padding: 0}}>
                    <Card.Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={styles.categoryimg}></Card.Image>

                    <Text style={[styles.label]}>
                      {item.title.slice(0, 24).trim()}
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
            numColumns={2}
            onScroll={Animated.event(
              // scrollX = e.nativeEvent.contentOffset.x

              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: ScrollY,
                    },
                  },
                },
              ],
              {useNativeDriver: true},
            )}></Animated.FlatList>
        </View>
      ) : (
        <View style={[{flex: 1}]}>
          <Animated.FlatList
            scrollEventThrottle={100}
            disableVirtualization={false}
            showsVerticalScrollIndicator={false}
            data={productdata}
            style={{marginBottom: -45, transform: [{translateY: TranslateY}]}}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() => productClick(item)}
                  style={[styles.Cardsty]}>
                  <Card
                    containerStyle={[styles.itemcard]}
                    wrapperStyle={{margin: 0, padding: 0}}>
                    <Card.Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={styles.categoryimg}></Card.Image>

                    <Text style={[styles.label]}>
                      {item.title.slice(0, 24).trim()}
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
            numColumns={2}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: ScrollY,
                    },
                  },
                },
              ],
              {useNativeDriver: true},
            )}></Animated.FlatList>
        </View>
      )}

      {isBottomSheetVisible && (
        <LoginCompoent
          isLogin={true}
          GetisLogin={c => setIsBottomSheetVisible(c)}
        />
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;
