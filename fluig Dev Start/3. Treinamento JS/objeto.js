function externo(){

	var pessoa = {
		Nome :        "André",
		Sobrenome:    "Lucas",
		Departamento: "Frontend"
	};

	document.getElementById("local").innerHTML = 
	pessoa.Nome + " trabalha no " + pessoa.Departamento + "<br />" + "<br />" + pessoa.Nome + " " + pessoa.Sobrenome;
}
