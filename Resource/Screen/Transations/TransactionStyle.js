import {StyleSheet} from 'react-native';
import {colors} from '../../Utils/Colors';
export const styles = StyleSheet.create({
  conatner: {
    flex: 1,
    backgroundColor: colors.white,
  },
  avatarconatner: {
    alignSelf: 'center',
    marginTop: '15%',
  },
  NopaymentMessage: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    width: '80%',
    alignSelf: 'center',
    marginTop: '5%',
  },
});
