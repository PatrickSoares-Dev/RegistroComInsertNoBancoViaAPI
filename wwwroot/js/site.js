let $btn = document.querySelector(".btn")
let $username = document.querySelector("#username")
let $email = document.querySelector("#email")
let $password = document.querySelector("#password")
let $confirmPassword = document.querySelector("#confirmPassword")

let $sUsername = document.querySelector("#sUsername")
let $sEmail = document.querySelector("#sEmail")
let $sPassword = document.querySelector("#sPassword")
let $sConfirmPassword = document.querySelector("#sConfirmPassword")

let $inputGroup = document.querySelector(".form")
let $inputGroup1 = document.querySelector("#smallPassword")
let GroupChild = $inputGroup.children

let status = 'false';

let usertrue = 0
let emailTrue = 0
let passwordTrue = 0
let confirmeTrue = 0

$username.addEventListener('input', function () {

    if ($username.value.length < 6) {
        GroupChild[0].style = "border-bottom: 3px solid #FF0000"
        GroupChild[1].textContent = "Insira no mínimo 6 caracteres."
        usertrue = 0
        btnDisable()

    } else {
        GroupChild[0].style = "border-bottom: 3px solid green"
        GroupChild[1].textContent = ""
        usertrue = 1
        btnDisable()
    }
})

function validate() {

    if ($username.value.length == 0) {
        GroupChild[0].style = "border-bottom: 3px solid #FF0000"
        GroupChild[1].textContent = "Campo obrigatório. Por favor, insira um usuário de no minimo 6 caracteres."
    } else {
        GroupChild[0].style = "border-bottom: 1px solid #e5e5e5;"
        GroupChild[1].textContent = ""
    }

    if ($email.value.length == 0) {
        GroupChild[2].style = "border-bottom: 3px solid #FF0000"
        GroupChild[3].textContent = "Campo obrigatório. Por favor, insira um e-mail."
    } else {
        GroupChild[2].style = "border-bottom: 1px solid #e5e5e5;"
        GroupChild[3].textContent = ""
    }

    if ($password.value.length == 0) {
        GroupChild[4].style = "border-bottom: 3px solid #FF0000"
        GroupChild[5].textContent = "Campo obrigatório. Por favor, insira uma senha."
    } else {
        GroupChild[4].style = "border-bottom: 1px solid #e5e5e5;"
        GroupChild[5].textContent = ""
    }

    if ($confirmPassword.value.length == 0) {
        GroupChild[6].style = "border-bottom: 3px solid #FF0000"
        GroupChild[7].textContent = "Campo obrigatório. Por favor, Confirme sua senha."
    } else {
        GroupChild[6].style = "border-bottom: 1px solid #e5e5e5;"
        GroupChild[7].textContent = ""
    }
}

$confirmPassword.addEventListener('input', validatePassword)

function validatePassword() {
    btnDisable()
    if ($password.value != $confirmPassword.value) {
        GroupChild[6].style = "border-bottom: 3px solid #FF0000"
        GroupChild[7].textContent = "As senhas não conferem."
        confirmeTrue = 0
        btnDisable()
    }

    else {
        GroupChild[6].style = "border-bottom: 3px solid green;"
        GroupChild[7].textContent = ""
        confirmeTrue = 1
        btnDisable()
    }
}

