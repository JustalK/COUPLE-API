'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
    	question: "What do you think about living together ?",
		level: mongoose.Types.ObjectId("5fd5b58efbc2f7a33c2ab000"),
		types: [
			mongoose.Types.ObjectId("5fd5b78efbc2f7a33c2cf000")
		]
	}
]
