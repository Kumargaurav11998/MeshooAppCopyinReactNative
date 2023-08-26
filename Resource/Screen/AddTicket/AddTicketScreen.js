import {Avatar, Icon} from '@rneui/base';
import React, {useLayoutEffect, useState} from 'react';
import {View} from 'react-native';
import {Pressable, SafeAreaView, Text} from 'react-native';
import TicketCategoryDropDown from '../../Component/TicketCategoryDrpdown';
import {TicketCategory} from '../../Helper/JsonData';
import {colors} from '../../Utils/Colors';
import {styles} from './AddTicketStyle';
import {TextInput} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import TouchComponent from '../../Component/TouchComponent';
import {fontSize, radious} from '../../Utils/Size';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import LoginCompoent from '../../Component/LoginComponent';
import {HelpCenterAction} from '../../Action/HelpCenter';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import Toast from 'react-native-toast-message';
import {dataSource} from '../../Helper/Constant';
function AddTicketScreen(props) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => props.navigation.pop()}>
          <Avatar
            size={35}
            icon={{
              name: 'left',
              type: 'antdesign',
              color: colors.white,
            }}
            containerStyle={{marginTop: '5%'}}
          />
        </Pressable>
      ),
    });
  }, [props.navigation]);

  const [isSubject, SetSubject] = useState('');
  const [isIMG, setisIMG] = useState();
  const [isCategory, setCategory] = useState('');
  const [isDescription, setDescription] = useState('');
  const [spinner, setspinner] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const dispatch = useDispatch();

  //---------------------Select image ---------------------------//

  const selectgalary = async () => {
    var options = {};
    const result = await launchImageLibrary(options);

    if (result.assets) {
      setisIMG(result);
    }
  };

  //-------------------------------Add Ticket -------------------------//

  const AddSupportTicket = () => {
    // console.log(isCategory);
    // return false;
    if (userdetails) {
      if (userdetails.length > 0) {
        setspinner(true);
        let Data = new FormData();
        Data.append(
          'ticket_no',
          Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
        );
        Data.append('category', isCategory);
        Data.append('subject', isSubject);
        Data.append('description', isDescription);
        {
          isIMG
            ? Data.append('attachment', {
                uri: isIMG.assets[0].uri,
                name: isIMG.assets[0].fileName,
                type: isIMG.assets[0].type,
              })
            : Data.append('attachment', '');
        }

        Data.append('date', moment().format('YYYY-MM-DD hh:mm:ss'));
        Data.append('user_id', userdetails[0].id);
        dispatch(HelpCenterAction.AddSupportTicket(Data)).then(async data => {
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
              props.navigation.popToTop();
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
        });
      } else {
        setIsBottomSheetVisible(true);
      }
    } else {
      setIsBottomSheetVisible(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.ViewStyle, {marginTop: '0%'}]}>
        <Text style={[styles.labeltxt]}>Category</Text>
        <TicketCategoryDropDown
          data={TicketCategory}
          GetValue={v => setCategory(v)}
        />
      </View>
      <View style={[styles.ViewStyle]}>
        <Text style={[styles.labeltxt]}>Subject</Text>
        <TextInput
          mode="outlined"
          label="Subject"
          value={isSubject}
          placeholder="Enter Subject"
          onChangeText={text => SetSubject(text)}
          selectionColor={colors.txtgrey}
          style={styles.txtinpute}
          outlineColor={colors.Brikcolor}
          activeOutlineColor={colors.AppDefaultColor}
          placeholderTextColor={colors.grey}
        />
      </View>

      <View style={[styles.ViewStyle]}>
        <Text style={[styles.labeltxt]}>Description</Text>
        <TextInput
          mode="outlined"
          label="Description"
          value={isDescription}
          placeholder="Enter detail Description"
          onChangeText={text => setDescription(text)}
          selectionColor={colors.txtgrey}
          style={styles.txtinputeDes}
          outlineColor={colors.Brikcolor}
          activeOutlineColor={colors.AppDefaultColor}
          placeholderTextColor={colors.grey}
          textAlignVertical={'top'}
          multiline={true}
        />
      </View>

      <Pressable
        onPress={() => selectgalary()}
        style={[styles.slectscreensshotview]}>
        <Text
          style={[
            styles.labeltxt,
            {
              marginTop: 0,
              marginHorizontal: 5,
              color: isIMG ? colors.AppDefaultColor : colors.black,
            },
          ]}>
          Select Screenshot
        </Text>
        <Icon
          name={isIMG ? 'checkmark-done' : 'select1'}
          type={isIMG ? 'ionicon' : 'antdesign'}
          size={16}
          color={isIMG ? colors.AppDefaultColor : colors.black}
          style={{marginTop: 3}}
        />
      </Pressable>

      <TouchComponent
        backgroundColor={colors.AppDefaultColor}
        title="Submit"
        marginTop="10%"
        paddingVertical="4%"
        width="90%"
        alignSelf="center"
        borderRadius={radious.radiousfive}
        titlecolor={colors.white}
        fontSize={fontSize.lable}
        press={() => {
          AddSupportTicket();
        }}
      />

      {isBottomSheetVisible && (
        <LoginCompoent
          isLogin={true}
          GetisLogin={c => setIsBottomSheetVisible(c)}
        />
      )}
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

export default AddTicketScreen;
