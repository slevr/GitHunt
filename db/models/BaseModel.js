import {Model} from 'objection';

class BaseModel extends Model {
    $beforeInsert () {
      const now = new Date().toISOString();
      this.created_at = now;
    }
    
    $beforeUpdate () {
      this.updatedAt = new Date().toISOString();
    }
}