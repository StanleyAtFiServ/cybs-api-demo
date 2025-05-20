'use strict';

/*
* Merchant configuration properties are taken from Configuration module
*/

// common parameters
const AuthenticationType = 'http_signature';
const RunEnvironment = 'apitest.cybersource.com';
//const MerchantId = 'testrest';
//const MerchantId = '87654987001';
//const MerchantId = 'oidcybstraining001';
const MerchantId = '43210987001';


// http_signature parameters
//const MerchantKeyId = '08c94330-f618-42a3-b09d-e1e43be5efda';                 // testrest
//const MerchantKeyId = 'a9650a2c-d499-42c4-a7e6-d4e37cb0a49e';					// 87654987001
//const MerchantKeyId = 'd92d13d3-829f-4aec-bd07-29bfbdd7a4c2';               // 'oidcybstraining001';
const MerchantKeyId = '425a3125-2f7c-4923-8cde-d1778a8922b5';               // '43210987001';

//const MerchantSecretKey = 'yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=';     // testrest
//const MerchantSecretKey = 'hZEa9MNVm3+FBBKWn/83qQTIYBWb6oaFHVaB/F0t/AQ=';		// 87654987001
//const MerchantSecretKey = 'Nhp23AKiw906Tr06sgA3dXFUFwMIeeYiZ7XLtCUXcEQ=';   // oidcybstraining001
const MerchantSecretKey = 'LDuUUWhyRC0DhYin7JGwQIZR8AwNuiVBWKJfN9d23Q8=';   // 43210987001

// jwt parameters
const KeysDirectory = 'Resource';
const KeyFileName = 'testrest';
const KeyAlias = 'testrest';
const KeyPass = 'testrest';

//meta key parameters
const UseMetaKey = false;
const PortfolioID = '';

// logging parameters
const EnableLog = true;
const LogFileName = 'cybs';
const LogDirectory = 'log';
const LogfileMaxSize = '5242880'; //10 MB In Bytes
const EnableMasking = true;

/*
PEM Key file path for decoding JWE Response Enter the folder path where the .pem file is located.
It is optional property, require adding only during JWE decryption.
*/
const PemFileDirectory = 'Resource/NetworkTokenCert.pem';

//Add the property if required to override the cybs default developerId in all request body
const DefaultDeveloperId = '';

// Constructor for Configuration
function Configuration() {

    var configObj = {
        'authenticationType': AuthenticationType,
        'runEnvironment': RunEnvironment,

        'merchantID': MerchantId,
        'merchantKeyId': MerchantKeyId,
        'merchantsecretKey': MerchantSecretKey,

        'keyAlias': KeyAlias,
        'keyPass': KeyPass,
        'keyFileName': KeyFileName,
        'keysDirectory': KeysDirectory,

        'useMetaKey': UseMetaKey,
        'portfolioID': PortfolioID,
        'pemFileDirectory': PemFileDirectory,
        'defaultDeveloperId': DefaultDeveloperId,
        'logConfiguration': {
            'enableLog': EnableLog,
            'logFileName': LogFileName,
            'logDirectory': LogDirectory,
            'logFileMaxSize': LogfileMaxSize,
            'loggingLevel': 'debug',
            'enableMasking': EnableMasking
        }
    };
    return configObj;

}

module.exports = Configuration;
