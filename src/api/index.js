import {httpPost,httpGet} from '../utils/http'

const apiLogin = (param) => {
    console.log(param.password)
    console.log(param.username)
    return new Promise((resolve) => {
        httpGet('/yayun/random').then((res)=>{
            resolve(res)
        })
    });
}

export { apiLogin };