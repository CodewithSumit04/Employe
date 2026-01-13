
API = "http://127.0.0.1:5000/Employerdetails";
const form = document.getElementById('empForm');
const tableBody = document.getElementById('tableBody');
const staff = document.getElementById("stat-count");
const staffpayroll = document.getElementById("stat-payroll");
let salary = parseInt(document.getElementById('empSalary').value);

async function fETCHEMPLOYE() {

    const resp = await fetch(API);
    const EmployeData = await resp.json();
    tableBody.innerHTML = "";
    staff.innerHTML += EmployeData.length;

    EmployeData.forEach((emp) => {

        const row = `
            <tr id="row-${emp._id}"> <td>${emp.EmployeId}</td>
                <td>${emp.Name}</td>
                <td>${emp.Email}</td>
                <td>${emp.Joined}</td>
                <td>${emp.Salary}</td>
                <td>
                    <button class="btn-action btn-delete" onclick="deleteEmploye('${emp._id}')">Delete</button>
                    <button class="btn-action btn-edit" onclick="edit('${emp._id}','${emp.EmployeId}','${emp.Name}','${emp.Email}','${emp.Joined}','${emp.Salary}')">Edit</button>
                     <button class="btn-action btn-cancel" >Cancel</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;


    });
}




async function addEmploye() {
    let id = document.getElementById('empId').value;
    let name = document.getElementById('empName').value;
    let email = document.getElementById('empEmail').value;
    let date = document.getElementById('empDate').value;
    let salary = document.getElementById('empSalary').value;
    const response = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name, email, date, salary })
    })

    const output = await response;
    // console.log(output)

}

async function deleteEmploye(id) {
    const response = await fetch(`${API}/delete`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id })
    });
    window.location.href = 'http://127.0.0.1:5500/public';

}


function edit(uniqueid, id, name, email, date, salary) {
    let addform = document.getElementById("add");
    let updateform = document.getElementById("update");
    if (updateform.style.display == "none" || updateform.style.display == "") {
        addform.style.display = "none";
        updateform.style.display = "block"
    }


    let Unid = document.getElementById("id");
    let empid = document.getElementById("UId");
    let empname = document.getElementById("UName");
    let empemail = document.getElementById("UEmail");
    let empdate = document.getElementById("UDate");
    let empsalary = document.getElementById("USalary");
    Unid.value += uniqueid;
    empid.value += id;
    empname.value += name;
    empemail.value += email;
    empdate.value += date;
    empsalary.value += salary;
}


async function update() {
    let Uniqueid = document.getElementById("id").value;
    let id = document.getElementById("UId").value;
    let name = document.getElementById("UName").value;
    let email = document.getElementById("UEmail").value;
    let date = document.getElementById("UDate").value;
    let salary = document.getElementById("USalary").value;
    const response = await fetch(API, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Uniqueid, id, name, email, date, salary })
    })
    const data = await response.json();
}

fETCHEMPLOYE();   
