import { IResolvers } from '@graphql-tools/utils'

import { contactForm } from '../../models/contactForm'

export const resolvers: IResolvers = {
    Mutation: {
        contact: async (_, args: GQL.IContactOnMutationArguments): Promise<boolean> => {

            const { firstName, lastName, email, phoneNumber, message } = args;

            try {
                await contactForm(firstName, lastName, email, phoneNumber, message);
                return true;
            } catch(err) {
                // console.log(err);
                return err;
            }
        }
    }
}