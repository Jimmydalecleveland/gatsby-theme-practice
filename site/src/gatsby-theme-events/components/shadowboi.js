import React from 'react'
import CoreShadowBoi from 'gatsby-theme-events/src/components/shadowboi'

const ShadowBoi = ({ isChocolateVisible, children }) => {
  return (
    <CoreShadowBoi isChocolateVisible={isChocolateVisible}><h1>THE SHADOW ZONE</h1>{children}</CoreShadowBoi>
  )
}

export default ShadowBoi
