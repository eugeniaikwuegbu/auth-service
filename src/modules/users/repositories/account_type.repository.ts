import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountType } from '../entities/account_type.entity';
import { AbstractRepository } from 'src/configurations/database';

@Injectable()
export class AccountTypeRepository extends AbstractRepository<AccountType> {
  protected readonly logger = new Logger(AccountTypeRepository.name);
  constructor(
    @InjectModel(AccountType.name)
    AccountTypesModel: Model<AccountType>,
  ) {
    super(AccountTypesModel);
  }
}
