const rsa = require('node-rsa');
require('dotenv').config();
module.exports = class npmModule{
  static keys(x){
    try{
    const key= new rsa();
    key.importKey(x);
    return (key);
    }
    catch(err){
      throw new Error("Key must be a RSA key pair (or) Provide necessary keys ",err);
    }
}
/**
 * 
 * @param {string} str value to be encrypted
 * @returns encrypted value
 */
   static encrypt(str){
    try{
      const y= npmModule.keys(`${process.env.PUBLIC_KEY}`)
      const a = y.encrypt(str,'base64');
      return a;
        
      }catch(err){
        throw new Error("Please Provide the value to be encrypted",err);
      }
}
/**
 * 
 * @param {string} str encrypted value 
 * @returns decrypted value
 */
    static decrypt(str){
      try{
        const y= npmModule.keys(`${process.env.PRIVATE_KEY}`)
        const b = y.decrypt(str,'utf8');
        return b;
      } catch(err){
        throw new Error("Please Provide the value to be decrypted ",err);
      }  
}
}
