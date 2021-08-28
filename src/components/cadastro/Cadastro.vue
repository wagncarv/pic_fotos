<template>
    <div>
        <h1 class="centralizado">Cadastro</h1>
        <h2 class="centralizado">{{ foto.titulo }}</h2>

        <form @submit.prevent="grava()"> 
            <div class="controle">
                <label for="titulo">Título</label>
                <input id="titulo" autocomplete="off" v-model="foto.titulo"/>
            </div>

            <div class="controle">
                <label for="url">URL</label>
                <input id="url" autocomplete="off" v-model="foto.url" />
                <imagem-responsiva />
            </div>

            <div class="controle">
                <label for="descricao">Descrição</label>
                <textarea autocomplete="off" id="descricao" v-model="foto.descricao"></textarea>
            </div>

            <div class="centralizado">
                <meu-botao rotulo="Gravar" tipo="submit" />
                <router-link to="/">
                    <meu-botao rotulo="Voltar" tipo="button" />
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';

export default {
    data(){
        return {
            foto: {
                titulo: '',
                url: '',
                descricao: ''
            }
        }
    },
    methods: {
        grava(){
            console.log('Enviar dados para API');
            this.limpa();
        },
        limpa(){
            this.foto = {
                titulo: '',
                url: '',
                descricao: ''
            }
        }
    },
    components: { 
      'imagem-responsiva ': ImagemResponsiva,
      'meu-botao': Botao
    },
}
</script>

<style scoped>
    .centralizado {
        text-align: center;
    }

    .controle {
        font-size: 1.2em;
        margin-bottom: 20px;
    }

    .controle label {
        display: block;
       font-weight: bold;
    }

    .controle label + input, .controle textarea {
        width: 100%;
       font-size: inherit;
       border-radius: 5px;
    }
</style>