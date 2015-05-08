var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var VendorSchema = new Schema({
                                agencyName : String,
                                coBusSizeDeterminationDesc : String,
                                effectiveDate : Date,
                                lastDateToOrder : Date,
                                piid : String,
                                totalBaseAndAllOptsValue : String,
                                vendorDunsName : String,
                                vendorDunsNumber : String
});

mongoose.model('vendor_contract_details', VendorSchema);