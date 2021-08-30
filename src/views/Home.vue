<template>
  <div class="home">
    <HomeLayout></HomeLayout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HomeLayout from '../components/HomeLayout'

export default {
  name: 'Home',
  components:{
    HomeLayout,
  },
  data () {
    return {
      msg: 'Home page'
    }
  },
  computed: {
    ...mapGetters({
      name: 'name',
    }),
  },
  methods: {
      login(username,password){
          this.$store.dispatch('login',username,password);
      }
  },
  mounted: function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
