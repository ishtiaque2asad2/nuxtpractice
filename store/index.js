import Vuex from 'vuex'
import {posts} from "./post";

const createStore=()=> {
  return new Vuex.Store({
    modules:{
      posts
    }
  })
}
export default createStore
