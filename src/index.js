import React from 'react';
import ReactDOM from 'react-dom';
import './css/estilo.css'
import './css/palette.css'

ReactDOM.render(
  <React.StrictMode>
    <header>
      <div className="container">
        <a href="#">
          <img src="imagens/CRONOS-logo-white.png" alt="Agência CRONOS" />
        </a>
        <h1>Painel administrativo</h1>
      </div>
    </header>
    <section id="servicos" className="py-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Serviços</h3>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Adicionar novo
            </button>
            <table className="table my-5">
              <thead>
                <tr>
                  <td>Nome</td>
                  <td>Imagem</td>
                  <td>Descrição</td>
                  <td>Ações</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desenvolvimento Web</td>
                  <td><img src="imagens/ilustra-web.png" className="img-fluid" /></td>
                  <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>
                  <td>
                    <button className="btn btn-secondary m-1">editar</button>
                    <button className="btn btn-danger m-1">excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>Marketing Digital</td>
                  <td><img src="imagens/ilustra-marketing.png" className="img-fluid" /></td>
                  <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>
                  <td>
                    <button className="btn btn-secondary m-1">editar</button>
                    <button className="btn btn-danger m-1">excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>Consultoria UX</td>
                  <td><img src="imagens/ilustra-ux.png" className="img-fluid" /></td>
                  <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>
                  <td>
                    <button className="btn btn-secondary m-1">editar</button>
                    <button className="btn btn-danger m-1">excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <footer className="py-3 bg-light">
      <div className="container text-center">
        <p className="m-0">
          copyright 2021
          <img src="imagens/favicon.png" width="30" alt="" /> agência CRONOS
        </p>
      </div>
    </footer>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Adicionar Serviço</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
            <button type="button" className="btn btn-primary">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
