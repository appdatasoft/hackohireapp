<template>
  <b-container>
  <h1>signin module </h1>
  <div v-if="!signedIn">
         <amplify-authenticator></amplify-authenticator>
      </div>
      <div v-if="signedIn">
        <amplify-sign-out class="signout"></amplify-sign-out>
        </div>
          <div class="form">
            <input class="input" v-model="name" placeholder="Companies you would like to work for?">
            <input class="input" v-model="description" placeholder="Positions you are interested">
            <button class='button' v-on:click="createCoffeeShop">Create Coffee Shop</button>
          </div>
          <div v-for="item in coffeeShops" :key="item.key" class='list-item'>
            <p class="name">{{ item.name }}</p>
            <p class="description">{{ item.description }}</p>
          </div>
        
    <div class="container">
          <amplify-photo-picker
            v-bind:photoPickerConfig="photoPickerConfig"
          ></amplify-photo-picker>
          <amplify-s3-album path="images/"></amplify-s3-album>
        </div>
        
  </b-container>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
//import { Auth } from 'aws-amplify'
import { Storage } from 'aws-amplify'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import Vue from 'vue'
import { mapGetters } from "vuex"
import router from "@/router"
import store from "@/store"
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
Vue.component('v-menu', Menu)
Vue.component('v-footer', Footer)
const photoPickerConfig = {
  path: 'images/',
}

  const ListCoffeeShops = `
  query {
    listCoffeeShops {
      items {
        id name description
      }
    }
  }
`
const CreateCoffeeShop = `
  mutation($name: String! $description: String) {
    createCoffeeShop(input: {
      name: $name description: $description
    }) {
      id name description
    }
  }
`

export default {
  name: 'app',
  async beforeCreate() {
    const { data: { listCoffeeShops: { items }} } = await API.graphql(graphqlOperation(ListCoffeeShops))
    this.coffeeShops = items
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.signedIn = true
    } catch (err) {
      this.signedIn = false
    }
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.signedIn = true
        router.push("dashboard")
      } else {
        this.signedIn = false
      }
    });
  },
  data () {
    return {
      name: '',
      description: '',
      coffeeShops: [],
      photoPickerConfig,
      signedIn: false
    }
  },
  methods: {
    async createCoffeeShop() {
      if (this.name === '' || this.description === '') {
        return
      }
      const coffeeShop = { name: this.name, description: this.description }
      const coffeeShops = [...this.coffeeShops, coffeeShop]
      this.coffeeShops = coffeeShops
      this.name = ''
      this.description = ''
      try {
        await API.graphql(graphqlOperation(CreateCoffeeShop, coffeeShop))
        console.log('coffee shop successfully created!')
      } catch (err) {
        console.log('error adding item: ', err)
      }
    },
  }
}

</script>

<style>
</style>
