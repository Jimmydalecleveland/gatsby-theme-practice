import React from 'react'

const ShadowBoi = ({ isChocolateVisible, children }) => {
  return (
    <div>
      {isChocolateVisible && <p>Chocolate is visible</p>}
      {children}
    </div>
  )
}

export default ShadowBoi
