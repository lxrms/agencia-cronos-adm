window.onload = function () {
  //Lista de Cursos
  let listaCursos = [];

  //Acessando botões
  let btnSalvarCurso = document.querySelector("#btnSalvar");
  let btnCancelarCadastroCurso = document.querySelector("#cancelar");

  //Função Criar Novo Curso
  const cadastrarCurso = () => {
    let nomeCurso = document.querySelector("#nomeCurso").value;
    let imgCurso = document.querySelector("#imgCurso").value;
    let descricaoCurso = document.querySelector("#descricaoCurso").value;

    if (nomeCurso == "" || imgCurso == "" || descricaoCurso == "") {
      const modalCadastro = document.querySelector(
        "#modalCadastro div.modal-body"
      );
      const alerta = document.createElement("div");
      alerta.classList.add("alert", "alert-danger");
      alerta.innerText = "Preencha todos os Campos!";
      modalCadastro.appendChild(alerta);
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

      document.querySelector("#tabelaCursos tbody").appendChild(novoCurso);
      console.log(listaCursos);
    }
  };

  //Eventos
  btnSalvarCurso.addEventListener("click", cadastrarCurso);
};

//Lista de Cursos

//Funções Criar Curso
