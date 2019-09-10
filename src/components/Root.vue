<template>
  <div class="root">
    <el-radio-group v-model="action">
      <el-radio-button label="Query"></el-radio-button>
      <el-radio-button label="Update"></el-radio-button>
    </el-radio-group>
    <div class="main">
      <div v-if="action==='Query'">
      </div>
      <div v-if="action==='Update'">
      </div>
    </div>
    <el-form :label-position="labelPosition" label-width="80px" :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="xxxx">
        <el-input v-model="form.b"></el-input>
      </el-form-item>
      <el-form-item label="xxxx">
        <el-input v-model="form.c"></el-input>
      </el-form-item>
    </el-form>
    <div id="submit">
      <el-button type="primary" @click="submit">Submit</el-button>
    </div>
  </div>
</template>

<script>
import api from '../http/api';

export default {
  data() {
    return {
      action: 'Query',
      labelPosition: 'left',
      form: {
        name: '',
        b: '',
        c: ''
      }
    };
  },
  methods: {
    submit() {
      console.log(111);
    }
    // signOut() {
    //   api.signOut()
    //     .then(() => {
    //       sessionStorage.clear();
    //       this.$router.push({ path: '/landingpage' });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
  mounted() {
  },
  computed: {
  },
};
</script>

<style>
.root {
  margin: 20px;
}

.main {
  margin-top: 20px;
}

#submit {
  margin-top: 20px;
}
</style>
