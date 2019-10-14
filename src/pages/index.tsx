import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { MiniPost } from "../components/miniPost/MiniPost"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            spoiler
          }
          timeToRead
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const Intro = styled.div`
  margin: 10px 20px 30px;
  
  //@media (max-width: 790px) {
  //  margin: 0 0 30px;
  //} 
`

const P = styled.p`
  color: var(--grey);
  font-family: 'Georgia', sans-serif;
  font-style: italic;
  opacity: .8;
  padding: 3px 0;
  margin: 0;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

export default ({ data }) => {
  return <Layout>
    <Intro>
      <P>Hola! I'm Ose, a Full Stack developer.</P>
      <P>This is my personal blog, where I write about all things web and not so web.</P>
    </Intro>
    <Main>
      {/*<h2>{data.allMarkdownRemark.totalCount} Posts so far...</h2>*/}
      <div>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (<MiniPost key={index} data={node}/>))}
      </div>
    </Main>
  </Layout>
}
