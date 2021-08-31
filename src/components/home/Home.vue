<template>
  <div class="corpo">

    <h1 class="centralizado">{{ titulo }}</h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtre por parte do título"/>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro" >

      <meu-painel :titulo="foto.titulo" >
        <imagem-responsiva v-meu-transform:scale.animate="1.2" :src="foto.url" :alt="foto.titulo" />

        <meu-botao 
          tipo="button" 
          rotulo="Remover" 
          @botaoAtivado="remove(foto)"
          :confirmacao="false" 
          estilo="perigo"
        />

      </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao';

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },
  data(){
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: '',
      mensagem: ''
    }
  },
  computed: {
    fotosComFiltro(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }
  },
  methods: {
    remove(foto){
      this.resource.delete({ id: foto._id })
      .then(() => {
        let index = this.fotos.indexOf(foto);
        this.fotos.splice(index, 1);
        this.message = 'Foto removida com sucesso';

        }, err => {
        console.log(err)
        this.mensagem = 'Não foi possível remover a foto';
      });
    }
  },
  created(){
    this.resource = this.$resource('v1/fotos{/id}');
    this.resource.query()
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style scoped>
 .titulo {
    text-align: center;
  }

  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
    border-radius: 2px;
    border: 2px solid #8257e5;
    box-shadow: 1px 1px #8257e5;
  }
</style>
