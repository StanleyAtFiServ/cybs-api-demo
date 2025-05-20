'use strict';

var cybersourceRestApi = require('cybersource-rest-client');
var path = require('path');
var filePath = path.resolve('../../../Data/Configuration.js');
var configuration = require(filePath);

function digital_payment_googlepay(callback, enable_capture) {
	try {
		var configObject = new configuration();
		var apiClient = new cybersourceRestApi.ApiClient();
		var requestObj = new cybersourceRestApi.CreatePaymentRequest();

		var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
		clientReferenceInformation.code = 'CODE_1231223';
		requestObj.clientReferenceInformation = clientReferenceInformation;

		var processingInformation = new cybersourceRestApi.Ptsv2paymentsProcessingInformation();
		processingInformation.capture = true;
/*
		if (enable_capture === true) {
			requestObj.processingInformation.capture = true;
		}
			*/ 
		processingInformation.paymentSolution = '012';
		requestObj.processingInformation = processingInformation;

		var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();
		var paymentInformationFluidData	= new cybersourceRestApi.Ptsv2paymentsPaymentInformationFluidData();
		paymentInformationFluidData.value = "eyJzaWduYXR1cmUiOiJNRVlDSVFEQ3lVRGt6Tm5wUENPUlBZSG1RMzRGMzljZ3NzSVljNW10K01xbHN3SWd4d0loQU1UZVVtR2k2REVtdmxRQnFzc3VJNGRIRllNUzlMeURMSWdhSHVYNXV0Y3AiLCJwcm90b2NvbFZlcnNpb24iOiJFQ3YxIiwic2lnbmVkTWVzc2FnZSI6IntcImVuY3J5cHRlZE1lc3NhZ2VcIjpcIkFnQ2VoNStoR3pzNUxuNkZSL2E0T2JORGhQTm8vZUlBLzZiSDkwT2pUbVphTmM2eS91QUY1MzFSNkNPLzNzL1dheFlOUzZGQXVMUzFzWHRsR1d5VXZsT3F1WitrOUVkZlFTSnVlNncyTVl2VDNCWTRXQURXd1NKTm93dE9HNitsYmh5bUduTEE1UTdpd2hvUnF1YmxtOW9Zd0NLbXhBRTdwKzkwV3NzSXgrck8rcEc4Z1VtZ1kxMndBTGx0VFcrLy9Xd2JkYk56NWVxTFAxdTVuUDd1VUlzZXQrTVRqekZBb3VZa2k1bzZZaHZTR3ZJcHgwTlFCcUgxakJ1UnRHWGJUTlpNVG05K2o3NzIwN0NjTUgyd0dnSmE2K09qL1UvcU9CbDg0YzUwdmprSis5K3lTcE1LYzNrdllGTDAwc1hITjNhWVFwQjdmUTlvZEE4dnhtZ0F1a3RzellnaTExWWliU2V6ODBNT0FJaFI5Ym82dFNTMWI3cDdLM1RSRlRZNVdHUDVRM3pFbFcycFFTdVhvVjVhV3VCamppTE1VaDZ2V0kwNXA2ZkdVMGNNXCIsXCJlcGhlbWVyYWxQdWJsaWNLZXlcIjpcIkJHbzZCYWNES0VmSnVXREVuZ2tSblcrSDBFdkRFTzVuYUpjbitoZitVWm1Ic0hubUFxMXdXRDRpMDUvOEFxdkh2aWExUGhpWUpaVzNGWDNRa2NQWDZPOFxcdTAwM2RcIixcInRhZ1wiOlwiRW92c1J0MmtjL0VpdEdCb0U1dkd1b0NiSnh6bGZyUEVBbU9OR2pUQUxBTVxcdTAwM2RcIn0ifQ==";
		paymentInformation.fluidData = paymentInformationFluidData;
		/*
		var paymentInformationTokenizedCard = new cybersourceRestApi.Ptsv2paymentsPaymentInformationTokenizedCard();
		paymentInformationTokenizedCard.number = '4111111111111111';
		paymentInformationTokenizedCard.expirationMonth = '12';
		paymentInformationTokenizedCard.expirationYear = '2020';
		paymentInformationTokenizedCard.cryptogram = 'EHuWW9PiBkWvqE5juRwDzAUFBAk=';
		paymentInformationTokenizedCard.transactionType = '1';
		paymentInformation.tokenizedCard = paymentInformationTokenizedCard;
*/
		requestObj.paymentInformation = paymentInformation;
//
		var orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
		var orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
		orderInformationAmountDetails.totalAmount = '20';
		orderInformationAmountDetails.currency = 'USD';
		orderInformation.amountDetails = orderInformationAmountDetails;

		var orderInformationBillTo = new cybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
		orderInformationBillTo.firstName = 'Paul';
		orderInformationBillTo.lastName = 'Maesor';
		orderInformationBillTo.address1 = 'A136, 16/F, Gateway 5';
		orderInformationBillTo.locality = 'Harbour City';
		orderInformationBillTo.administrativeArea = 'KT';
		orderInformationBillTo.postalCode = '000000';
		orderInformationBillTo.country = 'HK';
		orderInformationBillTo.email = 'paul.maesor@fiserv.com';
		orderInformationBillTo.phoneNumber = '64327113';
		orderInformation.billTo = orderInformationBillTo;

		requestObj.orderInformation = orderInformation;


		var instance = new cybersourceRestApi.PaymentsApi(configObject, apiClient);

		instance.createPayment(requestObj, function (error, data, response) {
			if (error) {
				console.log('\nError : ' + JSON.stringify(error));
			}
			else if (data) {
				console.log('\nData : ' + JSON.stringify(data));
			}

			console.log('\nResponse : ' + JSON.stringify(response));
			console.log('\nResponse Code of Process a Payment : ' + JSON.stringify(response['status']));
			var status = response['status'];
			write_log_audit(status);
			callback(error, data, response);
		});
	}
	catch (error) {
		console.log('\nException on calling the API : ' + error);
	}
}

function write_log_audit(status) {
	var filename = path.basename(__filename).split(".")[0];
	console.log(`[Sample Code Testing] [${filename}] ${status}`);
}

if (require.main === module) {
	digital_payment_googlepay(function () {
		console.log('\nCreatePayment end.');
	});
}
module.exports.digital_payment_googlepay = digital_payment_googlepay;
