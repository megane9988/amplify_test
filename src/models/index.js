// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PostItem } = initSchema(schema);

export {
  PostItem
};