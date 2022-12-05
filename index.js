const rsa = require('node-rsa');
require('dotenv').config();
module.exports = class npmModule{
  static keys(x){
    const key= new rsa();
    key.importKey(x);
    return (key);
}
/**
 * 
 * @param {string} str value to be encrypted
 * @returns encrypted value
 */
   static encrypt(str){
    const y= npmModule.keys(`${process.env.PUBLIC_KEY}`)
    const a = y.encrypt(str,'base64');
    return a;
}
/**
 * 
 * @param {string} str encrypted value 
 * @returns decrypted value
 */
    static decrypt(str){
    const y= npmModule.keys(`${process.env.PRIVATE_KEY}`)
    const b = y.decrypt(str,'utf8');
    return b;
}
}
