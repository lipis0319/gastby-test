import React from 'react';
import styled from 'styled-components';
import aboutImg from 'images/about.jpg';

import { Wrapper, H1Title, H2 } from 'styles/styles';

// Tag on hover shows related libraries or frameworks
// TechSkills: proficient | famillar

const ImageWrapper = styled.div`
  width: 100%;
  height: 45vh;
  background: url(${aboutImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 25%;
`;

const TextWrapper = styled.div`
  background-color: white;
  padding: 6rem 15rem;
`;

const Title = styled(H1Title)`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const Tag = styled.p`
  color: #3997ed;
  cursor: pointer;
`;

interface PropSkillDiv {
    title: string;
    tags: string;
}

const SkillBox: React.FC<PropSkillDiv> = ({ title, tags }) => {
    return (
        <div style={{ marginBottom: '3rem' }}>
            <H2>{title}</H2>
            <Tag>{tags}</Tag>
        </div>
    );
};

const About: React.FC = () => {
    enum Skill {
        Tech = '#html5 #css #scss #javascript #jQuery #react #redux #gatsby #typescript #graphQL #apollo #node.js #express #babel #webpack #git #github',
        Creative = '#googleAnalytics #figma #photoshop #premierPro #afterEffects',
    }

    return (
        <Wrapper>
            <ImageWrapper />
            <TextWrapper>
                <div style={{ marginBottom: '6rem' }}>
                    <Title align="center">
                        &ldquo; I am an artist who love to build cool things. &rdquo;
                    </Title>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                        going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections
                        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes
                        of Good.
                    </p>

                </div>
                <div>
                    <H1Title align="left">Skills: </H1Title>
                    <SkillBox title="TECHNICAL SKILLS" tags={Skill.Tech} />
                    <SkillBox title="CREATIVE SKILLS" tags={Skill.Creative} />
                </div>
            </TextWrapper>
        </Wrapper>
    );
};

export default About;
