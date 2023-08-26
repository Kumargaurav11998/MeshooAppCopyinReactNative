import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../Utils/Colors';

export const category = [
  {
    id: 1,
    name: 'Children',
    img: require('../Assets/Photos/children.png'),
  },
  {
    id: 2,
    name: 'Fitness',
    img: require('../Assets/Photos/fitness.png'),
  },
  {
    id: 3,
    name: 'House Hold',
    img: require('../Assets/Photos/household.png'),
  },
  {
    id: 4,
    name: 'Personal Care',
    img: require('../Assets/Photos/personal.png'),
  },
  {
    id: 5,
    name: 'Kitchenware',
    img: require('../Assets/Photos/kitchen.png'),
  },
  {
    id: 6,
    name: 'Car Accessories',
    img: require('../Assets/Photos/car.png'),
  },
];

export const image = [
  require('../../Resource/Assets/Photos/bannerr.png'),
  require('../../Resource/Assets/Photos/bannerr.png'),
  require('../../Resource/Assets/Photos/bannerr.png'),
  require('../../Resource/Assets/Photos/bannerr.png'),
];

export const HotDeals = [
  require('../../Resource/Assets/Photos/hotdeals.png'),
  require('../../Resource/Assets/Photos/hotdeals.png'),
  require('../../Resource/Assets/Photos/hotdeals.png'),
  require('../../Resource/Assets/Photos/hotdeals.png'),
];

export const dataSource = [
  {
    url: require('../../Resource/Assets/Photos/bannerr.png'),
  },
  {
    url: require('../../Resource/Assets/Photos/hotdeals.png'),
  },
];

export const rating = [
  {
    id: 1,
    name: 'Gaurav',
    star: 5,
    description: 'Product quilty is really good.',
    date: '20-may-2020',
  },
  {
    id: 2,
    name: 'Alex',
    star: 5,
    description: 'Product quilty is really good.',
    date: '20-may-2020',
  },
  {
    id: 3,
    name: 'User C',
    star: 3,
    description:
      'Case studies—unlike traditional customer reviews—are written from the perspective of the company doing the work or providing the product. Rather than the customer explaining how they helped, the company walks through what they did to help their customer reach their goals. ',
    date: '10-may-2020',
  },
  {
    id: 4,
    name: 'Gaurav',
    star: 5,
    description: 'I Am Impressed.',
    date: '15-may-2020',
  },
];

export const Images = [
  {
    id: 3,
    name: 'Product Title',
    description: 'Product Description',
    price: '100',
    Dicounted_price: '10',
    rating: 4,
    img: require('../Assets/Photos/men.png'),
  },
  {
    id: 4,
    name: 'Product Title',
    description: 'Product Description',
    price: '100',
    Dicounted_price: '10',
    rating: 4,
    img: require('../Assets/Photos/men.png'),
  },
  {
    id: 5,
    name: 'Product Title',
    description: 'Product Description',
    price: '100',
    Dicounted_price: '10',
    rating: 4,
    img: require('../Assets/Photos/men.png'),
  },
];

//  fixed
export const {width, height} = Dimensions.get('window');

export const states = [
  {
    key: 'AN',
    label: 'Andaman and Nicobar Islands',
  },
  {
    key: 'AP',
    label: 'Andhra Pradesh',
  },
  {
    key: 'AR',
    label: 'Arunachal Pradesh',
  },
  {
    key: 'AS',
    label: 'Assam',
  },
  {
    key: 'BR',
    label: 'Bihar',
  },
  {
    key: 'CG',
    label: 'Chandigarh',
  },
  {
    key: 'CH',
    label: 'Chhattisgarh',
  },
  {
    key: 'DH',
    label: 'Dadra and Nagar Haveli',
  },
  {
    key: 'DD',
    label: 'Daman and Diu',
  },
  {
    key: 'DL',
    label: 'Delhi',
  },
  {
    key: 'GA',
    label: 'Goa',
  },
  {
    key: 'GJ',
    label: 'Gujarat',
  },
  {
    key: 'HR',
    label: 'Haryana',
  },
  {
    key: 'HP',
    label: 'Himachal Pradesh',
  },
  {
    key: 'JK',
    label: 'Jammu and Kashmir',
  },
  {
    key: 'JH',
    label: 'Jharkhand',
  },
  {
    key: 'KA',
    label: 'Karnataka',
  },
  {
    key: 'KL',
    label: 'Kerala',
  },
  {
    key: 'LD',
    label: 'Lakshadweep',
  },
  {
    key: 'MP',
    label: 'Madhya Pradesh',
  },
  {
    key: 'MH',
    label: 'Maharashtra',
  },
  {
    key: 'MN',
    label: 'Manipur',
  },
  {
    key: 'ML',
    label: 'Meghalaya',
  },
  {
    key: 'MZ',
    label: 'Mizoram',
  },
  {
    key: 'NL',
    label: 'Nagaland',
  },
  {
    key: 'OR',
    label: 'Odisha',
  },
  {
    key: 'PY',
    label: 'Puducherry',
  },
  {
    key: 'PB',
    label: 'Punjab',
  },
  {
    key: 'RJ',
    label: 'Rajasthan',
  },
  {
    key: 'SK',
    label: 'Sikkim',
  },
  {
    key: 'TN',
    label: 'Tamil Nadu',
  },
  {
    key: 'TS',
    label: 'Telangana',
  },
  {
    key: 'TR',
    label: 'Tripura',
  },
  {
    key: 'UP',
    label: 'Uttar Pradesh',
  },
  {
    key: 'UK',
    label: 'Uttarakhand',
  },
  {
    key: 'WB',
    label: 'West Bengal',
  },
];

