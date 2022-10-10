import Vue, { provide } from 'vue'
import './style.css'
import App from './App.vue'
import { createClient } from './apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
// With no TOP LEVEL AWAIT support
// createProvider().then((apolloProvider) => {
//   new Vue({
//     apolloProvider,
//     render: (h) => h(App)
//   }).$mount('#app')
// })

import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(piniaPersist)

const apolloClient = await createClient()

const app = new Vue({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  beforeMount() {
    provide('cc', this.$el.attributes['data-cc'].value)
  },
  pinia,
  render: (h) => h(App)
})
app.$mount('#app')
