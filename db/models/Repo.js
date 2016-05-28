import { BaseModel } from './BaseModel';

export default class Repo extends BaseModel {
  static tableName = 'Repo';
  
  static idColumn = 'name';
  
  // Optional JSON schema. This is not the database schema!
  // Nothing is generated based on this. This is only used
  // for validation. Whenever a model instance is created
  // it is checked against this schema.
  // http://json-schema.org/.
  static jsonSchema = {
    type: 'object',
    required: ['name', 'fullname'],

    properties: {
      name: {type: 'string'},
      fullName: {type: 'string'},
      description: {type: 'string'},
      stargazersCount: {type: 'number'},
      openIssuesCount: {type: 'number'},
      createdAt: {type: 'string'}
    }
  };
}
