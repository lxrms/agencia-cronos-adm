function Formulario({ tipo = "" }) {
  return (
    <form id="formulario">
      <div className="form-group">
        <label>Nome do Servico</label>
        <input
          type="text"
          className="form-control"
          id={`nomeServico${tipo}`}
          placeholder="Digite o nome do Servico"
        />
      </div>
      <label>URL da Imagem</label>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id={`imgServico${tipo}`}
          placeholder="Digite a URL da Imagem"
        />
      </div>
      <label>Descição do Servico</label>
      <div className="form-group">
        <textarea
          type="text"
          className="form-control"
          id={`descricaoServico${tipo}`}
          placeholder="Digite a Descrição do Servicos"
        ></textarea>
      </div>
    </form>
  );
}

export default Formulario;
