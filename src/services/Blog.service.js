import { config } from './config'

import axios from 'axios'

export const BlogService = {
  sendContact,
  getPosts,
  getPost,
}

function sendContact ( name, email, phone, post ) {

  const options = {
    url: `${config.apiUrl}/contact`,
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: {
      name,
      email,
      phone,
      post
    },
  }

  return axios(options)
    .then( response => {
      //console.log(response.data);
      if (response.data.contact) {
        return response.data
      }
      throw new Error('Erro no envio')
    }
    ).catch( e => {
      console.log(e.response.data.error);
      throw new Error(e.response.data.error)
    })
}

function getPosts () {
  const options = {
    url: `${config.apiUrl}/article`,
    method: 'GET',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    }
  }

  return axios(options)
    .then(response => {
      if (response.data.posts) {
        return response.data
      }
      return false
    }, error => {
      console.log(error);
      // return false
      throw new Error(error)
    })
}

function getPost (id) {
  const options = {
    url: `${config.apiUrl}/article/${id}`,
    method: 'GET',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    }
  }

  return axios(options)
    .then(response => {
      if (response.data.post) {
        return response.data
      }
      return false
    }, error => {
      console.log(error);
      // return false
      throw new Error(error)
    })
}
