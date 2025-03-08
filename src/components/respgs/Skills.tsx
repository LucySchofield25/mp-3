import Styledglobal from "../styledcomp/Styledglobal";
import {styled} from 'styled-components';

const SkillsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #a7c7e7;
  padding: 2vh 2vw;
`;

const SkillItem = styled.section`
  margin-bottom: 40px;
  padding: 15px;
  color: #4a90e2;
`;

const SkillTitle = styled.h3`
  font-size: calc(16px + 1.5vw);
  font-weight: bold;
  color: #0a2540;
`;

const SkillDescription = styled.p`
  font-size: calc(9px + 0.8vw);
  color: #333;
  display: list-item;
  padding: 2vh 1vw;
`;

export default function Skills() {
    return (
        <Styledglobal title="Skills">
            <SkillsWrapper>
                <SkillItem>
                    <SkillTitle>Languages</SkillTitle>
                    <SkillDescription>Python, SQL, Java, Go, React</SkillDescription>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>Technologies</SkillTitle>
                    <SkillDescription>Git, TensorFlow, MongoDB</SkillDescription>
                </SkillItem>
                <SkillItem>
                    <SkillTitle>Relevant Courses</SkillTitle>
                    <SkillDescription>
                        Distributed Systems, Analysis of Algorithms, Intro to Machine Learning,
                        Database Systems, Software Engineering, Intro to Data Science, Web Development,
                        Android App Development
                    </SkillDescription>
                </SkillItem>
            </SkillsWrapper>
        </Styledglobal>
    );
}