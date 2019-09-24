import React from "react"
import styled from "@emotion/styled"

const H1 = styled.h1`
    align-items: center;
    box-sizing: border-box;
    color: var(--black);
    display: flex;
    flex-direction: row;
    font-family: Audiowide, monospace;
    font-size: 20px;
    height: 32px;
    justify-content: center;
    margin: 16px;
    opacity: .85;
    pointer-events: none;
    text-align: center;
    user-select: none;
    width: 160px;
    
    @media (max-width: 1000px) {
      font-size: 16px;
      margin: 0;
    }
`

export const Logo = () => <H1>_Ose _Diaz</H1>
