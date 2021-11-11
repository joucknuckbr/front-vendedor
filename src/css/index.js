import styled from "styled-components";

export const Index = styled.div`

@media screen and (max-width: 500px){
    .h1 {
        text-align:center;
        color: white;
        vertical-align: middle;
        font-size: 1.6vh;
        padding: 3% 5%;
    }
    
    .container {
        display: grid; 
        grid-auto-rows: 1fr; 
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
        "credito input1-1 txAdm input2-1"
        "fundRes input3-1 valTotLance input1-2"
        "prazoAtual input2-2 novoPlano input3-2"
        "embutido input1-3 parcAtual input2-3"
        "novaParc input3-3 recPagar input1-4"
        "descLance input2-4 saldoDev input3-4"
        "pctLance input4-1 credLib input4-2"; 
    }
    
    .credito { 
        grid-area: credito;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }
    
    .txAdm {
        grid-area: txAdm; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .input1-1 {
        grid-area: input1-1;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input2-1 {
        grid-area: input2-1;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input1-2 {
        grid-area: input1-2;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input1-3 {
        grid-area: input1-3;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input1-4 {
        grid-area: input1-4;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input2-2 {
        grid-area: input2-2;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input2-3 {
        grid-area: input2-3;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input2-4 {
        grid-area: input2-4;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input3-1 {
        grid-area: input3-1;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input3-2 {
        grid-area: input3-2;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input3-3 {
        grid-area: input3-3;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input3-4 {
        grid-area: input3-4;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input4-1 {
        grid-area: input4-1;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input4-2 {
        grid-area: input4-2;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .fundRes {
        grid-area: fundRes; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .pctLance {
        grid-area: pctLance; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .valTotLance {
        grid-area: valTotLance; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .prazoAtual {
        grid-area: prazoAtual; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .novoPlano {
        grid-area: novoPlano; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .credLib {
        grid-area: credLib; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .embutido {
        grid-area: embutido; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .parcAtual {
        grid-area: parcAtual; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .novaParc {
        grid-area: novaParc; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .recPagar {
        grid-area: recPagar; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .descLance {
        grid-area: descLance; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .saldoDev {
        grid-area: saldoDev; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }
    
    .h1Container {
        height: 8vh;
        width: 95.4vw;
        border-radius: 6px;
        background-color:#ff0000;
        display:flex;
        align-items:center;
    }

    .lanceContainer {
        display:flex;
    }
    
    .h2 {
        text-align:center;
        color: #003366;
        font-size: 1.6vh;
    }
    
    .tblInput {
        text-align:center;
        border:2px solid black;
        width:95%;
        height:35px;
        font-size:18px;
    }
    
    .tblStyle1 {
        text-align:center;
        border:2px solid black;
        width:14%;
        height:40px;
        background-color:#c6d9f0;
        font-size:1vh;
    }
    
    .tblStyle2 {
        text-align:center;
        border:2px solid black;
        width:10%;
        height:35px;
        font-size:1vh;
    }
    
    .tblStyle3 {
        text-align:center;
        border:2px solid black;
        width:10%;
        height:35px;
        color:red;
        font-size:1vh;
    }
    
    .tblStyle4 {
        text-align:center;
        border:2px solid black;
        width:12%;
        height:35px;
        background-color:#c6d9f0;
        font-size:1vh;
    }
    
    .tblStyle5 {
        text-align:center;
        border:2px solid black;
        width:10%;
        height:35px;
        background-color:#c6d9f0;
        font-size:1vh;
    }
    
    .tblStyleG {
        margin-top:20px;
        text-align:center;
        border:4px solid black;
        width:100%;
        border-radius:6px;
    }
}

@media screen and (min-width: 501px){
    .h1 {
        text-align:center;
        color: white;
        vertical-align: middle;
    }
    
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-auto-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
        "credito input1-1 txAdm input2-1 fundRes input3-1 pctLance input4-1"
        "valTotLance input1-2 prazoAtual input2-2 novoPlano input3-2 credLib credLib"
        "embutido input1-3 parcAtual input2-3 novaParc input3-3 input4-2 input4-2"
        "recPagar input1-4 descLance input2-4 saldoDev input3-4 input4-2 input4-2";
    }
    
    .credito { 
        grid-area: credito;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:1.8vh;
        line-height: 3vh;
    }
    
    .txAdm {
        grid-area: txAdm; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .input1-1 {
        grid-area: input1-1;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input2-1 {
        grid-area: input2-1;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input1-2 {
        grid-area: input1-2;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input1-3 {
        grid-area: input1-3;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input1-4 {
        grid-area: input1-4;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input2-2 {
        grid-area: input2-2;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input2-3 {
        grid-area: input2-3;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input2-4 {
        grid-area: input2-4;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input3-1 {
        grid-area: input3-1;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input3-2 {
        grid-area: input3-2;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input3-3 {
        grid-area: input3-3;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input3-4 {
        grid-area: input3-4;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input4-1 {
        grid-area: input4-1;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .input4-2 {
        grid-area: input4-2;
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        font-size:2vh;
    }
    
    .fundRes {
        grid-area: fundRes; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .pctLance {
        grid-area: pctLance; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .valTotLance {
        grid-area: valTotLance; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .prazoAtual {
        grid-area: prazoAtual; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .novoPlano {
        grid-area: novoPlano; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .credLib {
        grid-area: credLib; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .embutido {
        grid-area: embutido; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .parcAtual {
        grid-area: parcAtual; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .novaParc {
        grid-area: novaParc; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .recPagar {
        grid-area: recPagar; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .descLance {
        grid-area: descLance; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .saldoDev {
        grid-area: saldoDev; 
        text-align:center;
        border:2px solid black;
        width:auto;
        height:auto;
        background-color:#c6d9f0;
        font-size:2vh;
    }        
    
    .h1Container {
        height: 100px;
        width: 100%;
        border-radius: 6px;
        background-color:#ff0000;
        display:flex;
        align-items:center;
        flex-direction:row;
        justify-content:center;
    }
    
    .h2 {
        text-align:center;
        color: #003366;
    }
    
    .tblInput {
        text-align:center;
        border:2px solid black;
        width:95%;
        height:85%;
        font-size:18px;
    }
    
    .tblStyle1 {
        text-align:center;
        border:2px solid black;
        width:14%;
        height:40px;
        background-color:#c6d9f0;
    }
    
    .tblStyle2 {
        text-align:center;
        border:2px solid black;
        width:10%;
        height:35px;
    }
    
    .tblStyle3 {
        text-align:center;
        border:2px solid black;
        width:10%;
        height:35px;
        color:red;
    }
    
    .tblStyle4 {
        text-align:center;
        border:2px solid black;
        width:12%;
        height:35px;
        background-color:#c6d9f0;
    }
    
    .tblStyle5 {
        text-align:center;
        border:2px solid black;
        width:10%;
        height:35px;
        background-color:#c6d9f0;
    }
    
    .tblStyleG {
        margin-top:20px;
        text-align:center;
        border:4px solid black;
        width:100%;
        border-radius:6px;
    }
}

.buttonClass {
    font-size:15px;
    font-family:Arial;
    width:140px;
    height:50px;
    border-width:1px;
    color:#fff;
    border-color:#d02718;
    font-weight:bold;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    border-bottom-left-radius:6px;
    border-bottom-right-radius:6px;
    box-shadow:inset 0px 1px 0px 0px #f5978e;
    text-shadow:inset 0px 1px 0px #810e05;
    background:linear-gradient(#f24537, #c62d1f);
}

.buttonClass:hover {
    background: linear-gradient(#c62d1f, #f24537);
}

.buttonAlign {
    display: inline-block;
    margin-top:20px;
    margin-left:20px;
    margin-right:20px;
    align-items:center;
    flex-direction:row;
    justify-content:center;
}

.buttonAlingOut {
    text-align:center;
}
`;