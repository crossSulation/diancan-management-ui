/**
 * 封装 axios,支持restfull 风格
 */
import Axios from 'axios'

var defaultConfig ={
    baseURL:"http://localhost:8080/",
    headers:{}
}

function createAxios(method,url,params,headers,data) {
  var instance= Axios.create(defaultConfig || this.config);
   switch(method) {
      case 'Get':
     return instance.get(url,{
          params:params,
          headers:headers
      })
      break;
      case 'Put':
       return instance.put(url,{
           params:params,
           headers:headers,
           data:data
       });
      break;
      case 'Post':
      return instance.post(url,{
          params:params,
          headers:headers,
          data:data
      });
      break;
      case 'Delete':
      return instance.delete(url,{
          params:params,
          headers:headers,
          data:data
      })
      break;
      default:
      break;
   } 
 
}
function setConfig(config) {
    var cfg =config || defaultConfig;
    Axios.prototype.config =cfg;
}
 export default {
     get:function(url,params,headers) {
         return createAxios('Get',url,params,headers);
     },
     post:function(url,params,headers,reqbody) {
         return createAxios('Post',url,params,headers,reqbody);
     },
     delete:function(url,params,headers) {
         return createAxios('Delete',url,params,headers);
     },
     put:function(url,params,headers,reqbody) {
         return createAxios('Put',params,headers,reqbody);
     },
     config:function(config) {
        setConfig(config);
     }
 }