function Formulario({ tipo = "" }) {
  return (
    <form id="formulario">
      <div className="form-group">
        <label>Nome do Curso</label>
        <input
          type="text"
          className="form-control"
          id={`nomeCurso${tipo}`}
          placeholder="Digite o nome do Curso"
        />
      </div>
      <label>URL da Imagem</label>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id={`imgCurso${tipo}`}
          placeholder="Digite a URL da Imagem"
        />
      </div>
      <label>Descição do Curso</label>
      <div className="form-group">
        <textarea
          type="text"
          className="form-control"
          id={`descricaoCurso${tipo}`}
          placeholder="Digite a Descrição do Cursos"
        ></textarea>
      </div>
    </form>
  );
}

export default Formulario;
