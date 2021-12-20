function Formulario() {
  return (
    <form>
      <div className="form-group">
        <label>Nome do Curso</label>
        <input
          type="text"
          className="form-control"
          id="nomeCurso"
          placeholder="Digite o nome do Curso"
        />
      </div>
      <label>URL da Imagem</label>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="imgCurso"
          placeholder="Digite a URL da Imagem"
        />
      </div>
      <label>Descição do Curso</label>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="descricaoCurso"
          placeholder="Digite a URL da Imagem"
        />
      </div>
    </form>
  );
}

export default Formulario;
