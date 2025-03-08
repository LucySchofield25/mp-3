import Styledglobal from "../styledcomp/Styledglobal";
import {styled} from 'styled-components';
import {useState} from 'react';

const ProjectDiv  = styled.div`
    padding: 1vh 1vw;
    text-align: center;
    h2{
        font-size: calc(2px + 1.5vw);
        color:#0a2540;
    }
`;
const ProjectTitle = styled.h1`
    text-align: center;
    color: #0a2540;
    font-size: calc(3px + 3vw);
`;

const ProjectTxt = styled.p`
    text-align: center;
    color: #333;
    font-size: calc(12px + 0.8vw);
`;

const ButtonDiv = styled.div`
        display: flex;
        flex-direction: row;
        margin: 5vh auto;
        align-items: center;
        justify-content: center;
    
`;
const StyledButton = styled.button`
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background-color: #4169e1;
    color: white;
    font-size: calc(1px + 1.3vw);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    margin: 1vh 1vw;
    &:hover{
        background-color: #D17D98;
    }
`;

const InputNum = styled.input`
    width: 50%;
    padding: 1vh;
    font-size: 1rem;
    margin: 1vh;
    text-align: center;

`;
const Output=styled.div<{isNegative: boolean}>`
    text-align: center;
    font-size: calc(3px + 3vw);
    color: ${(props)=>props.isNegative ? '#FF0000' : 'black'};
`;

export default function Projects() {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [results, setResults] = useState<number|string>("");
    const add = ()=>setResults(Number(num1)+Number(num2));
    const subtract = ()=>setResults(Number(num1)-Number(num2));
    const multiply = ()=>setResults(Number(num1)*Number(num2));
    const divide = ()=>setResults(Number(num1)/Number(num2));
    let total = 1;
    for (let i=0;i<Number(num2);i++){
        total*=Number(num1);
    }
    const power = () =>setResults(total);
    const clearInput = () => {
        setNum1("");
        setNum2("");
        setResults("");
    };

    return(
        <Styledglobal title="Projects">
            <ProjectDiv>
                <ProjectTitle>CNN Invasive Species Image Classifie</ProjectTitle>
                <ProjectTxt>Using a binary classification approach with ReLU activation, max pooling,
                    dropout, and a sigmoid output layer, the model was trained on large datasets
                    of native and invasive North American plants.</ProjectTxt>
                <ProjectTitle>BeerMe</ProjectTitle>
                <ProjectTxt>BeerMe utilizes google OAuth, mongoDB for data organization, and api calls to a large beer
                    database.</ProjectTxt>
                <ProjectTitle>Webex Phishing Bot with Secure XDR Integration</ProjectTitle>
                <ProjectTxt>Leverages the Webex bot API in Python to automate phishing simulations via
                    SMTP with an integration in the XDR dashboard.</ProjectTxt>
                <ProjectTitle>Calculator</ProjectTitle>
                <InputNum
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="enter 1st number"
                />
                <InputNum
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="enter 2nd number"
                />
                <ButtonDiv>
                    <StyledButton onClick={add}>+</StyledButton>
                    <StyledButton onClick={subtract}>-</StyledButton>
                    <StyledButton onClick={multiply}>*</StyledButton>
                    <StyledButton onClick={divide}>/</StyledButton>
                    <StyledButton onClick={power}>**</StyledButton>
                    <StyledButton onClick={clearInput}>Clear</StyledButton>
                </ButtonDiv>
                <Output isNegative={Number(results)<0}>{results !== "" ? `Result: ${results}` : ""}</Output>
            </ProjectDiv>
        </Styledglobal>
    )
}