import axios from 'axios'
import httpInstance from "@/utils/http"

export function getCategoryAPI() {
  return axios.create({
    url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head',
    timeout: 5000
  })
}