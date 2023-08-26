import {Avatar, Card, Divider} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {customStyles, labels, width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {styles} from './CartStyle';
import Toast from 'react-native-toast-message';
import StepIndicator from 'react-native-step-indicator';
import TouchComponent from '../../Component/TouchComponent';
import {fontSize, radious} from '../../Utils/Size';
import {useDispatch, useSelector} from 'react-redux';
import {CartAction} from '../../Action/CartAction';
import {AddressAction} from '../../Action/AddressAction';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';
import {ProdcutAction} from '../../Action/ProductsAction';

function CartScreen(props) {
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [istotalprice, settotalprice] = useState(0);
  const [cartData, setcartData] = useState([]);
  const [isloader, setloader] = useState(false);
  const [IsAddress, setAddress] = useState([]);
  const [istoken, settoken] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Go_Swift_Action.GetAccessTokenAction()).then(async data => {
      settoken(data.access_token);
      if (userdetails) {
        if (data.access_token) {
          if (userdetails.length > 0) {
            Getproduct(data.access_token);
            GetAddress(userdetails[0].id);
          }
        }
      }
    });
  }, [Getproduct]);

  //-------------------------------------------------get cart product from api ---------------------------------

  const Getproduct = token => {
    setloader(true);
    let temp = 0;
    dispatch(CartAction.GetToCartAction(userdetails[0].id)).then(async data => {
      if (data) {
        if (data.length > 0) {
          setcartData(data);
          setloader(false);
          data.map((item, index) => {
            temp = item.discount_price * item.quantity + temp;
            GetProductdetails(item.product_id, token);
          });
          settotalprice(temp);
        } else {
          setcartData([]);
          setloader(false);
        }
      }
    });
  };

  //--------------------------- get product details -----------------------//
  const GetProductdetails = (product_id, token) => {
    dispatch(ProdcutAction.GetproductDeatilsAction(product_id)).then(
      async data => {
        if (data) {
          if (data.length > 0) {
            GetSellerAddress(data[0].seller_id, token);
          }
        }
      },
    );
  };

  //---------------const Get Seller address---------------------------//

  const GetSellerAddress = (id, token) => {
    dispatch(AddressAction.GetSelleraddressAction(1)).then(async data => {
      AddSellerAddressToGoSwift(data[0], token);
    });
  };

  //----------------- add Seller address to Goswift -----------------//

  const AddSellerAddressToGoSwift = (data, token) => {
    var DataGoswift = JSON.stringify({
      alias: data.alias,
      phone: parseInt(data.phone),
      address_line1:
        data.store_name +
        ' ' +
        data.house_no +
        ' ' +
        data.road_name +
        ' ' +
        data.landmark +
        ' ' +
        data.address_type,
      pincode: parseInt(data.pin),
      city: data.city,
      state: data.state,
      country: 'IN',
    });
    dispatch(
      Go_Swift_Action.AddPickUpGoSwiftAddressAction(DataGoswift, token),
    ).then(async data => {});
  };
  //-------------------------------------------------Continue Botton---------------------------------

  const continueClick = () => {
    dispatch(CartAction.DispatchAction({cartData, istotalprice}));
    if (IsAddress.length > 0) {
      props.navigation.push('AddressScreen', {data: IsAddress});
    } else {
      props.navigation.push('AddNewAddressScreen', {data: ''});
    }
  };

  //-------------------------------------------------Add qunity---------------------------------

  const AddQuantity = (item, index) => {
    if (item.quantity >= 1) {
      const newArr = cartData.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            quantity: parseInt(cartData[index].quantity) + 1,
          };
        }
        return obj;
      });
      setcartData(newArr);
      settotalprice(istotalprice + parseInt(item.discount_price));
    }
  };

  //-------------------------------------------------Remove quantity---------------------------------

  const RemoveQuantity = (item, index) => {
    if (item.quantity > 1) {
      settotalprice(istotalprice - parseInt(item.discount_price));
      const newArr = cartData.map((obj, i) => {
        if (index == i) {
          return {...obj, quantity: parseInt(cartData[index].quantity) - 1};
        }
        return obj;
      });
      setcartData(newArr);
    } else {
      Alert.alert('Remove from cart', 'Are You Sure for remove from cart ?', [
        {
          text: 'Cancel',
          onPress: () => RemoveItemRromcart(item),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  //-------------------------------------------------Singal purchage ---------------------------------

  const BuyitNow = (cartData, index) => {
    dispatch(CartAction.DispatchAction({cartData, istotalprice}));
    if (IsAddress.length > 0) {
      props.navigation.push('AddressScreen', {data: IsAddress});
    } else {
      props.navigation.push('AddNewAddressScreen', {data: ''});
    }
  };

  //-------------------------------------------------remove  item from cart  ---------------------------------

  const RemoveItemRromcart = item => {
    dispatch(
      CartAction.RemoveFromCartAction(userdetails[0].id, item.product_id),
    ).then(async data => {
      if (data) {
        if (data.success) {
          Getproduct();
          Toast.show({
            type: 'error',
            text1: data.message,
            position: 'bottom',
            visibilityTime: 2000,
            autoHide: true,
          });
        }
      }
    });
  };

  //--------------------------------Get Address ---------------------------------//

  const GetAddress = id => {
    dispatch(AddressAction.GetAdressAction(id, 'Deliver')).then(async data => {
      if (data) {
        if (data.length > 0) {
          setAddress(data);
          //   console.log(data, '------------------');
        }
      }
    });
  };
  return (
    <SafeAreaView style={[styles.container]}>
      {/* //creating header  */}
      <View style={[styles.headerView]}>
        <Avatar
          onPress={() => props.navigation.pop()}
          icon={{
            name: 'left',
            type: 'antdesign',
            color: colors.white,
            size: 25,
          }}
        />

        <Text style={styles.headertxt}>My Cart</Text>
        <View style={styles.subheader}>
          {/* <Avatar
            //  size={54}
            icon={{
              name: 'search1',
              type: 'antdesign',
              color: colors.white,
              size: 25,
            }}
          /> */}

          <Avatar
            //  size={54}
            onPress={() => props.navigation.push('WishListScrren')}
            icon={{
              name: 'hearto',
              type: 'antdesign',
              color: colors.white,
              size: 25,
            }}
          />
        </View>
      </View>

      {isloader ? (
        <View>
          <ActivityIndicator
            size={'large'}
            color={colors.AppDefaultColor}
            style={[styles.ActivityIndicator]}
          />
        </View>
      ) : (
        <>
          <View style={[styles.topindicator]}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={0}
              labels={labels}
            />
          </View>
          <FlatList
            data={cartData}
            style={{marginBottom: 60}}
            ListEmptyComponent={
              <View>
                <Avatar
                  size={150}
                  source={{
                    uri: 'https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-14215265323129kdoe.png',
                  }}
                  containerStyle={[styles.emptycontner]}
                />
                <Text style={[styles.emptycontner, {marginTop: '5%'}]}>
                  Cart is empty
                </Text>
              </View>
            }
            renderItem={({item, index}) => {
              return (
                <Card containerStyle={[styles.cardconatner]}>
                  <View style={[styles.cardwrapperStyle]}>
                    <Avatar
                      source={{uri: item.img}}
                      size={52}
                      avatarStyle={{
                        resizeMode: 'cover',
                        borderRadius: radious.borderradious,
                      }}
                      containerStyle={[styles.imagecontner]}
                    />
                    <View style={[styles.cardsecondview]}>
                      <Text style={[styles.producttitle]}>{item.title}</Text>
                      <View style={[styles.flexwithoutjustify]}>
                        <View style={[styles.quntystyle]}>
                          <Avatar
                            onPress={() => AddQuantity(item, index)}
                            icon={{
                              name: 'plus',
                              type: 'entypo',
                              color: colors.black,
                            }}
                          />
                          <Text style={[styles.counertxt]}>
                            {item.quantity}
                          </Text>
                          <Avatar
                            onPress={() => RemoveQuantity(item, index)}
                            icon={{
                              name: 'minus',
                              type: 'entypo',
                              color: colors.black,
                            }}
                          />
                        </View>
                        <Text style={[styles.pricetxt]}>
                          {' '}
                          ₹ {item.discount_price}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Divider style={styles.dividerstyle} />
                  <View style={[styles.cardbottom]}>
                    {/* <TouchComponent
                      title="Add To Wishist"
                      backgroundColor={colors.white}
                      titlecolor={colors.black}
                      paddingHorizontal={'1%'}
                      paddingVertical={'3%'}
                      borderRadius={radious.borderradious}
                      press={() => console.log('ghjg')}
                      width={width / 3.5}
                    /> */}
                    <TouchComponent
                      title="Remove"
                      backgroundColor={colors.white}
                      titlecolor={colors.black}
                      paddingHorizontal={'3%'}
                      paddingVertical={'3%'}
                      borderRadius={radious.borderradious}
                      press={() => RemoveItemRromcart(item)}
                      width={width / 3.5}
                    />
                    <TouchComponent
                      title="Buy It Now"
                      backgroundColor={colors.white}
                      titlecolor={colors.black}
                      paddingHorizontal={'3%'}
                      paddingVertical={'3%'}
                      width={width / 3.5}
                      borderRadius={radious.borderradious}
                      press={() => BuyitNow([item])}
                    />
                  </View>
                </Card>
              );
            }}
          />
          {cartData.length > 0 && (
            <View style={styles.bottomview}>
              <Text style={[styles.totalprice]}>₹ {istotalprice}</Text>

              <TouchComponent
                title="Continue"
                backgroundColor={colors.AppDefaultColor}
                titlecolor={colors.white}
                paddingHorizontal={'8%'}
                paddingVertical={'3%'}
                fontSize={fontSize.lable}
                borderRadius={radious.borderradious}
                marginBottom={'2%'}
                marginTop={'2%'}
                press={() => continueClick()}
              />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

export default CartScreen;
