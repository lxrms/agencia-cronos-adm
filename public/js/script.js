window.onload = function () {
  //Lista de Cursos
  let listaCursos = [];

  //Acessando botões
  let btnSalvarCurso = document.querySelector("#btnSalvar");
  let btnEditarCurso = document.querySelector("#btnEditarCurso");

  //Criar Alerta
  function criarAlerta(idAlerta, texto) {
    const alerta = document.querySelector(idAlerta);
    alerta.innerHTML = "";
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
      criarAlerta("#criarAlerta", "Ops! Preencha todos os campos!");
    } else {
      let curso = {
        nome: nomeCurso,
        imagem: imgCurso,
        descricao: descricaoCurso,
      };

      const cursoindex = listaCursos.push(curso) - 1;

      const novoCurso = document.createElement("tr");
      novoCurso.id = "curso-index" + cursoindex;
      novoCurso.innerHTML = `
      <td class="cursoNome">${nomeCurso}</td>
      <td>
        <img src="${imgCurso}" class="img-fluid cursoImg" />
      </td>
      <td class="cursoDescricao">${descricaoCurso}</td>
      <td>
        <button class="btn btn-secondary m-1" onclick="editarCurso(${cursoindex})">editar</button>
        <button class="btn btn-danger m-1" >excluir</button>
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
  

  // Função editar curso
  window.editarCurso = function editarCurso(cursoindex) {
    $("#modalEditar").modal("show");

    let novoNomeCurso = document.querySelector("#nomeCursoEditar");
    let novoImgCurso = document.querySelector("#imgCursoEditar");
    let novoDescricaoCurso = document.querySelector("#descricaoCursoEditar");

    // Pegando o valor atual do curso para mostrar no form do modal
    novoNomeCurso.value = listaCursos[cursoindex].nome;
    novoImgCurso.value = listaCursos[cursoindex].imagem;
    novoDescricaoCurso.value = listaCursos[cursoindex].descricao;

    //evento
    btnEditarCurso.addEventListener("click", editarCurso);
    $("#modalEditar").on("hide.bs.modal", function () {
      btnEditarCurso.removeEventListener("click", editarCurso);
    });

    function editarCurso() {
      const curso = listaCursos[cursoindex];

      curso.nome = novoNomeCurso.value;
      curso.imagem = novoImgCurso.value;
      curso.descricao = novoDescricaoCurso.value;

      if (curso.nome == "" || curso.imagem == "" || curso.descricao == "") {

        criarAlerta("#criarAlertaEditar", "Ops! Preencha todos os campos!");
      } else {
        let cursoEditado = document.querySelector(`#curso-index${cursoindex}`);
        // Atualizando o nome do curso
        const cursoNome = cursoEditado.querySelector(".cursoNome");
        cursoNome.textContent = curso.nome;

        // Atualizando a imagem do curso
        const cursoImg = cursoEditado.querySelector(".cursoImg");
        cursoImg.src = curso.imagem;

        // Atualizando a descrição do curso
        const cursoDescricao = cursoEditado.querySelector(".cursoDescricao");
        cursoDescricao.textContent = curso.descricao;

        $("#modalEditar").modal("hide");
      }
    }
  };
};
