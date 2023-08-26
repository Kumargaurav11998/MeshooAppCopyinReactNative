import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './PaymentMethodStyle';
import StepIndicator from 'react-native-step-indicator';
import TouchComponent from '../../Component/TouchComponent';
import {customStyles, data, labels, width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
import {Avatar, Divider} from '@rneui/base';
import {RadioButton, TextInput} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {Config} from '../../Helper/Config';
import RazorpayCheckout from 'react-native-razorpay';
import {useDispatch, useSelector} from 'react-redux';
import {OrderAction} from '../../Action/OrderAction';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';
import {Button, Overlay, Icon} from '@rneui/themed';
import {CartAction} from '../../Action/CartAction';
function PaymentMethodScreen(props) {
  const dipatchedcartData = useSelector(
    state => state.CartReducer.DispachedCartData,
  );

  const [rozerpay, setrozerpay] = useState('');
  const [cash, setcash] = useState('');
  const [spinner, setspinner] = useState(false);
  const [product_Ids, setproduct_Ids] = useState([]);
  const [Product_Items, setProduct_Items] = useState([]);
  const [visible, setVisible] = useState(false);
  const [ishsn, sethsn] = useState('');

  const toggleOverlay = () => {
    if (visible == true && ishsn == '') {
      Toast.show({
        type: 'error',
        text1: 'Please Enter HSN Code',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else {
      setVisible(!visible);
    }
  };
  const dispatch = useDispatch();
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const payable_amount = props.route.params.totalcost * 100;
  const Drop_Address = props.route.params.DropAddress;
  const token = useSelector(
    state => state.GoSwiftReducer.GetAccesToken[0].access_token,
  );
  var v = JSON.stringify(dipatchedcartData.cartData);
  var Order_ID = Math.floor(Math.random() * 9000000000) + 1000000000;
  var product_Id = [];
  var product_Details = [];
  const alias = props.route.params.alias;
  useEffect(() => {
    setspinner(false);

    dipatchedcartData.cartData.map(item => {
      product_Id.push(parseInt(item.product_id));
    });

    setProduct_Items(product_Details);
    setproduct_Ids(product_Id);
  }, []);

  console.log(userdetails, '------');

  //-------------------------------------------------order---------------------------------
  const Selectonline = () => {
    setrozerpay('first');
    setcash('');
  };

  //-------------------------------------------------offline---------------------------------
  const SelectOffline = () => {
    setrozerpay('');
    setcash('first');
  };
  //-------------------------------------------------order---------------------------------
  const placeOrder = token => {
    if (
      !userdetails[0].name ||
      !userdetails[0].street ||
      !userdetails[0].city ||
      !userdetails[0].state ||
      !userdetails[0].pincode ||
      !userdetails[0].gst
    ) {
      Toast.show({
        type: 'error',
        text1: 'Please, complete your profile',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
      props.navigation.navigate('UserProfileScreen');
    } else {
      if (
        !userdetails[0].hsn &&
        props.route.params.totalcost >= 1500 &&
        ishsn == ''
      ) {
        toggleOverlay();
      }
      if (!rozerpay && !cash) {
        Toast.show({
          type: 'error',
          text1: 'Select Payment Method',
          position: 'bottom',
          visibilityTime: 2000,
          autoHide: true,
        });
      } else {
        if (rozerpay) {
          Rozerpay();
        } else {
          // props.navigation.push('ConfirmOrderScreen');
          //
          CreateNewOrder_Go_Swift('COD', token, 0);
        }
      }
    }
  };

  //-------------------------------------------------Rozerpay---------------------------------

  const Rozerpay = () => {
    var options = {
      description: 'Credits towards consultation',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: Config.Rozerpay_Key, // Your api key
      amount: payable_amount,
      name: 'Daily Housing',
      prefill: {
        email: 'void@razorpay.com',
        contact: userdetails ? userdetails[0].mobile_no : 'xyz',
        name: 'Razorpay Software',
      },
      theme: {color: colors.AppDefaultColor},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        CreateNewOrder_Go_Swift('COD', token, data.razorpay_payment_id);

        // alert(`Success: ${data.razorpay_payment_id}`);
        // props.navigation.push('ConfirmOrderScreen');
        // console.log(options);
      })
      .catch(error => {
        // handle failure

        alert('payment failed');
      });
  };

  //-------------------------------------------------Order placed Api ---------------------------------

  const Orderplaced = (
    transaction_id,
    status,
    order_type,
    index,
    item,
    tracking_id,
  ) => {
    const Data = new FormData();
    Data.append('user_id', userdetails[0].id);
    Data.append('order_id', Order_ID + '-' + index + 1);
    Data.append('transaction_id', transaction_id ? transaction_id : 0);
    Data.append('order_date', moment().format('YYYY-MM-DD, hh:mm:ss, a'));
    Data.append('delivery_date', moment().add(7, 'days').format('YYYY-MM-DD'));
    Data.append('status', 'success');
    Data.append('products', JSON.stringify([item]).trim());
    Data.append('order_type', order_type);
    Data.append('amount', props.route.params.totalcost);
    Data.append('product_ids', product_Ids.toString());
    Data.append('tracking_id', tracking_id.toString());
    dispatch(OrderAction.OrderPlacedAction(Data)).then(async data => {
      if (data) {
        if (data.success) {
          setspinner(false);

          props.navigation.push('ConfirmOrderScreen');
          Toast.show({
            type: 'success',
            text1: data.message,
            position: 'bottom',
            visibilityTime: 2000,
            autoHide: true,
          });
          RemoveItemRromcart();
        } else {
          setspinner(false);
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

  //----------------------- remove from cart ----------------------

  const RemoveItemRromcart = () => {
    product_Ids.map(item => {
      dispatch(CartAction.RemoveFromCartAction(userdetails[0].id, item)).then(
        async data => {
          if (data) {
            if (data.success) {
            }
          }
        },
      );
    });
  };

  //----------------------- Creat new order go swift  ----------------------//

  const CreateNewOrder_Go_Swift = (payment_mode, Token, paymentid) => {
    setspinner(true);
    dipatchedcartData.cartData.map((item, index) => {
      var Data = {
        seller_name: userdetails[0].name,
        seller_address:
          userdetails[0].street +
          ' ' +
          userdetails[0].city +
          ' ' +
          userdetails[0].state +
          ' ' +
          userdetails[0].pincode,
        seller_gst_tin: userdetails[0].gst,
        seller_gst_amount: 0,
        consignee_gst_amount: 10,
        integrated_gst_amount: 100,
        order_number: Order_ID.toString() + '-' + index + 1,
        invoice_number: 'INV - ' + Order_ID.toString(),
        invoice_date: moment().format('DD-MM-YYYY'),
        consignee_gst_tin: 'string',
        consignee_name: 'string',
        products_desc: 'string',
        payment_mode: payment_mode ? payment_mode : 'COD',
        category_of_goods: 'string',
        hsn_code: !userdetails[0].hsn ? ishsn : userdetails[0].hsn,
        total_amount: parseInt(props.route.params.totalcost),
        tax_value: 0,
        taxable_amount: 1,
        commodity_value: 'string',
        cod_amount: props.route.params.totalcost,
        quantity: dipatchedcartData.cartData.length,
        weight: 100,
        length: 10,
        height: 10,
        width: 10,
        drop_location: {
          location_type: Drop_Address.address_type,
          address:
            Drop_Address.house_no +
            ' ' +
            Drop_Address.road_name +
            ', ' +
            Drop_Address.landmark,
          city: Drop_Address.city,
          state: Drop_Address.state,
          country: 'IN',
          name: Drop_Address.name,
          phone: parseInt(Drop_Address.phone),
          pin: parseInt(Drop_Address.pin),
        },
        pickup_location: {
          name: 'Gaurav',
        },
        return_location: {
          name: alias,
        },
        items: [
          {
            product_name: item.title,
            sku: 'string',
            taxable_value: 1,
            description: 'string',
            quantity: parseInt(item.quantity),
            length: 5,
            height: 6,
            breadth: 42,
            weight: 100,
            hsn_code: 'string',
            cgst_tax_value: 0,
            sgst_tax_value: 0,
            igst_tax_value: 0,
          },
        ],
        what3words_address: 'Gauarv.pickup.dailyHouse',
      };
      dispatch(Go_Swift_Action.CreateOrderGo_Swift_Action(Data, token)).then(
        async data => {
          if (data) {
            Orderplaced(
              paymentid ? paymentid : '0',
              'success',
              'COD',
              index,
              item,
              data.tracking_id,
            );
          } else {
            setspinner(false);
            Toast.show({
              type: 'error',
              text1: 'Something Went Wrong',
              position: 'bottom',
              visibilityTime: 2000,
              autoHide: true,
            });
          }
        },
      );
    });
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View style={[styles.topindicator]}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={3}
            labels={labels}
          />
          <Divider width={1} style={styles.Dividersub} />
        </View>
        <View style={[styles.flexjustify, styles.mainview, {marginTop: '5%'}]}>
          <Text style={[styles.titletxt, {marginLeft: '0%'}]}>
            Select Payment Method
          </Text>
          <Avatar
            source={require('../../Assets/Photos/secure.png')}
            avatarStyle={[styles.imgavatar]}
            containerStyle={[styles.contanerimg]}
          />
        </View>

        <View style={[styles.flexjustify, styles.mainview]}>
          <Text style={[styles.subhead]}>PAY ONLINE</Text>
          <Divider width={1} style={[styles.divider]} />
        </View>

        {/* <Pressable
          onPress={() => setUPI(!isUPI)}
          style={[styles.flexjustify, styles.mainview, {marginTop: '6%'}]}>
          <View style={[styles.flexrow]}>
            <Text style={[styles.upitxt]}>Online</Text>
            <Text style={[styles.titletxt]}>Pay Online</Text>
          </View>
          <Avatar
            size={22}
            icon={{
              name: isUPI ? 'up' : 'down',
              type: 'antdesign',
              color: colors.black,
              size: 22,
            }}
          />
        </Pressable> */}
        <TouchableOpacity
          onPress={() => Selectonline()}
          style={[styles.mainview, styles.flexrow]}>
          <RadioButton
            value="first"
            status={rozerpay === 'first' ? 'checked' : 'unchecked'}
            onPress={() => Selectonline()}
          />
          <View style={[styles.flexrow, {marginTop: 6}]}>
            <Avatar
              source={require('../../Assets/Photos/razorpay_logo.png')}
              avatarStyle={[styles.imgavatar]}
              containerStyle={[styles.logoimg, {marginTop: -5}]}
            />
            <Text style={[styles.subhead, {marginTop: '0%', marginLeft: '5%'}]}>
              Online
            </Text>
          </View>
        </TouchableOpacity>
        {/* <Divider style={styles.Dividersub} /> */}
        {/* <ExpandableView show={isUPI}>
          <TouchableOpacity
            onPress={() => Selectonline()}
            style={[styles.mainview, styles.flexjustify]}>
            <View style={styles.flexrow}>
              <Avatar
                source={require('../../Assets/Photos/razorpay_logo.png')}
                avatarStyle={[styles.imgavatar]}
                containerStyle={[styles.logoimg]}
              />
              <Text
                style={[styles.subhead, {marginTop: '6%', marginLeft: '5%'}]}>
                Online
              </Text>
            </View>
            <RadioButton
              value="first"
              status={rozerpay === 'first' ? 'checked' : 'unchecked'}
              onPress={() => Selectonline()}
            />
          </TouchableOpacity>
        </ExpandableView> */}

        <View style={[styles.flexjustify, styles.mainview]}>
          <Text style={[styles.subhead]}>PAY IN CASH</Text>
          <Divider width={1} style={[styles.divider]} />
        </View>

        {/* <Pressable
          onPress={() => setCash(!isCash)}
          style={[styles.flexjustify, styles.mainview, {marginTop: '6%'}]}>
          <View style={[styles.flexrow]}>
            <Text style={[styles.upitxt]}>Cash</Text>
            <Text style={[styles.titletxt]}>Cash On Delivery</Text>
          </View>
          <Avatar
            size={22}
            icon={{
              name: isCash ? 'up' : 'down',
              type: 'antdesign',
              color: colors.black,
              size: 22,
            }}
          />
        </Pressable> */}
        {/* 
        <ExpandableView show={isCash}>
          <TouchableOpacity
            onPress={() => {
              SelectOffline();
            }}
            style={[styles.mainview, styles.flexjustify]}>
            <View style={styles.flexrow}>
              <Avatar
                source={require('../../Assets/Photos/cash.png')}
                avatarStyle={[styles.imgavatar]}
                containerStyle={[styles.logoimg]}
              />
              <Text style={[styles.subhead]}>Cash On Delivery</Text>
            </View>
            <RadioButton
              value="first"
              status={cash === 'first' ? 'checked' : 'unchecked'}
              color={colors.AppDefaultColor}
            />
          </TouchableOpacity>
        </ExpandableView> */}

        <TouchableOpacity
          onPress={() => {
            SelectOffline();
          }}
          style={[styles.mainview, styles.flexrow]}>
          <View style={styles.flexrow}>
            <RadioButton
              onPress={() => {
                SelectOffline();
              }}
              value="first"
              status={cash === 'first' ? 'checked' : 'unchecked'}
              color={colors.AppDefaultColor}
            />
            <Avatar
              source={require('../../Assets/Photos/cash.png')}
              avatarStyle={[styles.imgavatar]}
              containerStyle={[styles.logoimg, {marginHorizontal: -12}]}
            />
            <Text style={[styles.subhead, {marginTop: '3%'}]}>
              Cash On Delivery
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomview}>
        <Text style={[styles.totalprice]}>
          ₹ {props.route.params.totalcost}
        </Text>

        <TouchComponent
          title={rozerpay ? 'Pay' : 'Place Order'}
          backgroundColor={colors.AppDefaultColor}
          titlecolor={colors.white}
          paddingHorizontal={'8%'}
          paddingVertical={'3%'}
          fontSize={fontSize.lable}
          borderRadius={radious.borderradious}
          marginBottom={'2%'}
          marginTop="2%"
          width={width / 2.5}
          press={() => placeOrder(token)}
        />
      </View>

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

      <Overlay isVisible={visible}>
        <Text style={[styles.titletxt, {textAlign: 'center'}]}>HSN Code</Text>
        <TextInput
          dense={true}
          mode="outlined"
          label="HSN"
          placeholder="HSN code"
          value={ishsn}
          onChangeText={text => sethsn(text)}
          selectionColor={colors.black}
          style={styles.txtinpute}
          activeOutlineColor={colors.Brikcolor}
          outlineColor={colors.AppDefaultColor}
          placeholderTextColor={colors.grey}
          autoCapitalize={true}
        />

        <TouchComponent
          title={'Submit'}
          backgroundColor={colors.AppDefaultColor}
          titlecolor={colors.white}
          paddingHorizontal={'8%'}
          paddingVertical={'3%'}
          fontSize={fontSize.lable}
          borderRadius={radious.borderradious}
          marginBottom={'2%'}
          marginTop="5%"
          width={width / 2.5}
          press={() => toggleOverlay()}
          alignSelf={'center'}
        />
      </Overlay>
    </SafeAreaView>
  );
}

export default PaymentMethodScreen;
