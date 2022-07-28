<template>
  <ApolloQuery
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
    :variables="{ code: 'BR' }"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <pre>{{ data.country }}</pre>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script setup></script>
