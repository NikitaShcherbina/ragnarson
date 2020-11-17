<template>
  <div class="home">
    <div class="header">
      <div class="score">
        <p>Your score: {{ userPoints }}</p>
        <p> Rounds left: {{30 - round}} </p>
      </div>
    </div>
      <main>
        <div class="container">
          <span>
            <img :src="currentCart.image" alt="">
          </span>
          <div class="buttons">
            <v-btn
                rounded
                color="rgb(245, 245, 245)"
                dark
                @click="higher()"
                :disabled="!deskID || round > 29"
            >
              <p>higher</p>
            </v-btn>
            <v-btn
                rounded
                color="rgb(245, 245, 245)"
                dark
                @click="lower()"
                :disabled="!deskID || round > 29"
            >
              <p>lower</p>
            </v-btn>
          </div>
        </div>
      </main>
      <v-dialog
          v-model="visible"
          width="270"
      >
        <v-alert type="success" class="mb-0">
          Reload the previous game?
          <v-btn @click="loadCache()">YES</v-btn>
          <v-btn @click="clearCache()">NO</v-btn>
        </v-alert>
      </v-dialog>
    <v-data-table
        :headers="headers"
        :items="history"
        :items-per-page="20"
        dense
        class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src

import vuex from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      userPoints: 0,
      round: 1,
      higherCart: null,
      visible: false,
      history: [
        {
          round: 1,
          userPoints: 0
        }
      ],
      headers: [
        { text: 'round', value: 'round',},
        { text: 'userPoints', value: 'userPoints' },
      ]
    }
  },
  created() {
    this.$store.dispatch('getDesk')
    if (localStorage.getItem('data')) {
      this.visible = true;
    }
  },
  components: {

  },
  methods: {
    cartToNumber(cart) {
      let num = {
        0: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
      }
      return +cart.code[0] > 0 ? +cart.code[0] : num[cart.code[0]]
    },
    async higher() {
      this.round += 1
      await this.$store.dispatch('getCart')
      if (this.cartToNumber(this.currentCart) > this.cartToNumber(this.previousCart)) {
        this.userPoints = +(this.userPoints + 0.1).toFixed(1)
      }
    },
    async lower() {
      this.round += 1
      await this.$store.dispatch('getCart')

      if (this.cartToNumber(this.currentCart) < this.cartToNumber(this.previousCart)) {
        this.userPoints = +(this.userPoints + 0.1).toFixed(1)
      }
    },
    loadCache() {
      this.userPoints = JSON.parse(localStorage.getItem('data')).userPoints
      this.round = JSON.parse(localStorage.getItem('data')).round
      this.history = JSON.parse(localStorage.getItem('data')).history
      this.visible = false
    },
    clearCache() {
      localStorage.removeItem('data')
      this.visible = false
    }
  },
  computed: {
    currentCart() {
      return this.$store.state.currentCart;
    },
    previousCart() {
      return this.$store.state.previousCart;
    },
    deskID() {
      return this.$store.state.desk_id;
    }
  },
  watch: {
    round(round) {
      if (round > this.history.length) this.history.push({
        userPoints: this.userPoints,
        round: round
      })
      localStorage.setItem( 'data', JSON.stringify({
            userPoints: this.userPoints,
            round: round,
            history: this.history
      }))
      if (round === 30) {
        localStorage.removeItem('data')
      }
    },
  },
}
</script>

<style lang="scss">
  .home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(247 248 250);
    .header {
      .score {
        display: flex;
        text-align: right;
        p {
          margin: 0 5px;
        }
      }
    }
      main {
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .dice {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .buttons {

            .v-btn {
              font-family: 'TT Norms Pro Bold';
              text-transform: none;
              p {
                color:rgba(57 36 115);
                margin: 0;
                margin-right: 5px;
              }
            }
          }
        }
      }
    .elevation-1 {
      position: absolute;
      left:0;
      top:0;
      width: 220px;
      .v-data-footer__select {
        display: none;
      }
    }
  }
</style>
