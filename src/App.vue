<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="foto of fotos">
         <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
   
 
  </div>
</template>

<script>
export default {
  data(){
    return {
      titulo: 'Alurapic',
      fotos: [
        {
          url: 'https://boasnovasmg.com.br/wp-content/uploads/2018/08/dog-2088424_1920.jpg',
          titulo: 'Cão'
        },
        {
          url: 'https://boasnovasmg.com.br/wp-content/uploads/2018/08/dog-2088424_1920.jpg',
          titulo: 'Cachorro'
        }
      ]
    }
  }
}
</script>

<style>
</style>
