var app = new Vue({
    el: '#app',
    data: {
        message: '',
        message1: ''
    },
    methods: {
        process: function () {
            if (this.message == '123') {
                this.message1 = "Ai introdus 123"
                console.log(this.message);
            }
            else {
                console.log("Nothing to see here")
                this.message1 = "Nothing to see here"
            }
        }
    }
})