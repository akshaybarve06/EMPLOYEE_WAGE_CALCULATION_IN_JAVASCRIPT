let IS_PART_TIME=1
let IS_FULL_TIME=2
let EMPLOYEE_RATE_PER_HOUR=20

let employeeHrs=0
let empWage=0

let employeeCheck=Math.floor(Math.random()*10)%3

if (employeeCheck == IS_FULL_TIME){
    employeeHrs = 8
}else if(employeeCheck == IS_PART_TIME) {
    employeeHrs = 4
} else {
    employeeHrs = 0
}
empWage=employeeHrs*EMPLOYEE_RATE_PER_HOUR;
