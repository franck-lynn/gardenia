import { ApolloServer } from 'apollo-server-koa'
import { typeDefs } from '../graphql'
import { checkedToken } from '../passport/passport-initialize'
import { resolvers } from '../resolvers'
import { isRoleDirective } from '../resolvers/directives'


const server = new ApolloServer({
    typeDefs,
    resolvers,
    uploads: false, 
    context: async ({ ctx }) => {
        // 在 apollo-client文件夹 index.js 文件中, createHttpLink 带上
        // 了请求头, 这样, apollo 服务器处理后就能得到 token,
        // 有了 token, 就可以做授权验证等操作
        await checkedToken(ctx)
        const currentUser = ctx.currentUser
        // console.log("客户端提价请求---> ", currentUser)
        return { currentUser }
    },
    schemaDirectives: {
        isRole: isRoleDirective
    }
})

export { server }