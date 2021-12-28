import Formulario from "./Formulario";

function ModalEditar() {
  return (
    <div
      className="modal fade"
      id="modalEditar"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Serviço</h5>
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
            <Formulario tipo="Editar" />
            <div id="criarAlertaEditar"></div>
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
            <button
              id="btnEditarCurso"
              type="button"
              className="btn btn-primary"
            >
              Salvar Edição
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditar;
