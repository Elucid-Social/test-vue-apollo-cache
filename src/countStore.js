import localforage from 'localforage'
import { defineStore } from 'pinia'
import Vue, { ref } from 'vue'

const STORE_NAME = 'counter'

var store = localforage.createInstance({
  name: 'counterStore',
  storeName: STORE_NAME
})

export const useCountStore = defineStore(
  STORE_NAME,
  () => {
    const total = ref(0)
    //const syncStatus = ref({})

    const increment = () => {
      total.value++
      // if (!syncStatus.value.total)
      //   Vue.set(syncStatus.value, 'total', { value: 0 })
      // syncStatus.value.total.value++
    }
    const decrement = () => {
      total.value--
      // if (!syncStatus.value.total)
      //   Vue.set(syncStatus.value, 'total', { value: 0 })
      // syncStatus.value.total.value--
    }
    return { total, increment, decrement }
  },
  {
    persist: {
      key: STORE_NAME,
      storage: store,
      debug: true
    }
  }
)
