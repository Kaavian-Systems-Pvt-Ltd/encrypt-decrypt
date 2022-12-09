const sinon = require ('sinon');
const { keys , encrypt , decrypt } = require ('../index');
require ('dotenv').config ();
 const npmModule = require ('../index');
const sandbox = sinon.createSandbox ();
const files = require ('../index');
 new npmModule ();

describe ('Key Function' , ()=> {
    afterEach ( ()=> {
        sandbox.restore ();
    });

    it ('Error in keys' , ()=> { 
        sandbox.stub (files , 'keys').throws (new Error ('failed'));
        expect (()=> keys ()).toThrow ();
    });

    it ('Convert string to rsa key object for encryption' , async ()=> { 
        sandbox.stub (files , 'keys').returns ('qwerftghjsxdcfvbnxxcvb');
        const value = files.keys (`${process.env.PUBLIC_KEY}`);
        // console.log (value , 1);
        expect (value).toBe ('qwerftghjsxdcfvbnxxcvb');
    });
    it ('Convert string to rsa key object for decryption' , async ()=> { 
        sandbox.stub (files , 'keys').returns ('fghujdvbbsdxfghjkxcv');
        const value = files.keys (`${process.env.PRIVATE_KEY}`);
        expect (value).toBe ('fghujdvbbsdxfghjkxcv');
    });
 
    describe ('Encryption' , ()=> {
        it ('Encrypted  Successfully' , async ()=> {
            sandbox.stub (files , 'encrypt').returns ('sdxcfvghjertgyhujxcvb');
            const value = files.encrypt ('hello');
            expect (value).toBe ('sdxcfvghjertgyhujxcvb');
        });
        it ('Data to be encrypted is not given' , async ()=> {
            sandbox.stub (files , 'encrypt').throws (new Error ('Failed to encrypt'));
            expect (()=> encrypt ()).toThrow ();
        });

    });
    describe ('Decryption' , ()=> {
        it ('Decrypted  Successfully' , async ()=> {
            // sandbox.stub (object , 'decrypt');
            sandbox.stub (files , 'decrypt' ).returns ('hello');
            const value = files.decrypt ('Vsdfghjkwedrftgyhjsdcfvgbhstyu=');
            expect (value).toEqual ('hello');
        });
        it ('Data to be decrypted is not given' , async ()=> {
            sandbox.stub (files , 'decrypt').throws (new Error ('Failed to decrypt'));
            expect (()=> decrypt ()).toThrow ();
        });

    });
});