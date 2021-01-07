import handleRemoveItem from "./EmployeeList";

function Employee({EmployeesData}){
    
    return(
        <div>
        <div className="EmployeeDiv">
        <img src={EmployeesData.avatar} className="avatar"/>
        <div>
        <p>
        <strong>Name:</strong>
        {EmployeesData.name}
        </p>
        <p>
        <strong>Email:</strong>
         {EmployeesData.email}
        </p>
        <p>
        <strong>Phone:</strong>
         {EmployeesData.phone}
        </p>
        <p>
        <strong>Skills:</strong>
         {EmployeesData.skills}
        </p>
        </div>     
        </div>
     
        
        </div>
    );
}
export default Employee;