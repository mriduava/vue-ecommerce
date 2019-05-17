<template>
 <div>
   
    <Front/>

    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      </v-flex>
    </v-layout>

  </div>
</template>

<script>
// @ is an alias to /src

import Front from '@/components/Front'

export default {
  name: "home",
  components: {
    Front
  }
};
</script>