function verificaForcaSenha() {
    $sPassword.textContent = "Senha precisa conter pelo menos 8 caracteres, sendo ao menos 1 número, 1 letra minúscula, 1 letra maiúscula e 1 caractere especial."
    $sPassword.style = "color: #e5e5e5;"

    var numeros = /([0-9])/;
    var alfabeto = /([a-zA-Z])/;
    var alfabetoM = /([A-Z])/;
    var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    if ($('#password').val().length <= 8) {
        GroupChild[4].style = "border-bottom: 3px solid red"
        $sPassword.textContent = "Insira no mínimo 8 caracteres."
        $sPassword.style = "color: red; "
        $inputGroup.style = "margin-top: 10rem"
        passwordTrue = 0
        btnDisable()
    } else {
        if ($('#password').val().match(numeros) && $('#password').val().match(alfabeto) && $('#password').val().match(alfabetoM) && $('#password').val().match(chEspeciais)) {
            GroupChild[4].style = "border-bottom: 3px solid green"
            $sPassword.textContent = "Senha Forte."
            $sPassword.style = "color: green;"

            passwordTrue = 1
            btnDisable()
        }
        else if ($('#password').val().match(numeros) && $('#password').val().match(alfabeto) && $('#password').val().match(alfabetoM)) {
            GroupChild[4].style = "border-bottom: 3px solid orange"
            $sPassword.textContent = "Médio, Insira um caracter especial."
            $sPassword.style = "color: orange;"
            passwordTrue = 0
            btnDisable()
        } else {
            GroupChild[4].style = "border-bottom: 3px solid blue"
            $sPassword.textContent = "Médio, Insira uma letra maiúscula."
            $sPassword.style = "color: blue;"
            passwordTrue = 0
            btnDisable()
        }
    }
}

$password.addEventListener('input', verificaForcaSenha)

function validacaoEmail(field) {
    btnDisable()
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        GroupChild[2].style = "border-bottom: 3px solid green"
        GroupChild[3].textContent = ""
        emailTrue = 1
        btnDisable()
    } else {
        GroupChild[2].style = "border-bottom: 3px solid #FF0000"
        GroupChild[3].textContent = "Insira um e-mail válido."
        emailTrue = 0
        btnDisable()
    }
}

function btnDisable() {
    if (usertrue == 1 && emailTrue == 1 && passwordTrue == 1 && confirmeTrue == 1) {
        $btn.disabled = false
        $btn.style = "cursor: pointer;"
    } else {
        $btn.disabled = true
        $btn.style = "cursor: not-allowed;"
    }
}

$btn.addEventListener('click', validateUser)

function CreateSucess() {
    document.querySelector("#messenger").style = 'margin-bottom: -6.5rem !important;'
    document.querySelector("#createText").textContent = 'Conta criada com sucesso.'
    document.querySelector("#createText").style = 'color: green;'
    document.querySelector(".loader").style.display = 'none'
    $email.value = ''
    $password.value = ''
    $username.value = ''
    $confirmPassword.value = ''
    $btn.disabled = true
    $btn.style = "cursor: not-allowed;"
}
 

function validateUser() {
    let dataObj = { Email: $email.value, Username: $username.value }
    $.ajax({
        url: '/infoemailoruser',
        type: 'POST',
        data: dataObj,
        success: function (data) {

            console.log(data.content)

            switch (data.content) {
                case '{"result":"Email already registered"}':
                    GroupChild[2].style = "border-bottom: 3px solid #FF0000"
                    GroupChild[3].textContent = "Email já cadastrado. Tente usar outro email."
                    break
                case '{"result":"UserName already registered"}':
                    GroupChild[0].style = "border-bottom: 3px solid #FF0000"
                    GroupChild[1].textContent = "Usuário já cadastrado. Tenta usar outro nome de usuário."
                    break
                default:             
                    
                    let BRL = 'BRL'
                    let dataCreate = { email: $email.value, password: $password.value , currency: BRL, accountName: $username.value }
                    let messenger = document.querySelector("#messenger")
                    messenger.style = 'display: block !important;'

                    console.log(dataCreate)
                    $.ajax({
                        url: '/createaccount',
                        type: 'POST',
                        data: dataCreate,
                        success: function (data) {                           

                            setTimeout(function () {
                                let messenger = document.querySelector("#messenger")
                                messenger.style = 'display: block !important;'
                                CreateSucess()
                            }, 3000)     
                      
                        },
                        error: function () {
                            document.querySelector("#createText").textContent = 'Erro ao criar a conta. Tente novamente mais tarde.'
                        }
                    });

            }



        },
        error: function () {
            let messenger = document.querySelector("#messenger")
            messenger.style = 'display: block;'
            document.querySelector("#createText").textContent = 'Ocorreu um erro ao criar a conta. Tente novamente mais tarde.'
        }
    });
}


