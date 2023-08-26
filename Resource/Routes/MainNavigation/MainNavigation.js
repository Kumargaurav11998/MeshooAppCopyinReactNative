import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../Screen/Splash/SplashScreen';
import HomeScreen from '../../Screen/Home/HomeScreen';
import TabNavigation from '../BottomNavigation/TabNavigation';
import ProductDeatilsScreen from '../../Screen/ProductDetailScreen.js/ProductDetailsScreen';
import BankDetailsScreen from '../../Screen/BankDeatils/BankDetailsScreen';
import PaymentsScreen from '../../Screen/PaymentsMode/PaymentsScreen';
import MyPayments from '../MyPayments/Mypayments';
import {Avatar} from '@rneui/base';
import {colors} from '../../Utils/Colors';
import {Pressable} from 'react-native';
import {fontSize} from '../../Utils/Size';
import SettingScreen from '../../Screen/Setting/SettingScreen';
import BecomeSupplierScreen from '../../Screen/BecomeSupplier/BecomeSupplierScreen';
import CraeteSupplierScreen from '../../Screen/CreateSupplerAccount/CreateSupplierAccountScreen';
import GSTScreen from '../../Screen/GSTIN/GSTScreen';
import PickUpAddressScreen from '../../Screen/PickUpSupplierAddress/PickUpAddressScreen';
import SellerBankDetailsScreen from '../../Screen/SellerBankDetails/SellerBankDetailsScreen';
import ReferAndEarnScreen from '../../Screen/ReferAndEarn/ReferAndEarnScreen';
import RateDailyHouseSCreen from '../../Screen/RateDailyHouse/RateDailyHouseScreen';
import LegalPoliciesScreen from '../../Screen/LegalPolicies/LegalPoliciesScreen';
import UserProfileScreen from '../../Screen/UserProfile/UserProfileScreen';
import ProductListScreen from '../../Screen/ProductList/ProductListScreen';
import WishListScrren from '../../Screen/WishListScreen/WishListScreen';
import CartScreen from '../../Screen/CartScreen/CartScreen';
import AddressScreen from '../../Screen/Address/AddressScreen';
import AddNewAddressScreen from '../../Screen/AddNewAddress/AddNewAddressScreen';
import OrderSummaryScreen from '../../Screen/OrderSummary/OrderSummaryScreen';
import PaymentMethodScreen from '../../Screen/PaymentMethod/PaymentMethodScreen';
import ConfirmOrderScreen from '../../Screen/ConfirmOrder/ConFirmOrderScreen';
import TrackOrderScreen from '../../Screen/OrderTrack/OrderTrackScreen';
import HelpCenterScreen from '../../Screen/HelpCenter/HelpCenterScreen';
import AddTicketScreen from '../../Screen/AddTicket/AddTicketScreen';
import SellerHomeScreen from '../../Screen/SellerHomeScreen.js/SellerHomeScreen';
import {ReturnAddressScreen} from '../../Screen/ReturnAddress/ReturnAddressScreen';
import ShowReturnAddressScreen from '../../Screen/ShowReturningAddress/ShowReturningAddressScreen';

function MainNavigation(props) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDeatilsScreen"
          component={ProductDeatilsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BankDetailsScreen"
          component={BankDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyPayments"
          component={MyPayments}
          options={{
            headerTitle: 'MY PAYMENTS',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 13},
          }}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            headerTitle: 'SETTINGS',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 13},
          }}
        />
        <Stack.Screen
          name="BecomeSupplierScreen"
          component={BecomeSupplierScreen}
          options={{
            headerTitle: 'SUPPLIER HUB',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 13},
          }}
        />
        <Stack.Screen
          name="CraeteSupplierScreen"
          component={CraeteSupplierScreen}
          options={{
            headerTitle: 'Create supplier account',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="GSTScreen"
          component={GSTScreen}
          options={{
            headerTitle: 'GSTIN Details',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="PickUpAddressScreen"
          component={PickUpAddressScreen}
          options={{
            headerTitle: 'Pickup Address',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />

        <Stack.Screen
          name="SellerBankDetailsScreen"
          component={SellerBankDetailsScreen}
          options={{
            headerTitle: 'Bank Details',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="ReferAndEarnScreen"
          component={ReferAndEarnScreen}
          options={{
            headerTitle: 'Refer And Earn',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="LegalPoliciesScreen"
          component={LegalPoliciesScreen}
          options={{
            headerTitle: 'Legal Policies',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />

        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={{
            headerTitle: 'Profile',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />

        <Stack.Screen
          name="ProductListScreen"
          component={ProductListScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="WishListScrren"
          component={WishListScrren}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AddressScreen"
          component={AddressScreen}
          options={{
            headerTitle: 'Address',
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="AddNewAddressScreen"
          component={AddNewAddressScreen}
          options={{
            headerTitle: ' Add Address',
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="ReturnAddressScreen"
          component={ReturnAddressScreen}
          options={{
            headerTitle: 'Return Address',
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="ShowReturnAddressScreen"
          component={ShowReturnAddressScreen}
          options={{
            headerTitle: 'Return Address',
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="OrderSummaryScreen"
          component={OrderSummaryScreen}
          options={{
            headerTitle: 'Order Summary',
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="PaymentMethodScreen"
          component={PaymentMethodScreen}
          options={{
            headerTitle: 'Payment Method',
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />

        <Stack.Screen
          name="ConfirmOrderScreen"
          component={ConfirmOrderScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TrackOrderScreen"
          component={TrackOrderScreen}
          options={{
            headerTitle: 'Order Details',
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />

        <Stack.Screen
          name="HelpCenterScreen"
          component={HelpCenterScreen}
          options={{
            headerTitle: 'Help Center',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />

        <Stack.Screen
          name="AddTicketScreen"
          component={AddTicketScreen}
          options={{
            headerTitle: 'Add Ticket',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
        <Stack.Screen
          name="SellerHomeScreen"
          component={SellerHomeScreen}
          options={{
            headerTitle: 'Seller Home',
            headerTitleAlign: 'left',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.AppDefaultColor},
            headerTitleStyle: {fontSize: 15},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