export const categoryListSub = [
  {
    id: 1,
    name: 'Sharee',
    img: require('../Assets/Photos/shree.png'),
  },
  {
    id: 2,
    name: 'Kurti',
    img: require('../Assets/Photos/kurti.png'),
  },
  {
    id: 3,
    name: 'Electronics',
    img: require('../Assets/Photos/gadgest.png'),
  },
  {
    id: 4,
    name: 'kitchen',
    img: require('../Assets/Photos/kitchen1.png'),
  },
  {
    id: 5,
    name: 'Western',
    img: require('../Assets/Photos/western.png'),
  },
  {
    id: 6,
    name: 'Home Appliences',
    img: require('../Assets/Photos/homeAppliences.png'),
  },
  {
    id: 7,
    name: 'kids',
    img: require('../Assets/Photos/baby.png'),
  },
  {
    id: 8,
    name: 'medicine',
    img: require('../Assets/Photos/mediciean.png'),
  },
  {
    id: 9,
    name: 'men',
    img: require('../Assets/Photos/men.png'),
  },
  {
    id: 10,
    name: 'Kurti',
    img: require('../Assets/Photos/kurti.png'),
  },
  {
    id: 11,
    name: 'Sharee',
    img: require('../Assets/Photos/shree.png'),
  },
  {
    id: 12,
    name: 'Kurti',
    img: require('../Assets/Photos/mediciean.png'),
  },
  {
    id: 13,
    name: 'Sharee',
    img: require('../Assets/Photos/shree.png'),
  },
  {
    id: 14,
    name: 'Kurti',
    img: require('../Assets/Photos/kurti.png'),
  },
  {
    id: 15,
    name: 'Sharee',
    img: require('../Assets/Photos/shree.png'),
  },
  {
    id: 16,
    name: 'Kurti',
    img: require('../Assets/Photos/kurti.png'),
  },
];

export const CategoryList = [
  {
    id: 1,
    name: 'Popular',
    img: require('../Assets/Photos/popular.png'),
  },
  {
    id: 2,
    name: 'Fitness',
    img: require('../Assets/Photos/fitness.png'),
  },
  {
    id: 3,
    name: 'House Hold',
    img: require('../Assets/Photos/household.png'),
  },
  {
    id: 4,
    name: 'Personal Care',
    img: require('../Assets/Photos/personal.png'),
  },
  {
    id: 5,
    name: 'Kitchenware',
    img: require('../Assets/Photos/kitchen.png'),
  },
  {
    id: 6,
    name: 'Car Accessories',
    img: require('../Assets/Photos/car.png'),
  },
  {
    id: 7,
    name: 'Kitchenware',
    img: require('../Assets/Photos/kitchen.png'),
  },
  {
    id: 8,
    name: 'Car Accessories',
    img: require('../Assets/Photos/car.png'),
  },
];

export const fitness = [
  {
    id: 1,
    name: 'Yoga',
    img: require('../Assets/Photos/yoga.jpg'),
  },
  {
    id: 1,
    name: 'Gym',
    img: require('../Assets/Photos/gym.png'),
  },
];

export const household = [
  {
    id: 1,
    name: 'Crockery',
    img: require('../Assets/Photos/kitchen1.png'),
  },
  {
    id: 2,
    name: 'Hygiene',
    img: require('../Assets/Photos/hygin.png'),
  },
];

