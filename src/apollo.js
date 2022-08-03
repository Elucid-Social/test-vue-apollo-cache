import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'
import { persistCache, LocalForageWrapper } from 'apollo3-cache-persist'
import localforage from 'localforage'

const API_HOST = 'https://countries.trevorblades.com/graphql'
//const API_HOST = 'http://localhost:4000/'
//const SCHEMA_VERSION = '1'
//const SCHEMA_VERSION_KEY = 'apollo-schema-version'

export const createClient = async () => {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: API_HOST
  })

  // Cache implementation
  const cache = new InMemoryCache()

  const localforageStore = localforage.createInstance({
    name: 'mtomady' // ideally we should have different naming for mtomady and elucid
  })

  // Cache persistor implementation
  await persistCache({
    cache,
    storage: new LocalForageWrapper(localforageStore)
  })

  // const currentVersion = window.localStorage.getItem(SCHEMA_VERSION_KEY)
  // if (currentVersion === SCHEMA_VERSION) {
  //   await persistor.restore()
  // } else {
  //   await persistor.purge()
  //   window.localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
  // }

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache
  })

  return apolloClient
}
