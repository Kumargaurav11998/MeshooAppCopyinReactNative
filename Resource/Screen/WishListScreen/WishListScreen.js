import {Avatar, Card, Divider} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {colors} from '../../Utils/Colors';
import {styles} from './WishListStyle';
import {useDispatch, useSelector} from 'react-redux';
import AnimatedLoader from 'react-native-animated-loader';
import {WishListAction} from '../../Action/WishListAction';
import SearchOverlayComponent from '../../Component/SearchOverlayCompoent';

function WishListScrren(props) {
  const disppatch = useDispatch();
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [wishlisdata, setwishlistdat] = useState([]);
  const [isloader, setloader] = useState(true);
  const [isearch, setsearch] = useState(false);
  const goback = () => {
    props.navigation.pop();
  };
  useEffect(() => {
    if (userdetails) {
      if (userdetails.length > 0) {
        GetWishListService();
      } else {
        setloader(false);
      }
    } else {
      setTimeout(() => {
        setloader(false);
      }, 3000);
    }
  }, [GetWishListService]);

  const GetWishListService = () => {
    setloader(true);
    disppatch(WishListAction.GetWishListAction(userdetails[0].id)).then(
      async data => {
        if (data) {
          setwishlistdat(data);
          setloader(false);
        }
      },
    );
  };

  const RemoveWishlist = item => {
    disppatch(
      WishListAction.RemoveWishListAction(userdetails[0].id, item.product_id),
    ).then(async data => {
      if (data) {
        if (data.success) {
          GetWishListService();
        }
      }
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      {!isearch ? (
        <>
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
            <Text style={styles.headertxt}>My WishList</Text>
            <View style={styles.subheader}>
              <Avatar
                onPress={() => setsearch(true)}
                icon={{
                  name: 'search1',
                  type: 'antdesign',
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
          {/* 
        Wishlist Product  */}
          {isloader ? (
            <ActivityIndicator
              size="large"
              color={colors.AppDefaultColor}
              style={[styles.lottie]}
            />
          ) : (
            <FlatList
              disableVirtualization={false}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View>
                  <Avatar
                    size={150}
                    source={{
                      uri: 'https://s3-eu-central-1.amazonaws.com/buddyloans-news/app/uploads/2015/12/shutterstock_70527019.jpg',
                    }}
                    containerStyle={[styles.emptycontner]}
                  />
                  <Text style={[styles.emptylabel]}>Oops! No Wishlist</Text>
                </View>
              }
              data={wishlisdata}
              renderItem={({item}) => {
                return (
                  <Pressable
                    onPress={() =>
                      props.navigation.push('ProductDeatilsScreen', {
                        Data: item,
                      })
                    }
                    style={[styles.Cardsty]}>
                    <Card
                      containerStyle={[styles.itemcard]}
                      wrapperStyle={{margin: 0, padding: 0}}>
                      <Card.Image
                        source={{uri: item.img}}
                        resizeMode="cover"
                        style={styles.categoryimg}></Card.Image>
                      <Avatar
                        onPress={() => RemoveWishlist(item)}
                        icon={{
                          name: 'heart',
                          type: 'antdesign',
                          color: colors.AppDefaultColor,
                          size: 25,
                        }}
                        containerStyle={[styles.wishlisticon]}
                      />
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
            />
          )}
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
    </SafeAreaView>
  );
}

export default WishListScrren;
