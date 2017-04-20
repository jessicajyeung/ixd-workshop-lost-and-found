/* TODO: Implement the lost AJAX Handler */
module.exports = {
	// get is an action and there can be many actions
	 get: function(req,res) {
	 	// req is the request" client -> server
	 	// res is the response: server -> client
	    var data = require("./data.json");
		res.success(data); 
	    // 	Try {
		//  	var data = require("./data.json");
		//  	res.success(data); 
		// } catch (ex) {
		// 	res.error(57, "data not found");
		// }
	 }
}