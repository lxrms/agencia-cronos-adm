window.onload = function () {
  const listaServicosRenderizada = document.querySelector("#tabelaServicos tbody")
  
  //Lista de Servicos
  let listaServicos = [
    {nome: 'Desenvolvimento Web', imagem: 'imagens/ilustra-marketing.png', descricao: 'Consequatur debitis ipsa numquam illum placeat quod deleniti.'},
    {nome: 'Marketing Digital', imagem: 'imagens/ilustra-marketing.png', descricao: 'Consequatur debitis ipsa numquam illum placeat quod deleniti.'},
    {nome: 'Consultoria UX', imagem: 'imagens/ilustra-ux.png', descricao: 'Consequatur debitis ipsa numquam illum placeat quod deleniti.'},
  ];


  //Acessando botões
  let btnSalvarServico = document.querySelector("#btnSalvar");
  let btnEditarServico = document.querySelector("#btnEditarServico");

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

  //Função Criar Novo Servico
  const cadastrarServico = () => {
    let nomeServico = document.querySelector("#nomeServico").value;
    let imgServico = document.querySelector("#imgServico").value;
    let descricaoServico = document.querySelector("#descricaoServico").value;

    if (nomeServico == "" || imgServico == "" || descricaoServico == "") {
      criarAlerta("#criarAlerta", "Ops! Preencha todos os campos!");
    } else {
      let servico = {
        nome: nomeServico,
        imagem: imgServico,
        descricao: descricaoServico,
      };

      const servicoindex = listaServicos.push(servico) - 1;

      const novoServico = document.createElement("tr");
      novoServico.id = "servico-index" + servicoindex;
      novoServico.innerHTML = `
      <td class="servicoNome">${nomeServico}</td>
      <td>
        <img src="${imgServico}" class="img-fluid servicoImg" />
      </td>
      <td class="servicoDescricao">${descricaoServico}</td>
      <td>
        <button class="btn btn-secondary m-1" onclick="editarServico(${servicoindex})">editar</button>
        <button class="btn btn-danger m-1" >excluir</button>
      </td>
    `;


      $("#modalCadastro").modal("hide");
      document.getElementById("cadastradoComSucesso").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Servico - <strong>${nomeServico}</strong> - Cadastrado com Sucesso!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      `;
      document.getElementById("formulario").reset();
      document.querySelector("#tabelaServicos tbody").appendChild(novoServico);
      console.log(listaServicos);
    }
  };

  //Eventos
  btnSalvarServico.addEventListener("click", cadastrarServico);
  

  // Função editar servico
  window.editarServico = function editarServico(servicoindex) {
    $("#modalEditar").modal("show");

    let novoNomeServico = document.querySelector("#nomeServicoEditar");
    let novoImgServico = document.querySelector("#imgServicoEditar");
    let novoDescricaoServico = document.querySelector("#descricaoServicoEditar");

    // Pegando o valor atual do servico para mostrar no form do modal
    novoNomeServico.value = listaServicos[servicoindex].nome;
    novoImgServico.value = listaServicos[servicoindex].imagem;
    novoDescricaoServico.value = listaServicos[servicoindex].descricao;

    //evento
    btnEditarServico.addEventListener("click", editarServico);
    $("#modalEditar").on("hide.bs.modal", function () {
      btnEditarServico.removeEventListener("click", editarServico);
    });

    function editarServico() {
      const servico = listaServicos[servicoindex];

      servico.nome = novoNomeServico.value;
      servico.imagem = novoImgServico.value;
      servico.descricao = novoDescricaoServico.value;

      if (servico.nome == "" || servico.imagem == "" || servico.descricao == "") {

        criarAlerta("#criarAlertaEditar", "Ops! Preencha todos os campos!");
      } else {
        let servicoEditado = document.querySelector(`#servico-index${servicoindex}`);
        // Atualizando o nome do servico
        const servicoNome = servicoEditado.querySelector(".servicoNome");
        servicoNome.textContent = servico.nome;

        // Atualizando a imagem do servico
        const servicoImg = servicoEditado.querySelector(".servicoImg");
        servicoImg.src = servico.imagem;

        // Atualizando a descrição do servico
        const servicoDescricao = servicoEditado.querySelector(".servicoDescricao");
        servicoDescricao.textContent = servico.descricao;

        $("#modalEditar").modal("hide");
      }
    }
  };
};
