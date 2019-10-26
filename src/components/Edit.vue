<template>
  <div class="Edit container">
    <Alter v-if="text" :message="text"></Alter>
    <h1 class="page-herder">编辑用户</h1>
    <form v-on:submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名：</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
        </div>
        <div class="form-group">
          <label>电话：</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
        </div>
        <div class="form-group">
          <label>邮箱：</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label>学历：</label>
          <input
            type="text"
            class="form-control"
            placeholder="education"
            v-model="customer.education"
          />
        </div>
        <div class="form-group">
          <label>毕业学校：</label>
          <input
            type="text"
            class="form-control"
            placeholder="graduationscholl"
            v-model="customer.graduationscholl"
          />
        </div>
        <div class="form-group">
          <label>职业：</label>
          <input
            type="text"
            class="form-control"
            placeholder="profession"
            v-model="customer.profession"
          />
        </div>
        <div class="form-group">
          <label>个人简介：</label>
          <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile" /> -->
          <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alter from "./About";
export default {
  name: "Add",
  data() {
    return {
      customer: {},
      text: ""
    };
  },
  created() {
    this.getbianji(this.$route.params.id);
  },
  methods: {
    getbianji(id) {
      this.$axios.get("/userName/" + id).then(e => {
        this.customer = e.data;
        console.log(e, "lololo");
      });
    },
    updateCustomer(e) {
      //console.log(123);
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.text = "请填写完整信息！";
      } else {
        let updateCustmoer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationscholl: this.customer.graduationscholl,
          profession: this.customer.profession,
          profile: this.customer.profile
        };
        this.$axios
          .put("/userName/" + this.$route.params.id, updateCustmoer)
          .then(response => {
            this.$router.push({
              path: "/",
              query: { text: "用户编辑成功" }
            });
          });
        e.preventDefault();
      }
      e.preventDefault(); //阻止默认事件
    }
  },
  components: {
    Alter
  }
};
</script>

<style  scoped>
</style>