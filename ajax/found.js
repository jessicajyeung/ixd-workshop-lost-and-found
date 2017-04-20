/* TODO: Implement the Found AJAX Handler */
// we want to store hte data that we found
module.exports = {
	 post: function(req,res) {
	 	// req is the request" client -> server
	 	// res is the response: server -> client
	 	req.body.lat = parseFloat(req.body.lat); //inputting a string, but need a float
	 	req.body.lng = parseFloat(req.body.lng);
	 	require("./data.json").push(req.body); // everthing the user posts will go into the body
	 	res.success();                         // push takes an element and add to an array
	 }
}