//global
function encodeBase64(value) {
    var words = CryptoJS.enc.Utf8.parse(value.toString());
    return CryptoJS.enc.Base64.stringify(words);

}

function decodeBase64(value) {
    var words = CryptoJS.enc.Base64.parse(value);
    return CryptoJS.enc.Utf8.stringify(words);
}



//texto
const cifrando = new Vue({
    el: '#cifrado_texto',
    data: {
        contrasena: '',
        texto_cifrar: '',
        cifrado: '',
    },
    methods: {
        cifrar() {
            this.cifrado = CryptoJS.AES.encrypt(this.texto_cifrar, this.contrasena).toString();
            this.cifrado = encodeBase64(this.cifrado);
        }
    }
})
const descifrando = new Vue({
    el: '#descifrado_texto',
    data: {
        contrasena: '',
        cifrado: '',
        descifrado: '',
    },
    methods: {
        descifrar() {
            this.cifrado = decodeBase64(this.cifrado);
            this.descifrado = CryptoJS.AES.decrypt(this.cifrado, this.contrasena).toString(CryptoJS.enc.Utf8);
        }
    }
})


//archivo
const cifrando_archivo = new Vue({
    el: '#cifrado_archivo',
    data: {
        contrasena: '',
        archivo: null,
        cifrado: '',
        downloadableUrl: '',
    },
    methods: {
        cargarArchivo(event) {
            this.archivo = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(this.archivo);
            reader.onload = () => {
                const datos = reader.result;
                this.archivo = datos;
            }
        },
        cifrar() {
            this.cifrado = CryptoJS.AES.encrypt(JSON.stringify(this.archivo), this.contrasena).toString();
            this.cifrado = encodeBase64(this.cifrado);
            const datos = this.archivo.split(',');
            const tipo = datos[0];
            const blob = new Blob([this.cifrado], { type: tipo });
            this.downloadableUrl = URL.createObjectURL(blob);
            //limpio entradas
            this.contrasena = '';
            this.archivo = null;
            var $elemento = document.querySelector("#archivo");
            $elemento.value = "";
        }
    }
})
const descifrando_archivo = new Vue({
    el: '#descifrado_archivo',
    data: {
        contrasena: '',
        cifrado: '',
        descifrado: null,
        downloadableUrl: '',
        mensaje: '',
        archivo: null,
    },
    methods: {
        cargarArchivo(event) {
            this.archivo = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(this.archivo);
            reader.onload = () => {
                const datos = reader.result.split(',');
                this.cifrado = decodeBase64(datos[1]);
            }
        },
        descifrar() {
            this.cifrado = decodeBase64(this.cifrado);
            this.descifrado = JSON.parse(CryptoJS.AES.decrypt(this.cifrado, this.contrasena).toString(CryptoJS.enc.Utf8)).split(',');
            const tipo = this.descifrado[0].toString();
            const info = this.descifrado[1].toString();
            const blob = new Blob([decodeBase64(info)], { type: tipo });
            this.downloadableUrl = URL.createObjectURL(blob);
            this.mensaje = 'listo';
            //limpio entradas
            this.cifrado = null;
            this.archivo = null;
            const $elemento = document.querySelector("#archivo");
            $elemento.value = "";
        }
    }
})