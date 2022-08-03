<template>
  <div>
    <ul>
      <li v-for="fetchPolicy in fetchPolicyOptions" :key="fetchPolicy">
        <span v-if="fetchPolicy === fetchPolicySelected">&#9745;</span>
        <span v-else>&#9744;</span>
        {{ fetchPolicy }}
      </li>
    </ul>
    <ul>
      <li v-for="code in codeList" :key="code" @click="variables.code = code">
        <span v-if="variables.code === code">&#9745;</span>
        <span v-else>&#9744;</span>
        {{ code }}
      </li>
    </ul>

    <!-- Loading -->
    <div v-if="loading && !result" class="loading apollo">Loading...</div>

    <!-- Error -->
    <div v-else-if="error" class="error apollo">
      An error occurred
      <pre>{{ error }}</pre>
    </div>

    <!-- Result -->
    <div v-else-if="result" class="result apollo">
      <div v-if="loading">Refreshing...</div>
      <pre>{{ result.country }}</pre>
    </div>

    <!-- No result -->
    <div v-else-if="!isOnline" class="no-result apollo">
      You are offline and the data you are searching is not cached.
    </div>

    <!-- No result -->
    <div v-else class="no-result apollo">No result :(</div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { useNetworkListener } from '@/utils/useNetworkListener'
  import { useQuery } from '@vue/apollo-composable'
  import { gql } from '@apollo/client/core'
  const { isOnline } = useNetworkListener()

  const codeList = ref(['BR', 'ES', 'PT', 'IT', 'FR', 'GR', 'UK', 'CA'])

  const fetchPolicyOptions = ref([
    //'network-only',
    'cache-and-network',
    'cache-only'
  ])
  const fetchPolicySelected = computed(
    () => fetchPolicyOptions.value[isOnline.value ? 0 : 1]
  )
  const query = gql`
    query Country($code: ID!) {
      country(code: $code) {
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
  `
  const variables = ref({ code: codeList.value[0] })
  const { result, error, loading } = useQuery(query, variables)
</script>
