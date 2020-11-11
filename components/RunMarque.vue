<style>
.storeMenu {
    height: auto;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(238, 238, 238, 0.8) 100%);
}

.marqueeTitle {
    display: inline-block;
    background-color: #d7261e;
    color: #FFF;
    font-size: 14px;
    padding: 2px 15px;
    margin-right: 10px;
    text-align: center;
    width: 150px;
    position: absolute;
}
</style>

<template>
<div>
    <div class="storeMenu">
        <div class="row ml-3" style="margin:0;">

            <a href="http://house.twhg.com.tw/store/index.php?store=TAA5" target="_blank">
                <span class="storeName " style="color:#fd6918;font-size: 20px;">明湖特許加盟店</span>
            </a>

            <span class="storePhone ml-3" style="font-size:18px; font-weight: bold;">
                <i class="fas fa-phone-volume" style="color:#fd6918;"></i>
                02-26316600
            </span>

            <div class="storeAddres ml-3">
                <span style="font-size:18px;">興富金不動產仲介有限公司 /</span>
                <span style="font-size:15px;">台北市內湖區民權東路六段459號</span>

            </div>
        </div>
        <div class="Marquee  mt-2">
            <div class="row" style="margin:0;">
                <div class="col-2">
                    <div class="marqueeTitle">榮譽</div>
                </div>
                <div class="col">
                    <marquee behavior="scroll" direction="left" scrollamount="15">Your scrolling text goes here</marquee>
                </div>
            </div>

        </div>
    </div>
</div>
</template>
