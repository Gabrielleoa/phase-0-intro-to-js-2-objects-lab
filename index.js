const employee = {
    employee,["name"] : "Sam",
};
function updatedEmployeeWithKeyAndValue(employye, key, value) {
    const updateEmployee= { ... employee };
    updatedEmployee[streetAddress]= "11 Broadway";
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
