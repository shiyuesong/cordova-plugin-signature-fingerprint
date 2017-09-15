var cordova = require('cordova');

/**
 * GetSignatureFingerprint plugin for Cordova
 * 
 * @constructor
 */
function GetSignatureFingerprint () {}

/**
 * Get the package name
 *
 * @param {Function} onSuccess The function to call in case of success
 * @param {Function} onFail    The function to call in case of error
 */
GetSignatureFingerprint.prototype.getPackageName = function (onSuccess, onFail) {
	cordova.exec(onSuccess, onFail, "SignatureFingerprint", "getPackageName", []);
};

/**
 * Gets the signature
 *
 * @param {Function} onSuccess The function to call in case of success
 * @param {Function} onFail    The function to call in case of error
 */
GetSignatureFingerprint.prototype.getSignature = function (onSuccess, onFail) {
	cordova.exec(onSuccess, onFail, "SignatureFingerprint", "getSignature", []);
};

// Register the plugin
var getSignatureFingerprint = new GetSignatureFingerprint();
module.exports = getSignatureFingerprint;
