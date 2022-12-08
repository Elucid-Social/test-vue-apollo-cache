<template>
  <div>
    <div>Total: {{ store.total }}</div>
    <!-- <div>Sync status: {{ store.syncStatus.total }}</div> -->
    <button @click="store.increment()">Increment</button>
    <button @click="store.decrement()">Decrement</button>
  </div>
</template>
<script setup>
  import { useCountStore } from '../countStore'
  const store = useCountStore()
</script>
