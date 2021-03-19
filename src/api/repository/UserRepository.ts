import { MongoClient, Db } from 'mongodb';
import { URL } from 'url';
import User from '../models/User';

export class UserRepository {
  constructor() {
  }

  private async connectToDatabase(uri: string, cachedDb: Db) {
    console.log('Não o cacheado carai', cachedDb);
    if (cachedDb) {
      console.log('To cacheado carai', cachedDb);
      return cachedDb;
    }

    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const dbName = new URL(uri).pathname.substr(1);
    const db = client.db(dbName);

    cachedDb = db;

    return db;
  }

  public async addNewUser(cachedDb: Db, user: User) {
    const db = await this.connectToDatabase(process.env.MONGODB_URI, cachedDb);
    const collection = db.collection('users');

    try {
      const { insertedId } = await collection.insertOne({ ...user, registerAt: new Date()});
      return { id: insertedId };
    } catch(err) {
      throw new Error(err);
    }
  }
}