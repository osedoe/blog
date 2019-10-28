import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"

const NOLOGIS_SITE = "http://www.nologis.com/"

const Img = styled.img`

`;

const H3 = styled.h3`
  color: var(--pink);
  text-shadow: 0 0 3px var(--purple);
  padding: 20px 0 3px;
  margin: 0;
`

const P = styled.p`
  color: var(--pale-grey);
  font-family: 'Georgia', serif;
`

const A = styled.a`
  color: var(--purple);
  text-transform: capitalize;
  font-style: italic;
  text-shadow: 0 0 3px var(--purple-alpha);
`

export default () => {
  return <Layout>
    {/* TODO: Add images */}

    <H3>Foreword</H3>
    <P>My name is Jose Diaz-Gonzalez, although people know me as Ose. And I am a remote Full Stack Web Developer based currently in Tenerife, Spain.</P>
    <P>In 2015, I moved to Bristol, UK. There I found my passion and started learning everything about Web Development. In 2017, I moved back to Spain and got a Diploma in Development of Web Applications, while I was also enrolled in the EOI's Full Stack Web Development Bootcamp.</P>

    <H3>The Developer</H3>
    <P>Before finishing my studies, I had the immense fortune of getting hired by <A href={NOLOGIS_SITE}>Nologis</A> as a FullStack developer.</P>
    <P>I am truly passionate about the craft of programming and problem-solving, and love all things web. I specialize in the Front-End, ReactJS and NodeJS, but I will happily dive into any language or unknown library/framework as well as some DevOps work despite my love for JavaScript.</P>

    <H3>The Person</H3>
      <P>When I'm not building websites, going through CodeWars or promoting OSS -I like playing indie games, cooking, and playing pool with a pint of beer.</P>
      <P>Oh, also I'm a dog lover and the proud father of Suka, a half a staffy half dalmatian dog.
    </P>
  </Layout>
}
