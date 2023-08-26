import {Avatar, Card, CheckBox, Divider, Icon} from '@rneui/base';
import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ProdctListheader} from '../../Component/ProductListheader';
import {height, sharee, shareeSubcat, width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {styles} from './ProductListStyle';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Category, Sort} from '../../Helper/JsonData';
import {RadioButton} from 'react-native-paper';
import SliderCompoent from '../../Component/SliderCompoent';
import SearchOverlayComponent from '../../Component/SearchOverlayCompoent';
import {useDispatch, useSelector} from 'react-redux';
import {ProdcutAction} from '../../Action/ProductsAction';
import {WishListAction} from '../../Action/WishListAction';
import Toast from 'react-native-toast-message';
function ProductListScreen(props) {
  const [isdata, setdata] = useState([]);
  const [subdata, setsubdata] = useState(shareeSubcat);
  const [checked, setChecked] = React.useState(0);
  const [isearch, setsearch] = useState(false);
  const refRBSheet = useRef();
  const Catref = useRef();
  const PriceRef = useRef();
  const dispatch = useDispatch();
  const subcatgory = () => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{}}
        data={subdata}
        renderItem={({item}) => {
          return (
            <Pressable style={{width: 50, marginHorizontal: 5}}>
              <Avatar
                size={50}
                rounded
                source={{uri: item.img}}
                avatarStyle={{resizeMode: 'contain'}}
                containerStyle={[styles.subcategoryavatar]}></Avatar>
            </Pressable>
          );
        }}
      />
    );
  };
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  useEffect(() => {
    GetProduct();
  }, []);

  // get product list by category
  console.log(props.route.params.data);

  const GetProduct = () => {
    dispatch(
      ProdcutAction.GetProductByCategory(
        props.route.params.data.sub_category_id,
      ),
    ).then(async data => {
      if (data) {
        if (data.length > 0) {
          setdata(data);
        }
      }
    });
  };

  const onValueChange = (item, index) => {
    const newData = [...data];
    newData[index].isCheck = !item.isCheck;
    setData(newData);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={colors.AppDefaultColor} />

      {!isearch ? (
        <>
          <ProdctListheader
            title={props.route.params.data.category}
            marginTop={'2%'}
            size={22}
            search={!isearch}
            getsearch={c => setsearch(c)}
            sendback={() => props.navigation.pop()}
            navigation={props.navigation}
          />
          <View style={[styles.flewithJustify, styles.subheader]}>
            <Pressable
              style={styles.subheaderview}
              onPress={() => refRBSheet.current.open()}>
              <Icon name="swap-vertical" type="ionicon" size={12} />
              <Text style={[styles.subheadertxt]}>Sort</Text>
            </Pressable>
            <Pressable
              onPress={() => Catref.current.open()}
              style={[styles.subheaderview, {width: '25%'}]}>
              <Text style={[styles.subheadertxt]}>Category</Text>
              <Icon name="category" type="materialicons" size={12} />
            </Pressable>
            <Pressable
              onPress={() => PriceRef.current.open()}
              style={styles.subheaderview}>
              <Text style={[styles.subheadertxt]}>Price</Text>
              <Icon
                name="down"
                type="antdesign"
                size={12}
                style={{paddingTop: '20%'}}
              />
            </Pressable>
            <Pressable style={styles.subheaderview}>
              <Text style={[styles.subheadertxt]}>filter</Text>
              <Icon name="filter" type="antdesign" size={12} />
            </Pressable>
          </View>
          <FlatList
            ListHeaderComponent={subcatgory}
            ListHeaderComponentStyle={{width: width, marginVertical: '3%'}}
            data={isdata}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() =>
                    props.navigation.push('ProductDeatilsScreen', {
                      Data: '',
                    })
                  }
                  style={[styles.Cardsty]}>
                  <Card
                    containerStyle={[styles.itemcard]}
                    wrapperStyle={{margin: 0, padding: 0}}>
                    <Card.Image
                      source={{uri: item.img}}
                      style={styles.productimg}></Card.Image>

                    <Text style={[styles.label]}>{item.name}</Text>

                    <View style={styles.rS}>
                      <View>
                        <View style={[styles.priceview]}>
                          <Avatar
                            size={11}
                            icon={{
                              name: 'inr',
                              type: 'fontisto',
                              color: colors.black,
                              size: 10,
                            }}
                            containerStyle={[styles.ruppeiconconatner]}
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
                            size={11}
                            icon={{
                              name: 'inr',
                              type: 'fontisto',
                              color: colors.black,
                              size: 10,
                            }}
                            containerStyle={[styles.ruppeiconconatner]}
                          />

                          <Text style={[styles.inrtxt, {color: colors.black}]}>
                            {'250'}
                          </Text>
                        </View>
                      </View>
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
                          {4}
                        </Text>
                      </View>
                    </View>
                  </Card>
                </Pressable>
              );
            }}
          />
        </>
      ) : (
        <SearchOverlayComponent
          isOpen={isearch}
          Getbackpress={c => setsearch(c)}
          navigation={props.navigation}
        />
      )}

      {/* Sort */}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={height / 2.3}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(7, 7, 7, 0.69)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={[styles.flewithJustify, {paddingHorizontal: '3%'}]}>
          <Text style={[styles.label]}>Sort</Text>
          <Icon
            name="close"
            type="antdesign"
            onPress={() => refRBSheet.current.close()}></Icon>
        </View>
        <Divider style={styles.divider} />
        {Sort.map((mapitem, index) => {
          return (
            <View style={[styles.flewithJustify, {paddingHorizontal: '5%'}]}>
              <Text style={[styles.sortlisttxt]}>{mapitem.Name}</Text>
              <RadioButton
                value="first"
                status={checked === index ? 'checked' : 'unchecked'}
                onPress={() => setChecked(index)}
                color={colors.AppDefaultColor}
                uncheckedColor={colors.txtgrey}
              />
            </View>
          );
        })}
      </RBSheet>

      {/* Category  */}

      <RBSheet
        ref={Catref}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={height / 1.2}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(7, 7, 7, 0.69)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        {/* header         */}
        <View style={[styles.flewithJustify, {paddingHorizontal: '3%'}]}>
          <Text style={[styles.label]}>Category</Text>
          <Icon
            name="close"
            type="antdesign"
            onPress={() => Catref.current.close()}></Icon>
        </View>
        <Divider style={styles.divider} />
        <ScrollView>
          {Category.map((item, index) => {
            return (
              <CheckBox
                center
                title={item.name}
                checked={item.isCheck || false}
                onPress={val => onValueChange(item, index)}
                containerStyle={styles.checkboccategorycontainer}
                textStyle={styles.checkboxtitlecategory}
                checkedIcon={
                  <Icon
                    name="checkbox"
                    type="ionicon"
                    color={colors.AppDefaultColor}
                  />
                }
                checkedColor={'red'}
                uncheckedIcon={
                  <Icon
                    name="square-outline"
                    type="ionicon"
                    color={colors.txtgrey}
                  />
                }
              />
            );
          })}
        </ScrollView>
      </RBSheet>

      {/* Price Bootom Sheet  */}

      <RBSheet
        ref={PriceRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={height / 4}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(7, 7, 7, 0.69)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        {/* header         */}
        <View style={[styles.flewithJustify, {paddingHorizontal: '3%'}]}>
          <Text style={[styles.label]}>Price</Text>
          <Icon
            name="close"
            type="antdesign"
            onPress={() => PriceRef.current.close()}></Icon>
        </View>
        <Divider style={styles.divider} />
        <SliderCompoent />
      </RBSheet>

      {/* SearchOverlay  */}
      {/* {isearch && (
        <SearchOverlayComponent
          isOpen={isearch}
          Getbackpress={c => setsearch(c)}
        />
      )} */}
    </SafeAreaView>
  );
}

export default ProductListScreen;
