import Vue from 'vue'
import './style.css'
import App from './App.vue'
import { apolloClient } from './apollo'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app')
