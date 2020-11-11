<style>
.arrowDiv {
    width: 30px;
    height: 30px;
    background: #000;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<template>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <a href="http://forest.twhg.com.tw/" target="_blank">
                <img src="~/assets/index_bg010.jpg" class="d-block w-100">
            </a>
        </div>
        <div class="carousel-item">
            <a href="http://robot.twhg.com.tw/" target="_blank">
                <img src="~/assets/index_bg017.png" class="d-block w-100">
            </a>

        </div>
        <div class="carousel-item">
            <img src="~/assets/index_bg023.jpg" class="d-block w-100">
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <div class="arrowDiv">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </div>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <div class="arrowDiv">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </div>
        <span class="sr-only">Next</span>
    </a>
</div>
</template>
