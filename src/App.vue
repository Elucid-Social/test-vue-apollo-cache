<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import { inject } from 'vue'

  const cc = inject('cc')
</script>

<template>
  <div>
    <h1>Apollo cache test - {{ cc }}</h1>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>
