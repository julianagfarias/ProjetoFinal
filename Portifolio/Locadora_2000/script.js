function insere(){
	let cod = document.forms["cadastrar"]["codigo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let tit = document.forms["cadastrar"]["titulo"].value;
	let dir = document.forms["cadastrar"]["diretor"].value;
	let rad = document.forms["cadastrar"]["radio"].value;
	let ator = document.forms["cadastrar"]["ator"].value;
	let imdb = document.forms["cadastrar"]["imdb"].value;
	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${cod}</th>`;
	inserir.innerHTML += `<td>${tit}</td>`;
	inserir.innerHTML += `<td>${dir}</td>`;
	inserir.innerHTML += `<td>${data}</td>`;
	inserir.innerHTML += `<td>${rad}</td>`;
	inserir.innerHTML += `<td>${ator}</td>`;
	inserir.innerHTML += `<td>${imdb}</td>`;

}



function validarForm(){
	let validaCod = document.forms["cadastrar"]["codigo"].value;

	if(validaCod == ""){
		window.alert("O código deve ser preenchido");
		return false;
	}

	let validaData = document.forms["cadastrar"]["data"].value;

	if(validaData == ""){
		window.alert("A data deve ser preenchida");
		return false;
	}

	let validaTit = document.forms["cadastrar"]["titulo"].value;

	if(validaTit == ""){
		window.alert("O título deve ser preenchido");
		return false;
	}

	let validaDir = document.forms["cadastrar"]["diretor"].value;

	if(validaDir == ""){
		window.alert("O diretor deve ser preenchido");
		return false;
	}

	let validaGen = document.forms["cadastrar"]["radio"].value;

	if(validaCod == ""){
		window.alert("O gênero deve ser preenchido");
		return false;
	}

	let validaAtor = document.forms["cadastrar"]["ator"].value;

	if(validaAtor == ""){
		window.alert("O ator/atriz deve ser preenchido");
		return false;
	}

	let validaIMDb = document.forms["cadastrar"]["imdb"].value;

	if(validaIMDb == ""){
		window.alert("O IMDb deve ser preenchido");
		return false;
	}

}

