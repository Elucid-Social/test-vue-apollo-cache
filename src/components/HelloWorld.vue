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
      <li v-for="code in codeList" :key="code" @click="selectedCode = code">
        <span v-if="selectedCode === code">&#9745;</span>
        <span v-else>&#9744;</span>
        {{ code }}
      </li>
    </ul>
    <ApolloQuery
      :fetch-policy="fetchPolicySelected"
      :query="
        (gql) => gql`
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
      "
      :variables="{ code: selectedCode }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading && !data" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">
          An error occurred
          <pre>{{ error }}</pre>
        </div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <div v-if="loading">Refreshing...</div>
          <pre>{{ data.country }}</pre>
        </div>

        <!-- No result -->
        <div v-else-if="!isOnline" class="no-result apollo">
          You are offline and the data you are searching is not cached.
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { useNetworkListener } from '@/utils/useNetworkListener'
  const { isOnline } = useNetworkListener()

  const codeList = ref(['BR', 'ES', 'PT', 'IT', 'FR', 'GR', 'UK', 'CA'])
  const selectedCode = ref(codeList.value[0])

  const fetchPolicyOptions = ref(['cache-and-network', 'cache-only'])
  const fetchPolicySelected = computed(
    () => fetchPolicyOptions.value[isOnline.value ? 0 : 1]
  )
</script>
