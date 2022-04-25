import {TypeormModule} from '../libs/typeorm';
import {IsNotEmpty, Contains} from 'class-validator';

import {AbstractBaseEntity} from './AbstractBaseEntity';

@TypeormModule.Entity()
export class User extends AbstractBaseEntity {
  @TypeormModule.Column('text')
  @Contains('hello')
  fieldA: string;

  @TypeormModule.Column('text')
  @IsNotEmpty()
  fieldB: string;
}
