import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { AbstractRepository } from 'src/configurations/database';
import { User, UserDocument } from '../entities/user.entity';

@Injectable()
export class UserRepository extends AbstractRepository<User> {
  protected readonly logger = new Logger(UserRepository.name);
  constructor(
    @InjectModel(User.name)
    UsersModel: Model<User>,
  ) {
    super(UsersModel);
  }

  async findOneBy(
    filterQuery: FilterQuery<UserDocument>,
  ): Promise<UserDocument> {
    return await this.model.findOne(filterQuery);
  }

  async findByIdAndUpdate(
    filterQuery: FilterQuery<UserDocument>,
    update: UpdateQuery<UserDocument>,
  ): Promise<UserDocument> {
    const document = await this.model.findByIdAndUpdate(filterQuery, update, {
      new: true,
    });

    if (!document) {
      this.logger.warn(`Document was not found`);
      throw new NotFoundException('User does not exist');
    }

    return document;
  }
}
