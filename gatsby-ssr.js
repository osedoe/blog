import { BlogProvider } from "./src/context/Context"
import React from "react"

export const wrapRootElement = ({ element }) => <BlogProvider>{element}</BlogProvider>
