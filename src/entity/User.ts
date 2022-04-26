import {Contains} from 'class-validator';
import {Entity, Column, OneToOne} from 'typeorm';

import {Client} from './Client';
import {AbstractBaseEntity} from './AbstractBaseEntity';

@Entity()
export class User extends AbstractBaseEntity {
  @Column('text')
  @Contains('user-')
  name: string;

  @OneToOne(() => Client, client => client.userId)
  clientId: Client;
}
