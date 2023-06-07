function assignEmployees(totalTime, employees) {
  function assignEmployeesHelper(totalTime, employees, i, tempSol) {
    console.log(i, tempSol);
    if (tempSol === totalTime) {
      return true;
    } else if (tempSol > totalTime || i === employees.length) {
      return false;
    } else {
      return (
        assignEmployeesHelper(
          totalTime,
          employees,
          i + 1,
          tempSol + employees[i]
        ) || assignEmployeesHelper(totalTime, employees, i + 1, tempSol)
      );
    }
  }
  return assignEmployeesHelper(totalTime, employees, 0, 0);
}
