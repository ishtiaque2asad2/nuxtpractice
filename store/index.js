import Vuex from 'vuex'

const createStore=()=> {
  return new Vuex.Store({
    state:{
      loadedPosts:[]
    },
    mutation:{
      setPosts(state,posts){
        state.loadedPosts = posts;
      }
    },
    actions:{
      setPosts(vuexContent,posts){
        vuexContent.commit('setPosts',posts);
      }
    },
    getters:{
      loadedPosts(state){
        return state.loadedPosts;
      }
    }
  })
}
export default createStore
