const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/remove').post((req, res) => {
    User.find({ "phonenumber": req.body.phonenumber }).remove().then(() => res.json('User removed')).catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const imagename = req.body.imagename;
    const time = req.body.time;
    const newUser = new User({ name, phonenumber, imagename, time });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;