import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo-hooks'
import TextAreaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'
import { linearGradient } from 'polished'

const PostBox = styled.form`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.light};
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 48px;
`

const TextArea = styled(TextAreaAutosize)`
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.secondary}; 
  width: 100%;
  min-height: 64px;
  padding: 8px;
  resize: none;
`

const Button = styled.button`
  box-sizing: border-box;
  margin: 32px 0;  
  padding: 16px 32px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  font-size: 18px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: border 0.25s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  &:hover {
    cursor: pointer;
    border: 1px solid ${props => props.theme.secondary};
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    transition: border 0.25s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  }
`

const POST_APOLOGY = gql`
  mutation createApology($text: String!) {
    createApology(text: $text) {
      id
    }
  }
`

const Post = props => {
  const [ post, setPost ] = useState('')
  const postApology = useMutation(POST_APOLOGY, {
    variables: { text: post }
  })
  const postData = e => {
    e.preventDefault()
    postApology()
    setPost('')
  }
  return (
    <PostBox onSubmit={e => postData(e)}>
      <TextArea placeholder="Write your apologize here..." value={post} onChange={e => setPost(e.target.value)} />
      <Button>Post</Button>
    </PostBox>
  )
}

export default Post 
