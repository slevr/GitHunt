import {BaseModel} from './BaseModel';

export default class Entry extends BaseModel {
  // Table name is the only required property.
  static tableName = 'Entry';

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema = {
    type: 'object',
    required: ['postedBy', 'repoName'],

    properties: {
      id: {type: 'integer'},
      postedBy: {type: ['integer']},
      repoName: {type: ['string']},
      createdAt: {type: 'string'}
    }
  };

  static relationMappings = {
    postedBy: {
      relation: Model.OneToOneRelation,
      modelClass: __dirname + '/User',
      join: {
        from: 'Entry.postedBy',
        to: 'User.id'
      }
    },
    repo: {
      relation: Model.OneToOneRelation,
      modelClass: __dirname + '/Repo',
      join: {
        from: 'Entry.repoName',
        to: 'Repo.name'
      }
    }
  };
}