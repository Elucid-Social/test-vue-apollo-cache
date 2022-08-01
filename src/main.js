import Vue from 'vue'
import './style.css'
import App from './App.vue'
import { createProvider } from './apollo'

// With no TOP LEVEL AWAIT support
// createProvider().then((apolloProvider) => {
//   new Vue({
//     apolloProvider,
//     render: (h) => h(App)
//   }).$mount('#app')
// })

new Vue({
  apolloProvider: await createProvider(),
  render: (h) => h(App)
}).$mount('#app')
