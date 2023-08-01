const app = Vue.createApp({
    //data() - default, do not change
    data(){
        return {
            title: 'First Vue App',
            description: 'Trying vue..............',
            date: '7/27/2023',
            age: 23
        }
    }
})

//Mount - controlls components within the class
app.mount('#app')