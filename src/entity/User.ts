import {Column, Entity} from 'typeorm';
import {IsNotEmpty, Contains} from 'class-validator';

import {AbstractBaseEntity} from './AbstractBaseEntity';

@Entity()
export class User extends AbstractBaseEntity {
  @Column('text')
  @Contains('hello')
  fieldA: string;

  @Column('text')
  @IsNotEmpty()
  fieldB: string;
}
