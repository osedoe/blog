import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"

const Container = styled.div`
  background-color: #FDFDFD;
  min-height: 100vh;
  min-width: 100vw;
`;

export default () => {
  return <Container>
  <Layout>
    HOMEPAGE
  </Layout>
  </Container>
}
