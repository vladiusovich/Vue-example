<template>
  <div class="hello">
    <h2>Корзина</h2>
    <h2 v-bind:title="hoverText">{{userName}}</h2>
    <label>Поиск: </label><input type="text" v-model="searchQuery" @keyup="see">
    <select v-model="byProp">
      <option>name</option>
      <option>username</option>
      <option>email</option>
    </select>

    <ul>
      <li v-for="ar in array "> {{ar.name}}</li>
    </ul>
      <div id="table">
        <table class="table">
          <tr>
            <th>Id</th>
            <th v-bind:class="{error:isError}">Name</th>
            <th>User name</th>
            <th>Цена</th>
            <th>Количесво</th>
            <th>Удалить</th>
          </tr>
          <tr v-for="item in searchByName">
            <td>{{item.id}}</td>
            <td><input type="text" v-bind:value=item.name v-model="item.name" @keyup.enter="saveEdit(item.name)"></td>
            <td><input type="text" v-bind:value=item.username v-model="item.username" @keyup.enter="saveEdit(item.username)"></td>
            <td><input type="text" v-bind:value=item.email v-model="item.email" @keyup.enter="saveEdit(item.email)"></td>
            <td><select>
                <option  v-for="n in 10">{{n}}</option>
            </select></td>
            <td class="deleteTd" v-on:click="deleteItem(item)"><span class="delete" >X</span></td>
          </tr>
        </table>
        <button class="submit" v-on:click>Заказать</button>
      </div>


  </div>
</template>

<script>
export default {
  name: 'Name',
  data () {
    return {
      byProp: 'name',
      searchQuery: '',
      userName: 'Владислав Усович',
      search: "",
      list: [],
      array: [
      ],
      isVisible: true,
      isError: false,
      hoverText: "Это вы"
    }
  },

  computed: {
    FilterItem: function() {
      return this.list.slice(0,10);
    },
    searchByName: function() {
      var self = this;
      return self.list.filter(function(item) {
        return item[self.byProp].indexOf(self.searchQuery) !== -1
      })
    }
  },

      methods: {
        addItem: function() {
          this.list.push({ name: this.header });
        },
        deleteItem: function(item) {
          this.list.splice(this.list.indexOf(item),1);
        },
        saveEdit: function(value) {
          console.log(value);
        },
        see: function() {
          console.log(this.byProp);
        }
      },
      created: function() {
                this.$http.get('https://jsonplaceholder.typicode.com/users')
                  .then(function(resp) {
                      this.list = resp.data;
                  });
              }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
}

.hello {
  width: 70%;
  margin: 0 auto;
  padding: 0 2em;
  border: 1px solid rgba(148, 148, 148, 0.21);
  box-shadow: 0px 0px 9px 0px rgba(148, 148, 148, 0.21);
}
h1, h2 {
  font-weight: normal;
}

a {
  text-decoration: none;
}

input {
  padding: 0.5em 1em;
}

ul {
  width: 50%;
  margin: 2em auto;
  list-style-type: none;
  padding: 0;
  font-size: 1.3rem;
  line-height: 1.5rem;

}

li {
  display: block;
  margin: 0 10px;
  cursor: pointer;
}

a {
  color: #42b983;
}

#table {
  margin: 2em auto;
}

#table table {
  width: 100%;
}

.delete {
  display: block;
  background: transparent;
  border: none;
  font-size: 1rem;

  transition: .2s ease;
}

.deleteTd {
    cursor: pointer;
    background: rgba(232, 210, 210, 0.37);
      transition: .3s ease;

}

.deleteTd:hover {
  background: rgba(232, 100, 110, 0.57);
}

#table button:hover {
  transform: scale(1.1);
}

#table td {
}

#table td input {
  width: 85%;
  border-radius: 0;
       }

table td {

  border: 1px solid #eee;
}

table tr:nth-of-type(2n) {
  background: rgba(187, 187, 187, 0.37);;
}

tr {
    transition: .2s ease;
}

table tr:hover {
  background: rgba(210, 232, 229, 0.47);
}

input {
  padding: 0.5em 1em;
  border-radius: 10px;
  border: none;
  background: rgba(100, 100, 100, 0.15);
  transition: .2s ease;
}

input:focus {
  outline: none;
  background: rgba(100, 100, 100, 0.2);
}


select {
  padding: .5em;
  border-radius: 10px;
  border: none;
  background: rgba(212, 210, 210, 0.37);

}

button {
  border: none;
  border-radius: 10px;
  padding: .7em 1em;
  cursor: pointer;
  transition: .2s ease;
}

button:hover {
  background: rgba(100, 100, 100, 0.43);
}

.error {
  background: #aaccaa;
}

.submit {
  margin-top: 2em;
}



</style>
