import axios from 'axios'

const ACCESS_KEY = process.env.ACCESS_KEY

export const customFetch = axios.create({
  baseURL: `https://api.unsplash.com/search/collections?client_id=${ACCESS_KEY}&query=`,
})
