import {Avatar, Card, Divider, fonts} from '@rneui/base';
import moment from 'moment';
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {OrderAction} from '../../Action/OrderAction';
import FilterDropDownReactNative from '../../Component/FilterDropDownCompoent';
import SearchbarComponent from '../../Component/Search_Component';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import Toast from 'react-native-toast-message';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
import {styles} from './OrderStyle';
const {width, height} = Dimensions.get('screen');
import {useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthAction} from '../../Action/AuthAction';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';
function OrderScreen(props) {
  const dispatch = useDispatch();
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [orderlist, SetOrderList] = useState([]);
  const [spinner, setspinner] = useState(false);
  const [searchResetOrderList, setResetOrderList] = useState([]);
  const [AllList, SetAllList] = useState([]);
  const [istracking, settracking] = useState([]);
  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('MobileNumber');
      if (value !== null) {
        // value previously stored

        dispatch(
          AuthAction.LoginAction(value, moment().format('DD-MM-YYYY')),
        ).then(async data => {
          if (data) {
            if (data.length > 0) {
              GetListOrder(data[0].id);
            } else {
              SetOrderList([]);
            }
          }
        });
      } else {
        SetOrderList([]);
      }
    } catch (e) {
      // error reading value

      SetOrderList([]);
    }
  };

  // ------------------------------Get order list  ------------------------------//

  const GetListOrder = id => {
    dispatch(OrderAction.GetOrderlistAction(id)).then(async data => {
      if (data) {
        console.log(data);
        SetAllList(data);
        SetOrderList(data);
        setResetOrderList(data);
        var c = [];
        let d;
        var e = data.map((item, index) => {
          dispatch(
            Go_Swift_Action.Track_Order_Go_Swift_Action(item.tracking_id),
          ).then(async data1 => {
            c.push(data1.track.status);
            settracking(c);
            d = data1.track.status;
          });

          // item.TrackingStatus = istracking[index].track.status
          return {...item, TrackingStatus: istracking[index]};
        });
      }
    });
  };

  //--------------------------------- filter Order List  ------------------------------//

  const filterOrderList = v => {
    const a = AllList.filter(item => {
      return item.status == v;
    });
    SetOrderList(a);
  };
  //------------tracking ordeer ------------------//
  const TrackOrderStatus = item => {};
  return (
    <SafeAreaView style={[styles.conatiner]}>
      {/* Statusbar */}
      <StatusBar backgroundColor={colors.AppDefaultColor} />
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
        <Text style={[styles.headertxt]}>Orders</Text>
        <View style={[styles.flexDirectionWithoutJustify]}>
          <Avatar
            onPress={() => props.navigation.push('WishListScrren')}
            icon={{
              name: 'hearto',
              type: 'antdesign',
              color: colors.white,
            }}
          />
          <Avatar
            onPress={() => props.navigation.push('CartScreen')}
            icon={{
              name: 'shoppingcart',
              type: 'antdesign',
              color: colors.white,
            }}
          />
        </View>
      </View>

      <FlatList
        ListHeaderComponent={
          <View
            style={[
              styles.flexDirectionWithoutJustify,
              styles.searchAndFilter,
              {backgroundColor: colors.AppDefaultColor},
            ]}>
            <SearchbarComponent
              width={width / 1.1}
              backgroundColor={colors.AppDefaultColor}
              placeholder={'Enter Order Id'}
              getSearchData={v => SetOrderList(v)}
              Data={orderlist}
              reset={searchResetOrderList}
            />

            <FilterDropDownReactNative
              //  paddingTop={width / 23}
              backgroundColor={colors.AppDefaultColor}
              Getname={v => filterOrderList(v)}
            />
          </View>
        }
        initialNumToRender={1}
        data={orderlist}
        renderItem={({item}) => {
          return (
            <View style={[styles.spacing]}>
              {item.products &&
                JSON.parse(item.products.trim()).map((localitem, index) => {
                  return (
                    <Pressable
                      onPress={() =>
                        props.navigation.push('ProductDeatilsScreen', {
                          Data: {product_id: localitem.product_id},
                        })
                      }>
                      <Card
                        containerStyle={[styles.profuctlistcard]}
                        wrapperStyle={[styles.flexDirectionWithJustify]}
                        key={index + localitem}>
                        <Avatar
                          size={70}
                          source={{uri: localitem.img}}
                          avatarStyle={styles.productlistimg}
                        />
                        <View>
                          <Text style={[styles.producttitle]}>
                            {localitem.title && localitem.title.slice(0, 20)}...
                          </Text>
                          <Text style={[styles.producttitle]}>
                            Price : {localitem.discount_price}
                          </Text>
                        </View>

                        <Avatar
                          icon={{
                            name: 'right',
                            type: 'antdesign',
                            color: colors.grey,
                          }}
                          containerStyle={{marginTop: '5.5%'}}
                        />
                      </Card>
                    </Pressable>
                  );
                })}
              <View
                style={[
                  styles.flexDirectionWithJustify,
                  styles.spacingForDeatils,
                ]}>
                <Text style={[styles.producttitle, {marginTop: 0}]}>
                  Order Id
                </Text>
                <Text style={[styles.rightxt]}>{item.order_id}</Text>
              </View>
              <View
                style={[
                  styles.flexDirectionWithJustify,
                  styles.spacingForDeatils,
                ]}>
                <Text style={[styles.producttitle, {marginTop: 0}]}>
                  Order Type
                </Text>
                <Text style={[styles.rightxt]}>{item.order_type}</Text>
              </View>
              <View
                style={[
                  styles.flexDirectionWithJustify,
                  styles.spacingForDeatils,
                ]}>
                <Text style={[styles.producttitle, {marginTop: 0}]}>
                  Order Date
                </Text>
                <Text style={[styles.rightxt]}>
                  {moment(item.order_date).format('DD-MM-YYYY')}
                </Text>
              </View>
              <View
                style={[
                  styles.flexDirectionWithJustify,
                  styles.spacingForDeatils,
                ]}>
                <Text style={[styles.producttitle, {marginTop: 0}]}>
                  Est. Delivery Date
                </Text>
                <Text style={[styles.rightxt]}>
                  {moment(item.delivery_date).format('DD-MM-YYYY')}
                </Text>
              </View>
              <View
                style={[
                  styles.flexDirectionWithJustify,
                  styles.spacingForDeatils,
                ]}>
                <Text
                  onPress={() =>
                    props.navigation.push('TrackOrderScreen', {
                      orderId: item,
                    })
                  }
                  style={[styles.TrackOrdertxt]}>
                  Track Order
                </Text>
                {/* {item.status == 'success' && (
                  <Text
                    onPress={() => CancelOrder(item.id)}
                    style={[styles.TrackOrdertxt, {color: colors.red}]}>
                    Cancel
                  </Text>
                )} */}
              </View>
              <Divider style={{marginTop: '5%'}} />
            </View>
          );
        }}
      />

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
export default OrderScreen;
