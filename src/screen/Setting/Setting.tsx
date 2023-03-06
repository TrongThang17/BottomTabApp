import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import CheckScreen from '../../../assets/Custom/CustomCheckScreen';
import {useDispatch} from 'react-redux';
import * as f from '../../redux/action/action';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
const Setting = () => {
  const [isCheckedHome, setIsCheckedHome] = useState(false);
  const [isCheckedUser, setIsCheckedUser] = useState(false);
  const [isCheckedBanana, setIsCheckedBanana] = useState(false);
  const [isCheckedApple, setIsCheckedApple] = useState(false);
  const [isCheckedAdmin, setIsCheckedAdmin] = useState(false);
  const [isCheckedContact, setIsCheckedContact] = useState(false);
  const [isCheckedLanguage, setIsCheckedLanguage] = useState(false);
  const [isCheckedVehicle, setIsCheckedVehicle] = useState(false);
  const [isCheckedSetting, setIsCheckedSetting] = useState(true);
  const [isCheckedAbout, setIsCheckedAbout] = useState(false);
  const [modalShowErr, setModalShowErr] = useState(false);
  const dispatch = useDispatch();
  const dataScreen = useSelector((state: any) => state.reducerChangeTab.data);
  const data: any = [];
  const onPressHome = useCallback(() => {
    isCheckedHome ? setIsCheckedHome(false) : setIsCheckedHome(true);
  }, [isCheckedHome]);
  const onPressUser = useCallback(() => {
    isCheckedUser ? setIsCheckedUser(false) : setIsCheckedUser(true);
  }, [isCheckedUser]);
  const onPressBanana = useCallback(() => {
    isCheckedBanana ? setIsCheckedBanana(false) : setIsCheckedBanana(true);
  }, [isCheckedBanana]);
  const onPressApple = useCallback(() => {
    isCheckedApple ? setIsCheckedApple(false) : setIsCheckedApple(true);
  }, [isCheckedApple]);
  const onPressAdmin = useCallback(() => {
    isCheckedAdmin ? setIsCheckedAdmin(false) : setIsCheckedAdmin(true);
  }, [isCheckedAdmin]);
  const onPressContact = useCallback(() => {
    isCheckedContact ? setIsCheckedContact(false) : setIsCheckedContact(true);
  }, [isCheckedContact]);
  const onPressLanguage = useCallback(() => {
    isCheckedLanguage
      ? setIsCheckedLanguage(false)
      : setIsCheckedLanguage(true);
  }, [isCheckedLanguage]);
  const onPressVehicle = useCallback(() => {
    isCheckedVehicle ? setIsCheckedVehicle(false) : setIsCheckedVehicle(true);
  }, [isCheckedVehicle]);
  const onPressSetting = useCallback(() => {
    isCheckedSetting ? setIsCheckedSetting(false) : setIsCheckedSetting(true);
  }, [isCheckedSetting]);
  const onPressAbout = useCallback(() => {
    isCheckedAbout ? setIsCheckedAbout(false) : setIsCheckedAbout(true);
  }, [isCheckedAbout]);

  const onPressOK = () => {
    data.length == 4
      ? [
          setModalShowErr(false),
          dispatch({
            type: f.SELECT_SCREEN,
            payload: {
              data,
            },
          }),
        ]
      : setModalShowErr(true);
  };

  useEffect(() => {
    let tab1: string, tab2: string, tab3: string, tab4: string;
    (tab1 = dataScreen[0]),
      (tab2 = dataScreen[1]),
      (tab3 = dataScreen[2]),
      (tab4 = dataScreen[3]),
      tab1 == 'Home'
        ? setIsCheckedHome(true)
        : tab1 == 'User'
        ? setIsCheckedUser(true)
        : tab1 == 'About'
        ? setIsCheckedAbout(true)
        : tab1 == 'Contact'
        ? setIsCheckedContact(true)
        : tab1 == 'Language'
        ? setIsCheckedLanguage(true)
        : tab1 == 'Vehicle'
        ? setIsCheckedVehicle(true)
        : tab1 == 'Admin'
        ? setIsCheckedAdmin(true)
        : tab1 == 'Apple'
        ? setIsCheckedApple(true)
        : tab1 == 'Banana'
        ? setIsCheckedBanana(true)
        : '';

    tab2 == 'Home'
      ? setIsCheckedHome(true)
      : tab2 == 'User'
      ? setIsCheckedUser(true)
      : tab2 == 'About'
      ? setIsCheckedAbout(true)
      : tab2 == 'Contact'
      ? setIsCheckedContact(true)
      : tab2 == 'Language'
      ? setIsCheckedLanguage(true)
      : tab2 == 'Vehicle'
      ? setIsCheckedVehicle(true)
      : tab2 == 'Admin'
      ? setIsCheckedAdmin(true)
      : tab2 == 'Apple'
      ? setIsCheckedApple(true)
      : tab2 == 'Banana'
      ? setIsCheckedBanana(true)
      : '';

    tab3 == 'Home'
      ? setIsCheckedHome(true)
      : tab3 == 'User'
      ? setIsCheckedUser(true)
      : tab3 == 'About'
      ? setIsCheckedAbout(true)
      : tab3 == 'Contact'
      ? setIsCheckedContact(true)
      : tab3 == 'Language'
      ? setIsCheckedLanguage(true)
      : tab3 == 'Vehicle'
      ? setIsCheckedVehicle(true)
      : tab3 == 'Admin'
      ? setIsCheckedAdmin(true)
      : tab3 == 'Apple'
      ? setIsCheckedApple(true)
      : tab3 == 'Banana'
      ? setIsCheckedBanana(true)
      : '';

    tab4 == 'Home'
      ? setIsCheckedHome(true)
      : tab4 == 'User'
      ? setIsCheckedUser(true)
      : tab4 == 'About'
      ? setIsCheckedAbout(true)
      : tab4 == 'Contact'
      ? setIsCheckedContact(true)
      : tab4 == 'Language'
      ? setIsCheckedLanguage(true)
      : tab4 == 'Vehicle'
      ? setIsCheckedVehicle(true)
      : tab4 == 'Admin'
      ? setIsCheckedAdmin(true)
      : tab4 == 'Apple'
      ? setIsCheckedApple(true)
      : tab4 == 'Banana'
      ? setIsCheckedBanana(true)
      : '';
  }, []);

  const onHidePopUpERR = useCallback(() => {
    setModalShowErr(false);
  }, []);

  useEffect(() => {
    isCheckedHome ? data.push('Home') : '';
    isCheckedUser ? data.push('User') : '';
    isCheckedAbout ? data.push('About') : '';
    isCheckedAdmin ? data.push('Admin') : '';
    isCheckedVehicle ? data.push('Vehicle') : '';
    isCheckedLanguage ? data.push('Language') : '';
    isCheckedApple ? data.push('Apple') : '';
    isCheckedContact ? data.push('Contact') : '';
    isCheckedBanana ? data.push('Banana') : '';
  }, [
    onPressHome,
    onPressAbout,
    onPressAdmin,
    onPressApple,
    onPressBanana,
    onPressContact,
    onPressLanguage,
    onPressSetting,
    onPressUser,
    onPressVehicle,
    onPressOK,
  ]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CheckScreen
        label="Home"
        isSelectdCheck={isCheckedHome}
        onPress={onPressHome}
      />
      <CheckScreen
        label="User"
        isSelectdCheck={isCheckedUser}
        onPress={onPressUser}
      />
      <CheckScreen
        label="About"
        isSelectdCheck={isCheckedAbout}
        onPress={onPressAbout}
      />
      <CheckScreen
        label="Admin"
        isSelectdCheck={isCheckedAdmin}
        onPress={onPressAdmin}
      />
      <CheckScreen
        label="Vehicle"
        isSelectdCheck={isCheckedVehicle}
        onPress={onPressVehicle}
      />
      <CheckScreen
        label="Language"
        isSelectdCheck={isCheckedLanguage}
        onPress={onPressLanguage}
      />
      <CheckScreen
        label="Apple"
        isSelectdCheck={isCheckedApple}
        onPress={onPressApple}
      />
      <CheckScreen
        label="Contact"
        isSelectdCheck={isCheckedContact}
        onPress={onPressContact}
      />
      <CheckScreen
        label="Banana"
        isSelectdCheck={isCheckedBanana}
        onPress={onPressBanana}
      />
      <CheckScreen label="Setting" isSelectdCheck={isCheckedSetting} />
      <View style={styles.viewFooter}>
        <TouchableOpacity style={styles.touchFooter} onPress={onPressOK}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={modalShowErr}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.popupShowErr}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '700',
              color: 'red',
            }}>
            Error !! Please choose 5 items
          </Text>
          <View style={styles.viewBtnPopupErr}>
            <TouchableOpacity
              style={styles.btnConfirm}
              onPress={onHidePopUpERR}>
              <Text style={styles.textButton}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 40,
    backgroundColor: 'pink',
    borderRadius: 50,
  },
  modalErr: {},
  popupShowErr: {
    width: 300,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  viewBtnPopupErr: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  btnConfirm: {
    backgroundColor: '#f2e9e9',
    borderRadius: 30,
    width: 90,
    height: 40,
    marginTop: 20,
  },
  textButton: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '600',
    color: 'red',
  },
});

export default Setting;
