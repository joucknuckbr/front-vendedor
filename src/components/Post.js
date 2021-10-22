import React from "react";
import ReactDOM from "react-dom";
import { Index } from "../css/index.js";

var vSaldoDev = Number();

function fixe(num, precisao) {
    var casas = Math.pow(10, precisao);
    return Math.floor(num * casas) / casas;
};

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
        this.handleNovoPlano = this.handleNovoPlano.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeletePlano = this.handleDeletePlano.bind(this);
    }
    
    handleChange(event) {
        switch (event.target.id){
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
            case 'planoPret':
            this.setState({ planoPret: event.target.value });
            break;
            case 'parcPret':
            this.setState({ parcPret: event.target.value });
            break;
            default:
            console.log('Erro');
        }
        
    }
    
    handleSubmit(event) {

        if(!this.state.credito || !this.state.txAdm || !this.state.fundRes || !this.state.pctLance || !this.state.prazoAtual || !this.state.parcAtual){
            if(!this.state.credito){
                alert("Campo 'crédito' precisa ser preenchido");
            }else{
                if(!this.state.txAdm){
                    alert("Campo 'taxa de administração' precisa ser preenchido");
                }else{
                    if(!this.state.fundRes){
                        alert("Campo 'fundo reserva' precisa ser preenchido");
                    }else{
                        if(!this.state.pctLance){
                            alert("Campo '% de lance' precisa ser preenchido");
                        }else{
                            if(!this.state.prazoAtual){
                                alert("Campo 'prazo atual' precisa ser preenchido");
                            }else{
                                if(!this.state.parcAtual){
                                    alert("Campo 'parcela atual' precisa ser preenchido");
                                }
                            }                           
                        }                       
                    }                    
                }
            }
            return;
        }

        var vCredito = parseFloat(this.state.credito);
        var vTxAdm = parseFloat(this.state.txAdm.replace(",","."));
        var vFundRes = parseFloat(this.state.fundRes.replace(",","."));
        var vPctLance = parseFloat(this.state.pctLance.replace(",","."));
        
        var totCred = (vCredito * (((vTxAdm + vFundRes) / 100)) + vCredito);
        var vValTotLance = totCred * (vPctLance / 100);
        vSaldoDev = totCred - vValTotLance - parseFloat(this.state.parcAtual.replace(",","."));
        var vNovaParc = parseFloat(this.state.parcAtual.replace(",",".")) - ((vValTotLance / 2) / (parseInt(this.state.prazoAtual) - 1));
        
        if(0 === vNovaParc){
            this.setState({novoPlano: 0});
        }else{
            this.setState({novoPlano: (vSaldoDev / vNovaParc).toFixed(0)});
        }
        
        if(vPctLance >= 30.00){
            this.setState({embutido: (totCred * 0.3).toFixed(2)});
        }else{
            this.setState({embutido: 0});
        }

        if(this.state.descLance.toUpperCase() === 'SIM'){
            if(isNaN(vCredito - (totCred * 0.3))){
                this.setState({creditoLib: (vCredito - vValTotLance).toFixed(2)});
            }else{
                this.setState({creditoLib: (vCredito - (totCred * 0.3)).toFixed(2)});
            }
        }else{
            this.setState({creditoLib: vCredito.toFixed(2)});
        }
        
        if(isNaN(vValTotLance - (totCred * 0.3))){
            this.setState({recPagar: 0});
        }else{
            this.setState({recPagar: (vValTotLance - (totCred * 0.3)).toFixed(2)});
        }
        
        this.setState({novaParc: vNovaParc.toFixed(2)});
        this.setState({valTotLance: vValTotLance.toFixed(2)});
        this.setState({saldoDev: vSaldoDev.toFixed(2)});
        
        event.preventDefault();
    }

    handleNovoPlano(event) {

        if(isNaN(vSaldoDev / parseInt(this.state.planoPret))){
            this.setState({parcPlano: 0});
        }else{
            this.setState({parcPlano: (vSaldoDev / parseInt(this.state.planoPret)).toFixed(2) });
        }

        if(isNaN(vSaldoDev / parseInt(this.state.parcPret))){
            this.setState({plano: 0});
        }else{
            
            let planFix = parseInt(fixe((vSaldoDev / parseFloat(this.state.parcPret)),0));

            this.setState({plano: planFix});
        }

        event.preventDefault();
    }
    
    handleDelete(event) {
        this.setState({credito: ''});
        this.setState({txAdm: ''});
        this.setState({fundRes: ''});
        this.setState({pctLance: ''});
        this.setState({valTotLance: ''});
        this.setState({prazoAtual: ''});
        this.setState({novoPlano: ''});
        this.setState({creditoLib: ''});
        this.setState({embutido: ''});
        this.setState({parcAtual: ''});
        this.setState({novaParc: ''});
        this.setState({recPagar: ''});
        this.setState({descLance: ''});
        this.setState({saldoDev: ''});

        event.preventDefault();
    }

    handleDeletePlano(event) {
        this.setState({planoPret: ''});
        this.setState({parcPlano: ''});
        this.setState({parcPret: ''});
        this.setState({plano: ''});

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
                                <input type="number" step="0.01" style={{fontSize:'14pt'}} className="tblInput" value={this.state.credito} onChange={this.handleChange} id="credito" required></input>
                            </td>
                            <th className="tblStyle1">TAXA DE ADMINISTRAÇÃO(%)*</th>
                            <td className="tblStyle2">
                                <input type="number" step="0.01" style={{fontSize:'14pt'}} className="tblInput" value={this.state.txAdm} onChange={this.handleChange} id="txAdm" required></input>
                            </td>
                            <th className="tblStyle4">FUNDO RESERVA(%)*</th>
                            <td className="tblStyle2">
                                <input type="number" step="0.01" style={{fontSize:'14pt'}} className="tblInput" value={this.state.fundRes} onChange={this.handleChange} id="fundRes" required></input>
                            </td>
                            <th className="tblStyle5">% DE LANCE*</th>
                            <td className="tblStyle2">
                                <input type="number" step="0.01" style={{fontSize:'14pt'}} className="tblInput" value={this.state.pctLance} onChange={this.handleChange} id="pctLance" required></input>
                            </td>
                        </tr>
                        <tr>
                            <th className="tblStyle1">VALOR TOTAL DE LANCE</th>
                            <th className="tblStyle2">
                                <input type="number" step="0.01" style={{color: 'red', fontSize:'14pt'}} className="tblInput" value={this.state.valTotLance} onChange={this.handleChange} id="valTotLance" disabled></input>
                            </th>
                            <th className="tblStyle1">PRAZO ATUAL*</th>
                            <td className="tblStyle2">
                                <input type="number" step="0.01" style={{fontSize:'14pt'}} className="tblInput" value={this.state.prazoAtual} onChange={this.handleChange} id="prazoAtual" required></input>
                            </td>
                            <th className="tblStyle4" value={this.state.novoPlano}>NOVO PLANO</th>
                            <th className="tblStyle3">
                                <input type="number" step="0.01" style={{color: 'red', fontSize:'14pt'}} className="tblInput" value={this.state.novoPlano} onChange={this.handleChange} id="novoPlano" disabled></input>
                            </th>
                            <th colSpan="2" className="tblStyle5">CREDITO LIBERADO</th>
                        </tr>
                        <tr>
                            <th className="tblStyle1">30% EMBUTIDO</th>
                            <th className="tblStyle3">
                                <input type="number" step="0.01" style={{color: 'red', fontSize:'14pt'}} className="tblInput" value={this.state.embutido} onChange={this.handleChange} id="embutido" disabled></input>
                            </th>
                            <th className="tblStyle1">PARCELA ATUAL*</th>
                            <td className="tblStyle2">
                                <input type="number" step="0.01" style={{fontSize:'14pt'}} className="tblInput" value={this.state.parcAtual} onChange={this.handleChange} id="parcAtual" required></input>
                            </td>
                            <th className="tblStyle4">NOVA PARCELA</th>
                            <th className="tblStyle3">
                                <input type="number" step="0.01" style={{color: 'red', fontSize:'14pt'}} className="tblInput" value={this.state.novaParc} onChange={this.handleChange} id="novaParc" disabled></input>
                            </th>
                            <th colSpan="2" rowSpan="2" className="tblStyle3">
                                <input type="number" step="0.01" style={{color: 'red', height:'91%'}} className="tblInput" value={this.state.creditoLib} onChange={this.handleChange} id="creditoLib" disabled></input>
                            </th>
                        </tr>
                        <tr>
                            <th className="tblStyle1">RECURSO A PAGAR</th>
                            <th className="tblStyle3">
                                <input type="number" step="0.01" style={{color: 'red', fontSize:'14pt'}} className="tblInput" value={this.state.recPagar} onChange={this.handleChange} id="recPagar" disabled></input>
                            </th>
                            <th className="tblStyle1">DESCONTA LANCE? SIM OU NÃO</th>
                            <th className="tblStyle3" >
                                <input type="text" style={{fontSize:'14pt'}} className="tblInput" value={this.state.descLance} onChange={this.handleChange} id="descLance"></input>
                            </th>
                            <th className="tblStyle4">SALDO DEVEDOOR</th>
                            <th className="tblStyle3">
                                <input type="number" step="0.01" style={{color: 'red', fontSize:'14pt'}} className="tblInput" value={this.state.saldoDev} onChange={this.handleChange} id="saldoDev" disabled></input>
                            </th>
                        </tr>
                    </tbody>
                </table>
                
                <div className="buttonAlingOut">
                    <div className="buttonAlign">
                        <button type="button" className="buttonClass" onClick={this.handleSubmit}>Simular Lance</button>
                    </div>
                    <div className="buttonAlign">
                        <button type="button" className="buttonClass" onClick={this.handleDelete} >Limpar Dados</button>
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
                                <td className="tblStyle2" rowSpan="2">
                                    <input type="number" step="0.01" style={{color: 'red', height:'91%'}} className="tblInput" value={this.state.saldoDev} onChange={this.handleChange} id="saldoDev" disabled></input>
                                </td>
                                <th className="tblStyle1">PLANO PRETENDIDO*</th>
                                <td className="tblStyle2">
                                    <input type="number" step="0.01" style={{fontSize:'14pt'}} className="tblInput" value={this.state.planoPret} onChange={this.handleChange} id="planoPret"></input>
                                </td>
                                <th className="tblStyle4">PARCELA PARA O PLANO</th>
                                <td className="tblStyle2">
                                    <input type="number" step="0.01" style={{color: 'red'}} className="tblInput" value={this.state.parcPlano} onChange={this.handleChange} id="parcPlano" disabled></input>
                                </td>
                            </tr>
                            <tr>
                                <th className="tblStyle1">PARCELA PRETENDIDA*</th>
                                <td className="tblStyle2">
                                    <input type="number" step="0.01" style={{fontSize:'14pt'}} className="tblInput" value={this.state.parcPret} onChange={this.handleChange} id="parcPret"></input>
                                </td>
                                <th className="tblStyle1">PLANO</th>
                                <td className="tblStyle2">
                                    <input type="number" step="0.01" style={{color: 'red'}} className="tblInput" value={this.state.plano} onChange={this.handleChange} id="plano" disabled></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttonAlingOut">
                    <div className="buttonAlign">
                        <button type="button" className="buttonClass" onClick={this.handleNovoPlano}>Novo Plano</button>
                    </div>
                    <div className="buttonAlign">
                        <button type="button" className="buttonClass" onClick={this.handleDeletePlano} >Limpar Dados</button>
                    </div>
                    </div>
                </div>
            </div>
        </Index>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));