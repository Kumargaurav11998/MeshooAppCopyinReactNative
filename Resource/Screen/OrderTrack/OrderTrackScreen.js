import {Avatar, Divider} from '@rneui/base';
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './OrderTrackStyle';
import StepIndicator from 'react-native-step-indicator';
import {customStyles, height, width} from '../../Helper/Constant';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Icon, AirbnbRating} from '@rneui/themed';
import {trackingdetail} from '../../Helper/JsonData';
import {colors} from '../../Utils/Colors';
import TouchComponent from '../../Component/TouchComponent';
import {fontSize, radious} from '../../Utils/Size';
import {useDispatch, useSelector} from 'react-redux';
import {OrderAction} from '../../Action/OrderAction';
import {Modal, Portal, Provider, TextInput} from 'react-native-paper';
import {ProdcutAction} from '../../Action/ProductsAction';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';

function TrackOrderScreen(props) {
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [ProductDeatils, setProductDetails] = useState(
    props.route.params.orderId,
  );
  const token = useSelector(
    state => state.GoSwiftReducer.GetAccesToken[0].access_token,
  );

  const refRBSheet = useRef();
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [isReview, setreview] = useState('');
  const [isRatting, setRatting] = useState(5);
  const [spinner, setspinner] = useState(true);
  const [Istracking, setIsTracking] = useState([]);
  const dispatch = useDispatch();
  const [track, settrack] = useState([
    'Order on ' + moment(ProductDeatils.order_date).format('MMM - D'),
    'Shipped 17 June',
    'Out For Delivery',
    'Arriving tommorow',
  ]);
  //console.log(ProductDeatils);

  useEffect(() => {
    if (props.route.params.orderId) {
      GetOrderDeatils();
      TrackOrderStatus(ProductDeatils.tracking_id);
    }
  }, []);

  // const ProductId = JSON.parse(ProductDeatils.products)[0].product_id;

  //-------------------------Get order details ------------------------//

  const GetOrderDeatils = () => {
    dispatch(
      OrderAction.GetOrderDeatislAction(props.route.params.orderId.id),
    ).then(async data => {});
  };

  //----------------------- Add Product details------------------------//

  const AddProductReview = () => {
    let Data = new FormData();
    Data.append('user_id', userdetails[0].id);
    Data.append(
      'product_id',
      JSON.parse(ProductDeatils.products)[0].product_id,
    );
    Data.append('rating', isRatting);
    Data.append('review', isReview);
    Data.append('date', moment().format('YYYY-MM-DD'));
    dispatch(ProdcutAction.AddProductReviewAction(Data)).then(async data => {
      console.log(data);
      if (data) {
        if (data.success) {
          Toast.show({
            type: 'success',
            text1: data.message,
            position: 'bottom',
            visibilityTime: 2000,
            autoHide: true,
          });
          hideModal();
        } else {
          Toast.show({
            type: 'error',
            text1: data.message,
            position: 'bottom',
            visibilityTime: 2000,
            autoHide: true,
          });
          const hideModal = () => setVisible(false);
        }
      }
    });
  };

  const TrackOrderStatus = id => {
    dispatch(Go_Swift_Action.Track_Order_Go_Swift_Action(id, token)).then(
      async data => {
        setIsTracking(data);
        track.splice(1, 0, data.track.status);
        if (data.track.status == 'Seller Cancelled') {
          settrack([
            'Order on ' + moment(ProductDeatils.order_date).format('MMM - D'),
            data.track.status,
          ]);
        } else {
          settrack([
            data.track.status +
              ' ' +
              'on' +
              ' ' +
              moment(ProductDeatils.order_date).format('MMM - D'),
            'Shipped 17 June' + '       ',
            'Out For Delivery' + '          ',
            'Arriving tommorow' + '    ',
          ]);
        }

        console.log(track, '33333333333');
        console.log(data.track.status, '-----------------');
        setspinner(false);
      },
    );
  };
  //--------------------------------- CANCEL ORDER ------------------------------//

  const CancelOrder = id => {
    //setspinner(true);
    var Data = {
      status: true,
      remark: JSON.stringify('Cancel'),
      tracking_id: JSON.stringify(ProductDeatils.tracking_id),
    };

    dispatch(Go_Swift_Action.Cancel_Order_Go_Swift_Action(Data, token)).then(
      async data => {
        //TrackOrderStatus(ProductDeatils.tracking_id);
        console.log(data, '//////////');
      },
    );
    return false;

    dispatch(OrderAction.CancelOrderAction(props.route.params.orderId.id)).then(
      async data => {
        setspinner(false);
        if (data) {
          if (data.success) {
            Toast.show({
              type: 'success',
              text1: data.message,
              position: 'bottom',
              visibilityTime: 2000,
              autoHide: true,
            });
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
      },
    );
  };
  return (
    <>
      {spinner ? (
        <ActivityIndicator
          color={colors.AppDefaultColor}
          size={'large'}
          style={{marginTop: '70%'}}
        />
      ) : (
        <Provider>
          <SafeAreaView style={[styles.container]}>
            <ScrollView>
              {Istracking.track.status != 'Seller Cancelled' ? (
                <Text
                  style={[styles.headTitle, {left: '3%', marginBottom: '1%'}]}>
                  Arriving on{' '}
                  {moment(ProductDeatils.delivery_date).format('DD-MMM')}
                </Text>
              ) : (
                <Text
                  style={[styles.headTitle, {left: '3%', marginBottom: '1%'}]}>
                  Arriving on{' '}
                  {moment(ProductDeatils.delivery_date).format('DD-MMM')}
                </Text>
              )}

              {JSON.parse(ProductDeatils.products).map(item => {
                return (
                  <View style={[styles.justifyrow, styles.mainView]}>
                    <Avatar
                      source={{uri: item.img}}
                      containerStyle={styles.contaneravtar}
                      avatarStyle={[styles.avatarStyle]}
                    />
                    <View>
                      <Text
                        style={[
                          styles.label,
                          {
                            fontWeight: '400',
                            marginTop: '5%',
                            marginLeft: '5%',
                          },
                        ]}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                );
              })}

              <Divider style={[styles.divider]} />
              <View style={[styles.justifyspacebetween, styles.mainView]}>
                <Text style={[styles.label, {marginLeft: '1%'}]}>Order id</Text>
                <Text
                  style={[
                    styles.label,
                    {
                      fontWeight: '400',
                    },
                  ]}>
                  {ProductDeatils.order_id}
                </Text>
              </View>
              <View
                style={[
                  styles.justifyspacebetween,
                  styles.mainView,
                  {marginTop: '2%'},
                ]}>
                <Text style={[styles.label, {marginLeft: '1%'}]}>
                  Current Status
                </Text>
              </View>
              <View
                style={[
                  styles.indicatorstyle,
                  {
                    height:
                      track[1] == 'Seller Cancelled' ? height / 5 : height / 2,
                  },
                ]}>
                <StepIndicator
                  customStyles={customStyles}
                  stepCount={track[1] == 'Seller Cancelled' ? 2 : 4}
                  direction="vertical"
                  currentPosition={track[1] == 'Seller Cancelled' ? 1 : 0}
                  labels={track}
                />
                {Istracking.track.status != 'Seller Cancelled' && (
                  <>
                    <Text style={[styles.txttckinhdetails]}>
                      {Istracking.track.desc}
                    </Text>
                    <Text
                      onPress={() => refRBSheet.current.open()}
                      style={[styles.txttckseemore]}>
                      See more
                    </Text>
                  </>
                )}
              </View>

              {/* <Pressable style={[styles.cancellbtn]}>
          <Text style={[styles.canceltxt]}>Request Cancellation </Text>
        </Pressable> */}
              {ProductDeatils.status != 'Cancelled' &&
              track[1] != 'Seller Cancelled' ? (
                <TouchComponent
                  title="Request Cancellation"
                  backgroundColor={colors.red}
                  titlecolor={colors.white}
                  paddingVertical={'3%'}
                  fontSize={fontSize.lable}
                  press={() => CancelOrder()}
                  width={width - 25}
                  alignSelf={'center'}
                  borderRadius={radious.borderradious}
                />
              ) : (
                <Text style={[styles.canceltxt]}>Cancelled</Text>
              )}

              {ProductDeatils.status != 'Cancelled' &&
                track[1] != 'Seller Cancelled' && (
                  <TouchComponent
                    title="Write Review"
                    backgroundColor={colors.red}
                    titlecolor={colors.white}
                    paddingVertical={'3%'}
                    fontSize={fontSize.lable}
                    press={() => showModal()}
                    width={width - 25}
                    alignSelf={'center'}
                    borderRadius={radious.borderradious}
                    marginTop={'5%'}
                  />
                )}

              {/* payment in formation   */}
              <View style={[styles.mainView]}>
                <Text style={[styles.label, styles.divider]}>
                  Payment Information
                </Text>
                <View style={styles.cardview}>
                  <Text
                    style={[styles.label, {marginLeft: '2%', fontSize: 15}]}>
                    Payment Method
                  </Text>
                  <Text style={[styles.sublabel, {marginLeft: '2%'}]}>
                    {ProductDeatils.order_type}
                  </Text>
                  <Divider style={styles.divider}></Divider>
                  <Text
                    style={[styles.label, {marginLeft: '2%', fontSize: 15}]}>
                    Billing Address
                  </Text>
                  <Text style={[styles.txt, {marginLeft: '2%', fontSize: 14}]}>
                    Mettel crow sulution, E 253 8 b inductrial
                  </Text>
                  <Text style={[styles.txt, {marginLeft: '2%', fontSize: 14}]}>
                    Mohali
                  </Text>
                  <Text style={[styles.txt, {marginLeft: '2%', fontSize: 14}]}>
                    Punjab
                  </Text>
                  <Text style={[styles.txt, {marginLeft: '2%', fontSize: 14}]}>
                    160055
                  </Text>
                </View>
              </View>

              {/* Shpping Address  */}
              <View style={[styles.mainView]}>
                <Text
                  style={[
                    styles.label,
                    styles.divider,
                    {fontSize: 15, left: '2%'},
                  ]}>
                  Shipping Address
                </Text>
                <View style={styles.cardview}>
                  <Text style={[styles.txt, {marginLeft: '2%', fontSize: 14}]}>
                    Mettel crow sulution, E 253 8 b inductrial
                  </Text>
                  <Text style={[styles.txt, {marginLeft: '2%', fontSize: 14}]}>
                    Mohali
                  </Text>
                  <Text style={[styles.txt, {marginLeft: '2%', fontSize: 14}]}>
                    Punjab
                  </Text>
                  <Text style={[styles.txt, {marginLeft: '2%', fontSize: 14}]}>
                    160055
                  </Text>
                </View>
              </View>

              <View style={[styles.mainView, {marginBottom: '5%'}]}>
                <Text style={[styles.label, styles.divider]}>
                  Order Summary
                </Text>
                <View style={styles.cardview}>
                  <View style={styles.justifyspacebetween}>
                    <Text style={[styles.txt, {margin: '2%'}]}>items:</Text>
                    <Text style={[styles.txt, {margin: '2%'}]}>
                      ₹ {ProductDeatils.amount}
                    </Text>
                  </View>
                  <View style={styles.justifyspacebetween}>
                    <Text style={[styles.txt, {margin: '2%'}]}>
                      Postage & Packing:
                    </Text>
                    <Text style={[styles.txt, {margin: '2%'}]}>₹ 0</Text>
                  </View>
                  <View style={styles.justifyspacebetween}>
                    <Text style={[styles.txt, {margin: '2%'}]}>
                      Total before Tax:
                    </Text>
                    <Text style={[styles.txt, {margin: '2%'}]}>
                      ₹ {ProductDeatils.amount}
                    </Text>
                  </View>
                  <View style={styles.justifyspacebetween}>
                    <Text style={[styles.txt, {margin: '2%'}]}>Tax:</Text>
                    <Text style={[styles.txt, {margin: '2%'}]}>₹ 0</Text>
                  </View>
                  <View style={styles.justifyspacebetween}>
                    <Text
                      style={[styles.txt, styles.label, {marginLeft: '2%'}]}>
                      Total :
                    </Text>
                    <Text
                      style={[
                        styles.txt,
                        styles.label,
                        {marginRight: '2%', color: colors.AppDefaultColor},
                      ]}>
                      {ProductDeatils.amount}
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>

            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={true}
              height={height / 1.3}
              customStyles={{
                wrapper: {
                  backgroundColor: 'rgba(7, 7, 7, 0.69)',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                },
              }}>
              <View
                style={[styles.justifyspacebetween, {paddingHorizontal: '3%'}]}>
                <View>
                  <Text style={[styles.label]}>Shipped with DailyHousing</Text>
                  <Text style={[styles.sublabel]}>
                    Tracking ID : 123465789{' '}
                  </Text>
                </View>

                <Icon
                  name="close"
                  type="antdesign"
                  onPress={() => refRBSheet.current.close()}></Icon>
              </View>
              <Divider style={styles.divider} />
              <ScrollView>
                {trackingdetail.map(item => {
                  return (
                    <View style={[styles.mainView]}>
                      <Text style={[styles.sublabel]}>{item.date}</Text>
                      {item.datedetails.map(subitem => {
                        return (
                          <View style={[styles.justifyrow, styles.subdetails]}>
                            <Text style={styles.txt}>{subitem.time}</Text>
                            <Divider
                              orientation="vertical"
                              style={[styles.verticaldivder]}
                              color={colors.txtgrey}
                              width={1}
                            />

                            <Text style={[styles.txt, {marginLeft: '5%'}]}>
                              {subitem.des}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </ScrollView>
            </RBSheet>

            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={styles.modelstyle}>
                <Text style={styles.reviewheading}>Write Review</Text>
                <AirbnbRating
                  defaultRating={5}
                  size={25}
                  reviewSize={0}
                  starContainerStyle={{marginHorizontal: 20}}
                  selectedColor={colors.Brikcolor}
                  onFinishRating={v => {
                    setRatting(v);
                  }}
                />
                <TextInput
                  mode="outlined"
                  textAlignVertical="top"
                  label="Write Review"
                  value={isReview}
                  onChangeText={text => setreview(text)}
                  style={styles.txtinpute}
                  outlineColor={colors.Brikcolor}
                  activeOutlineColor={colors.Brikcolor}
                  placeholderTextColor={colors.Brikcolor}
                  multiline={true}
                  autoFocus={true}
                  selectionColor={colors.black}
                />

                <TouchComponent
                  title="Submit"
                  backgroundColor={colors.Brikcolor}
                  titlecolor={colors.white}
                  paddingVertical={'3%'}
                  fontSize={fontSize.lable}
                  press={() => AddProductReview()}
                  width={width - 60}
                  alignSelf={'center'}
                  borderRadius={radious.borderradious}
                  marginTop={'5%'}
                  marginBottom={'3%'}
                />
              </Modal>
            </Portal>
          </SafeAreaView>
        </Provider>
      )}
    </>
  );
}

export default TrackOrderScreen;
