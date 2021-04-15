<style>
.nav-pills{
    background: #f1e9e6;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
    background: #cbab9c;
}
.itemColor{
    color:#000;
    font-weight: bold;
}
</style>
<template >
  <div style="height:300px;">
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item">
        <a class="nav-link active itemColor" data-toggle="pill" href="#test">全部</a>
      </li>
      <li class="nav-item">
        <a class="nav-link itemColor " data-toggle="pill" href="#menu1">住宅</a>
      </li>
      <li class="nav-item">
        <a class="nav-link itemColor" data-toggle="pill" href="#menu2">土地</a>
      </li>
       <li class="nav-item">
        <a class="nav-link itemColor" data-toggle="pill" href="#test">店面</a>
      </li>
      <li class="nav-item">
        <a class="nav-link itemColor" data-toggle="pill" href="#menu1">辦公</a>
      </li>
      <li class="nav-item">
        <a class="nav-link itemColor" data-toggle="pill" href="#menu2">農業</a>
      </li>
       <li class="nav-item">
        <a class="nav-link itemColor" data-toggle="pill" href="#test">工業</a>
      </li>
      <li class="nav-item">
        <a class="nav-link itemColor" data-toggle="pill" href="#menu1">其他</a>
      </li>
      <li class="nav-item">
        <a class="nav-link itemColor" data-toggle="pill" href="#menu2">車位</a>
      </li>
    </ul>
    <div class="tab-content" style="min-height:auto; background: #f1e9e6;" >
      <div class="tab-pane container active"  style="min-height:auto;" id="test">213423431</div>
      <div class="tab-pane container fade"  style="min-height:auto;" id="menu1">123</div>
      <div class="tab-pane container fade" style="min-height:auto;"  id="menu2">.4444</div>
    </div>
  </div>
</template>
<script>
export default {
   head: {
        script: [{src: "/js/test.js"}]
    }
}
</script>