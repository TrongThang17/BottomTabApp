import Home from '../../screen/home/Home';
import User from '../../screen/user/User';
import Contact from '../../screen/contact/Contact';
import Admin from '../../screen/admin/Admin';
import Setting from '../../screen/setting/Setting';
import NavHome from '../../../tabnavigation/NavHome';
import { image } from '../../../assets/img/imgages';
const initScreen = {
  // data: [
  //   {
  //     id: 5,
  //     screen: 'Setting',
  //     tab: Setting,
  //     icon: image.setting,
  //   },
  // ],
  data1: [
    {
      id: 1,
      screen: 'Home',
      tab: NavHome,
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
      screen: 'Setting',
      tab: Setting,
      icon: image.setting,
    },
  ],
};

export default initScreen;
