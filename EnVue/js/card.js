Vue.component('card-cifrado', {
    props: [
        'titulo',
        'img',
    ],
    template: `
        <div class="col">
            <div style="padding: 20px;">
                <div class="card" style="width: 20rem;">
                    <img :src="img" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ titulo }}</h5>
                        <div class="input-group mb-3">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

})


