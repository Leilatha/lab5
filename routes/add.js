var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log("addFriend called");

	//get parameter values
	var name = req.query.name;
	var description = req.query.description;

	//Create new friend object
	var newFriend = {
		name: name,
		description: description,
		imageURL: 'http://lorempixel.com/400/400/people'
	}
	console.log(newFriend);
 	data.friends.push(newFriend);
	res.redirect('/');
}