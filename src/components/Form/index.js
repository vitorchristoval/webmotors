import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';

class Index extends Component {

    constructor(props) {
        super(props)
        this.selectMarca = this.selectMarca.bind(this);
        this.selectModel = this.selectModel.bind(this);
        this.state = {
            marcas: [],
            modelo: [],
            versao: [],
        }
    }
    componentDidMount() {
        axios.get(api.url + '/Make').then(response => {
         this.setState({marcas : response.data})
         console.log(response)
        }).catch(error => {
            console.log(error);
        })
    }
    selectMarca(e){
        var _this = this;
        console.log(e.target.value)
        axios.get(api.url + '/Model?MakeID=' + e.target.value).then(response => {
            _this.setState({modelo : response.data})
            console.log(response)
           }).catch(error => {
               console.log(error);
           })
    }
    selectModel(e){
        var _this = this;
        console.log(e.target.value)
        axios.get(api.url + '/Version?ModelID=' + e.target.value).then(response => {
            _this.setState({versao : response.data})
            console.log(response)
           }).catch(error => {
               console.log(error);
           })
    }
    resetForm(){
       
        document.getElementById("form1").reset();
          
    }
    render() {
        return (
            <div id="pesquisa">
                <form id="form1">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="novos" value="novos" />
                        <label className="form-check-label" htmlFor="novos">NOVOS</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="usados" value="usados" />
                        <label className="form-check-label" htmlFor="usados">USADOS</label>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <label className="label-input"><img src="/img/location-pin.svg" width="15" alt="pin"/> Onde: </label>
                            <input className="form-control local" type="text" placeholder="Local" />
                        </div>
                        <div className="col-md-2">
                        <label className="label-raio">Raio: </label>
                            <select className="form-control raio">
                                <option>100KM</option>
                                <option>200KM</option>
                                <option>300KM</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                        <label className="label-marca">Marca: </label>
                            <select className="form-control marca" onChange={this.selectMarca}>
                                <option>Todas</option>
                                {this.state.marcas.map((item,i) => 
                                    <option key={i} value={item.ID}>{item.Name}</option>
                                )}
                            </select>
                        </div>
                        <div className="col-md-3">
                        <label className="label-modelo">Modelo: </label>
                            <select className="form-control modelo" onChange={this.selectModel}>
                            <option>Todas</option>
                                {this.state.modelo.map((item,i) => 
                                    <option key={i} value={item.ID}>{item.Name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="row mt-3 second-line">
                        <div className="col-md-3">
                     
                            <select className="form-control ano">
                                <option>Ano Desejado</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-control faixa">
                                <option>Faixa de Preço</option>
                                <option>R$80.000 - R$90.000</option>
                                <option>R$70.000 - R$80.000</option>
                                <option>R$60.000 - R$70.000</option>
                                <option>R$50.000 - R$60.000</option>
                                <option>R$40.000 - R$50.000</option>
                                <option>R$30.000 - R$40.000</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                        <label className="label-versao">Versão: </label>
                            <select className="form-control versao">
                            <option>Todas</option>
                                {this.state.versao.map((item,i) => 
                                    <option key={i}>{item.Name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="row mt-4 footer-pesquisa">
                        <div className="col-md-6 busca-avancada">
                            <span> > Busca Avançada</span>
                        </div>
                        <div className="col-md-2 limpar-filtro">
                            <a href="#" onClick={() => this.resetForm}>Limpar filtros</a>
                        </div>
                        <div className="col-md-4">
                            <button type="submit">VER OFERTAS</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
};

export default Index;
