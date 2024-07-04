import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsValidPasswordRule implements ValidatorConstraintInterface {
  async validate(value: string) {
    try {
      const pattern =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,14}$/;
      return pattern.test(value);
    } catch (e) {
      throw new InternalServerErrorException({
        message: e.message,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  defaultMessage() {
    return `Invalid Password`;
  }
}

export const IsValidPassword = (validationOptions?: ValidationOptions) => {
  return function (object: any, propertyName) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsValidPasswordRule,
    });
  };
};
