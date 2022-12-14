const Rsa = require ('node-rsa');
require ('dotenv').config ();

module.exports = class npmModule {
  constructor(keys , encrypt , decrypt) {
    this.keys = keys;
    this.encrypt = encrypt;
    this.decrypt = decrypt;
  }
  static keys(userkey) {
    try{
      const key = new Rsa ();
      key.importKey (userkey);
      return (key);
    }catch (err) {
      throw new Error ('Key must be a RSA key pair (or) Provide necessary keys' , err);
    }
  }

//   /**
//  *
//  * @param {string} str value to be encrypted
//  * @returns encrypted value base64 format
//  */
  static encrypt(str) {
    try {
      const keyobject = npmModule.keys (`${process.env.PUBLIC_KEY}`);
      return keyobject.encrypt (str , 'base64');
    }catch (err) {
      throw new Error (err);
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
      throw new Error (err);
    }
  }
};
