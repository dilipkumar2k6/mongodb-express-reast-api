const mongodb = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'demo-db';

class MongodbService {

  async init() {

    const MongoClient = mongodb.MongoClient;

    const client = await MongoClient.connect(url);

    this.db = client.db(dbName);
  }

  async userRegistration(payload) {

    const result = await this.db.collection('users').findOneAndUpdate({
      username: payload.username,
    }, {
      $set: payload
    }, {
      upsert: true,
    });

    // Return data
    const user = await this.db.collection('users').findOne({ username: payload.username });
    return user;
  }

  async findUser(username) {
    // Return data
    const user = await this.db.collection('users').findOne({ username });
    return user;
  }

}

module.exports = MongodbService;