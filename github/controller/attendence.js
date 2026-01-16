const attendence = require('../models/attendence');

exports.Postattendence = async (req, res) => {

    const email = req.body.email;
    const status = req.body.status;
    const date = req.body.date;

    const emplyAdd = new attendence({ Email: email, Date: date, Status: status })
    await emplyAdd.save()
    res.json({ messgae: 'Attendence MArked Succesfulyy' })

}

exports.Getattendence = async(req,res) =>{
 const attendenceData = await attendence.find();
    res.json(attendenceData);

}

