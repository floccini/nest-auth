// Contém a estrutura de uma requisição do express que foi autenticada, mais a nossa informaçao de user do LocalAuthGuard

import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

export interface AuthRequest extends Request {
  user: User;
}
