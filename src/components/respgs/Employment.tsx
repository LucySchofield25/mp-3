import {styled} from 'styled-components';
import Styledglobal from "../styledcomp/Styledglobal";

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #a7c7e7;
  padding: 2vh 2vw;
`;

const JobItem = styled.section`
  margin-bottom: 50px;
  padding: 5px;
  color: #4a90e2;
`;

const JobTitle = styled.h3`
  font-size: calc(16px + 1.5vw);
  font-weight: bold;
  color: #0a2540;
`;

const JobSubheader = styled.h2`
  font-size: calc(12px + 1vw);
  font-weight: lighter;
  color: #0a2540;
`;

const JobDescription = styled.p`
  font-size: calc(9px + 0.8vw);
  color: #333;
  display: list-item;
  list-style-position: inside;
  padding: 0.5vh 0.5vw;
`;
export default function Employment() {
    return (
        <Styledglobal title="Employment">
            <ContentWrapper>
                <JobItem>
                    <JobTitle>Cisco Systems | Technical Intern II</JobTitle>
                    <JobSubheader>August 2023 - Ongoing | Boston, MA</JobSubheader>
                    <JobDescription>
                        Engineered a Kerberos-secured Convolutional Neural Network (CNN) for advanced GPU inferencing,
                        providing information on the efficiency of training and testing environments, with
                        use-case research featured at Cisco’s Boston AI Roundtable.
                    </JobDescription>
                    <JobDescription>
                        Contributed to SalesForce Dashboard integration by performing data mappings, supported senior engineers by
                        developing network configuration diagrams, encouraged and supported the future generation of interns by
                        conducting interviews.
                    </JobDescription>
                </JobItem>
                <JobItem>
                    <JobTitle>Cisco Systems | Global Sales AMER Technical Intern</JobTitle>
                    <JobSubheader>May 2023 - August 2023 | Boston, MA</JobSubheader>
                    <JobDescription>
                        Orchestrated social leadership as the elected point of contact for peers, strategically coordinating weekly social
                        meetings to foster a cohesive and collaborative internship community.
                    </JobDescription>
                    <JobDescription>
                        Distinguished as the Top Gun Performer in FY2023 with a 2nd place finish in an internal hackathon, demonstrating
                        both technical and interpersonal skills.
                    </JobDescription>
                </JobItem>
            </ContentWrapper>
        </Styledglobal>
    );
}