import {useState} from "react";
import Employee from "./Employee";

function EmployeeList(){
    
    const [employess, setEmployess] =useState([{
        name: "Saurabh Chauhan",
        email: "saurabh311@gmail.com",
        phone: "734940044",
        skills: "Java, React, JavaScript, HTML, CSS, Python",
        avatar: "https://imgur.com/a/TfuJ77a",
    }]);

    function handleAddEmployee(){
        alert("clicked");
    }
    return (
        <div>
        <h3>Employee List</h3>
        <button onClick={handleAddEmployee}>Add Employeee</button>
        <div>
        {employess.map((employee) => {
            <Employee EmployeesData = {employee} />
        })
        }
        <Employee /> 
        </div>
        </div>
    );
}

export default EmployeeList;