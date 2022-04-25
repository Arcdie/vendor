import {Column, Entity} from 'typeorm';
import {IsNotEmpty} from 'class-validator';

import {User} from './User';
// import {UserContraint} from '../validator/constraint/UserConstraint';

import {inheritParentDecorators} from './AbstractBaseEntity';

@Entity()
export class Client extends User {
  @inheritParentDecorators()
  // @Validate(UserContraint, [])
  fieldA: string;

  @Column('text')
  @IsNotEmpty()
  fieldC: string;
}
