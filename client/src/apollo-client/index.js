// import ApolloClient, {} from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

// https://github.com/apollographql/apollo-client/issues/6650
// https://github.com/apollographql/apollo-client/issues/7318
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import Cookies from 'js-cookie'
import { typeDefs } from './typeDefs'

console.log("什么时候创建apollo 客户端?---> 在程序开始时就创建了")
// 与 API 的 HTTP 连接
// const httpLink = createHttpLink({
//     // 你需要在这里使用绝对路径
//     uri: 'http://localhost:3000/graphql',
// })
const httpLink = createHttpLink({
    // 你需要在这里使用绝对路径
    uri: 'http://localhost:3000/graphql',
    headers: { // 这里带上请求头的 token
        authorization: Cookies.get('token')
    },
    typeDefs,
})
// 缓存实现
const cache = new InMemoryCache()
// 创建 apollo 客户端
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

export { apolloClient }