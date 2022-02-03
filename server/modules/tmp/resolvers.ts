import { IResolvers } from '@graphql-tools/utils'

export const resolvers: IResolvers = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Hello ${ name } world!`
  }
}