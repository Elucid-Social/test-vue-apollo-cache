import { defineStore } from 'pinia'

export const useCountStore = defineStore(
  'count',
  {
    state: () => ({
      total: 0
    }),
    actions: {
      increment() {
        this.total++
      },
      decrement() {
        this.total--
      }
    }
  },
  { persist: { enabled: true } }
)
