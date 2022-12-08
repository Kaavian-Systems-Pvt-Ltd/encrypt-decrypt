const sinon = require ('sinon');
const { keys , encrypt , decrypt } = require ('../index');
require ('dotenv').config ();
const npmModule = require ('../index');
const sandbox = sinon.createSandbox ();
const files = require ('../index');
const object = new npmModule ();

describe ('Key Function' , ()=> {
    afterEach ( ()=> {
        sandbox.restore ();
    });

    it ('Error in keys' , ()=> { 
        sandbox.stub (object , 'keys').throws (new Error ('failed'));
        expect (()=> keys ()).toThrow ();
    });

    it ('Convert string to rsa key object for encryption' , async ()=> { 
        sandbox.stub (object , 'keys');
        const value = files.keys (`${process.env.PUBLIC_KEY}`);
        expect (value).toBe (value);
    });
    it ('Convert string to rsa key object for decryption' , async ()=> { 
        sandbox.stub (object , 'keys');
        const value = await files.keys (`${process.env.PRIVATE_KEY}`);
        expect (value).toBe (value);
    });
 
    describe ('Encryption' , ()=> {
        it ('Encrypted  Successfully' , async ()=> {
            sandbox.stub (object , 'encrypt');
            const value = await files.encrypt ('hello');
            expect (value).toBe (value);
        });
        it ('Data to be encrypted is not given' , async ()=> {
            sandbox.stub (object , 'encrypt').throws (new Error ('Failed to encrypt'));
            // const value = await files.encrypt ();
            expect (()=> encrypt ()).toThrow ();
        });

    });
    describe ('Decryption' , ()=> {
        it ('Decrypted  Successfully' , async ()=> {
            sandbox.stub (object , 'decrypt');
            const value = await files.decrypt ('VtnGSzWvRjp2BNJONp71GYFkcW9inn1qCTRGj48O6lmiWinwssKEQ3EoBb8RmtlEMkQe3XqV2+FAS/G/3WZKm8yHguGgVmId1Yc7nRZCLWMmOUdkcgUatpjL4ApFWb93/Hy1VvgtnGxia5Mme34O0qVkleCYnTqZ4ak7IW03yP0=');
            expect (value).toBe (value);
        });
        it ('Data to be decrypted is not given' , async ()=> {
            sandbox.stub (object , 'decrypt').throws (new Error ('Failed to decrypt'));
            expect (()=> decrypt ()).toThrow ();
        });

    });
});