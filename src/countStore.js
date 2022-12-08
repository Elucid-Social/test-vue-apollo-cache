import { defineStore } from 'pinia'
import Vue from 'vue'

export const useCountStore = defineStore('count', {
  state: () => ({
    total: 0,
    syncStatus: {}
  }),
  getters: {
    totalValue: (state) => state.syncStatus.total
  },
  actions: {
    increment() {
      this.total ++ 
      if(!this.syncStatus.total) Vue.set(this.syncStatus, 'total', {value: 0})
      this.syncStatus.total.value++
    },
    decrement() {
      this.total --
      if(!this.syncStatus.total) Vue.set(this.syncStatus, 'total', {value: 0})
      this.syncStatus.total.value--
    }
  },
  persist: { enabled: true }
})
