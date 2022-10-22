const app = new Vue({
    el:'#cifrado-texto',
    data:{
        contrasena:'',
        texto_cifrar:'',
        cifrado:'',
        decifrado:'',
    },
    methods:{
        cifrar(){
            this.cifrado = CryptoJS.AES.encrypt(this.texto_cifrar, this.contrasena).toString();
            this.decifrado = CryptoJS.AES.decrypt(this.cifrado, this.contrasena).toString();
        }
    }
})