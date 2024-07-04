import * as bcrypt from 'bcryptjs';
import * as JWT from 'jsonwebtoken';
import * as randomstring from 'randomstring';

export class UtilityService {
  hashPassword = async (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hash(password, salt);
  };

  static randomAlphaNumericString = (length: number) => {
    return randomstring.generate({
      length,
      charset: 'alphanumeric',
    });
  };

  static randomNumericString = (length: number) => {
    return randomstring.generate({
      length,
      charset: 'numeric',
    });
  };

  toSentenceCase(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  generateOTP = (length: number) => {
    return UtilityService.randomNumericString(length);
  };

  static generateRandomString = (length: number) => {
    return Math.random()
      .toString(36)
      .slice(2, length + 2);
  };

  generateToken = async (
    data: Record<string, any>,
    expiresIn?: string,
    secretKey?: string,
  ): Promise<string> => {
    return JWT.sign(data, secretKey, { expiresIn: expiresIn });
  };

  verifyToken = async (token: string, secretKey?: string): Promise<any> => {
    return JWT.verify(token, secretKey);
  };

  decodeJWT = async (token: string): Promise<any> => {
    return JWT.decode(token, { complete: true });
  };

  static toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  escapeRegex = (str: string) => {
    return new RegExp(str, 'i');
  };

  removeArrayContentBySearchValue(
    array: string[] | any[],
    searchValue: string,
  ) {
    return array.splice(array.indexOf(searchValue), 1);
  }

  removeArrayContentByIndex(array: string[] | any[], index: number) {
    return array.splice(index, 1);
  }
}
