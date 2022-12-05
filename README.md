# encrypt_decrypt

## This package allows you to encrypt your data using your RSA PUBLIC KEY and decrypt the encrypted data ONLY by using your RSA PRIVATE KEY
## note: Store your RSA KEY PAIR in env file as PUBLIC_KEY="" AND PRIVATE_KEY="".
# STEPS TO DO :
### In your package.json file in dependencies just 
## "encrypt-decrypt":"https://github.com/Kaavian-Systems-Pvt-Ltd/encrypt-decrypt.git" 
Require the package in your file and thus you can make use of the functions 
### encrypt() and decrypt()
# encrypt function
This function needs one parameter that needs to be encrypted  
ex: ab.encrypt(value_to_be_encrypted);
It returns the encrypted value in base64 form . 
Encryption uses RSA PUBLIC KEY
# decrypt function
This function needs one parameter that needs to be decrypted  
ex: ab.decrypt(encrypted_value);
It returns the decrypted value in utf8 form . 
Encryption uses RSA PRIVATE KEY

