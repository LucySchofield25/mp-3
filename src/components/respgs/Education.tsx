import Styledglobal from "../styledcomp/Styledglobal";
import {styled} from 'styled-components';

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;width: 100%;
  background-color: #a7c7e7;
  padding: 2vh 2vw;
`;

const EducationItem = styled.section`
  margin-bottom: 40px;
    padding: 20px;
  color: #4a90e2;
`;

const School = styled.h3`
  font-size: calc(16px + 1.5vw);
  font-weight: bold;
  color: #0a2540;
`;

const DescText = styled.p`
  font-size: calc(12px + 0.8vw);
  color: #333;
`;

export default function Education() {
    return (
        <Styledglobal title="Education">
            <ContentWrapper>
                <EducationItem>
                    <School>Boston University</School>
                    <DescText><strong>Bachelor of Arts in Computer Science</strong></DescText>
                    <DescText>Boston, MA</DescText>
                    <DescText>Expected Graduation: May 2025</DescText>
                </EducationItem>

                <EducationItem>
                    <School>Charter School of Wilmington</School>
                    <DescText><strong>High School</strong></DescText>
                    <DescText>Wilmington, DE</DescText>
                    <DescText>May 2021</DescText>
                </EducationItem>
            </ContentWrapper>
        </Styledglobal>
    );
}