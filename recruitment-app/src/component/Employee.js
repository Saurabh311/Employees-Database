

function Employee(EmployeesData){
    return(
        <div>
        <h2>{EmployeesData.name}</h2>
        <p>Email: {EmployeesData.email}</p>
        <p>Phone: {EmployeesData.phone}</p>
        <p>Skills:{EmployeesData.name}</p>
        <p>{EmployeesData.avatar}</p>
        </div>
    );
}
export default Employee;