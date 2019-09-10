import React, { Component } from 'react';

export class Index extends Component {



  render() {
    return (
      <header>
          <img src="/img/webmotors.svg"/>
          <div className="row header-pesquisa">
              {/* NÃO ENCONTREI OS ICONES CERTOS */}
              <div className="col-md-3 button-header selected" id="carros" >
                  <span>COMPRAR</span><br/>
                  CARROS
              </div>
              <div className="col-md-3 button-header" id="motos">
              <span>COMPRAR</span><br/>
                  MOTOS
              </div>
              <div className="col-md-2 offset-md-3">
                  <button className="sell-car">Vender meu carro</button>
              </div>
          </div>
      </header>
    )
  }
};

export default Index;
