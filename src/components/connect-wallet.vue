<template>
  <div>
      <button v-if="account==null" @click="clickOpenModal()" class="btn btn-primary mr-2 connect-btn">
        Connect
      </button>
      <button v-if="account!=null" @click="clickStopProvider()" class="btn btn-primary mr-2 connect-btn">
        Disconnect
      </button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex"

export default {
  components: {

  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['account']),
  },
  methods: {
    ...mapActions(['stopProvider', 'connectionModal']),
    clickOpenModal: function () {
      this.connectionModal()
    },
    clickStopProvider: function () {
      this.stopProvider()
    },
  },
  mounted() {
  }
}
</script>
<style>
#WEB3_CONNECT_MODAL_ID{
  position: absolute;
  z-index: 1000;
}
</style>