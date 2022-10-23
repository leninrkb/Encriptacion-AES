Vue.component('card', {
    props: [
        'tituloCard',
        'img',
        'textoBoton',
    ],
    template: `
        <div class="col">
            <div style="padding: 20px;">
                <div class="card" style="width: 20rem;">
                    <img :src="img" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ tituloCard }}</h5>
                        <div class="input-group mb-3">
                            
                        </div>
                    </div>
                    <button style="margin-left: 20px; margin-right:20px" type="button" class="btn btn-primary"
                        v-on:click="accion()">{{textoBoton}}</button>
                </div>
            </div>
        </div>
    `

})


const cifrando = new Vue({
    el: '#cifrado_texto',
    data: {
        contrasena: '',
        cifrado: '',
    },
    methods: {
        accion() {
            this.cifrado = CryptoJS.AES.encrypt(this.texto_cifrar, this.contrasena).toString();
            this.cifrado = encodeBase64(this.cifrado);
        }
    }
})