export const sharee = [
  {
    id: 1,
    name: 'Abc',
    img: 'https://th.bing.com/th/id/R.860d6bff2ab6f7d27298af9db1f28d55?rik=ZTrMj%2bvN1uHDug&riu=http%3a%2f%2fwww.pngimagesfree.com%2fPeople%2fSaree%2fSaree-2%2fSaree-PNG-For-Photoshop.png&ehk=gppYiPyHQnghZx5uEt4VvnfM43e%2bHGQgL5HQy8sDPYc%3d&risl=&pid=ImgRaw&r=0',
    price: '500',
  },
  {
    id: 2,
    name: 'Abc',
    img: 'https://th.bing.com/th/id/R.30f1c6567b1b3d4c910d94dc69bdb220?rik=XN5sz1tXit%2bEqA&riu=http%3a%2f%2fwww.pngimagesfree.com%2fPeople%2fSaree%2fBeautiful-saree-model-png-Transparent-image.png&ehk=Xz0zXtlsA70FfXPP%2ffBy3aZfcSp4bKDihXrfFu%2fO9zk%3d&risl=&pid=ImgRaw&r=0',
    price: '550',
  },
  {
    id: 3,
    name: 'Abc',
    img: 'https://th.bing.com/th/id/R.4e90969e5adf58406a7876e266de09fe?rik=rqyL7JBuscvdjQ&riu=http%3a%2f%2fwww.pngimagesfree.com%2fPeople%2fSaree%2fSaree-2%2fPink-saree-model-png_pngimagesfree.com.png&ehk=4iNGHDz1OviGLOl9pndP6VUn7r7dy4QP0ruO9Q7MJbM%3d&risl=&pid=ImgRaw&r=0',
    price: '550',
  },
  {
    id: 4,
    name: 'yxyz',
    img: 'http://www.pngimagesfree.com/People/Saree/Saree-2/Saree-PNG-HD_pngimagesfree.com.png',
    price: '550',
  },
  {
    id: 5,
    name: 'yxyz',
    img: 'http://www.pngimagesfree.com/People/Saree/Saree-2/Saree-Girl-PNG_pngimagesfree.com.png',
    price: '550',
  },
  {
    id: 6,
    name: 'yxyz',
    img: 'http://www.pngimagesfree.com/People/Saree/Saree-2/floral-georgette-designer-saree-PNG_pngimagesfree.com.png',
    price: '550',
  },
];

export const shareeSubcat = [
  {
    id: 1,
    name: 'Under 99',
    img: 'https://assetscdn1.paytm.com/images/catalog/view_item/295007/1554966901229.jpg?imwidth=414&impolicy=hq',
  },
  {
    id: 2,
    name: 'Under 299',
    img: 'https://assetscdn1.paytm.com/images/catalog/view_item/295009/1554966901931.jpg?imwidth=414&impolicy=hq',
  },
  {
    id: 4,
    name: 'Flat 80%',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBPzKJJj26lFyos3dNfNpSs6PyBafgg27XA&usqp=CAU',
  },
  {
    id: 5,
    name: 'Flat 80%',
    img: 'https://assetscdn1.paytm.com/images/catalog/view_item/295012/1554966901720.jpg?imwidth=414&impolicy=hq',
  },
  {
    id: 6,
    name: 'Anarkali',
    img: 'https://4.imimg.com/data4/NV/PT/MY-22811461/1myfashionsaree008-500x500.jpg',
  },
  {
    id: 10,
    name: 'New',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp-T7SEVQfNUqg8bFW-dcSxZsYQWiMxzge9K98el9AkF6l0ADiXx85u296GzvBna1BdU&usqp=CAU',
  },
  {
    id: 12,
    name: 'New',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp-T7SEVQfNUqg8bFW-dcSxZsYQWiMxzge9K98el9AkF6l0ADiXx85u296GzvBna1BdU&usqp=CAU',
  },
];

export const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: colors.AppDefaultColor,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: colors.AppDefaultColor,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: colors.AppDefaultColor,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: colors.AppDefaultColor,
  stepIndicatorLabelFinishedColor: colors.white,
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: colors.AppDefaultColor,
};

export const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Confirm Order',
];
export const Retunlabels = [
  'Cart',
  'Return Address',
  'Order Summary',
  'Payment Method',
  'Confirm Order',
];
export const track = [
  'Ordered 16 June',
  'Shipped 17 June',
  'Out For Delivery',
  'Arriving tommorow',
];

export const Sort = [
  {
    id: 1,
    Name: 'Relevance',
  },
  {
    id: 2,
    Name: 'New Arrivals',
  },
  {
    id: 3,
    Name: 'Price (High to Low)',
  },
  {
    id: 4,
    Name: 'Price (Low to High)',
  },
  {
    id: 5,
    Name: 'Ratings',
  },
  {
    id: 6,
    Name: 'Discounted',
  },
];
