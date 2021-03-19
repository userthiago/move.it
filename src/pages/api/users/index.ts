import { NowRequest, NowResponse } from '@vercel/node';
import { Db } from 'mongodb';
import { UserService } from '../../../api/services/UserService';

let cachedDb: Db = null;

export default async (request: NowRequest, response: NowResponse) => {
  const { username, level, currentExperience, challengesCompleted } = request.body;

  const userService = new UserService();
  
  try {
    await userService.registerUser(cachedDb, { username, level, currentExperience, challengesCompleted });
  }
  catch(err) {
    console.log(process.env.MONGODB_URI);
    return response.status(400).json({ message: 'Erro ao criar o usuário' });
  }

  return response.status(201).json({ message: 'Usuário criado com sucesso' });
}