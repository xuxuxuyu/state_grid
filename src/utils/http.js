import axios from 'axios';

import { Message } from 'element-ui';

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='http://192.168.31.48:8080/'; //http://139.9.133.149:80/
var token = localStorage.getItem("loginToken");
console.log(token)
axios.defaults.headers.common['Authorization'] = token;

const qs = require('qs');
export function httpGet(url,params={}){
  return new Promise((resolve,reject) => {
    console.log(params)
    axios.get(url,{params:params})
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}

 export function httpPost(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,qs.stringify(data))
          .then(response => {
            console.log(response)
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }