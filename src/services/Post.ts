import axios from 'axios';

import { Post } from '../models'

export const LIST_OF_POST = async () => {
  try {
    const posts = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    return posts.data
  } catch (error) {
    console.log('LIST_OF_POST error', error)
    throw error;
  }
}

export const GET_POST_BY_ID = async (id: number) => {
  try {
    const post = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return post.data
  } catch (error) {
    console.log('GET_POST_BY_ID error', error)
    throw error;
  }
}