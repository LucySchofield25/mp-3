import {styled} from 'styled-components';
import Styledglobal from "../styledcomp/Styledglobal";

const AwrdContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const AwardItem= styled.div`
    text-align: center;
    width: 80%;
    margin: 5vh auto;
    padding: 2vh;
    border-radius: 8px;
    color: #00008B;
    h1{
        font-size: calc(10px + 1.5vw);
    }
    h2{
        font-size: calc(6px + 1.5vw);
        font-style: italic;
        color: black;
    }
    small{
        font-size: calc(3px + 1.5vw);
        color: black;
    }
`;
export default function Achievements() {
    return(
        <Styledglobal title="Achievements">
            <AwrdContainer>
                <AwardItem>
                    <h1><b>Boston University Deans List</b></h1>
                    <h2>Boston University</h2>
                    <small>July 2023</small>
                </AwardItem>
                <AwardItem>
                    <h1><b>2nd Place Finish - Cisco Global Sales Internship Hackathon</b></h1>
                    <h2>Cisco Systems</h2>
                    <small>July 2023</small>
                </AwardItem>
                <AwardItem>
                    <h1><b>Top Gun Performer - Technical Intern</b></h1>
                    <h2>Cisco Systems</h2>
                    <small>July 2023</small>
                </AwardItem>
                <AwardItem>
                    <h1><b>2nd Place Finish - Delaware BioGenius Final</b></h1>
                    <h2>ioTechnology Institute- International BioGenius Competition</h2>
                    <small>March 2020</small>
                </AwardItem>
            </AwrdContainer>
        </Styledglobal>
    )
}
