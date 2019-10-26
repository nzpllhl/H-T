<template>
  <div class="delter container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+coustomer.id">编辑</router-link>
        <button class="btn btn-danger" @click="delter(coustomer.id)">删除</button>
      </span>
    </h1>

    <h1 class="page-header">{{coustomer.name}}</h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{coustomer.phone}}</span>
      </li>
      <li>
        <span class="glyphicon glyphicon-user">{{coustomer.email}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{coustomer.education}}</span>
      </li>
      <li>
        <span class="glyphicon glyphicon-user">{{coustomer.graduationscholl}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{coustomer.profession}}</span>
      </li>
      <li>
        <span class="glyphicon glyphicon-user">{{coustomer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Delter",
  data() {
    return {
      coustomer: {},
      id: this.$route.params.id
    };
  },
  created() {
    this.getcoustomer();
  },
  methods: {
    getcoustomer() {
      this.$axios.get("/userName/" + this.id).then(e => {
        this.coustomer = e.data;
      });
    },
    delter(id) {
      //alert(1);
      this.$axios.get("/userName/" + id).then(e => {
        console.log(e);
        this.$router.push({ path: "/", query: { text: "用户删除成功！" } });
      });
      console.log(id);
    }
  }
};
</script>

<style  scoped>
</style>