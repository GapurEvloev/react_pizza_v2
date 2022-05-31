import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    className="pizza-loader pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="270" rx="10" ry="10" width="280" height="24" /> 
    <rect x="-1" y="313" rx="10" ry="10" width="280" height="88" /> 
    <circle cx="134" cy="120" r="120" /> 
    <rect x="0" y="430" rx="12" ry="12" width="92" height="25" /> 
    <rect x="125" y="420" rx="24" ry="24" width="155" height="45" />
  </ContentLoader>
)

export default Loader