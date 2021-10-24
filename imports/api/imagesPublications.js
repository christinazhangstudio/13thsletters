import { Meteor } from 'meteor/meteor';
import { ImagesCollection } from '../db/ImagesCollection';

Meteor.publish('images', function publishImages() {
  return ImagesCollection.find({ userId: this.userId });
});