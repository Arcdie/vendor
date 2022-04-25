import {Entity, OneToOne} from 'typeorm';
import {Contains} from 'class-validator';

import {User} from './User';
// import {UserContraint} from '../validator/constraint/UserConstraint';

import {inheritParentDecorators} from './AbstractBaseEntity';

@Entity()
export class Client extends User {
  @inheritParentDecorators()
  @Contains('client-')
  name: string;

  @OneToOne(() => User, user => user.clientId)
  userId: string;
}
