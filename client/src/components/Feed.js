import React from 'react'
import { Link as RRDLink } from 'react-router-dom'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

const Link = styled(RRDLink)`
  text-decoration: none;
  width: 100%;
  height: auto;
`

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
    color: #636e72;
    font-size: 24px;
  }
`

const GET_POSTS = gql`
  query {
    apologies {
    results{
      id
      text
      likes
    }
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
      {data.apologies.results.reverse().map(post => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <li>{post.text}</li>
        </Link>
      ))}
    </FeedBody>
  )
}

export default Feed
