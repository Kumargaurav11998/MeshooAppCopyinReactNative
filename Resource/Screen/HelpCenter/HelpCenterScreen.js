import {Avatar} from '@rneui/base';
import moment from 'moment';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {SafeAreaView, View, Text, Pressable, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {HelpCenterAction} from '../../Action/HelpCenter';
import TouchComponent from '../../Component/TouchComponent';
import {TicketHistory} from '../../Helper/JsonData';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
import {styles} from './HelpCenterStyle';

function HelpCenterScreen(props) {
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const dispatch = useDispatch();
  const [isTicketList, SetTicketList] = useState([]);

  //---------------------------Use LAyout Effect hook ------------------------------------//
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

    if (userdetails) {
      if (userdetails.length > 0) {
        GetAllTickets(userdetails[0].id);
      }
    }
  }, [props.navigation]);

  //---------------------------Get Tickets------------------------------------//

  const GetAllTickets = id => {
    dispatch(HelpCenterAction.GetSupportTicket(id)).then(async data => {
      console.log(data);
      if (data) {
        if (data.length > 0) {
          SetTicketList(data);
        }
      }
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        data={isTicketList}
        ListHeaderComponent={
          <View style={[styles.justifyWith, styles.hlistheader]}>
            <Text style={[styles.TicketHistorytxtx]}>Ticket History</Text>
            <TouchComponent
              title="New Ticket"
              backgroundColor={colors.AppDefaultColor}
              titlecolor={colors.white}
              fontSize={fontSize.lable}
              borderRadius={radious.radiousfive}
              paddingVertical={'2.5%'}
              paddingHorizontal={'4%'}
              press={() => {
                props.navigation.push('AddTicketScreen');
              }}
            />
          </View>
        }
        renderItem={({item}) => {
          return (
            <Pressable style={[styles.cardview]}>
              <View style={[styles.justifyWith]}>
                <Text style={[styles.Labeltxt]}>Ticket Id</Text>
                <Text style={[styles.txt]}>{item.ticket_no}</Text>
              </View>
              <View style={[styles.justifyWith]}>
                <Text style={[styles.Labeltxt]}>Subject</Text>
                <Text style={[styles.txt]}>{item.subject}</Text>
              </View>
              <View style={[styles.justifyWith]}>
                <Text style={[styles.Labeltxt]}>Date</Text>
                <Text style={[styles.txt]}>
                  {moment(item.date).format('DD-MM-YYYY')}
                </Text>
              </View>
              <View style={[styles.justifyWith]}>
                <Text style={[styles.Labeltxt]}>Status</Text>
                <Text
                  style={[
                    styles.txt,
                    {
                      color:
                        item.Status == 'In-Progress'
                          ? colors.ratingback
                          : colors.Brikcolor,
                    },
                  ]}>
                  {item.status}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}
export default HelpCenterScreen;
