/*
 * @Author: Tianyi Lu
 * @Description: 
 * @Date: 2021-07-26 14:43:55
 * @LastEditors: Tianyi Lu
 * @LastEditTime: 2021-07-26 15:15:28
 */
import axios from 'axios'

const KEY = "AIzaSyAaMs0a0APlaUeu2d29QuxlWjwn4GQqck0"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})

// 18.67 + 3.19 + 3.05 + 3.09 + 2.99 + 3.95 + 13.83

