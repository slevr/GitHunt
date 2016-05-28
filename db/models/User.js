import {BaseModel} from './BaseModel';

export default class User extends BaseModel {
  // Table name is the only required property. 
  static tableName = 'User';
  
  // This object defines the relations to other models.
  static relationMappings = {
    entry: {
      relation: Model.OneToManyRelation,
      modelClass: Entry,
      join: {
        from: 'User.id',
        to: 'Entry.userId'
      }
    }
  };
}