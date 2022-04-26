import {Entity, OneToOne} from 'typeorm';
import {Contains} from 'class-validator';

import {User} from './User';
import {AbstractBaseEntity} from './AbstractBaseEntity';

@Entity()
export class Client extends AbstractBaseEntity {
  @Contains('client-')
  name: string;

  @OneToOne(() => User, user => user.clientId)
  userId: string;
}
