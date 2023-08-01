//Login Form
const loginBtn = document.getElementById('btn');
const user = document.getElementById('user')
const password = document.getElementById('password');
let form = document.getElementById('signin-form');
let loginContent = document.getElementById('content-login');

//Registration Form
const registrationContent = document.getElementById('content-registration');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const course = document.getElementById('course');
const registerBtn = document.getElementById('register');
const logoutBtn = document.getElementById('logout');

//Display Users
const listContent = document.getElementById('content-list');

let loggedIn = false;

//Original Student List 
let students = [];

class User {
    constructor(first, last) {
        this.name = { first, last };
    }
}

class Student extends User {
    constructor(first, last, course) {
        super(first, last)
        this.course = course;
    }
    //Set Students
    static setStudent = (student) => {
        students.push(student);
        window.sessionStorage.setItem('Student', JSON.stringify(students));
    }

    //Get Students
    static getStudents = () => {
        let students;

        if (sessionStorage.getItem('student') === null) {
            students = [];
        } else {
            students = JSON.parse(sessionStorage.getItem('student'));
        }
        return students;
    }

    static addStudents = (student) => {
        const list = document.getElementById('user-list');
        listContent.classList.add('active');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class='td-name'>${student.name.first} ${student.name.last}</td>
            <td class='td-course'>${student.course}</td>
            `;
        list.appendChild(row)
    }
}


//Events
//Log In Username: Admin Password: Admin
loginBtn.addEventListener('click', () => {
    if (loggedIn === false && user.value === '' && password.value === '') {
        loggedIn = true;
        registrationContent.classList.add('active');
        loginContent.classList.remove('active');
    } else {
        alert('Incorrect Username and/ or Password')
    }
})

//Create New Student Object
registerBtn.addEventListener('click', () => {
    const student = new Student(firstName.value, lastName.value, course.value);
    Student.setStudent(student);
    Student.getStudents()
    Student.addStudents(student);
    firstName.value = '';
    lastName.value = '';
    course.value = '';
})

//Logout
logoutBtn.addEventListener('click', () => window.location.reload())
