import {Avatar} from '@rneui/base';
import React, {useRef, useState} from 'react';
import {Pressable, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {CategoryAction} from '../../Action/CategoryAction';
import SearchOverlayComponent from '../../Component/SearchOverlayCompoent';
import SearchbarComponent from '../../Component/Search_Component';
import {
  category,
  categoryListSub,
  height,
  width,
  CategoryList,
  fitness,
  household,
} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {styles} from './CategoriesStyle';

function CategoriesScreen(props) {
  const Getcategory = useSelector(
    state => state.CategoryReducer.GetCategoryList[0],
  );
  const Topref = useRef();
  const thumbref = useRef();
  const [isindex, setindex] = useState(0);
  const [iscategory, setcategory] = useState([Getcategory]);
  const [subcategory, setsubcategory] = useState([]);
  const [isearch, setsearch] = useState(false);
  const setActiveIndex = index => {
    setindex(index);
    if (index == 0) {
      setcategory(Getcategory);
    } else if (index == 1) {
      setcategory(fitness);
    } else if (index == 2) {
      setcategory(household);
    }
  };
  const dispatch = useDispatch();

  //------------------------Get Sub Category ---------------------//

  const GetSubCategory = (id, index) => {
    setActiveIndex(index);
    dispatch(CategoryAction.GetSubCategoryAction(id)).then(async data => {
      if (data) {
        setsubcategory(data);
      }
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      {/* Statusbar */}
      {/* <StatusBar backgroundColor={colors.AppDefaultColor} /> */}
      {!isearch ? (
        <>
          {/* Header */}
          <View style={[styles.flexDirectionWithJustify, styles.headerview]}>
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
                icon={{
                  name: 'shoppingcart',
                  type: 'antdesign',
                  color: colors.AppDefaultColor,
                }}
              />
            </View>
            <Text style={[styles.headertxt]}>Categories</Text>
            <View style={[styles.flexDirectionWithoutJustify]}>
              <Avatar
                onPress={() => setsearch(true)}
                icon={{
                  name: 'search1',
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
          {/* //main  */}
          <View>
            <FlatList
              // ref={thumbref}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={[
                {
                  alignSelf: 'flex-start',
                  width: width,
                  marginBottom: 0,
                  padding: 0,
                  // height: '25%',
                  // backgroundColor: colors.black,
                },
              ]}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              data={Getcategory}
              contentContainerStyle={{margin: 5}}
              renderItem={({item, index}) => {
                return (
                  <View style={[styles.thumbmainview]}>
                    <Avatar
                      onPress={() => GetSubCategory(item.category_id, index)}
                      /// size={180}

                      avatarStyle={styles.avatarimg}
                      source={{uri: item.category_img}}
                      containerStyle={[
                        styles.contnerthumbnail,
                        {
                          borderColor:
                            isindex == index
                              ? colors.AppDefaultColor
                              : 'transparent',
                        },
                      ]}
                    />
                    <Text style={[styles.categoryname]}>
                      {item.category && item.category.split(' ')[0]}
                    </Text>
                    <Text style={[styles.categoryname]}>
                      {item.category &&
                        item.category.trim().split(' ')[1] &&
                        item.category.trim().split(' ')[1]}
                    </Text>
                  </View>
                );
              }}
            />

            <FlatList
              // ref={Topref}
              ListEmptyComponent={
                <Text style={[styles.emtysubcategory]}>
                  No sub category found
                </Text>
              }
              style={[styles.FlatListstyle]}
              showsHorizontalScrollIndicator={false}
              data={subcategory}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <Pressable
                    onPress={() =>
                      props.navigation.push('ProductListScreen', {
                        data: item,
                      })
                    }
                    style={[styles.mainview]}>
                    <Avatar
                      avatarStyle={styles.avatarimg}
                      source={{uri: item.category_img}}
                      containerStyle={styles.conterimg}
                    />
                    <Text style={[styles.subitemtxt]}>
                      {item.sub_category && item.sub_category.split(' ')[0]}
                    </Text>
                    <Text style={[styles.subitemtxt]}>
                      {item.category &&
                        item.category.split(' ')[1] &&
                        item.category.split(' ')[1]}
                    </Text>
                  </Pressable>
                );
              }}
            />
          </View>
        </>
      ) : (
        <SearchOverlayComponent
          isOpen={isearch}
          Getbackpress={c => setsearch(c)}
          navigation={props.navigation}
        />
      )}
    </SafeAreaView>
  );
}
export default CategoriesScreen;
