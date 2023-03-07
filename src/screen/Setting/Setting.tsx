import { View, TouchableOpacity, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import CheckScreen from '../../../assets/custom/CustomCheckScreen';
import ItemCheckBoxScreen from '../../../assets/custom/ItemCheckBoxScreen';
import { useDispatch } from 'react-redux';
import * as f from '../../redux/action/action';
import { useSelector } from 'react-redux';
import Home from '../home/Home';
import About from '../about/About';
import Admin from '../admin/Admin';
import Apple from '../apple/Apple';
import Banana from '../banana/Banana';
import Contact from '../contact/Contact';
import Language from '../language/Language';
import User from '../user/User';
import Vehicle from '../vehicle/Vehicle';
import Modal from 'react-native-modal';
import { image } from '../../../assets/img/imgages';
const Setting = () => {
  // const [isCheckedHome, setIsCheckedHome] = useState(false);
  // const [isCheckedUser, setIsCheckedUser] = useState(false);
  // const [isCheckedBanana, setIsCheckedBanana] = useState(false);
  // const [isCheckedApple, setIsCheckedApple] = useState(false);
  // const [isCheckedAdmin, setIsCheckedAdmin] = useState(false);
  // const [isCheckedContact, setIsCheckedContact] = useState(false);
  // const [isCheckedLanguage, setIsCheckedLanguage] = useState(false);
  // const [isCheckedVehicle, setIsCheckedVehicle] = useState(false);
  // const [isCheckedSetting, setIsCheckedSetting] = useState(true);
  // const [isCheckedAbout, setIsCheckedAbout] = useState(false);
  const [selectedCheck, setSelectedCheck]: any = useState(new Map());
  const [allDataCheckbox, setAllDataCheckbox]: any = useState([]);
  const [modalShowErr, setModalShowErr] = useState(false);
  const dispatch = useDispatch();
  const dataScreen = useSelector((state: any) => state.reducerChangeTab.data);
  const dataScreen1 = useSelector((state: any) => state.reducerChangeTab.data1);
  const inf = useSelector((state: any) => state.reducerChangeTab.data);
  const data1 = [
    {
      id: 1,
      screen: 'Home',

      icon: image.home,
    },
    {
      id: 2,
      screen: 'Contact',

      icon: image.contact,
    },
    {
      id: 3,
      screen: 'User',

      icon: image.user,
    },
    {
      id: 4,
      screen: 'Admin',

      icon: image.admin,
    },
    {
      id: 5,
      screen: 'Setting',

      icon: image.setting,
    },
    {
      id: 6,
      screen: 'Apple',

      icon: image.home,
    },
    {
      id: 7,
      screen: 'Banana',

      icon: image.contact,
    },
    {
      id: 8,
      screen: 'Language',

      icon: image.user,
    },
    {
      id: 9,
      screen: 'Vehicle',

      icon: image.admin,
    },
    {
      id: 10,
      screen: 'Setting',

      icon: image.setting,
    },
  ];

  // const onSelectCheck = useCallback(
  //   (id: any) => {
  //     const newSelected = new Map(selectedCheck);
  //     newSelected.set(id, !selectedCheck.get(id));
  //     setSelectedCheck(newSelected);
  //   },
  //   [selectedCheck]
  // );
  const onSelectCheck = (id: any) => {
    const newSelectedCheck = new Map(selectedCheck);
    let arr: any = data1;
    console.log(id)
    newSelectedCheck.set(id, !selectedCheck.get(id));
    setSelectedCheck(newSelectedCheck);
    arr.forEach((element: any) => {
      if (newSelectedCheck.get(element.id) == true) {
        arr.push(element.screen);
      }
    });
    setAllDataCheckbox(arr);
  };

  // const onPressHome = useCallback(() => {
  //   isCheckedHome ? setIsCheckedHome(false) : setIsCheckedHome(true);
  // }, [isCheckedHome]);
  // const onPressUser = useCallback(() => {
  //   isCheckedUser ? setIsCheckedUser(false) : setIsCheckedUser(true);
  // }, [isCheckedUser]);
  // const onPressBanana = useCallback(() => {
  //   isCheckedBanana ? setIsCheckedBanana(false) : setIsCheckedBanana(true);
  // }, [isCheckedBanana]);
  // const onPressApple = useCallback(() => {
  //   isCheckedApple ? setIsCheckedApple(false) : setIsCheckedApple(true);
  // }, [isCheckedApple]);
  // const onPressAdmin = useCallback(() => {
  //   isCheckedAdmin ? setIsCheckedAdmin(false) : setIsCheckedAdmin(true);
  // }, [isCheckedAdmin]);
  // const onPressContact = useCallback(() => {
  //   isCheckedContact ? setIsCheckedContact(false) : setIsCheckedContact(true);
  // }, [isCheckedContact]);
  // const onPressLanguage = useCallback(() => {
  //   isCheckedLanguage ? setIsCheckedLanguage(false) : setIsCheckedLanguage(true);
  // }, [isCheckedLanguage]);
  // const onPressVehicle = useCallback(() => {
  //   isCheckedVehicle ? setIsCheckedVehicle(false) : setIsCheckedVehicle(true);
  // }, [isCheckedVehicle]);
  // const onPressSetting = useCallback(() => {
  //   isCheckedSetting ? setIsCheckedSetting(false) : setIsCheckedSetting(true);
  // }, [isCheckedSetting]);
  // const onPressAbout = useCallback(() => {
  //   isCheckedAbout ? setIsCheckedAbout(false) : setIsCheckedAbout(true);
  // }, [isCheckedAbout]);

  const onPressOK = () => {
    // data.length == 4
    //   ? [
    //       setModalShowErr(false),
    //       dispatch({
    //         type: f.SELECT_SCREEN,
    //         payload: {
    //           data,
    //         },
    //       }),
    //     ]
    //   : setModalShowErr(true);
    // selectedCheck.forEach((el: any) => {
    //   console.log(!selectedCheck.get(el.screen));
    // });
    console.log(selectedCheck);
  };

  // useEffect(() => {
  //   let tab1: string, tab2: string, tab3: string, tab4: string;
  //   (tab1 = dataScreen[0]),
  //     (tab2 = dataScreen[1]),
  //     (tab3 = dataScreen[2]),
  //     (tab4 = dataScreen[3]),
  //     tab1 == 'Home'
  //       ? setIsCheckedHome(true)
  //       : tab1 == 'User'
  //       ? setIsCheckedUser(true)
  //       : tab1 == 'About'
  //       ? setIsCheckedAbout(true)
  //       : tab1 == 'Contact'
  //       ? setIsCheckedContact(true)
  //       : tab1 == 'Language'
  //       ? setIsCheckedLanguage(true)
  //       : tab1 == 'Vehicle'
  //       ? setIsCheckedVehicle(true)
  //       : tab1 == 'Admin'
  //       ? setIsCheckedAdmin(true)
  //       : tab1 == 'Apple'
  //       ? setIsCheckedApple(true)
  //       : tab1 == 'Banana'
  //       ? setIsCheckedBanana(true)
  //       : '';

  //   tab2 == 'Home'
  //     ? setIsCheckedHome(true)
  //     : tab2 == 'User'
  //     ? setIsCheckedUser(true)
  //     : tab2 == 'About'
  //     ? setIsCheckedAbout(true)
  //     : tab2 == 'Contact'
  //     ? setIsCheckedContact(true)
  //     : tab2 == 'Language'
  //     ? setIsCheckedLanguage(true)
  //     : tab2 == 'Vehicle'
  //     ? setIsCheckedVehicle(true)
  //     : tab2 == 'Admin'
  //     ? setIsCheckedAdmin(true)
  //     : tab2 == 'Apple'
  //     ? setIsCheckedApple(true)
  //     : tab2 == 'Banana'
  //     ? setIsCheckedBanana(true)
  //     : '';

  //   tab3 == 'Home'
  //     ? setIsCheckedHome(true)
  //     : tab3 == 'User'
  //     ? setIsCheckedUser(true)
  //     : tab3 == 'About'
  //     ? setIsCheckedAbout(true)
  //     : tab3 == 'Contact'
  //     ? setIsCheckedContact(true)
  //     : tab3 == 'Language'
  //     ? setIsCheckedLanguage(true)
  //     : tab3 == 'Vehicle'
  //     ? setIsCheckedVehicle(true)
  //     : tab3 == 'Admin'
  //     ? setIsCheckedAdmin(true)
  //     : tab3 == 'Apple'
  //     ? setIsCheckedApple(true)
  //     : tab3 == 'Banana'
  //     ? setIsCheckedBanana(true)
  //     : '';

  //   tab4 == 'Home'
  //     ? setIsCheckedHome(true)
  //     : tab4 == 'User'
  //     ? setIsCheckedUser(true)
  //     : tab4 == 'About'
  //     ? setIsCheckedAbout(true)
  //     : tab4 == 'Contact'
  //     ? setIsCheckedContact(true)
  //     : tab4 == 'Language'
  //     ? setIsCheckedLanguage(true)
  //     : tab4 == 'Vehicle'
  //     ? setIsCheckedVehicle(true)
  //     : tab4 == 'Admin'
  //     ? setIsCheckedAdmin(true)
  //     : tab4 == 'Apple'
  //     ? setIsCheckedApple(true)
  //     : tab4 == 'Banana'
  //     ? setIsCheckedBanana(true)
  //     : '';
  // }, []);

  const onHidePopUpERR = useCallback(() => {
    setModalShowErr(false);
  }, []);

  // useEffect(() => {
  //   isCheckedHome ? data.push('Home') : '';
  //   isCheckedUser ? data.push('User') : '';
  //   isCheckedAbout ? data.push('About') : '';
  //   isCheckedAdmin ? data.push('Admin') : '';
  //   isCheckedVehicle ? data.push('Vehicle') : '';
  //   isCheckedLanguage ? data.push('Language') : '';
  //   isCheckedApple ? data.push('Apple') : '';
  //   isCheckedContact ? data.push('Contact') : '';
  //   isCheckedBanana ? data.push('Banana') : '';
  // }, [
  //   onPressHome,
  //   onPressAbout,
  //   onPressAdmin,
  //   onPressApple,
  //   onPressBanana,
  //   onPressContact,
  //   onPressLanguage,
  //   onPressSetting,
  //   onPressUser,
  //   onPressVehicle,
  //   onPressOK,
  // ]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        style={{ height: 400, width: '100%',paddingTop:50 }}
        data={data1}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <ItemCheckBoxScreen
            id={item.id}
            screen={item.screen}
            selectedCheck={!!selectedCheck.get(item.id)}
            onPress={() => onSelectCheck(item.id)}
          />
        )}
        extraData={selectedCheck}
      />
      <View style={styles.viewFooter}>
        <TouchableOpacity style={styles.touchFooter} onPress={onPressOK}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={modalShowErr}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <View style={styles.popupShowErr}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '700',
              color: 'red',
            }}
          >
            Error !! Please choose 5 items
          </Text>
          <View style={styles.viewBtnPopupErr}>
            <TouchableOpacity style={styles.btnConfirm} onPress={onHidePopUpERR}>
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
