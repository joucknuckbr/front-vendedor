import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

const tblInput ={
    textAlign:'center',
    border:'2px solid black',
    width:'95%',
};

const tblStyle0 = {
    textAlign:'center',
    border:'2px solid black',
    width:'14%',
    backgroundColor:'#c6d9f0',
};

const tblStyle1 = {
    textAlign:'center',
    border:'2px solid black',
    width:'14%',
    backgroundColor:'#c6d9f0',
};

const tblStyle2 = {
    textAlign:'center',
    border:'2px solid black',
    width:'10%',
};

const tblStyle3 = {
    textAlign:'center',
    border:'2px solid black',
    width:'14%',
    backgroundColor:'#c6d9f0',
};

const tblStyle4 = {
    textAlign:'center',
    border:'2px solid black',
    width:'10%',
    color:'red',
};

const tblStyle5 = {
    textAlign:'center',
    border:'2px solid black',
    width:'12%',
    backgroundColor:'#c6d9f0',
};

const tblStyle7 = {
    textAlign:'center',
    border:'2px solid black',
    width:'10%',
    backgroundColor:'#c6d9f0',
};

const tblStyleG = {
    textAlign:'center',
    border:'4px solid black',
    width:'100%',
    borderRadius:'6px',
};

const h1 = {
    textAlign:'center',
    color: 'white',
    verticalAlign: 'middle',
};

const h1Container = {
    height: '70px',
    width: '100%',
    borderRadius: '6px',
    backgroundColor:'#ff0000',
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
};

const h2 = {
    textAlign:'center',
    color: '#003366',
};

const buttonClass = {
    fontSize:'15px',
    fontFamily:'Arial',
    width:'140px',
    height:'50px',
    borderWidth:'1px',
    color:'#fff',
    borderColor:'#d02718',
    fontWeight:'bold',
    borderTopLeftRadius:'6px',
    borderTopRightRadius:'6px',
    borderBottomLeftRadius:'6px',
    borderBottomRightRadius:'6px',
    boxShadow:'inset 0px 1px 0px 0px #f5978e',
    textShadow:'inset 0px 1px 0px #810e05',
    background:'linear-gradient(#f24537, #c62d1f)',
    // background: 'linear-gradient(#c62d1f, #f24537)',
};

const buttonAlign = {
    display: 'inline-block',
    marginTop:'15px',
    marginBottom:'15px',
    marginLeft:'20px',
    marginRight:'20px',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
};

const buttonAlingOut = {
    textAlign:'center',
};

const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={() => 
            <div>
                <div class="box" style={h1Container}>
                    <h1 style={h1}>Consórcio Fancar é a forma ideal, prática e segura para você adquirir seu veículo novo, seminovo e usado.</h1>
                </div>
                <h2 style={h2}>SIMULADOR DE LANCE CONSÓRCIO FANCAR</h2>
                <form>
                    <table style={tblStyleG}>
                        <tr>
                            <th style={tblStyle0} colspan="8">PREENCHA SOMENTE OS CAMPOS COM *</th>
                        </tr>                        
                        <tr>
                            <th style={tblStyle1}>CRÉDITO*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle3}>TAXA DE ADMINISTRAÇÃO*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle5}>FUNDO RESERVA*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle7}>% DE LANCE*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                        </tr>
                        <tr>
                            <th style={tblStyle1}>VALOR TOTAL DE LANCE</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle3}>PRAZO ATUAL*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle5}>NOVO PLANO</th>
                            <th style={tblStyle4}>VAL_NPLANO</th>
                            <th colspan="2" style={tblStyle7}>CREDITO LIBERADO</th>
                        </tr>
                        <tr>
                            <th style={tblStyle1}>30% EMBUTIDO</th>
                            <th style={tblStyle4}>VAL_EMBUTI</th>
                            <th style={tblStyle3}>PARCELA ATUAL*</th>
                            <th style={tblStyle4}>VAL_PARCELA</th>
                            <th style={tblStyle5}>NOVA PARCELA</th>
                            <th style={tblStyle4}>VAL_PARCELA</th>
                            <th colspan="2" rowspan="2" style={tblStyle4}>VAL_CREDL</th>
                        </tr>
                        <tr>
                            <th style={tblStyle1}>RECURSO A PAGAR</th>
                            <th style={tblStyle4}>VAL_TLANCE</th>
                            <th style={tblStyle3}>DESCONTA LANCE? SIM OU NÃO</th>
                            <th style={tblStyle4}>VAL_DESC</th>
                            <th style={tblStyle5}>SALDO DEVEDOOR</th>
                            <th style={tblStyle4}>VAL_SALDO</th>
                        </tr>
                    </table>
                    <div style={buttonAlingOut}>
                    <div style={buttonAlign}>
                        <button type="submit" style={buttonClass} >Simular Lance</button>
                    </div>
                    <div style={buttonAlign}>
                        <button type="button" style={buttonClass} >Limpar dados</button>
                    </div>
                    </div>
                </form>

                <div>
                <table style={tblStyleG}>
                        <tr>
                            <th style={tblStyle0} colspan="8">PREENCHA SOMENTE OS CAMPOS COM *</th>
                        </tr>                        
                        <tr>
                            <th style={tblStyle1}>CRÉDITO*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle3}>TAXA DE ADMINISTRAÇÃO*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle5}>FUNDO RESERVA*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle7}>% DE LANCE*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                        </tr>
                        <tr>
                            <th style={tblStyle1}>VALOR TOTAL DE LANCE</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle3}>PRAZO ATUAL*</th>
                            <td style={tblStyle2}>
                                <input type="text" style={tblInput}></input>
                            </td>
                            <th style={tblStyle5}>NOVO PLANO</th>
                            <th style={tblStyle4}>VAL_NPLANO</th>
                            <th colspan="2" style={tblStyle7}>CREDITO LIBERADO</th>
                        </tr>
                        <tr>
                            <th style={tblStyle1}>30% EMBUTIDO</th>
                            <th style={tblStyle4}>VAL_EMBUTI</th>
                            <th style={tblStyle3}>PARCELA ATUAL*</th>
                            <th style={tblStyle4}>VAL_PARCELA</th>
                            <th style={tblStyle5}>NOVA PARCELA</th>
                            <th style={tblStyle4}>VAL_PARCELA</th>
                            <th colspan="2" rowspan="2" style={tblStyle4}>VAL_CREDL</th>
                        </tr>
                        <tr>
                            <th style={tblStyle1}>RECURSO A PAGAR</th>
                            <th style={tblStyle4}>VAL_TLANCE</th>
                            <th style={tblStyle3}>DESCONTA LANCE? SIM OU NÃO</th>
                            <th style={tblStyle4}>VAL_DESC</th>
                            <th style={tblStyle5}>SALDO DEVEDOOR</th>
                            <th style={tblStyle4}>VAL_SALDO</th>
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