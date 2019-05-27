import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Wrapper } from '../shared/Wrapper'

import Feed from './Feed'
import Post from './Post'
import Single from './Single'


const App = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path='/' render={() => (
          <>
          <Post />
          <Feed />
          </>
        )} />
      <Route exact path='/post/:id' component={Single} />
      </Switch>
    </Wrapper>
  )
} 

export default App
