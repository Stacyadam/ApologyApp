import React, { useState } from 'react'
import { Wrapper } from '../shared/Wrapper'
import Feed from './Feed'
import Post from './Post'


const App = () => {
  return (
    <Wrapper>
      <Post />
      <Feed />
    </Wrapper>
  )
} 

export default App
