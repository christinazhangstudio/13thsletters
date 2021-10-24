import { createCollection } from 'meteor/quave:collections';
import SimpleSchema from 'simpl-schema';

export const ImagesCollection = createCollection({
    name: 'images',
    schema: new SimpleSchema({
      description: {
        type: String,
      },
      thumbnail: {
        type: String,
      },
      userId: {
        type: String,
      },
    }),
  });