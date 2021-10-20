import React from "react";
import { Index } from "src/css/index.js";
// import Comment from './Comment';

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
        
        this.setTextInputRef = element => {
            this.state.credito = element;
        };

        this.simulaLance = () => {
            // this.setState({
                //     credito: '',
                // });
                if (this.state.credito) this.state.credito.focus();
                console.log(this.state.credito);
            }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.arrayExclusion = this.arrayExclusion.bind(this);
    }
    
    componentDidMount() {
        // autofocus the input on mount
        this.simulaLance();
      }
        
        handleSubmit(e) {
            this.setState({ 
                comments: [
                ...this.state.comments,
                {text: this.state.newCommentText}
                ]
            });
            
            this.setState({ newCommentText:'' });
            
            e.preventDefault();
        }
        
        arrayExclusion(e) {
            this.state.comments.splice(0, 1);
            
        }
        
        handleTextChange(e) {
            this.setState({ newCommentText: e.target.value })
        }
        
        render() {
            return(
            
            <Index>
                <div>
                    <div className="h1Container">
                        <h1 className="h1">Consórcio Fancar é a forma ideal, prática e segura para você adquirir seu veículo novo, seminovo e usado.</h1>
                    </div>
                    <table className="tblStyleG">
                        <th colspan="8">
                            <h2 className="h2">SIMULADOR DE LANCE CONSÓRCIO FANCAR</h2>
                        </th>
                        <tr>
                            <th className="tblStyle1" colspan="8">PREENCHA SOMENTE OS CAMPOS COM *</th>
                        </tr>                        
                        <tr>
                            <th className="tblStyle1">CRÉDITO*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" ref={this.setTextInputRef}></input>
                            </td>
                            <th className="tblStyle1">TAXA DE ADMINISTRAÇÃO*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" ref="taxa"></input>
                            </td>
                            <th className="tblStyle4">FUNDO RESERVA*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" ref="fundo"></input>
                            </td>
                            <th className="tblStyle5">% DE LANCE*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" ref="pctLance"></input>
                            </td>
                        </tr>
                        <tr>
                            <th className="tblStyle1">VALOR TOTAL DE LANCE</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput"></input>
                            </td>
                            <th className="tblStyle1">PRAZO ATUAL*</th>
                            <td className="tblStyle2">
                                <input type="text" className="tblInput" ref="prazo"></input>
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
                                <input type="text" className="tblInput" ref="parcela"></input>
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
                            <button type="button" className="buttonClass" onClick={this.simulaLance} ref="enviar">Simular Lance</button>
                        </div>
                        <div className="buttonAlign">
                            <button type="button" className="buttonClass" onClick={this.arrayExclusion}  ref="limpar">Limpar dados</button>
                        </div>
                    </div>
                    
                    
                    <div>
                        <table className="tblStyleG">
                            <th colspan="6">
                                <h2 className="h2">SIMULADOR PARA NOVO PLANO</h2>
                            </th>
                            <tr>
                                <th className="tblStyle1" colspan="6">ESCOLHA O PLANO OU PARCELA PRETENDIDA</th>
                            </tr>                       
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
                </div>
            </Index>
            
            // <div>
                //     <h2>{ this.props.title }</h2>
                //     <form onSubmit={this.handleSubmit}>
                    //         <input 
                    //         value={this.state.newCommentText}
                    //         onChange={this.handleTextChange}/>
                    //         <button type="submit">Comentar</button>
                    //         <button onClick={this.arrayExclusion}>Excluir</button>
                    //     </form>
                    //     { this.state.comments.map((comment, index) => {
                        //         return <Comment key={index} text={comment.text} />
                        //     })}
                        // </div>
                        );
                    }
                }