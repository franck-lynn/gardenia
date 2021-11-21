const loginResolver = {
    Query: {
        login: async (_, { email, password }) => {
            console.log("打印出邮箱和密码---> ", email, password)
            return {
                email,
                password
            }
        }
    }
}

export default loginResolver