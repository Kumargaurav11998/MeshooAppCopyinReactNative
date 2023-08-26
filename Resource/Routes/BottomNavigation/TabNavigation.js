import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screen/Home/HomeScreen';
import {colors} from '../../Utils/Colors';
import CategoriesScreen from '../../Screen/Categories/CategoriesScreen';
import OrderScreen from '../../Screen/Order/OrderScreen';
import AccountScreen from '../../Screen/Account/AccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
function TabNavigation() {
  const Tab = createBottomTabNavigator();
  var a = 5;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: colors.AppDefaultColor,
        },
        tabBarInactiveTintColor: colors.white,
        tabBarActiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="th-large" color={color} size={size} />
          ),
          tabBarLabel: 'Category',
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="shopping-bag" color={color} size={size} />
          ),
          tabBarLabel: 'Orders',
        }}
      />

      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="user" color={color} size={size} />
          ),
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
