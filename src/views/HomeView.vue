<template>
    <div class="hello">
        <el-input v-model="val1"></el-input>
        <el-input v-model="val2"></el-input>
        <el-button @click="loginButton">cs</el-button>
        <el-button @click="gteButton">cs1</el-button>
    </div>
</template>
<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            val1: '',
            val2: '',
        };
    },
    created() {
    },
    mounted() {
    },
    watch: {
    },
    methods: {
        loginButton() {
            const data = { username: this.val1, password: this.val2 }
            this.$http.post('/login', data).then((res) => {
                console.log('====================================');
                console.log(res);
                console.log('====================================');
            })
        },
        gteButton(){
            this.$http.get('/userinfo').then((res) => {
                console.log('====================================');
                console.log(res);
                console.log('====================================');
            })
        },
    },
};
</script>
<style scoped lang="scss"></style>
