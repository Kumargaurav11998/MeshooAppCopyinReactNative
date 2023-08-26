import React, {useState} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {Platform, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../Utils/Colors';
import {Icon} from '@rneui/base';
import {width} from '../Helper/Constant';

function SliderCompoent() {
  const [multiSliderValue, setMultiSliderValue] = useState([0, 10000]);

  const multiSliderValuesChange = values => setMultiSliderValue(values);
  return (
    <SafeAreaView style={{alignSelf: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: width - 50,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 18, color: colors.AppDefaultColor}}>
          {multiSliderValue[0]}{' '}
        </Text>
        <Text style={{fontSize: 18, color: colors.AppDefaultColor}}>
          {multiSliderValue[1]}
        </Text>
      </View>

      <MultiSlider
        markerStyle={{
          ...Platform.select({
            ios: {
              height: 30,
              width: 30,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 1,
              shadowOpacity: 0.1,
            },
            android: {
              height: 30,
              width: 30,
              borderRadius: 50,
              backgroundColor: colors.AppDefaultColor,
            },
          }),
        }}
        pressedMarkerStyle={{
          ...Platform.select({
            android: {
              height: 30,
              width: 30,
              borderRadius: 20,
              backgroundColor: colors.Brikcolor,
            },
          }),
        }}
        selectedStyle={{
          backgroundColor: colors.AppDefaultColor,
        }}
        trackStyle={{
          backgroundColor: colors.txtgrey,
        }}
        touchDimensions={{
          height: 40,
          width: 40,
          borderRadius: 20,
          slipDisplacement: 40,
        }}
        values={[multiSliderValue[0], multiSliderValue[1]]}
        sliderLength={width - 50}
        onValuesChange={multiSliderValuesChange}
        min={0}
        max={10000}
        allowOverlap={false}
        minMarkerOverlapDistance={10}
        containerStyle={{alignSelf: 'center', marginTop: '2%'}}
      />
    </SafeAreaView>
  );
}

export default SliderCompoent;
