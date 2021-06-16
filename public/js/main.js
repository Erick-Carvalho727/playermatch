const signUpButtonOverlay = document.getElementById('sign-up');
const signInButtonOverlay = document.getElementById('sign-in');
const signUpButton = document.getElementById('signup');
const signUpButton2 = document.getElementById('signup2');
const signUpButton3 = document.getElementById('signup3');
const container = document.getElementById('container');

signUpButtonOverlay.addEventListener('click', () => container.classList.add('right-panel-active')
);

signInButtonOverlay.addEventListener('click', () => container.classList.remove('right-panel-active')
);

signUpButton.addEventListener('click', () => {
	let inputLogin = document.getElementById("username-sign-up");
	let inputEmail = document.getElementById("email");
	let inputSenha = document.getElementById("password-sign-up");
	let inputConfirmarSenha = document.getElementById("re-password");

	let login = inputLogin.value;
	let email = inputEmail.value;
	let senha = inputSenha.value;
	let confirmarSenha = inputConfirmarSenha.value;

	if (!login) {
	  Swal.fire("Oops...", "Usuário inválido!", "error");
	  return;
	}

	if (!email) {
	  Swal.fire("Oops...", "E-mail inválido!", "error");
	  return;
	}

	if (!senha) {
	  Swal.fire("Oops...", "Senha inválida!", "error");
	  return;
	}

	if (senha !== confirmarSenha) {
	  Swal.fire("Oops...", "Senhas não conferem!", "error");
	  return;
	}

	container.classList.add('left-panel-active');
});

signUpButton2.addEventListener('click', () => container.classList.add('left-panel-active2')
);

signUpButton3.addEventListener('click', () => {
	let inputLogin = document.getElementById("username-sign-up");
	let inputEmail = document.getElementById("email");
	let inputSenha = document.getElementById("password-sign-up");
	let inputConfirmarSenha = document.getElementById("re-password");

	let login = inputLogin.value;
	let email = inputEmail.value;
	let senha = inputSenha.value;
	let confirmarSenha = inputConfirmarSenha.value;

	let usuario = {
	  "login": login,
	  "email": email,
	  "senha": senha
	};

	let opcoes = {
	  url: "/api/usuario/criar",
	  method: "post",
	  data: usuario,
	  success: function (dados) {

		Swal.fire("Sucesso!", "Usuário cadastrado com sucesso!", "success");

	  },
	  error: function () {

		Swal.fire("Oops...", "Algo deu errado!", "error");

	  }
	};

	$.ajax(opcoes);
});
