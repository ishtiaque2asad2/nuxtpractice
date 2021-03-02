import axios from "axios";
export const posts={
  namespaces:true,
  state:{
    loadedPosts:[]
  },
  mutations:{
    setPosts(state,posts){
      state.loadedPosts = posts;
    }
  },
  actions:{
    nuxtServerInit(vuexContext,context){
      return axios.get('https://testnuxt-873ba-default-rtdb.firebaseio.com/posts.json')
        .then(data=>{})
    },
    setPosts(vuexContent,posts){
      vuexContent.commit('setPosts',posts);
    }
  },
  getters:{
    loadedPosts(state){
      return state.loadedPosts;
    }
  }
}
