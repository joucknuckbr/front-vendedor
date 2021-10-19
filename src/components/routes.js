import React from 'react';
import 'src/css/index.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// handleSubmit(e) {
//     this.setState({

//     });
// }

// arrayExclusion(e) {
//     this.state.comments.splice(0, 1);
    
// }

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={() => 
            <div>
                <div class="box" className="h1Container">
                    <h1 className="h1">Consórcio Fancar é a forma ideal, prática e segura para você adquirir seu veículo novo, seminovo e usado.</h1>
                </div>
                <h2 className="h2">SIMULADOR DE LANCE CONSÓRCIO FANCAR</h2>
                <form >
                    <table className="tblStyleG">
                        <tr>
                            <th className="tblStyle1" colspan="8">PREENCHA SOMENTE OS CAMPOS COM *</th>
                        </tr>                        
                        <tr>
                            <th className="tblStyle1">CRÉDITO*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" id="credito"></input>
                            </td>
                            <th className="tblStyle1">TAXA DE ADMINISTRAÇÃO*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" id="taxa"></input>
                            </td>
                            <th className="tblStyle4">FUNDO RESERVA*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" id="fundo"></input>
                            </td>
                            <th className="tblStyle5">% DE LANCE*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" id="pctLance"></input>
                            </td>
                        </tr>
                        <tr>
                            <th className="tblStyle1">VALOR TOTAL DE LANCE</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput"></input>
                            </td>
                            <th className="tblStyle1">PRAZO ATUAL*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" id="prazo"></input>
                            </td>
                            <th className="tblStyle4">NOVO PLANO</th>
                            <th className="tblStyle3">VAL_NPLANO</th>
                            <th colspan="2" className="tblStyle5">CREDITO LIBERADO</th>
                        </tr>
                        <tr>
                            <th className="tblStyle1">30% EMBUTIDO</th>
                            <th className="tblStyle3">VAL_EMBUTI</th>
                            <th className="tblStyle1">PARCELA ATUAL*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" id="parcela"></input>
                            </td>
                            <th className="tblStyle4">NOVA PARCELA</th>
                            <th className="tblStyle3">VAL_PARCELA</th>
                            <th colspan="2" rowspan="2" className="tblStyle3">VAL_CREDL</th>
                        </tr>
                        <tr>
                            <th className="tblStyle1">RECURSO A PAGAR</th>
                            <th className="tblStyle3">VAL_TLANCE</th>
                            <th className="tblStyle1">DESCONTA LANCE? SIM OU NÃO</th>
                            <th className="tblStyle3">VAL_DESC</th>
                            <th className="tblStyle4">SALDO DEVEDOOR</th>
                            <th className="tblStyle3">VAL_SALDO</th>
                        </tr>
                    </table>
                    <div className="buttonAlingOut">
                    <div className="buttonAlign">
                        <button type="submit" className="buttonClass" id="enviar">Simular Lance</button>
                    </div>
                    <div className="buttonAlign">
                        <button type="button" className="buttonClass"  id="limpar">Limpar dados</button>
                    </div>
                    </div>
                </form>

                <h2 className="h2">SIMULADOR PARA NOVO PLANO</h2>
            
                <div>
                <table className="tblStyleG">
                        <tr>
                            <th className="tblStyle1" colspan="8">ESCOLHA O PLANO OU PARCELA PRETENDIDA</th>
                        </tr>                       "
                        <tr>
                            <th className="tblStyle1" rowspan="2">SALDO DEVEDOR</th>
                            <td className="tblStyle2" rowspan="2"></td>
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
                    </table>
                </div>
                
                {/* <Post title="É"/> */}
            </div>
        } />
    </Switch>
</BrowserRouter>
);

export default Routes;