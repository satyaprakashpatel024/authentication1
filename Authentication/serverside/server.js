const express = require('express');
const UserModel = require('./Model/model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
const dburl = 'mongodb://127.0.0.1:27017/db';
const cors = require("cors");
app.use(cors());
// connecting to database
mongoose
	.connect(dburl)
	.then(() => {
		console.log('database connected');
	})
	.catch((err) => {
		console.log(err);
	});

// route setup home
app.get('/', (req, res) => {
	res.send('<h1>hello server</h1>');
});

// route to receive data
app.post('/signup', async (req, res) => {
	let userData = req.body;
	let Email = await UserModel.findOne({ email: userData.email });
	if (Email) {
		res.send('User already Exist');
	} else {
		//collection is auths and database Name is db
		let newPass = await bcrypt.hash(userData.passWord, 10);
		userData.passWord = newPass;
		// method 1
		// let newUser = new UserModel({
		//     firstName:userData.firstName,
		//     lastName:userData.lastName,
		//     email:userData.email,
		//     passWord:userData.passWord
		// });
		// another method
		let newUser = new UserModel({
			...userData,
		});
		await newUser.save();
		res.send('user created');
	}
});

app.post('/login', async (req, res) => {
	let userInfo = req.body;
	// console.log(userInfo);
	try {
		const userData = await UserModel.findOne({ email: userInfo.email });
		if (!userData) {
			return res.json({
				success: false,
				message: 'user not found',
			});
		} else {
			const isCorrectPassword = await bcrypt.compare(userInfo.passWord, userData.passWord);
			if (!isCorrectPassword) {
				return res.json({
					success: false,
					message: 'invalid password',
				});
			} else {
				res.json({ 
                    success: true, 
                    message: userData
                });
			}
		}
	} catch (error) {}
});

// starting server
let port = 4000;
app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});
