// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IMutation {
__typename: "Mutation";
contact: boolean;
subscribe: boolean;
quote: boolean;
}

interface IContactOnMutationArguments {
firstName: string;
lastName: string;
email: string;
phoneNumber: number;
message: string;
}

interface ISubscribeOnMutationArguments {
email: string;
}

interface IQuoteOnMutationArguments {
firstName: string;
lastName: string;
email: string;
phoneNumber: number;
}

interface IQuery {
__typename: "Query";
hello: string;
}

interface IHelloOnQueryArguments {
name?: string | null;
}
}

// tslint:enable
