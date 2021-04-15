<template>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" @outside="modal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <iframe v-if="modal == 'login'" style="width:100%;height:500px;" src="http://www.twhg.com.tw/login-iframe.php?source=store&store=TAA5" frameborder="0"></iframe>
            <div style="height:400px;" v-else-if="modal =='line' ">
                <div class="d-flex justify-content-center">
                    <img src="~/assets/slidermenu-line2.jpg" alt="">
                </div>
                <div class="d-flex justify-content-center">台灣房屋Line</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            modal: '',
        }
    },
    created() {
        this.$nuxt.$on('modal', (parameter) => {
            this.modal = parameter;
        })
    },
    beforeDestroy() {
        this.$nuxt.$off('modal')
    }

}
</script>
