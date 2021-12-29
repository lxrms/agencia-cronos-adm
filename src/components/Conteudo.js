import TabelaServicos from "./TabelaServicos";

function Conteudo() {
  return (
    <main id="servicos" className="py-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Serviços</h3>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modalCadastro"
            >
              Adicionar novo
            </button>
            <div id="cadastradoComSucesso"></div>
            <TabelaServicos />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Conteudo;
