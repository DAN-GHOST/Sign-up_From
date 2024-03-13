
function checkPasswordAndConfirPassword (PasswordText,ConfirPasswordText){
    let arrPass = Array.from(PasswordText);
    let arrConPass = Array.from(ConfirPasswordText);
    let getComparison = PasswordText.length === ConfirPasswordText.length && arrPass.every((v,i)=>{ return v === arrConPass[i]});
    console.log(getComparison);
}
const BotonEnviar = document.getElementById('BotonEnviar');
BotonEnviar.addEventListener('click', ()=>{
    const Email = document.getElementById('Email');
    const Password = document.getElementById('Password');
    const ConfirPassword = document.getElementById('ConfirPassword');
    let valuePass = checkPasswordAndConfirPassword (Password.value,ConfirPassword.value);
    let valueEmail = checkPasswordAndConfirPassword ();
});