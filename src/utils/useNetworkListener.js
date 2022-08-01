import { ref } from 'vue'

const useNetworkListener = () => {
  const isOnline = ref(navigator ? navigator.onLine : true)
  window.addEventListener('offline', function (e) {
    console.log('We are going offline.')
    isOnline.value = false
  })

  window.addEventListener('online', function (e) {
    console.log('We are going online.')
    isOnline.value = true
  })

  return { isOnline }
}

export { useNetworkListener }
