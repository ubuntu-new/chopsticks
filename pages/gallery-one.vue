<template>
  <div>
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Gallery</li>
        </ul>
      </div>
    </div>

    <div class="gallery-area ptb-60">
      <div class="container">
        <div class="section-title">
          <h2><span class="dot"></span> Gallery</h2>
        </div>

        <div class="row m-0">

          <div class="col-lg-4 col-md-6 p-0">
            <div class="single-gallery-item">
              <img src="../assets/img/gallery-item1.jpg" alt="image" @click="openModal('gallery-item1.jpg')" />
              <div class="gallery-content">
                <span>Fashion</span>
                <h3>Belted chino trousers polo</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 p-0">
            <div class="single-gallery-item">
              <img src="../assets/img/gallery-item2.jpg" alt="image" @click="openModal('gallery-item2.jpg')"  />

              <div class="gallery-content">
                <span>Fashion</span>
                <h3>Belted chino trousers polo</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 p-0">
            <div class="single-gallery-item">
              <img src="../assets/img/gallery-item3.jpg" alt="image" @click="openModal('gallery-item3.jpg')" />

              <div class="gallery-content">
                <span>Fashion</span>
                <h3>Belted chino trousers polo</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 p-0">
            <div class="single-gallery-item">
              <img src="../assets/img/gallery-item1.jpg" alt="image" @click="openModal('gallery-item1.jpg')" />
              <div class="gallery-content">
                <span>Fashion</span>
                <h3>Belted chino trousers polo</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 p-0">
            <div class="single-gallery-item">
              <img src="../assets/img/gallery-item2.jpg" alt="image" @click="openModal('gallery-item2.jpg')"  />

              <div class="gallery-content">
                <span>Fashion</span>
                <h3>Belted chino trousers polo</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 p-0">
            <div class="single-gallery-item">
              <img src="../assets/img/gallery-item3.jpg" alt="image" @click="openModal('gallery-item3.jpg')" />

              <div class="gallery-content">
                <span>Fashion</span>
                <h3>Belted chino trousers polo</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <!-- IMAGE MODAL -->
    <b-modal ref="img-modal" no-close-on-backdrop hide-footer>
      <div class="d-block text-center">
        <img v-if="selectedImage != null" :src="require(`~/assets/img/${selectedImage}`)" />
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="closeModal">Close</b-button>
    </b-modal>


  </div>
</template>

<script>

export default {
  components: {
  },
  data(){
    return {
      selectedImage: null,
    }
  },
  methods: {
    openModal(image){
      this.selectedImage = image;
      this.$refs['img-modal'].show();
    },
    closeModal(){
      this.$refs['img-modal'].hide();
    },
  },
}
</script>