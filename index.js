// Write your solution in this file!
const employee = { name : "Susan", streetAddress : "Nairobi" };

function updateEmployeeWithKeyAndValue(employee, age, num){
    const newEmployee = {...employee};
    newEmployee[age] = num;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, age, num){
     employee[age] = num;
     return employee;
}

function deleteFromEmployeeByKey(employee, name){
     const employeeNew = {...employee};
     delete employeeNew.name;
     return employeeNew;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
     delete employee.name;
     return employee;
}

updateEmployeeWithKeyAndValue(employee, age, "26");
destructivelyUpdateEmployeeWithKeyAndValue(employee, age, "26");
deleteFromEmployeeByKey(employee, "Susan");
destructivelyDeleteFromEmployeeByKey(employee, "Susan");


