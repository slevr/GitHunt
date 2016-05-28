import {BaseModel} from './BaseModel';

export default class Comment extends BaseModel {
  // Table name is the only required property. 
  static tableName = 'Comment';
  
  // This object defines the relations to other models.
  static relationMappings = {
    user: {
      relation: Model.OneToOneRelation,
      modelClass: User,
      join: {
        from: 'Comment.userId',
        to: 'User.id'
      }
    },
    
    repo: {
      relation: Model.OneToOneRelation,
      modelClass: Entry,
      join: {
        from: 'Comment.entryId',
        to: 'Entry.id'
      }
    },

    childComment: {
      relation: Model.OneToManyRelation,
      modelClass: Comment,
      join: {
        from: 'Comment.id',
        to: 'Comment.parentId'
      }
    },
    
    parentComment: {
      relation: Model.OneToOneRelation,
      modelClass: Comment,
      join: {
        from: 'Comment.parentId',
        to: 'Comment.id'
      }
    }
  };
}