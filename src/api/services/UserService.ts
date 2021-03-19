import { Db } from "mongodb";
import User from "../models/User";
import { UserRepository } from "../repository/UserRepository";

export class UserService {
  constructor() {
  }

  public async registerUser(cachedDb: Db, user: User){
    const userRepository = new UserRepository();
    try {
      await userRepository.addNewUser(cachedDb, user);
    } catch(err) {
      throw new Error(err);
    }
  }
}