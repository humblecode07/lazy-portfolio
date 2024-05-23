const firebaseConfig = {
    apiKey: "AIzaSyCECOs7WrWX24FtHqBTU3kpIYaLHb54kRc",
    authDomain: "portfolio-9c67a.firebaseapp.com",
    databaseURL: "https://portfolio-9c67a-default-rtdb.firebaseio.com",
    projectId: "portfolio-9c67a",
    storageBucket: "portfolio-9c67a.appspot.com",
    messagingSenderId: "677788584310",
    appId: "1:677788584310:web:77ddd7aaa93077f39b5257",
    measurementId: "G-DZ2ZLYEMHJ"
};

firebase.initializeApp(firebaseConfig)

const contactDB = firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener('submit', submitForm)

console.log(document.getElementById('contactForm'))

function submitForm(e) {
    e.preventDefault();

    let email = getElementVal('email')
    let message = getElementVal('message')

    saveForm(email, message);
}

const saveForm = (email, message) => {
    const newSaveForm = contactDB.push();
    
    newSaveForm.set({
        email,
        message
    })

    document.getElementById('check').style.display = 'block'

    setTimeout(() => {
        document.getElementById('check').style.display = 'none'
    }, 3000)

    document.getElementById('contactForm').reset();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}