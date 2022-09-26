import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

// import linkedin from 'assets/icons/linkedin.svg';
// import instagram from 'assets/icons/instagram.svg';
// import github from 'assets/icons/github.svg';
// import resume from 'assets/icons/resume.svg';

// Add blog and pdf resume

const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding-top: 10rem;
`;

const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-weight: 900;
    font-style: italic;
    font-size: 7rem;
  }

  a,
  li {
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 2;
    text-align: left;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;

  a:not(:last-child) {
    margin-right: 3.5rem;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  text-align: center;
  padding-top: 10rem;
  padding-bottom: 1rem;
`;

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    profiles {
                        phone
                        email
                        linkedin
                        instagram
                        github
                        blog
                    }
                }
            }
        }
    `);

    const icons = [
        {

            alt: 'Linkedin',
            link: data.site.siteMetadata.profiles.linkedin,
        },
        {

            alt: 'Instagram',
            link: data.site.siteMetadata.profiles.instagram,
        },
        {

            alt: 'Github',
            link: data.site.siteMetadata.profiles.github,
        },
        {

            alt: 'Resume',
            link: data.site.siteMetadata.profiles.resume,
        },
        // blog
        // resume
    ];

    return (
        <Wrapper>
            <TextWrapper>
                <h1>TEST.</h1>
                <ul>
                    <li>
                        <a href={`mailto:${data.site.siteMetadata.profiles.email}`}>
                            {data.site.siteMetadata.profiles.email}
                        </a>
                    </li>
                    <li>
                        <a href={`tel:${data.site.siteMetadata.profiles.phone}`}>
                            {data.site.siteMetadata.profiles.phone}
                        </a>
                    </li>
                    <li>Seoul, Korea</li>
                </ul>
            </TextWrapper>
            <IconsWrapper>
                {icons.map((icon, i) => (
                    <a href={icon.link} target="_blank" key={i}>
                        <img src={icon.icon} alt={icon.link} />
                    </a>
                ))}
            </IconsWrapper>
            <Copyright>© TEST 2022</Copyright>
        </Wrapper>
    );
};

export default Footer;
