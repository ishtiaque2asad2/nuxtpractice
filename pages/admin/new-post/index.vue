<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from 'axios';
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods:{
    onSubmit(postdata){
      axios.post('https://testnuxt-873ba-default-rtdb.firebaseio.com/posts.json',postdata)
        .then(
          result=>{
            console.log(result);
          },
          error=>{
            console.log(error);
          }
      );
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>

