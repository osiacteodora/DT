var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    value: 0
  },

  methods: {
    increment: function () {
      if (this.value < 10)
        this.value++;
      console.log(this.value);
      return this.value;

    },

    decrement: function () {
      if (this.value >= 1)
        this.value--;
      console.log(this.value);
      return this.value;

    }
  }
});
