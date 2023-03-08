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
let array: any = [];
let arrIndexFalse: any = [];
let arrIndexTrue: any = [];
let position1: any, position2: any;

const data = [
  {
    id: 1,
    screen: 'Home',
    tab: Home,
    icon: image.home,
  },
  {
    id: 2,
    screen: 'Contact',
    tab: Contact,
    icon: image.contact,
  },
  {
    id: 3,
    screen: 'User',
    tab: User,
    icon: image.user,
  },
  {
    id: 4,
    screen: 'Admin',
    tab: Admin,
    icon: image.admin,
  },
  {
    id: 5,
    screen: 'About',
    tab: About,
    icon: image.about,
  },
  {
    id: 6,
    screen: 'Apple',
    tab: Apple,
    icon: image.home,
  },
  {
    id: 7,
    screen: 'Banana',
    tab: Banana,
    icon: image.contact,
  },
  {
    id: 8,
    screen: 'Language',
    tab: Language,
    icon: image.user,
  },
  {
    id: 9,
    screen: 'Vehicle',
    tab: Vehicle,
    icon: image.admin,
  },
  {
    id: 10,
    screen: 'Setting',

    icon: image.setting,
  },
];
const data1 = [
  {
    id: 1,
    screen: 'Home',
    tab: Home,
    icon: image.home,
  },
  {
    id: 2,
    screen: 'Contact',
    tab: Contact,
    icon: image.contact,
  },
  {
    id: 3,
    screen: 'User',
    tab: User,
    icon: image.user,
  },
  {
    id: 4,
    screen: 'Admin',
    tab: Admin,
    icon: image.admin,
  },
  {
    id: 5,
    screen: 'About',
    tab: About,
    icon: image.about,
  },
  {
    id: 6,
    screen: 'Apple',
    tab: Apple,
    icon: image.home,
  },
  {
    id: 7,
    screen: 'Banana',
    tab: Banana,
    icon: image.contact,
  },
  {
    id: 8,
    screen: 'Language',
    tab: Language,
    icon: image.user,
  },
  {
    id: 9,
    screen: 'Vehicle',
    tab: Vehicle,
    icon: image.admin,
  },
  {
    id: 10,
    screen: 'Setting',

    icon: image.setting,
  },
];
let dataScreen: any = [];
const Setting = () => {
  const [selectedCheck, setSelectedCheck]: any = useState(new Map());
  // const [unCheck, setUnCheck]: any = useState(new Map());
  // const [allDataCheckbox, setAllDataCheckbox]: any = useState([]);
  const [modalShowErr, setModalShowErr] = useState(false);
  const dispatch = useDispatch();
  const dataRedux = useSelector((state: any) => state.reducerChangeTab.data1);

  let arr: any = data;

  useEffect(() => {
    const newSelectedCheck = new Map(selectedCheck);
    data1.forEach((el: any) => {
      dataRedux.forEach((el1: any) => {
        if (el.screen == el1.screen) {
          newSelectedCheck.set(el.id, !selectedCheck.get(el.id));
          setSelectedCheck(newSelectedCheck);
          array.push(el);
        }
      });
    });
  }, [dataRedux]);

  const onSelectCheck = (id: any) => {
    const newSelectedCheck = new Map(selectedCheck);
    newSelectedCheck.set(id, !selectedCheck.get(id));

    if (newSelectedCheck.get(id) == false) {
      arr.forEach((element: any) => {
        if (element.id == id) {
          arrIndexFalse.push(element);

          position1 = arr.indexOf(arrIndexFalse[0]);
          console.log('first', position1);
        }
      });
    }
    if (newSelectedCheck.get(id) == true) {
      arr.forEach((element: any) => {
        if (element.id == id) {
          arrIndexTrue.push(element);

          arr.forEach((element: any) => {
            arrIndexTrue.forEach((el1: any) => {
              if (element.id == el1.id) {
                let temp: any = '';
                position2 = arr.indexOf(el1);
                console.log('second', position2);

                temp = arr[arr.indexOf(arrIndexFalse[0])];
                arr[arr.indexOf(arrIndexFalse[0])] = arr[position2];
                arr[position2] = temp;

                console.log('effect temp', temp);
                console.log('effect 11', arr[position1]);
                console.log('effect 22', arr[position2]);
                console.log('alo', arr.indexOf(arrIndexFalse[0]));
                arrIndexFalse.splice(position1, 1);

                arrIndexTrue.splice(position1, 1);
              }
            });
          });
        }
      });
    }
    let dataTemp: any = [];
    arr.forEach((element: any) => {
      if (newSelectedCheck.get(element.id) == true) {
        console.log('resutl : ', element);
        dataTemp.push(element);
      }
    });
    console.log('dtaaTem', dataTemp);
    dataScreen = dataTemp;

    if (newSelectedCheck.get(id) == false) {
      newSelectedCheck.delete(id);
      array.forEach((el: any) => {
        if (el.id == id) {
          el;
        }
      });
    }

    setSelectedCheck(newSelectedCheck);
  };

  console.log('arrTest', dataScreen.length);

  const onPressOK = () => {
    dataScreen.length == 5
      ? [
          setModalShowErr(false),
          dispatch({
            type: f.SELECT_SCREEN,
            payload: {
              dataScreen,
            },
          }),
        ]
      : setModalShowErr(true);
    selectedCheck.forEach((el: any) => {
      console.log(!selectedCheck.get(el.screen));
    });
    // console.log(selectedCheck);
  };

  const onHidePopUpERR = useCallback(() => {
    setModalShowErr(false);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        style={{ height: 400, width: '100%' }}
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
