import styled from "styled-components";

const HeaderDiv = styled.header`
    display: flex;
    width: 100%;
  flex-direction: column;
  background-color: #57B9FF;
  color: white;
    padding-left: 1px;
  text-align: left;
    @media screen and (max-width: 900px) {
        align-items: center;
        text-align: center;
    }
`;



const Name = styled.h2`
font-size: calc(12px + 1vw);
text-decoration: underline;
    color: white;
`;
const PgTitle = styled.h2`
font-size: calc(20px + 1vw);
text-decoration: underline;
    color: white;
`;

interface HeaderProps {
    title: string;
}

export default function Header({ title }:HeaderProps)  {
    return (
        <HeaderDiv>
            <Name>Lucy Schofield | Online Resume</Name>
            <PgTitle>{title}</PgTitle>
        </HeaderDiv>
    );
}
