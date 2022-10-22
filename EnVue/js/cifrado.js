const cifrando = new Vue({
    el:'#cifrado_texto',
    data:{
        contrasena:'',
        texto_cifrar:'',
        cifrado:'',
        decifrado:'',
    },
    methods:{
        cifrar(){
            this.cifrado = CryptoJS.AES.encrypt(this.texto_cifrar, this.contrasena).toString();            
        }
    }
})

const decifrando = new Vue({
    el:'#decifrado_texto',
    data:{
        contrasena:'',
        cifrado:'',
        decifrado:'',
    },
    methods:{
        decifrar(){
            this.decifrado = CryptoJS.AES.decrypt(this.cifrado, this.contrasena).toString(CryptoJS.enc.Utf8);
            //this.decifrado = this.cifrado + " " + this.contrasena;

        }
    }
})