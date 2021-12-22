window.onload = function () {
  //Lista de Cursos
  let listaCursos = [];

  //Acessando botões
  let btnSalvarCurso = document.querySelector("#btnSalvar");
  let btnCancelarCadastroCurso = document.querySelector("#cancelar");
  const modalCadastro = document.querySelector("#modalCadastro div.modal-body");
  const alerta = document.querySelector("#criarAlerta");

  //Criar Alerta
  function criarAlerta(texto) {
    alerta.classList.add("alert", "alert-danger");
    const textoAlerta = document.createElement("p");
    const conteudoAlerta = document.createTextNode(texto);

    textoAlerta.appendChild(conteudoAlerta);
    alerta.appendChild(textoAlerta);
  }

  //Função Criar Novo Curso
  const cadastrarCurso = () => {
    let nomeCurso = document.querySelector("#nomeCurso").value;
    let imgCurso = document.querySelector("#imgCurso").value;
    let descricaoCurso = document.querySelector("#descricaoCurso").value;

    if (nomeCurso == "" || imgCurso == "" || descricaoCurso == "") {
      alerta.innerHTML = "";
      criarAlerta("Ops! Preencha todos os campos!");
    } else {
      let curso = {
        nome: nomeCurso,
        imagem: imgCurso,
        descricao: descricaoCurso,
      };

      listaCursos.push(curso);

      const novoCurso = document.createElement("tr");
      novoCurso.innerHTML = `
      <td>${nomeCurso}</td>
      <td>
        <img src="${imgCurso}" class="img-fluid" />
      </td>
      <td>${descricaoCurso}</td>
      <td>
        <button class="btn btn-secondary m-1">editar</button>
        <button class="btn btn-danger m-1">excluir</button>
      </td>
    `;
      $("#modalCadastro").modal("hide");
      document.getElementById("cadastradoComSucesso").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Curso - <strong>${nomeCurso}</strong> - Cadastrado com Sucesso!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      `;
      document.getElementById("formulario").reset();
      document.querySelector("#tabelaCursos tbody").appendChild(novoCurso);
      console.log(listaCursos);
    }
  };

  //Eventos
  btnSalvarCurso.addEventListener("click", cadastrarCurso);
};

//Lista de Cursos

//Funções Criar Curso
