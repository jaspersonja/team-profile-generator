const fs = require('fs');
const inquirer = require('inquirer');
const { rootCertificates } = require('tls');


const employeeCard = ({ name, id, email }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${name}</h1>
    <p class="lead">ID #:${id}.</p>
    <div>
        // ====================================MANAGER, ENGINEER, INTERN GO HERE====================================================
    </div>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">E-mail: ${email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

const managerCard = `<p class="lead">Office #:${officeNumber}.</p>`


inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please select a role!',
            choices: ['Manager', 'Engineer', 'Intern']

        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID #:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email:',
        },

    ]


    )
if (choice = 'Manager') {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Manager office #:'
            }
        ]);
}
if (choice = 'Engineer') {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Engineer Github profile:'
            }
        ]);
}
if (choice = 'Intern') {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internSchool',
                message: 'Intern School:'
            }
        ]);
}
  
  .then((answers) => {
    const htmlPageContent = managerCard(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
});


([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
    },
    {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
    },
])
    .then((answers) => {
        const htmlPageContent = employeeCard(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });