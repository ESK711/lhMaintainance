import { IResolvers } from '@graphql-tools/utils'

import { newsletterForm } from '../../models/newsletterForm'

export const resolvers: IResolvers = {
    Mutation: {
        subscribe: async (_, args: GQL.ISubscribeOnMutationArguments): Promise<boolean> => {

            const { email } = args

            try {
                await newsletterForm(email)
                return true
            } catch(err) {
                // console.log(err);
                return err
            }
        }
    }
}