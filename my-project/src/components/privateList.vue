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
            <transition-group tag="table" name="list-complete" class="table" v-if="list.length > 0">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User name</th>
                <th>Цена</th>
                <th>Количесво</th>
                <th>Удалить</th>
              </tr>
              <tr v-for="item in searchByName" v-bind:key="item" class="list-complete-item">
                <td>{{item.id}}</td>
                <td><input type="text" v-bind:value=item.name v-model="item.name" @keyup.enter="saveEdit(item.name)"></td>
                <td><input type="text" v-bind:value=item.username v-model="item.username" @keyup.enter="saveEdit(item.username)"></td>
                <td><input type="text" v-bind:value=item.email v-model="item.email" @keyup.enter="saveEdit(item.email)"></td>
                <td><select>
                    <option  v-for="n in 10">{{n}}</option>
                </select></td>
                <td class="deleteTd" v-on:click="deleteItem(item)"><span class="delete" >X</span></td>
              </tr>
            </transition-group>

            <p v-else>Список пуст</p>
            <button class="submit" v-on:click>Заказать</button>
          </div>

  </div>
</template>

<script>
export default {
  name: 'Name',
  data: function() {
    return {
      byProp: 'name',
      searchQuery: '',
      testAnaimte: '',
      userName: 'Владислав Усович',
      search: "",
      list: [],
      array: [
      ],
      isVisible: true,
      isError: false,
      hoverText: "Это вы",
      byProp: 'name',
      searchQuery: '',
      search: ""
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
  width: 60%;
  margin: 80px auto;
  padding: 0 2em;
  border: 1px solid rgba(148, 148, 148, 0.21);
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
  padding: .5em;
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

#table td {
}

#table td input {
  width: 85%;
  border-radius: 0;
       }

table td {

}

table tr:nth-of-type(2n) {
  background: rgba(208, 209, 213, 0.26);
}

tr {
    transition: .2s ease;
}

table tr:hover {
  background: rgba(210, 232, 229, 0.47);
}

input {
  /*border: none;*/
  border: solid 1px rgba(168, 168, 168, 0.44);
  background: rgba(100, 100, 100, 0.02);
  font-size: 1rem;
  transition: .2s ease;
}

input:focus {
  border-color: rgb(40, 238, 162);
  outline: none;
  /*background: rgba(100, 100, 100, 0.06);*/
}


table input {
  border: none;
}



select {
  padding: .5em;
  border: none;
  background: rgba(212, 210, 210, 0.37);

}

button {
  border: solid 1px #a8a8a8;
  color: black;
  padding: .7em 1.2em;
  background: rgba(100, 100, 100, 0);
  cursor: pointer;
  transition: .2s ease;
}

button:hover {
  border-color: #747474;
  /*background: rgba(100, 100, 100, 0.34);*/
}

.error {
  background: #aaccaa;
}

.submit {
  margin-top: 2em;
}



.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
  opacity: 0
}


.list-move,
.list-leave-active,
.list-enter-active, {
  transition: .2s cubic-bezier(.87,-.41,.19,1.44);
}
.list-enter,
.list-leave-active {
  transform: translate(0, 100%);
  opacity: 0;
}


.list-complete-item {
  transition: all .2s;
  display: inline-block;
  margin-top: 10px;
}
.list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active для <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}






</style>
