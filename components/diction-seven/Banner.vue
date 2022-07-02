<template>
  <div class="home-slides-three owl-carousel owl-theme">
    <carousel
      :autoplay="true"
      :item="4"
      :loop="true"
      :autoplayTimeout="3000"
      :paginationEnabled="true"
      :autoplayHoverPause="true"
      :margin="10"
      :perPage="1"
    >
<!-- <img src="/_nuxt/assets/img/logo.webp" alt="image"></img> -->
      <slide v-for="(image, index) in images" :key="index">
        <div class="main-banner" >
         <img :src="require(`~/assets/img/main-banner-image/${image}`)" />
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div class="main-banner-content white-color">
                  <!-- <span>Some Title Here</span>
                  <h1>Category Name</h1>
                  <p>Take 20% Off ‘Sale'</p> 
                  <a href="#" class="btn btn-primary">Shop Women's</a>
                  <a href="#" class="btn btn-light">Shop Men's</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>

    </carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return{
      // imgPath: 'url(/_nuxt/assets/img/main-banner-image/bg1.jpg)',
      // path: '~@/assets/img/main-banner-image/bg1.jpg',
      images: ["bg1.jpg", "bg2.jpg", "bg3.jpg", "20.jpg", "21.jpg"]
    }
  },
}
</script>