import {PrimaryGeneratedColumn} from 'typeorm';

import {
  IsNumber, IsOptional,
  registerDecorator,
  getMetadataStorage,
} from 'class-validator';

export class AbstractBaseEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsOptional()
  id: number;
};

export function inheritParentDecorators() {
  return (
    target: any,
    propertyKey: string,
  ) => {
    const storage = getMetadataStorage();
    const parent = Object.getPrototypeOf(target.constructor);

    if (!parent) {
      return;
    }

    const targetMetadatas = storage.getTargetValidationMetadatas(
      parent,
      parent.name,
      false,
      false,
    );

    targetMetadatas
      .filter(e => e.propertyName === propertyKey)
      .forEach(e => {
        registerDecorator({
          name: e.type,
          target: target.constructor,
          propertyName: e.propertyName,
          options: e.validationTypeOptions,
          constraints: e.constraints,
          validator: e.constraintCls,
        });
      });
  };
}
