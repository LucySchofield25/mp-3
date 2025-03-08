import {Link} from 'react-router';
import {styled} from 'styled-components';

const FootDiv = styled.footer`
  background-color: #4a90e2;
  color: #f0f8ff;
  padding: 1vh 1vw;
  text-align: center;
`;

export default function Footer(){
    return (
        <FootDiv>
            <p>All Rights Reserved to Lucy Schofield<Link to='/credits'>Credits</Link>&copy;</p>
        </FootDiv>
    )
}