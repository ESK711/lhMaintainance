import { IResolvers } from '@graphql-tools/utils'

import { quoteForm } from '../../models/quoteForm'

export const resolvers: IResolvers = {
    Mutation: {
        quote: async (_, args: GQL.IQuoteOnMutationArguments): Promise<boolean> => {

            const { firstName, lastName, email, phoneNumber } = args;

            try {
                await quoteForm(firstName, lastName, email, phoneNumber);
                return true;
            } catch(err) {
                // console.log(err);
                return err;
            }
        }
    }
}