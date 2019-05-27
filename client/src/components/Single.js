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
    color: #636e72;
    font-size: 24px;
  }
`

const GET_POST = gql`
  query {
    apology(id: "5ce7506817b7277b5be22bf2") {
      text
      likes
    }
  }
`

const Single = props => {
  const { data, error, loading } = useQuery(GET_POST)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }
  return (
    <FeedBody>
      {console.log(data)} 
      <li>{data.apology.text}</li>
    </FeedBody>
  )
}

export default Single 
