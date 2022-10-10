<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import CounterButtons from './components/CounterButtons.vue'
  import { inject } from 'vue'

  const cc = inject('cc')
</script>

<template>
  <div>
    <CounterButtons />
    <h1>Apollo cache test - {{ cc }}</h1>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>
