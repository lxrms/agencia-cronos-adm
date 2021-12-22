import Formulario from "./Formulario";

function ModalCadastro() {
  return (
    <div
      className="modal fade"
      id="modalCadastro"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Adicionar Serviço
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Formulario />
            <div id="criarAlerta"></div>
          </div>
          <div className="modal-footer">
            <button
              id="cancelar"
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Fechar
            </button>
            <button id="btnSalvar" type="button" className="btn btn-primary">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCadastro;
