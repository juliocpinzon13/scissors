import Vue from 'vue'
import Router from 'vue-router'
import Scissors from '../components/Scissors/Scissors.vue'
import ClientHome from '../components/clientHome/clientHome.vue'
import ProfilePickerContainer from '../components/ProfilePickerContainer/ProfilePickerContainer.vue'
import StylistCalendar from '../components/StylistCalendar/StylistCalendar.vue'
import StylistHome from '../components/stylistHome/stylistHome.vue'

Vue.use(Router);

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Scissors
    },
    {
      path: '/profilePicker',
      name: 'Profile picker',
      component: ProfilePickerContainer
    },
    {
      path: '/clientHome',
      name: 'Client home',
      component: ClientHome
    },
    {
      path: '/stylistCalendar',
      name: 'Stylist calendar',
      component: StylistCalendar
    },
    {
      path: '/stylistHome',
      name: 'Stylist home',
      component: StylistHome
    }
  ]
})