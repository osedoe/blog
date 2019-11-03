import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"

const NOLOGIS_SITE = "http://www.nologis.com/"

const Img = styled.img`

`

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
  color: var(--grey);
  text-transform: capitalize;
`

export default () => {
  return <Layout>
    {/* TODO: Add images */}

    <H3>Foreword</H3>
    <P>Hola! My name is Jose, but people tend to call me Ose. I am a Full Stack Web Developer based currently in Tenerife, Spain -although I tend to work remotely most of the time.</P>
    <P>First of all, thank you for stopping by my blog. If you see an error, have any suggestions or just want to talk, don't hesitate in contacting me.</P>

    <H3>Background</H3>
    <P>I'm a former lawyer that in 2015 decided to move to Bristol, UK.</P>
    <P>I started dabbling with programming as a hobby on my free time without really knowing what I was doing, I just enjoyed building stuff, sometimes it was a crappy game, sometimes a website. By 2016, I decided that this was my passion and started learning as much as I could about Web Development to eventually transition careers.</P>
    <P>In 2017, I moved back to Spain and got a Diploma in Development of Web Applications, while I was also enrolled in the EOI's Full Stack Web Development Bootcamp -making it enough to wrap up all the knowledge gaps I had from before.</P>
    <P>Before finishing my studies, I had the immense fortune that one of my teachers at the time set his eyes on me and hired me for his company, <A href={NOLOGIS_SITE}>Nologis</A> as a FullStack developer.</P>

    <H3>The Developer</H3>
    <P>I am truly passionate about the craft of programming and problem-solving, and love all things web and the community around. This has led me to occasionally give talks and mentor people that are starting out. It's my way to payback for being in such an amazing field.</P>
    <P>I am a firm believer of OSS and all the code that I write off work is free to check and reuse by anyone. I also keep a repository with all the notes that I take when I am learning something new and you are welcome to use it or participate on it.</P>
    <P>I specialize in the Front-End, ReactJS and NodeJS, but I will happily dive into any language or unknown library/framework as well as some DevOps work despite my love for JavaScript.</P>

    <H3>The Person</H3>
    <P>When I'm not building websites, going through CodeWars or promoting OSS -I like playing indie games, cooking, and playing pool with a pint of beer.</P>
    <P>Oh, also I'm a dog lover and the proud father of Suka, a half a staffy half dalmatian dog.
    </P>
  </Layout>
}
