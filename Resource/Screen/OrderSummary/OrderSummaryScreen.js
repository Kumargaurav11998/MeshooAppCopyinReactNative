import {Avatar, Divider} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {useSelector} from 'react-redux';
import TouchComponent from '../../Component/TouchComponent';
import {customStyles, data, labels, width} from '../../Helper/Constant';
import {Address} from '../../Helper/JsonData';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
import {styles} from './OrderSummaryStyle';
function OrderSummaryScreen(props) {
  const dipatchedcartData = useSelector(
    state => state.CartReducer.DispachedCartData,
  );
  const [istotalcost, settotalcost] = useState(dipatchedcartData.istotalprice);
  const [orderdata, setourderdata] = useState(dipatchedcartData.cartData);
  const [isAddress, SetAddress] = useState(props.route.params.Address);
  const [alias, Setalias] = useState(props.route.params.alias);

  useEffect(() => {
    Coast();
  }, []);
  const Coast = () => {
    let temp = 0;
    const total = orderdata.map(dataitem => {
      settotalcost(
        (temp =
          parseInt(dataitem.delivery_charge) +
          temp +
          parseInt(dataitem.discount_price * dataitem.quantity)),
      );
    });
    //  settotalcost(total);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.topindicator]}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={2}
          labels={labels}
        />
        <Divider width={1} style={styles.Dividersub} />
      </View>
      <ScrollView>
        <View style={[styles.flexrow, styles.mainview, {marginTop: '5%'}]}>
          <Avatar
            size={25}
            icon={{
              name: 'truck',
              type: 'feather',
              color: colors.black,
              size: 22,
            }}
          />
          <Text style={[styles.titletxt]}>
            {' '}
            Estimated Delivery within 7 days
          </Text>
        </View>
        <Divider width={1} style={styles.Dividersub} />
        {/* item,  */}
        {orderdata.map(item => {
          return (
            <>
              <View style={[styles.flexrow, styles.mainview]}>
                <Avatar
                  size={80}
                  source={{uri: item.img}}
                  avatarStyle={styles.imgavatar}
                  containerStyle={[styles.contanerimg]}
                />
                <View style={{marginLeft: '5%', marginTop: '5%'}}>
                  <Text style={[styles.titletxt]}>{item.title.trim()}</Text>
                  <View style={[styles.flexjustify, {marginVertical: '3%'}]}>
                    <Text style={[styles.txt]}>Qty : {item.quantity}</Text>
                    <Text style={[styles.txt]}>₹{item.discount_price}</Text>
                  </View>
                  <Text style={[styles.txt]}>
                    Delivery Charge :{' '}
                    {item.delivery_charge == 0
                      ? 'Free Delivery'
                      : '₹ ' + item.delivery_charge}
                  </Text>
                </View>
              </View>
              <Divider width={1} style={styles.Dividersub} />
            </>
          );
        })}

        <Divider width={2} style={styles.Dividersub} />
        <View style={styles.mainview}>
          <Text style={styles.titletxt}>Delivery Address</Text>
          <View style={[styles.flexrow, {marginTop: '3%'}]}>
            <Text style={styles.Subtitletxt}>{isAddress.name}</Text>
            <Text style={[styles.txt, {marginLeft: '5%'}]}>
              {isAddress.phone}
            </Text>
          </View>
          <Text style={[styles.txt]}>
            {isAddress.house_no} , {isAddress.landmark} , {isAddress.road_name}{' '}
            , {isAddress.city} {'\n'}
            Address Type : {isAddress.address_type}
          </Text>
        </View>

        <Divider width={2} style={styles.Dividersub} />

        {/* <View style={styles.mainview}>
          <Text style={styles.titletxt}>Payment Mode</Text>
          <Text style={[styles.Subtitletxt, {marginTop: '3%'}]}>
            Chash on Delivery
          </Text>
        </View>

        <Divider width={5} style={styles.Dividersub} /> */}

        <View style={styles.mainview}>
          <Text style={styles.titletxt}>
            Price Details (
            {orderdata.length == 1
              ? orderdata.length + ' item'
              : orderdata.length + ' items'}{' '}
            )
          </Text>
          <View style={[styles.flexjustify]}>
            <Text style={[styles.Subtitletxt, {marginTop: '3%'}]}>
              Total Product Price
            </Text>
            <Text style={[styles.Subtitletxt, {marginTop: '3%'}]}>
              ₹ {istotalcost}
            </Text>
          </View>
          <Divider width={1} style={styles.Dividersub} />
          <View style={[styles.flexjustify]}>
            <Text style={[styles.Subtitletxt, {marginTop: '3%'}]}>
              Order Total
            </Text>
            <Text style={[styles.Subtitletxt, {marginTop: '3%'}]}>
              ₹ {istotalcost}
            </Text>
          </View>
        </View>

        {/* //<Divider width={5} style={[styles.Dividersub, {marginBottom: 60}]} /> */}
      </ScrollView>
      <View style={styles.bottomview}>
        <Text style={[styles.totalprice]}>₹ {istotalcost}</Text>

        <TouchComponent
          title="Continue"
          backgroundColor={colors.AppDefaultColor}
          titlecolor={colors.white}
          paddingHorizontal={'8%'}
          paddingVertical={'3%'}
          fontSize={fontSize.lable}
          borderRadius={radious.borderradious}
          marginBottom={'2%'}
          marginTop="2%"
          width={width / 2.5}
          press={() =>
            props.navigation.push('PaymentMethodScreen', {
              totalcost: istotalcost,
              DropAddress: isAddress,
              alias: alias,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default OrderSummaryScreen;
