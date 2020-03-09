import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const NOLOGIS_SITE = "http://www.nologis.com/"
const WEB_DEV_NOTES = "https://github.com/osedoe/Web-Development-Notes"

const aboutImage = graphql`
    query MyQuery {
      file(relativePath: { eq: "images/about1.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const StyledImg = styled(Img)`
  border-radius: 8px;
  filter: brightness(.95) hue-rotate(-45deg);
  transition: filter 600ms ease-in-out;
  
  :hover {
    filter: none;
  }
`

const H3 = styled.h3`
  color: var(--blue);
  font-family: var(--space-mono);
  text-shadow: var(--text-shadow);
  padding: 20px 0 3px;
  margin: 0;
`

const P = styled.p`
  color: var(--pale-grey);
  font-family: var(--work-sans);
  
  :last-of-type {
  padding-bottom: 60px;
  }
`

const Ul = styled.ul`
  font-family: var(--work-sans);
  color: var(--pale-grey);
`

const A = styled.a`
  color: var(--grey);
`

export default () => {
  const data = useStaticQuery(aboutImage)

  return <Layout>
    <StyledImg fluid={data.file.childImageSharp.fluid} alt="Emily and Ose"/>
    <H3>A foreword</H3>
    <P>Hola! My name is Jose, but people tend to call me Ose. I am a Full Stack Web Developer based currently in Tenerife, Spain -although I tend to work remotely most of the time.</P>
    <P>First of all, thank you for stopping by my blog. If you see an error, have any suggestions or just want to talk, don't hesitate in contacting me.</P>

    <H3>A bit of background</H3>
    <P>I'm a former chef/lawyer -yes- that in 2015 decided to move to Bristol, UK.</P>
    <P>I started dabbling with programming as a hobby on my free time without really knowing what I was doing, I just enjoyed building stuff, sometimes it was a crappy game, sometimes a website. By 2016, I decided that this was my passion and started learning as much as I could about Web Development to eventually transition careers.</P>
    <P>In 2017, I moved back to Spain and got a Diploma in Development of Web Applications, while I was also enrolled in the EOI's Full Stack Web Development Bootcamp -making it enough to wrap up all the knowledge gaps I had from before.</P>
    <P>Before finishing my studies, I had the immense fortune that one of my teachers at the time set his eyes on me and hired me for his company, <A href={NOLOGIS_SITE}>Nologis</A> as a FullStack developer.</P>

    <H3>The Developer</H3>
    <P>I am truly passionate about the craft of programming and problem-solving, and love all things web and the community around. This has led me to occasionally give talks and mentor people that are starting out. It's my way to payback for being in such an amazing field, and I hope to eventually make teaching an important part of my life.</P>
    <P>I am a firm believer of OSS and all the code that I write off work is free to check and reuse by anyone. I also keep a repository with all the notes that I take when I am learning something new and you are welcome to use it or participate on it <A href={WEB_DEV_NOTES}>here</A> -although beware you may find some notes in Spanish 😝.</P>
    <P>My field of expertise is JavaScript. Right now, I'm working with ReactJS, NodeJS, MongoDB and some basic AWS. But I have used multiple programming languages in the past and I will happily dive into anything new given the chance.</P>

    <H3>The Person</H3>
    <P>Not everything in life is programming. We have give room to other hobbies.</P>
    <P>I have various ways to disconnect from all the hustle that we are constantly into:</P>
    <Ul>
      <li>First of all, <strong>cooking</strong>. Got it from my family -Spanish, obviously-. I love to always being experimenting in the kitchen and try mixing different flavours.</li>
      <li><strong>Going out</strong>. Either meaning going for a walk at the end of the day with my dog Suka, a weekend getaway to the british countryside, or even better -travelling with my partner whenever is possible. I like to escape the noise of big cities quite often and enjoy nature.</li>
      {/* FIXME: To review */}
      <li>Play indie games. I'm a fan of everything 8bit/16bit from years ago. And I love that it has gone back to trend and I can enjoy so many titles that bring me back such good memories. Also bonus points for the Nintendo Switch and opening a new cooperative world with the misses!</li>
    </Ul>
      <P>When I'm not building websites, going through CodeWars or promoting OSS -I like playing indie games, cooking, and playing pool with a pint of beer.</P>
      <P>Oh, also I'm a dog lover and the proud father of Suka, a half a staffy half dalmatian dog.
      </P>
  </Layout>
}
