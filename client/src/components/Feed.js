import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

const FeedBody = styled.ul`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  list-style-type: none;
  li {
    box-sizing: border-box;
    width: 100%;
    background-color: ${props => props.theme.light};
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 32px;
    color: ${props => props.theme.dark};
  }
`

const GET_POSTS = gql`
  query {
    apologies {
      id
      text
    }
  }
`

const Feed = props => {
  const { data, error, loading } = useQuery(GET_POSTS)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }
  return (
    <FeedBody>
      {data.apologies.reverse().map(post => <li key={post.id}>{post.text}</li>)}
    </FeedBody>
  )
}

export default Feed
