import Styledglobal from "../styledcomp/Styledglobal";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
    color: black;
  text-align: center;
    
`;

const ProfileImage = styled.img`
  width: 40%;
  max-width: 100%;
    align-self:center;
  height: auto;
`;

const Content = styled.div`
        align-self: center;
        width: 60%;
        text-align: left;
        margin-right: 2vh;
      
        @media screen and (max-width: 900px) {
            align-self: center;
            width: 100%;
            margin-right: 2vh;
          
        }
    `;

export default function Home() {
    return (
        <Styledglobal title="Home">
            <StyledDiv>
                <h2>Welcome to My Resume</h2>
                <ProfileImage src="../public/profile.jpg" alt="Lucy Schofield" />
                <Content>
                    <p>
                        A driven and hardworking student majoring in Computer Science at Boston University.
                        Majoring in Computer Science, Lucy has a strong foundation in technical computer
                        skills as well as theoretical components of optimization, efficiency, and reliability
                        that serve purpose in any field.
                    </p>
                </Content>
            </StyledDiv>
        </Styledglobal>
    );
}