import React from "react"
import { BlogProvider } from "./src/context/Context"

import "./src/utils/base.css"

require("./src/utils/prism-synthwave84.css")

export const wrapRootElement = ({ element }) => <BlogProvider>{element}</BlogProvider>
