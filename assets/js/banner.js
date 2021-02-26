Vue.component('carrusel',{

    template:

    `<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="/assets/img/cabañamontaña1.jpg" class="d-block w-100" >
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="/assets/img/deptosportada.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="/assets/img/casacampoportada.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="/assets/img/casaplaya1.jpg" class="d-block w-100">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>`,

/*     data(){

        imagenes: ['/assets/img/cabañamontaña1.jpg', '/assets/img/deptosportada.jpg', '/assets/img/casacampoportada.jpg', '/assets/img/casaplaya1.jpg']
    }, */
})