import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import { styled } from "styled-components";

interface StyledglobProps {
    title: string;
    children: React.ReactNode;
}

const StyledWrapper = styled.div`
    max-width: 80vw;
    margin: 0 auto;
    width: 100%;
    background-color: #a7c7e7;
    align-items: center;
    position: relative;
`;

const FixWidth = styled.div`
    height: 100vh;
    width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
    width: 100%;
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;


export default function Styledglobal({ title, children }: StyledglobProps) {
    return (
        <FixWidth>
            <StyledWrapper>
                <Header title={title}/>
                <ContentWrapper>
                    <Nav />
                    {children}
                </ContentWrapper>
                <Footer />
            </StyledWrapper>
        </FixWidth>

    );
}