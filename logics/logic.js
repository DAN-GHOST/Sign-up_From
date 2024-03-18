//Estas son las funciones que permiten evaluar la información que los usuarios han suministrado en el formulario.
function checkphoneNum(phoneNum){
    if(phoneNum === "") return false;
    const formato = /[!@#$%^&*_=[\]{};':"\|,.<>/?]+/;
    return !(formato.test(phoneNum));
}

function checkFirstNameOrLastName(string){
    if(string === "") return false;
    const formato = /[!@#$%^&*()_+-=[\]{};':"\|,.<>/?]+/;
    return !(formato.test(string));
}

function checkPasswordAndConfirPassword (PasswordText,ConfirPasswordText){
    if(PasswordText === "" || ConfirPasswordText === "") return false;
    let arrPass = Array.from(PasswordText);
    let arrConPass = Array.from(ConfirPasswordText);
    return PasswordText.length === ConfirPasswordText.length && arrPass.every((v,i)=>{ return v === arrConPass[i]});
}

function checkEmail (Email){
    const formato = /[@]/;
    if(!(formato.test(Email))) return false;
    let subCadena1 = Email.split("@");
    let subCadena2 = subCadena1[1].split('.');
    if(subCadena2[1] === 'edu'){
        return true;
    }else{
        const secureEmailProviders = [ 'hotmail','outlook','gmail','protonmail', 'tutanota', 'mailfence', 'startmail', 'zoho', 'hushmail','mailbox','hubspot','yahoo','fastmail','aol'];
        for(let i = 0; i < secureEmailProviders.length - 1; i++){
            if(subCadena2[0] === secureEmailProviders[i]) return true;
        }
    }
    return false;
}
//EVENTO que permite verificar que la información suministrada en formulario sea correcta y que esta sea enviada, en el caso contrario no envía nada e informa al usuario que debe corregir el problema.
const Form = document.getElementById('Form_Sign-up');
Form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const firstName = document.getElementById('FirstName');
    const lastname = document.getElementById('LastName');
    const email = document.getElementById('Email');
    const phoneNum = document.getElementById('PhoneNumber');
    const password = document.getElementById('Password');
    const confirPassword = document.getElementById('ConfirPassword');
    let valuePass = checkPasswordAndConfirPassword(password.value,confirPassword.value);
    let valueEmail = checkEmail(email.value);
    let valuePhoneNum = checkphoneNum(phoneNum.value);
    let valueFisrtName = checkFirstNameOrLastName(firstName.value);
    let valueLastName = checkFirstNameOrLastName(lastname.value);
    if(valuePass === true && valueEmail === true && valueFisrtName === true && valueLastName === true && valuePhoneNum === true){
        Form.submit();
    }else{
        const infotext_FirstName = document.querySelector('.infotext_FirstName');
        const infotext_LastName = document.querySelector('.infotext_LastName');
        const infotext_Email = document.querySelector('.infotext_Email');
        const infotext_PhoneNum = document.querySelector('.infotext_PhoneNumber');
        const infotext_Password = document.querySelector('.infotext_Password');
        const infotext_ConfirPassword = document.querySelector('.infotext_ConfirPassword');
        if (valueFisrtName === false) infotext_FirstName.textContent = 'Están mal escritos los nombres.';
        if(valueLastName === false) infotext_LastName.textContent = 'Están mal escritos los apellidos.';
        if(valueEmail === false) infotext_Email.textContent = 'El correo está mal escrito.';
        if(phoneNum === false) infotext_PhoneNum.textContent = 'El número está mal escrito.';
        if(valuePass === false){
            infotext_Password.textContent = 'La contraseña no coincide.';
            infotext_ConfirPassword.textContent = 'La contraseña no coincide.';
        }
    }
});

//Enventos de control para limpiar la información que el comunica al usario que hay un error.
const firstName = document.getElementById('FirstName');
firstName.addEventListener('click',()=>{document.querySelector('.infotext_FirstName').textContent ='';});
const lastname = document.getElementById('LastName');
lastname.addEventListener('click',()=>{document.querySelector('.infotext_LastName').textContent = '';});
const email = document.getElementById('Email');
email.addEventListener('click',()=>{document.querySelector('.infotext_Email').textContent = '';});
const phoneNumber = document.getElementById('PhoneNumber');
phoneNumber.addEventListener('click',()=>{document.querySelector('.infotext_PhoneNumber').textContent = '';});
const password = document.getElementById('Password');
const confirPassword = document.getElementById('ConfirPassword');
confirPassword.addEventListener('click',()=>{document.querySelector('.infotext_ConfirPassword').textContent = '';});
password.addEventListener('click',()=>{
    document.querySelector('.infotext_Password').textContent = '';
    document.querySelector('.infotext_ConfirPassword').textContent = '';
});

// Eventos de control para limpiar los inputs que resiben la información.
firstName.addEventListener('dblclick',()=>{firstName.value = '';});
lastname.addEventListener('dblclick',()=>{lastname.value = '';});
email.addEventListener('dblclick',()=>{email.value = '';});
phoneNumber.addEventListener('dblclick',()=>{phoneNumber.value = '';});
confirPassword.addEventListener('dblclick',()=>{confirPassword.value = '';});
password.addEventListener('dblclick',()=>{
    password.value = '';
    document.getElementById('ConfirPassword').value = '';
});