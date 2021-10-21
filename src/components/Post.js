import React from "react";
import ReactDOM from "react-dom";
import { Index } from "../css/index.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            credito:'',
            txAdm:'',
            fundRes:'',
            pctLance:'',
            valTotLance:'',
            prazoAtual:'',
            novoPlano:'',
            creditoLib:'',
            embutido:'',
            parcAtual:'',
            novaParc:'',
            recPagar:'',
            descLance:'',
            saldoDev:'',
            planoPret:'',
            parcPlano:'',
            parcPret:'',
            plano:'',
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    handleChange(event) {
        switch (event.target.attributes[2].nodeValue){
            case 'credito':
            this.setState({ credito: event.target.value });
            break;
            case 'txAdm':
            this.setState({ txAdm: event.target.value });
            break;
            case 'fundRes':
            this.setState({ fundRes: event.target.value });
            break;
            case 'pctLance':
            this.setState({ pctLance: event.target.value });
            break;
            case 'valTotLance':
            this.setState({ valTotLance: event.target.value });
            break;
            case 'prazoAtual':
            this.setState({ prazoAtual: event.target.value });
            break;
            case 'parcAtual':
            this.setState({ parcAtual: event.target.value });
            break;
            case 'descLance':
            this.setState({ descLance: event.target.value });
            break;
            default:
            console.log('Erro');
        }
        
        //this.setState({ novoPlano: event.target.value });
        //this.setState({ creditoLib: event.target.value });
        //this.setState({ embutido: event.target.value });
        //this.setState({ novaParc: event.target.value });
        //this.setState({ recPagar: event.target.value });
        //this.setState({ descLance: event.target.value });
        //this.setState({ saldoDev: event.target.value });
        //this.setState({ planoPret: event.target.value });
        //this.setState({ parcPlano: event.target.value });
        //this.setState({ parcPret: event.target.value });
        //this.setState({ plano: event.target.value });
    }
    
    handleSubmit(event) {
        var vCredito = parseFloat(this.state.credito);
        var vTxAdm = parseFloat(this.state.txAdm.replace(",","."));
        var vFundRes = parseFloat(this.state.fundRes.replace(",","."));
        var vPctLance = parseFloat(this.state.pctLance.replace(",","."));
        
        var totCred = (vCredito * (((vTxAdm + vFundRes) / 100)) + vCredito);
        var vValTotLance = totCred * (vPctLance / 100);
        var vSaldoDev = totCred - vValTotLance - parseFloat(this.state.parcAtual.replace(",","."));
        var vNovaParc = parseFloat(this.state.parcAtual.replace(",",".")) - ((vValTotLance / 2) / (parseInt(this.state.prazoAtual) - 1));
        vNovaParc = vNovaParc.toFixed(2);
        
        if(0 === vNovaParc){
            this.setState({novoPlano: 0});
        }else{
            this.setState({novoPlano: (vSaldoDev / vNovaParc).toFixed(0)});
        }
        
        if(vPctLance >= 30.00){
            this.setState({embutido: totCred * 0.3});
        }else{
            this.setState({embutido: 0});
        }
        
        if(this.state.descLance.toUpperCase === 'SIM'){
            if(isNaN(vCredito - parseFloat(this.state.embutido))){
                this.setState({creditoLib: vCredito - parseFloat(this.state.embutido)});
            }else{
                this.setState({creditoLib: vCredito - vValTotLance});
            }
        }else{
            this.setState({creditoLib: vCredito});
        }
        
        if(isNaN(vValTotLance - (totCred * 0.3))){
            this.setState({recPagar: 0});
        }else{
            this.setState({recPagar: vValTotLance - (totCred * 0.3)});
        }
        
        this.setState({novaParc: vNovaParc});
        this.setState({valTotLance: vValTotLance});
        this.setState({saldoDev: vSaldoDev});
        
        event.preventDefault();
    }
    
    
    render() {
        
        return(
        
        <Index>
            <div>
                <div className="h1Container">
                    <h1 className="h1">Consórcio Fancar é a forma ideal, prática e segura para você adquirir seu veículo novo, seminovo e usado.</h1>
                </div>
                <table className="tblStyleG">
                    <thead>
                        <tr>
                            <th colSpan="8">
                                <h2 className="h2">SIMULADOR DE LANCE CONSÓRCIO FANCAR</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="tblStyle1" colSpan="8">PREENCHA SOMENTE OS CAMPOS COM *</th>
                        </tr>                        
                        <tr>
                            <th className="tblStyle1">CRÉDITO*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" value={this.state.credito} onChange={this.handleChange} id="credito"></input>
                            </td>
                            <th className="tblStyle1">TAXA DE ADMINISTRAÇÃO*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" value={this.state.txAdm} onChange={this.handleChange} id="txAdm"></input>
                            </td>
                            <th className="tblStyle4">FUNDO RESERVA*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" value={this.state.fundRes} onChange={this.handleChange} id="fundRes"></input>
                            </td>
                            <th className="tblStyle5">% DE LANCE*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" value={this.state.pctLance} onChange={this.handleChange} id="pctLance"></input>
                            </td>
                        </tr>
                        <tr>
                            <th className="tblStyle1">VALOR TOTAL DE LANCE</th>
                            <th className="tblStyle2">
                                <input type="text" style={{color: 'red'}} className="tblInput" value={this.state.valTotLance} onChange={this.handleChange} id="valTotLance" disabled></input>
                            </th>
                            <th className="tblStyle1">PRAZO ATUAL*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" value={this.state.prazoAtual} onChange={this.handleChange} id="prazoAtual"></input>
                            </td>
                            <th className="tblStyle4" value={this.state.novoPlano}>NOVO PLANO</th>
                            <th className="tblStyle3">
                                <input type="text" style={{color: 'red'}} className="tblInput" value={this.state.novoPlano} onChange={this.handleChange} id="novoPlano" disabled></input>
                            </th>
                            <th colSpan="2" className="tblStyle5">CREDITO LIBERADO</th>
                        </tr>
                        <tr>
                            <th className="tblStyle1">30% EMBUTIDO</th>
                            <th className="tblStyle3">
                                <input type="text" style={{color: 'red'}} className="tblInput" value={this.state.embutido} onChange={this.handleChange} id="embutido" disabled></input>
                            </th>
                            <th className="tblStyle1">PARCELA ATUAL*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" value={this.state.parcAtual} onChange={this.handleChange} id="parcAtual"></input>
                            </td>
                            <th className="tblStyle4">NOVA PARCELA</th>
                            <th className="tblStyle3">
                                <input type="text" style={{color: 'red'}} className="tblInput" value={this.state.novaParc} onChange={this.handleChange} id="novaParc" disabled></input>
                            </th>
                            <th colSpan="2" rowSpan="2" className="tblStyle3">
                                <input type="text" style={{color: 'red', height:'91%'}} className="tblInput" value={this.state.creditoLib} onChange={this.handleChange} id="creditoLib" disabled></input>
                            </th>
                        </tr>
                        <tr>
                            <th className="tblStyle1">RECURSO A PAGAR</th>
                            <th className="tblStyle3">
                                <input type="text" style={{color: 'red'}} className="tblInput" value={this.state.recPagar} onChange={this.handleChange} id="recPagar" disabled></input>
                            </th>
                            <th className="tblStyle1">DESCONTA LANCE? SIM OU NÃO</th>
                            <th className="tblStyle3" >
                                <input type="text" className="tblInput" value={this.state.descLance} onChange={this.handleChange} id="descLance"></input>
                            </th>
                            <th className="tblStyle4">SALDO DEVEDOOR</th>
                            <th className="tblStyle3">
                                <input type="text" style={{color: 'red'}} className="tblInput" value={this.state.saldoDev} onChange={this.handleChange} id="saldoDev" disabled></input>
                            </th>
                        </tr>
                    </tbody>
                </table>
                
                <div className="buttonAlingOut">
                    <div className="buttonAlign">
                        <button type="button" className="buttonClass" onClick={this.handleSubmit}>Simular Lance</button>
                    </div>
                    <div className="buttonAlign">
                        <button type="button" className="buttonClass" onClick={this.arrayExclusion} >Limpar dados</button>
                    </div>
                </div>
                
                <div>
                    <table className="tblStyleG">
                        <thead>
                            <tr>
                                <th colSpan="6">
                                    <h2 className="h2">SIMULADOR PARA NOVO PLANO</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="tblStyle1" colSpan="6">ESCOLHA O PLANO OU PARCELA PRETENDIDA</th>
                            </tr>                       
                            <tr>
                                <th className="tblStyle1" rowSpan="2">SALDO DEVEDOR</th>
                                <td className="tblStyle2" rowSpan="2"></td>
                                <th className="tblStyle1">PLANO PRETENDIDO</th>
                                <td className="tblStyle2"></td>
                                <th className="tblStyle4">PARCELA PARA O PLANO</th>
                                <td className="tblStyle2"></td>
                            </tr>
                            <tr>
                                <th className="tblStyle1">PARCELA PRETENDIDA</th>
                                <td className="tblStyle2"></td>
                                <th className="tblStyle1">PLANO</th>
                                <td className="tblStyle2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Index>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));