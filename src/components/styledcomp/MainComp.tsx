import { styled } from "styled-components";
import { ReactNode } from "react";

const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
    min-height: 100vh;
  background-color: #4a90e2;
    align-items: center;
 

  h1 {
    text-align: center;
    text-decoration: underline;
    font-size: calc(2px + 2vw);
    color: #f0f8ff;
  }

  p {
    font-size: calc(9px + 0.8vw);
    color: #ffffff;
    padding: 1vh 1vw;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;

    p {
      font-size: calc(2px + 3vw);
    }
  }
`;

interface ChildProps {
    children: ReactNode;
}

export default function Main({ children }: ChildProps) {
    return <MainDiv>{children}</MainDiv>;
}
