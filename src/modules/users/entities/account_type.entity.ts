import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AbstractDocument } from 'src/configurations/database';

export type AccountTypeDocument = AccountType & Document;

@Schema({ timestamps: true })
export class AccountType extends AbstractDocument {
  @Prop({
    trim: true,
    required: true,
    uppercase: true,
  })
  slug: string;
}

export const AccountTypeSchema = SchemaFactory.createForClass(AccountType);

export const AccountTypeSchemaDefinition = {
  name: AccountType.name,
  schema: AccountTypeSchema,
};
