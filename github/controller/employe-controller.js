const Employe = require('../models/employe-model');
exports.GetEmploye = async (req, res) => {
    const EmployeData = await Employe.find();
    res.json(EmployeData);
}
exports.PostEmploye = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const date = req.body.date;
    const salary = req.body.salary;
    const EmployeAdd = new Employe({ EmployeId: id, Name: name, Email: email, Joined: date, Salary: salary })
    await EmployeAdd.save()
    res.json({ messgae: 'Enploye User Inserted' })
}

exports.DeleteEmploye = async (req, res) => {
    await Employe.findByIdAndDelete(req.body.id);
    res.json({ message: "Employe User Deleted" });

}

exports.PutEmploye = async (req, res) => {
    const uid = req.body.Uniqueid;
    const eid = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const date = req.body.date;
    const salary = req.body.salary;
    await Employe.findByIdAndUpdate(uid, { EmployeId: eid, Name: name, Email: email, Joined: date, Salary: salary }, { new: true });
    res.json({ message: "Employe Data Is updated" });
    console.log(req.body)
}
