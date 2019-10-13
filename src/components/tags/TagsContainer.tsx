import React, { FC } from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { TagPill } from "./TagPill"

export const query = graphql`
{
  allMarkdownRemark {
    group(field: frontmatter___tags) {
      tag: fieldValue
      totalCount
    }
  }
}
`

const Container = styled.div`

`

const TagWrapper = styled.div`
  display: inline-block;
`

export const TagsContainer: FC = () => {
  const data = useStaticQuery(query)

  return <>
    <h3>Topics</h3>
    <TagWrapper>
      {data.allMarkdownRemark.group.map(tag => <TagPill data={tag}/>)}
    </TagWrapper>
  </>
}
