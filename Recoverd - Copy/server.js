const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

var schedule = require('node-schedule');

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console



let User = require('./models/user.model');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo connected");
});
const userRouter = require('./routes/users');
const { query } = require('express');
app.use('/users', userRouter)
app.listen(port, () => {
    console.log('server is running on port: ' + port);
});

const GoogleImages = require('image-search-google');
const twilio = require('twilio');

const gclient = new GoogleImages(process.env.ENGINE, process.env.GOOGLEKEY);

const tclient = require('twilio')(accountSid, authToken);

var job = schedule.scheduleJob("*/10 * * * *", async function() {
        var today = new Date();
        var time = String((today.getHours() < 10 ? "0" : "") + today.getHours()) + ":" + (today.getMinutes() < 10 ? "0" : "") + String(Math.floor(today.getMinutes() / 10) * 10);
        console.log(time);


        var foundData = await User.find({ "time": time }).catch(err => console.log("error finding users"));

        var images = [];
        console.log(foundData.length);
        for (var i = 0; i < foundData.length; i++) {
            console.log(foundData[i]);
            var search = await gclient.search(foundData[i]["imagename"], { page: Math.floor(Math.random() * 2) });

            images.push(search);
        }
        for (var i = 0; i < foundData.length; i++) {
            await sendMessage(foundData[i], images[i]);
        }
    }

);



var sendMessage = async(user, image) => {
    await tclient.messages.create({
        body: 'Hey ' + user["name"] + ', Here is your daily photo of ' + user['imagename'] + ':' + image[Math.floor(Math.random() * image.length)]['url'],
        from: "+12029462443",
        to: user['phonenumber']
    }).then(message => console.log(message.sid))
}