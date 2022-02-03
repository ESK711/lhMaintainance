import * as path from 'path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFilesSync } from '@graphql-tools/load-files'

export const genSchema = () => {
  const typeDefs = loadFilesSync(`${ __dirname }../../modules/**/*.graphql`);
  const resolvers = loadFilesSync(path.join(`${ __dirname }../../modules/**/*.ts`));
  
  const schema = makeExecutableSchema({ resolvers, typeDefs });

  return schema;
}