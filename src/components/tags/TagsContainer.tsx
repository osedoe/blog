import React, { FC } from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { TagPill } from "./TagPill";

export const query = graphql`
{
  allMarkdownRemark {
    group(field: frontmatter___tags) {
      tag: fieldValue
      totalCount
    }
  }
}
`;

const H3 = styled.h3`
  color: var(--pink);
  font-family: var(--space-mono);
  text-shadow: 1px 1px 3px var(--black);
`;

const TagWrapper = styled.div`
  display: inline-block;
`;

export const TagsContainer: FC = () => {
  const data = useStaticQuery(query);

  return <>
    <H3>Topics</H3>
    <TagWrapper>
      {data.allMarkdownRemark.group.map((tag, index) => <TagPill key={index} data={tag}/>)}
    </TagWrapper>
  </>;
};
