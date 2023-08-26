import {
  AirbnbRating,
  Avatar,
  BottomSheet,
  Divider,
  ListItem,
} from '@rneui/base';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Share,
  Pressable,
} from 'react-native';
import {colors} from '../../Utils/Colors';
import {styles} from './ProductDetailsStyle';
import ImageWithThumbNail from '../../Component/ImageWithThumbNail';
import {useDispatch, useSelector} from 'react-redux';
import {ProdcutAction} from '../../Action/ProductsAction';
const {width, height} = Dimensions.get('screen');
import Shimmer from 'react-native-shimmer';
import {WishListAction} from '../../Action/WishListAction';
import Toast from 'react-native-toast-message';
import LoginCompoent from '../../Component/LoginComponent';
import {CartAction} from '../../Action/CartAction';
import SearchOverlayComponent from '../../Component/SearchOverlayCompoent';
import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';
function ProductDeatilsScreen(props) {
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [isProductId, setProductId] = useState(
    props.route.params.Data.product_id,
  );
  const scrollY = useRef(new Animated.Value(0)).current;
  const [BottomAction, setBottomAcation] = useState(null);
  const [isquntity, setquntity] = useState(1);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const TopEdge = BottomAction?.y - height + BottomAction?.height + 78;
  const [Data, setData] = useState(props.route.params.Data);
  const [Thumbnail, setThumNail] = useState([]);
  const [ratting, setratting] = useState([]);
  const [isSimmer, setsimmer] = useState('');
  const [isSimmerProduct, SetSimmilarProdcut] = useState([]);
  const [isSize, setsize] = useState('');
  const [wishlist, setwishlist] = useState(false);
  const dispatch = useDispatch();
  const [BottomLogin, SetBottomLogin] = useState(false);
  const [istotalprice, setisTotalprice] = useState(Data && Data.discount_price);
  const [isearch, setsearch] = useState(false);
  const [issizeActive, setActive] = useState(true);
  const [spinner, setspinner] = useState(false);
  const ref = React.useRef();
  const goback = () => {
    props.navigation.popToTop('');
  };
  const GetAllProducts = useSelector(
    state => state.ProductsReducer.GetAllProducts[0],
  );

  useEffect(() => {
    GetProductDetails(isProductId);
    ProductThumbNail(isProductId);
    SimmilerProducts(isProductId);
    checkwishlist();
  }, [GetProductDetails, ProductThumbNail]);

  const GetProductDetails = v => {
    if (Data) {
      if (
        (Data.size && Data.size.split(',')[0].indexOf('S') != -1) ||
        (Data.size && Data.size.split(',')[0].indexOf('M') != -1) ||
        (Data.size && Data.size.split(',')[0].indexOf('L') != -1) ||
        (Data.size && Data.size.split(',')[0].indexOf('XL') != -1)
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
    }

    dispatch(ProdcutAction.GetproductDeatilsAction(v)).then(async data => {
      if (data) {
        setData(data[0]);

        if (
          data[0].size.split(',')[0].indexOf('S') != -1 ||
          data[0].size.split(',')[0].indexOf('M') != -1 ||
          data[0].size.split(',')[0].indexOf('L') != -1 ||
          data[0].size.split(',')[0].indexOf('XL') != -1
        ) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
    });
  };

  // get product thumnail

  const ProductThumbNail = v => {
    dispatch(ProdcutAction.GetproductThumNailsAction(v)).then(async data => {
      if (data) {
        setThumNail(data);
      }
    });
  };

  // Get Product Review

  const GetProductReView = () => {
    dispatch(
      ProdcutAction.GetproductReviewAction(props.route.params.Data.product_id),
    ).then(async data => {
      if (data) {
        if (data.length > 0) {
          setratting(data);
        } else {
          setsimmer('simmer');
        }
      }
    });

    setIsBottomSheetVisible(true);
  };

  const SimmilerProducts = () => {
    dispatch(
      ProdcutAction.GetSimmilerproductAction(
        props.route.params.Data.product_id,
        props.route.params.Data.category_id,
      ),
    ).then(async data => {
      if (data) {
        SetSimmilarProdcut(data);
      }
    });
  };

  // WishList Add

  const AddWishList = () => {
    if (userdetails) {
      if (userdetails.length > 0) {
        dispatch(
          WishListAction.AddWishListAction(
            userdetails[0].id,
            props.route.params.Data.product_id,
          ),
        ).then(async data => {
          if (data) {
            setwishlist(true);
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
        SetBottomLogin(true);
      }
    } else {
      SetBottomLogin(true);
    }
  };

  // remove wish list

  const RemoveWishlist = item => {
    dispatch(
      WishListAction.RemoveWishListAction(
        userdetails[0].id,
        props.route.params.Data.product_id,
      ),
    ).then(async data => {
      if (data) {
        if (data.success) {
          if (data) {
            setwishlist(false);
            Toast.show({
              type: 'error',
              text1: data.message,
              position: 'bottom',
              visibilityTime: 2000,
              autoHide: true,
            });
          }
        }
      }
    });
  };

  const wishlistclick = item => {
    if (wishlist) {
      RemoveWishlist(item);
    } else {
      AddWishList(item);
    }
  };
  const checkwishlist = () => {
    if (userdetails) {
      if (userdetails.length > 0) {
        dispatch(
          WishListAction.CheckWishListAction(
            userdetails[0].id,
            props.route.params.Data.product_id,
          ),
        ).then(async data => {
          if (data) {
            if (data[0].count == 1) setwishlist(true);
          }
        });
      }
    }
  };

  // Share Products

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share Product ',
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

  const AddQuantity = () => {
    if (isquntity >= 1) {
      setquntity(isquntity + 1);
      setisTotalprice(Data.discount_price * (isquntity + 1));
    }
  };
  const RemoveQuantity = () => {
    if (isquntity > 1) {
      setquntity(isquntity - 1);
      setisTotalprice(istotalprice - Data.discount_price);
    }
  };

  //-------------------------Add to CArt ------------------------------

  const AddToCart = item => {
    if (userdetails) {
      if (userdetails.length > 0) {
        if (issizeActive) {
          if (!isSize) {
            Toast.show({
              type: 'error',
              text1: 'Select Size',
              position: 'bottom',
              visibilityTime: 2000,
              autoHide: true,
            });
          } else {
            setspinner(true);
            var Data = new FormData();
            Data.append('user_id', userdetails[0].id);
            Data.append('product_id', props.route.params.Data.product_id);
            Data.append('quantity', isquntity);
            Data.append('size', isSize.trim());
            dispatch(CartAction.AddToCartAction(Data)).then(async data => {
              if (data) {
                setspinner(false);
                if (data.success) {
                  if (item == 'B') {
                    props.navigation.push('CartScreen');
                  } else {
                    Toast.show({
                      type: 'success',
                      text1: data.message,
                      position: 'bottom',
                      visibilityTime: 2000,
                      autoHide: true,
                    });
                  }
                } else {
                  Toast.show({
                    type: 'error',
                    text1: data.message,
                    position: 'bottom',
                    visibilityTime: 2000,
                    autoHide: true,
                  });
                }
              } else {
                setspinner(false);
                Toast.show({
                  type: 'error',
                  text1: 'Something Went wrong',
                  text2: 'Please, try again latter',
                  position: 'bottom',
                  visibilityTime: 2000,
                  autoHide: true,
                });
              }
            });
          }
        } else {
          setspinner(true);
          var Data = new FormData();
          Data.append('user_id', userdetails[0].id);
          Data.append('product_id', props.route.params.Data.product_id);
          Data.append('quantity', isquntity);
          Data.append('size', isSize);
          dispatch(CartAction.AddToCartAction(Data)).then(async data => {
            setspinner(false);
            if (data) {
              if (data.success) {
                if (item == 'B') {
                  props.navigation.push('CartScreen');
                } else {
                  Toast.show({
                    type: 'success',
                    text1: data.message,
                    position: 'bottom',
                    visibilityTime: 2000,
                    autoHide: true,
                  });
                }
              } else {
                if (data.message == 'Record Already Exists') {
                  props.navigation.push('CartScreen');
                } else {
                  Toast.show({
                    type: 'error',
                    text1: data.message,
                    position: 'bottom',
                    visibilityTime: 2000,
                    autoHide: true,
                  });
                }
              }
            } else {
              Toast.show({
                type: 'error',
                text1: 'Something Went wrong',
                text2: 'Please, try again latter',
                position: 'bottom',
                visibilityTime: 2000,
                autoHide: true,
              });
            }
          });
        }
      } else {
        SetBottomLogin(true);
      }
    } else {
      SetBottomLogin(true);
    }
  };

  //-------------------------Simmiler product click ------------------------------//
  const simmlerProductClick = v => {
    setProductId(v);
    GetProductDetails(v);
    ProductThumbNail(v);
    ref.current.scrollTo(0);
  };
  return (
    <SafeAreaView style={[styles.Container]}>
      <StatusBar
        backgroundColor={
          isBottomSheetVisible == false ? colors.AppDefaultColor : colors.black
        }
      />

      {!isearch ? (
        <>
          <Animated.ScrollView
            ref={ref}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              // scrollX = e.nativeEvent.contentOffset.x

              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: scrollY,
                    },
                  },
                },
              ],
              {useNativeDriver: true},
            )}>
            {/* //creating header  */}
            <View style={[styles.headerView]}>
              <Pressable onPress={() => goback()}>
                <Avatar
                  icon={{
                    name: 'left',
                    type: 'antdesign',
                    color: colors.white,
                    size: 25,
                  }}
                />
              </Pressable>
              <Text style={styles.headertxt}>
                {Data && Data.title && Data.title.split(' ')[0]}{' '}
                {Data && Data.title && Data.title.split(' ')[1]}
              </Text>
              <View style={styles.subheader}>
                <Avatar
                  //  size={54}
                  onPress={() => setsearch(!isearch)}
                  icon={{
                    name: 'search1',
                    type: 'antdesign',
                    color: colors.white,
                    size: 25,
                  }}
                />
                <Avatar
                  //  size={54}
                  onPress={() => props.navigation.push('WishListScrren')}
                  icon={{
                    name: 'heart-outlined',
                    type: 'entypo',
                    color: colors.white,
                    size: 25,
                  }}
                />
                <Avatar
                  onPress={() => props.navigation.push('CartScreen')}
                  icon={{
                    name: 'shoppingcart',
                    type: 'antdesign',
                    color: colors.white,
                    size: 25,
                  }}
                />
              </View>
            </View>
            {/* product image */}

            <View>
              <ImageWithThumbNail data={Thumbnail} />
            </View>
            {/* offertxt */}
            {Data && Data.offer != '' && (
              <View
                style={[
                  styles.priceview,
                  styles.offerview,

                  {
                    transform: [{rotate: '-90deg'}],
                    position: 'absolute',
                    top: '12%',
                    left: '-12%',
                  },
                ]}>
                <Text style={[styles.offertxt]}>{Data.offer}</Text>
              </View>
            )}

            {/* price and share   section*/}
            <View style={[styles.priceshareView]}>
              <View>
                <Text style={[styles.titlestyle]}>
                  {Data && Data.title && Data.title.slice(0, 33).trim()}
                </Text>
                {/* price */}
                <View style={[styles.priceview, {marginTop: '5%'}]}>
                  <Avatar
                    size={15}
                    icon={{
                      name: 'inr',
                      type: 'fontisto',
                      color: colors.black,
                      size: 16,
                    }}
                    iconStyle={{color: colors.black}}
                  />

                  <Text style={[styles.pricetxtx, {color: colors.black}]}>
                    {Data && Data.price && Data.price}
                  </Text>
                </View>

                <Divider
                  width={3}
                  color={colors.AppDefaultColor}
                  style={[styles.discountprice]}
                />
                {/* Discounted price */}
                <View style={[styles.priceview, {marginTop: '5%'}]}>
                  <Avatar
                    size={11}
                    icon={{
                      name: 'inr',
                      type: 'fontisto',
                      color: colors.black,
                      size: 11,
                    }}
                    iconStyle={{color: colors.black}}
                  />

                  <Text style={[styles.pricetxtx, {color: colors.black}]}>
                    {Data && Data.discount_price}
                  </Text>
                </View>

                {/* Deliver Charge */}
                <Text style={[styles.deliverytxt]}>
                  {Data &&
                    (Data.delivery_charge == 0
                      ? 'Free Delivery'
                      : Data.delivery_charge + ' Delivery Charge')}
                </Text>

                {/* Ratings and review  */}
                {Data && Data.rating && (
                  <TouchableOpacity
                    onPress={() => GetProductReView()}
                    style={[
                      styles.priceview,
                      styles.starAndratingview,
                      {backgroundColor: colors.white, marginVertical: 10},
                    ]}>
                    <View style={[styles.priceview, styles.starAndratingview]}>
                      <Text style={[styles.startxt]}>
                        {Data && Data.rating && Data.rating.substring(0, 3)}
                      </Text>
                      <Avatar
                        rounded
                        size={15}
                        icon={{
                          name: 'star',
                          type: 'antdesign',
                          color: colors.white,
                          size: 11,
                        }}
                        iconStyle={{color: colors.black}}
                        containerStyle={{margin: 3}}
                      />
                    </View>
                    <Text style={[styles.deliverytxt, {marginLeft: '5%'}]}>
                      {Data && Data.total_reviews}
                      {Data && Data.total_reviews === '1'
                        ? ' Review'
                        : ' Reviews'}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              <View style={[styles.flexrowwithoutjus]}>
                <Pressable onPress={() => wishlistclick()}>
                  <Avatar
                    icon={{
                      name: wishlist ? 'heart' : 'hearto',
                      type: 'antdesign',
                      color: wishlist ? colors.red : colors.black,
                    }}
                    containerStyle={{alignSelf: 'center'}}
                  />
                  <Text style={[styles.wishsharetxt]}>wishlist</Text>
                </Pressable>

                {/* Share  */}
                <Pressable onPress={() => onShare()}>
                  <Avatar
                    icon={{
                      name: 'sharealt',
                      type: 'antdesign',
                      color: colors.black,
                    }}
                  />
                  <Text style={[styles.wishsharetxt]}>share</Text>
                </Pressable>
              </View>
            </View>

            {/* size section  */}
            <View style={[styles.sizeview]}>
              <Text style={[styles.titlestyle, {color: colors.black}]}>
                {issizeActive ? 'Select Size' : 'Size'}
              </Text>
              <View style={[styles.flexrowwithoutjus, styles.Sizeheight]}>
                {Data &&
                  Data.size &&
                  Data.size.split(',').map((item, index) => {
                    return (
                      <>
                        {issizeActive ? (
                          <>
                            <TouchableOpacity
                              key={index + 'jhukjg'}
                              style={[
                                styles.sizeindise,
                                {
                                  backgroundColor:
                                    isSize == item
                                      ? colors.AppDefaultColor
                                      : colors.white,
                                  borderColor:
                                    isSize == item
                                      ? colors.AppDefaultColor
                                      : colors.black,
                                },
                              ]}
                              onPress={() => setsize(item)}>
                              <Text style={[styles.sizetxt]}>{item}</Text>
                            </TouchableOpacity>
                          </>
                        ) : (
                          <Text style={[styles.activesize]}>{item}</Text>
                        )}
                      </>
                    );
                  })}
              </View>
            </View>

            {/* Product Quantity section  */}
            <View style={[styles.sizeview]}>
              <Text style={[styles.titlestyle, {color: colors.black}]}>
                Select Quanitity
              </Text>
              <View style={[styles.flexrow, styles.cardcounter]}>
                <Avatar
                  onPress={() => AddQuantity()}
                  icon={{name: 'plus', type: 'entypo', color: colors.black}}
                />
                <Text style={[styles.counertxt]}>{isquntity}</Text>
                <Avatar
                  onPress={() => RemoveQuantity()}
                  icon={{name: 'minus', type: 'entypo', color: colors.black}}
                />
              </View>
            </View>

            {/* // Product details section  */}

            <View style={[styles.sizeview]}>
              <Text style={[styles.titlestyle, {color: colors.black}]}>
                Product Details
              </Text>
              <Text style={[styles.deliverytxt]}>
                {Data && Data.description}
              </Text>
            </View>

            {/* BootomView */}
            <View
              style={[
                {
                  backgroundColor: '#fff',
                  height: 50,
                  marginTop: '3%',
                  opacity: 0,
                },
              ]}
              onLayout={ev => {
                setBottomAcation(ev.nativeEvent.layout);
              }}
            />
            {/* Simmilar Product */}

            <View style={[styles.sizeview]}>
              <Text style={[styles.titlestyle, {color: colors.black}]}>
                Similar Product
              </Text>
              <FlatList
                bounces={true}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={isSimmerProduct}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => simmlerProductClick(item.product_id)}
                      style={[styles.similerproductTuch]}>
                      <Avatar
                        size={120}
                        source={{uri: item.img}}
                        avatarStyle={{borderRadius: 10}}
                        containerStyle={[styles.simlerProductImgConatner]}
                      />
                      <Text style={[styles.label]}>
                        {item.name && item.name.substring(0, 15)}
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
                              <Text
                                style={[styles.inrtxt, {color: colors.grey}]}>
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

                            <Text
                              style={[styles.inrtxt, {color: colors.black}]}>
                              {item.discount_price}
                            </Text>
                          </View>
                        </View>
                        {item.rating && (
                          <View
                            style={[
                              styles.priceview,
                              styles.starAndratingview,
                              {backgroundColor: colors.Brikcolor},
                            ]}>
                            <Text style={[styles.startxt]}>
                              {item.rating.substring(0, 3)}
                            </Text>
                            <Avatar
                              rounded
                              size={15}
                              icon={{
                                name: 'star',
                                type: 'antdesign',
                                color: colors.white,
                                size: 10,
                              }}
                              iconStyle={{color: colors.black}}
                              containerStyle={{margin: 0.5, marginTop: 2}}
                            />
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </Animated.ScrollView>

          {/* Bottom tab  */}

          {BottomAction && (
            <Animated.View
              style={[
                styles.flexrowWitjSpaceBetween,
                {
                  transform: [
                    {
                      translateY: scrollY.interpolate({
                        inputRange: [-3, 0, TopEdge - 3, TopEdge, TopEdge + 3],
                        outputRange: [0, 0, 0, 0, -3],
                      }),
                    },
                  ],
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  left: 0,
                  width: width,
                  backgroundColor: 'rgba(255,255,255,225)',
                  alignSelf: 'center',
                },
              ]}>
              <TouchableOpacity
                onPress={() => AddToCart('C')}
                style={[styles.flexrowwithoutjus, styles.btncart]}>
                <Avatar
                  icon={{
                    name: 'shoppingcart',
                    type: 'antdesign',
                    color: colors.black,
                    size: 25,
                  }}
                />
                <Text style={[styles.addtocarttxt]}> Add To Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => AddToCart('B')}
                style={[styles.flexrowWitjSpaceBetween, styles.buynowbtn]}>
                <Avatar
                  icon={{
                    name: 'shopping-bag',
                    type: 'Font-Awesome',
                    color: colors.white,
                    size: 25,
                  }}
                />
                <Text style={[styles.buynowtxt]}>Buy Now</Text>
              </TouchableOpacity>
            </Animated.View>
          )}
          {/* 
// bottm sheet for review */}
          <BottomSheet
            onBackdropPress={() => setIsBottomSheetVisible(false)}
            modalProps={{}}
            isVisible={isBottomSheetVisible}
            containerStyle={styles.bottomsheetstyle}>
            <ScrollView style={[styles.bottomSheetScroll]}>
              <View style={[styles.reviewheaderview]}>
                <Text style={[styles.bottomSheetheadertxt]}>
                  {ratting.length} Reviews
                </Text>
              </View>
              {ratting.length > 0 ? (
                ratting.map(item => {
                  return (
                    <>
                      <View key={item.id} style={[styles.bottomsheet]}>
                        <View style={[styles.flexrowWitjSpaceBetween]}>
                          <View style={[styles.flexrowwithoutjus]}>
                            <Avatar
                              rounded
                              size={25}
                              icon={{
                                name: 'user',
                                type: 'entypo',
                                color: colors.AppDefaultColor,
                                size: 16,
                              }}
                              containerStyle={styles.bottmsheetusericon}
                            />
                            <Text
                              style={[
                                styles.label,
                                {
                                  paddingTop: 0,
                                  marginLeft: '10%',
                                },
                              ]}>
                              {item.name ? item.name : 'Anonymous'}
                            </Text>
                          </View>

                          <View>
                            <Text style={[styles.deliverytxt]}>
                              {moment(item.date).format('YYYY-MM-DD')}
                            </Text>
                            <AirbnbRating
                              defaultRating={item.rating}
                              count={5}
                              isDisabled={true}
                              size={10}
                              showRating={false}
                              selectedColor={colors.AppDefaultColor}
                            />
                          </View>
                        </View>
                        <Text style={[styles.deliverytxt, {marginTop: 5}]}>
                          {item.review}
                        </Text>
                      </View>
                      <Divider style={styles.Dividerstyle} />
                    </>
                  );
                })
              ) : (
                <>
                  {isSimmer == 'simmer' ? (
                    <Text style={[styles.noreviewtxtx]}>No review yet</Text>
                  ) : (
                    <Shimmer style={[styles.simmer]}>
                      <Text style={[styles.loadingtext]}>Daily Housing</Text>
                    </Shimmer>
                  )}
                </>
              )}
            </ScrollView>
          </BottomSheet>
        </>
      ) : (
        <>
          <SearchOverlayComponent
            isOpen={isearch}
            Getbackpress={c => setsearch(c)}
            navigation={props.navigation}
          />
        </>
      )}

      {BottomLogin && (
        <LoginCompoent isLogin={true} GetisLogin={c => SetBottomLogin(c)} />
      )}

      {spinner && (
        <Spinner
          visible={true}
          overlayColor={'rgba(0, 0, 0, 0.6)'}
          customIndicator={
            <Shimmer style={[styles.simmer]}>
              <Text style={[styles.loadingtext]}>Daily Housing</Text>
            </Shimmer>
          }
          textStyle={styles.spinnerTextStyle}
        />
      )}
    </SafeAreaView>
  );
}

export default ProductDeatilsScreen;
