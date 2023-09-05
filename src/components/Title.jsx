import React from 'react'

const Title = ({text}) => {
  return (
    <div className="title">
      <h2>
        {text || 'Default Title'}
        <div className="title-underline"></div>
   </h2>
    </div>
    
  )
}

export default Title