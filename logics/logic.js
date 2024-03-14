function checkFirstNameOrLastName(string){
    const formato = /[!@#$%^&*()_+-=[\]{};':"\|,.<>/?]+/;
    return !(formato.test(string));
}

function checkPasswordAndConfirPassword (PasswordText,ConfirPasswordText){
    let arrPass = Array.from(PasswordText);
    let arrConPass = Array.from(ConfirPasswordText);
    if(PasswordText === "" || ConfirPasswordText === "") return false;
    return PasswordText.length === ConfirPasswordText.length && arrPass.every((v,i)=>{ return v === arrConPass[i]});
}

function checkEmail (Email){
    const formato = /[@]/;
    if(!(formato.test(Email))) return false;
    const secureEmailProviders = [ 'protonmail', 'tutanota', 'mailfence', 'startmail', 'zoho', 'hushmail', 'mailbox','hubspot','gmail','yahoo','outlook','fastmail','aol'];
    let subCadena1 = Email.split("@");
    let subCadena2 = subCadena1[1].split('.');
    if(subCadena2[1] === 'edu'){
        console.log('edu si funciona');
        return true;
    }else{
        for(let i = 0; i < secureEmailProviders.length - 1; i++){
            if(subCadena2[0] === secureEmailProviders[i]){
                return true;
            }
        }
    }
    return false;
}

const Form = document.getElementById('Form_Sign-up');
Form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const firstName = document.getElementById('FirstName');
    const lastname = document.getElementById('LastName');
    const email = document.getElementById('Email');
    const Password = document.getElementById('Password');
    const ConfirPassword = document.getElementById('ConfirPassword');
    let valuePass = checkPasswordAndConfirPassword(Password.value,ConfirPassword.value);
    let valueEmail = checkEmail(email.value);
    let valueFisrtName = checkFirstNameOrLastName(firstName.value);
    let valueLastName = checkFirstNameOrLastName(lastname.value);
    if(valuePass === true && valueEmail === true && valueFisrtName === true && valueLastName === true){
        Form.submit();
    }else{
        alert('No sale');
    }
});