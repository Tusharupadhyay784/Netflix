import React from 'react'
import Home from '../Home/Home'
import Component1 from '../comp1/Component1'
import Component2 from '../comp2/Component2'
import Component3 from '../comp3/Component3'
import Component4 from '../comp4/Component4'
import Component5 from '../comp5/Component5'
import Component6 from '../comp6/Component6'

const AllComponent = () => {
  return (
    <div>
      <Home />
      <hr style={{ height: ".5em", backgroundColor: "rgba(50,50,50,.8)", border: "none" }} />
      <Component1 />
      <hr style={{ height: ".5em", backgroundColor: "rgba(50,50,50,.8)", border: "none" }} />
      <Component2 />
      <hr style={{ height: ".5em", backgroundColor: "rgba(50,50,50,.8)", border: "none" }} />
      <Component3 />
      <hr style={{ height: ".5em", backgroundColor: "rgba(50,50,50,.8)", border: "none" }} />
      <Component4 />
      <hr style={{ height: ".5em", backgroundColor: "rgba(50,50,50,.8)", border: "none" }} />
      <Component5/>
      <hr style={{ height: ".5em", backgroundColor: "rgba(50,50,50,.8)", border: "none" }} />
      <Component6/>
    </div>
  )
}

export default AllComponent