<template>
  <div class="Customers container">
    <Alter v-if="text" :message="text"></Alter>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterinput" />
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名：</th>
          <th>电话：</th>
          <th>邮箱：</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- 搜索框要搜索所以就不能循环原数组了 -->
        <!-- <tr v-for="(item,i) in customer" :key="item.id"> -->
        <tr v-for="(item,i) in filterBy(customer,filterinput)" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>
            <router-link class="btn btn-default" :to="'/Delter/'+item.id">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alter from "./Alter";
export default {
  name: "Customers",
  data() {
    return {
      customer: [],
      text: "",
      filterinput: ""
    };
  },
  created() {
    if (this.$route.query.text) {
      this.text = this.$route.query.text;
    }
    this.getcustomer();
  },
  updated() {
    this.getcustomer();
  },

  methods: {
    filterBy(customer, val) {
      return customer.filter(item => {
        return item.name.match(val);
      });
    },
    getcustomer() {
      this.$axios.get("/userName").then(e => {
        this.customer = e.data;
        //console.log(e);
      });
    }
  },
  components: {
    Alter
  }
};
</script>

<style  scoped>
</style>