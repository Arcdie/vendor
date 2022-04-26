import {Entity, OneToOne} from 'typeorm';
import {Contains} from 'class-validator';

import {User} from './User';

@Entity()
export class Client extends User {
  @Contains('client-')
  name: string;

  @OneToOne(() => User, user => user.clientId)
  userId: string;
}
