<template>
  <button v-sy="'cai'">++</button>
  <c1-c2></c1-c2>
  <h1-h2></h1-h2>
</template>

<script>
export default {
     name: 'GoodsList',
     directives: {
         sy: {
             mounted(el,bdd){
                 console.log(el)
                 console.log(bdd.value)
             }
         }
     }
}
</script>

<style>

</style>