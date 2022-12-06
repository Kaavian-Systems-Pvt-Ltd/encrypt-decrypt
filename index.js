const Rsa = require ('node-rsa');
require ('dotenv').config ();

module.exports = class npmModule {
  static keys(x) {
    try{
      const key = new Rsa ();
      key.importKey (x);
      return (key);
    }catch (err) {
      throw new Error ('Key must be a RSA key pair (or) Provide necessary keys ' , err);
    }
  }

  /**
 *
 * @param {string} str value to be encrypted
 * @returns encrypted value base64 format
 */
  static encrypt(str) {
    try {
      const keyobject = npmModule.keys (`${process.env.PUBLIC_KEY}`);
      return keyobject.encrypt (str , 'base64');
    }catch (err) {
      throw new Error ('Please Provide the value to be encrypted' , err);
    }
  }

  /**
 *
 * @param {string} str encrypted value base64 format
 * @returns decrypted value in utf8 format
 */
  static decrypt(str) {
    try {
      const keyobject = npmModule.keys (`${process.env.PRIVATE_KEY}`);
      return keyobject.decrypt (str , 'utf8');
    }catch (err) {
      throw new Error ('Please Provide the value to be decrypted ' , err);
    }
  }
};
