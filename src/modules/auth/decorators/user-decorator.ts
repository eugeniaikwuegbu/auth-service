import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from 'src/modules/users/entities/user.entity';

const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};
export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
