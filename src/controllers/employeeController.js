exports.getEmployee = async (req,res)=>{
    res.send(`get all employee`);
}

exports.getEmployeeID = async (req, res)=>{
    res.send(`get employee from id : ${req.params.id}`)
}

exports.getEmployeeSal = async (req, res)=>{
    res.send(`get employee salary : ${req.params.sal}`)
}

exports.getEmployeeAge = async (req, res)=>{
    res.send(`get employee age : ${req.params.age}`)
}

exports.addEmployee = async (req, res)=>{
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.salary);
    res.send("add an employee");
}


