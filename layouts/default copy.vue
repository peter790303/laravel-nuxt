<style>
.navDiv {
    background-color: #ff8001;
    font-size: 13px;
    line-height: 20px;
    height: 30px;
}

.navDivSpan {
    color: white;
}

a {
    text-decoration: none !important;
}
</style>

<template>
<div>
    <div class="navDiv d-flex justify-content-end align-items-center">
        <span class="navDivSpan">
            <a href="http://www.twhg.com.tw/jointwhg.php" class="text-white" target="_blank">
                加盟專區｜
            </a>
        </span>
        <span class="navDivSpan">
            <a href="http://www.twhg.com.tw/brand.php" class="text-white" target="_blank">
                企業文化｜
            </a>
        </span>
        <span class="navDivSpan">
            <a href="http://hr.twhg.com.tw/" class="text-white" target="_blank">
                領袖招募｜
            </a>
        </span>
        <span class="navDivSpan">
            <a href="http://www.twhg.com.tw/stores.php" class="text-white" target="_blank">
                服務據點｜
            </a>
        </span>
        <span class="navDivSpan">
            <a href="http://robot.twhg.com.tw/" class="text-white" target="_blank">
                <i class="fab fa-line"></i>
                地產機器人｜
            </a>
        </span>
        <span class="navDivSpan ml-3">
            <a href="http://www.twhg.com.tw/login-iframe.php?source=store&store=TAA5" @click="$nuxt.$emit('modal','login')" class="text-white" data-toggle="modal" data-target="#exampleModal">
                登入/加入會員
            </a>
            <a href="https://www.facebook.com/TWHouse" class="text-white" target="_blank">
                <i class="fab fa-facebook-square fa-1x"></i>
            </a>
            <i class="fab fa-line" @click="$nuxt.$emit('modal','line')" data-toggle="modal" data-target="#exampleModal"></i>
        </span>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent text-dark">
        <a class="navbar-brand" href="#">
            <img width="300" src="~/assets/twhg-logo.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" style="font-weight: bolder;" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">買屋 <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">賣屋</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">賣屋</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">本店介紹</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">本店徵才</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">成交行情</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">幸福租</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">新聞前線</a>
                </li>
            </ul>
        </div>
    </nav>

    <Modal />
    <RunMarque />
    <Carousel />
    <SearchBar />
</div>
</template>
