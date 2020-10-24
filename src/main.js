import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import router from './router'

import ProfilePicker from './components/ProfilePicker/ProfilePicker.vue';
import ProfilePickerContainer from './components/ProfilePickerContainer/ProfilePickerContainer.vue';
import Scissors from './components/Scissors/Scissors.vue';
import pricesList from './components/pricesList/pricesList.vue';

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.component('profile-picker', ProfilePicker);
Vue.component('profile-picker-container', ProfilePickerContainer);
Vue.component('scissors', Scissors);
Vue.component('prices-list', pricesList);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
