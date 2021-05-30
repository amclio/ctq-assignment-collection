import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
})

export const githubListApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_LIST_URL,
})
