<template>
    <div>
        <h1 class="centralizado">Cadastro</h1>
        <h2 class="centralizado">{{ foto.titulo }}</h2>

        <h2 v-if="foto._id" class="centralizado">Alterando</h2>
        <h2 v-else class="centralizado">Incluindo</h2>

        <form @submit.prevent="grava()"> 
            <div class="controle">
                <label for="titulo">Título</label>
                <input v-validate data-vv-rules="required" name="titulo" id="titulo" autocomplete="off" v-model="foto.titulo"/>
                <erro rotulo="Título obrigatório" v-show="errors.has('titulo')" />
            </div>

            <div class="controle">
                <label for="url">URL</label>
                <input v-validate data-vv-rules="required" name="url" id="url" autocomplete="off" v-model="foto.url" />
                <erro rotulo="URL obrigatória" v-show="errors.has('url')" />
                <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo" />
            </div>

            <div class="controle">
                <label for="descricao">Descrição</label>
                <textarea autocomplete="off" name="descricao" id="descricao" v-model.lazy="foto.descricao"></textarea>
            </div>

            <div class="centralizado">
                <meu-botao rotulo="Gravar" tipo="submit" />
                <router-link :to="{ name: 'home' }">
                    <meu-botao rotulo="Voltar" tipo="button" />
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/foto/Foto';
import FotoService from '../../domain/foto/FotoService';
import Erro from '../../components/erros/Erro.vue';

export default {
    data(){
        return {
            foto: new Foto(),
            id: this.$route.params.id
        }
    },
    methods: {
        grava(){
            this.service
            .cadastra(this.foto)
            .then(() => {
                this.foto = new Foto();
                if (this.id) {
                    this.$router.push({ name: 'home' })
                }
            }, 
            err => console.log(err));
        }
    },
    created() {
        this.service = new FotoService(this.$resource);

        if (this.id) {
            this.service.busca(this.id)
                .then(foto => this.foto = foto);
        }

    },
    components: { 
      'imagem-responsiva': ImagemResponsiva,
      'meu-botao': Botao,
      'erro': Erro
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
         margin-top: 28px;
       font-weight: bold;
    }

    .controle label + input, .controle textarea {
        width: 100%;
       font-size: inherit;
       border-radius: 5px;
    }
</style>