const rsa = require('node-rsa');
require('dotenv').config();
 function keys(x){
    const key= new rsa();
    key.importKey(x);
    return (key);
}
/**
 * 
 * @param {key} k node rsa public key
 * @param {string} str value to be encrypted
 * @returns encrypted value  
 */
function encryption(k,str){
    const y= keys(k)
    const a = y.encrypt(str,'base64');
    return a;
}
/**
 * 
 * @param {key} k node rsa private key  
 * @param {string} str encrypted value
 * @returns decrypted value
 */
function decryption(k,str){
    const y= keys(k)
    const b = y.decrypt(str,'utf8');
    return b;
}
module.exports={
    encryption,decryption
}
