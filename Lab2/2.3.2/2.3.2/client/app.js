var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null,
        newUser: { name: '', city: '', id: '' },
        userid: 0,
        usersService: null,
        name: '', city: '',
        id_delete: null,
        id_update: null, name_update: " ", city_update: " ",
        id: null
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },

    methods: {
        remove: function () {
            console.log(this.id_delete),
                this.usersService.remove(this.id_delete).then(response => (location.reload()));
        },

        adding: function () {
            this.usersService.adding({ name: this.name, city: this.city, id: this.id }).then(response => location.reload());
        },

        upd: function () {
            this.usersService.upd(this.id_update, { name: this.name_update, city: this.city_update }).then(response => location.reload());

        }

    }
})