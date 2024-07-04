import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import * as _ from 'lodash';
import mongoose, { Document } from 'mongoose';
import { AbstractDocument } from 'src/configurations/database';
import {
  Country,
  CountryDocument,
} from 'src/modules/country/entities/country.entity';
import { AccountType, AccountTypeDocument } from './account_type.entity';

export type UserDocument = User & Document;

@Schema({ versionKey: false, timestamps: true })
export class User extends AbstractDocument {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountType.name,
  })
  type: AccountTypeDocument | any;

  @Prop({
    default: null,
    required: false,
    type: mongoose.Schema.Types.ObjectId,
    ref: Country.name,
  })
  country: CountryDocument;

  @Prop({ trim: true, lowercase: true, required: true, unique: true })
  email: string;

  @Prop({
    trim: true,
    default: null,
  })
  password: string;

  @Prop({ trim: true, required: true })
  firstName: string;

  @Prop({ trim: true, required: true })
  lastName: string;

  @Prop({ required: false, default: null })
  avatar: string;

  @Prop({ default: false })
  isEmailVerified: boolean;

  isValidPassword: (password: string) => Promise<boolean>;

  getFullName: () => string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index(
  {
    email: 1,
    type: 1,
  },
  {
    unique: true,
  },
);

UserSchema.methods = {
  async isValidPassword(password): Promise<boolean> {
    try {
      const storedPassword = this.password || '';
      return bcrypt.compare(password, storedPassword);
    } catch (err) {
      throw new Error(err);
    }
  },

  toJSON(): Record<string, any> {
    return _.omit(this.toObject(), ['password']);
  },

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
};

export const UserSchemaDefinition = { name: User.name, schema: UserSchema };
