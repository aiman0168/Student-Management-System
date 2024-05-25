import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter user name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["MS-Office", "HTML", "CSS", "Javascript", "Typescript", "Python"]
    }
]);
const tutionFee = {
    "MS-Office": 2000,
    "HTML": 2500,
    "CSS": 5000,
    "Javascript": 6000,
    "Typescript": 5000,
    "Python": 10000,
};
console.log(`TutionFee: ${tutionFee[answer.courses]}`);
console.log(`My Balance: ${myBalance}`);
let PaymentType = await inquirer.prompt([
    {
        name: "Payment",
        type: "list",
        message: "Select Payment Method",
        choices: ["Bank Transfer", "Jazz Cash", "Easy Paisa"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        }
    }
]);
console.log(`You select payment method ${PaymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(PaymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations! You have successfully enrolled in ${answer.courses}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("Status");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("Exiting Student Management System");
    }
}
else {
    console.log(`invalid amount due to course`);
}
;
