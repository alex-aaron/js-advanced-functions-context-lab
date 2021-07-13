/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(collection) {
    let employeeRecord = {};
    employeeRecord.firstName = collection[0];
    employeeRecord.familyName = collection[1];
    employeeRecord.title = collection[2];
    employeeRecord.payPerHour = collection[3];
    employeeRecord.timeInEvents = [];
    employeeRecord.timeOutEvents = [];
    return employeeRecord;
}

function createEmployeeRecords(collection) {
    return collection.map(e => createEmployeeRecord(e));
}

function createTimeInEvent(dateString) {
    let timeArray = dateString.split(" ");
    let timeInObject = {};
    timeInObject.type = "TimeIn";
    timeInObject.date = timeArray[0];
    timeInObject.hour = parseInt(timeArray[1]);
    this.timeInEvents.push(timeInObject);
    return this;
  }

  function createTimeOutEvent(dateString) {
    let timeArray = dateString.split(" ");
    let timeOutObject = {};
    timeOutObject.type = "TimeOut";
    timeOutObject.date = timeArray[0];
    timeOutObject.hour = parseInt(timeArray[1]);
    this.timeOutEvents.push(timeOutObject);
    return this;
  }

  function hoursWorkedOnDate(stringDate) {
    let timeInObj = this.timeInEvents.find(e => e.date === stringDate);
    let timeOutObj = this.timeOutEvents.find(e => e.date === stringDate);
    let unconvertedTime = timeOutObj.hour - timeInObj.hour;
    let hoursWorked = unconvertedTime / 100;
    return hoursWorked;
 }

 function wagesEarnedOnDate(stringDate) {
    let hours = hoursWorkedOnDate.call(this, stringDate);
    let wagesEarnedforHours = hours * this.payPerHour;
    return wagesEarnedforHours;
}

function calculatePayroll(arr) {
    let totalPayroll = 0;
    for (const element of arr) {
      let indPayroll = allWagesFor.call(element);
      totalPayroll += indPayroll;
    }
    return totalPayroll;
}

function findEmployeeByFirstName(employees, empFirst) {
    let foundEmployee = employees.find(e => e.firstName === empFirst);
    return foundEmployee;
}