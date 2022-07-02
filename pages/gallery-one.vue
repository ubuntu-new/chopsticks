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

  

    <!--
As mentioned in the official Bootstrap 3 documentation (http://getbootstrap.com/components/#thumbnails): You can either do it like in this pen, or see more options at:

https://masonry.desandro.com/
https://isotope.metafizzy.co/
http://salvattore.com/
-->

<div class="container">
<div class="row masonry-grid">
  <div class="col-md-6 col-lg-4 masonry-column">
    <div>
     <img src="../assets/img/gallery/1.jpg" class="img-thumbnail"  alt="image" @click="openModal('1.jpg')" />
    </div>
    <div>
    <img src="../assets/img/gallery/2.jpg" class="img-thumbnail"   alt="image" @click="openModal('2.jpg')" />
    </div>
    <div>
   <img src="../assets/img/gallery/3.jpg"  class="img-thumbnail"  alt="image" @click="openModal('3.jpg')" />
    </div>
        <div>
   <img src="../assets/img/gallery/13.jpg" class="img-thumbnail"   alt="image" @click="openModal('13.jpg')" />
    </div>
    <div>
   <img src="../assets/img/gallery/11.jpg" class="img-thumbnail"   alt="image" @click="openModal('11.jpg')" />
    </div>
    <div>
   <img src="../assets/img/gallery/12.jpg" class="img-thumbnail"   alt="image" @click="openModal('12.jpg')" />
    </div>
  </div>
  <div class="col-md-6 col-lg-4 masonry-column">
    <div>
    <img src="../assets/img/gallery/4.jpg" class="img-thumbnail"   alt="image" @click="openModal('4.jpg')" />
    </div>
    <div>
    <img src="../assets/img/gallery/17.jpg"  class="img-thumbnail"  alt="image" @click="openModal('17.jpg')" />
    </div>
    <div>
    <img src="../assets/img/gallery/18.jpg"  class="img-thumbnail"   alt="image" @click="openModal('18.jpg')" />
    </div>
              <div>
   <img src="../assets/img/gallery/16.jpg" class="img-thumbnail"   alt="image" @click="openModal('16.jpg')" />
    </div>
    <div>
   <img src="../assets/img/gallery/5.jpg" class="img-thumbnail"   alt="image" @click="openModal('5.jpg')" />
    </div>
    <div>
   <img src="../assets/img/gallery/6.jpg" class="img-thumbnail"   alt="image" @click="openModal('6.jpg')" />
    </div>
  </div>
  <div class="col-md-6 col-lg-4 masonry-column">
    <div>
    <img src="../assets/img/gallery/7.jpg"  class="img-thumbnail"  alt="image" @click="openModal('7.jpg')" />
    </div>
    <div>
    <img src="../assets/img/gallery/8.jpg"  class="img-thumbnail"  alt="image" @click="openModal('8.jpg')" />
    </div>
    <div>
   <img src="../assets/img/gallery/9.jpg" class="img-thumbnail"   alt="image" @click="openModal('9.jpg')" />
    </div>
            <div>
          <img src="../assets/img/gallery/10.jpg" class="img-thumbnail"   alt="image" @click="openModal('10.jpg')" />
            </div>
            <div>
          <img src="../assets/img/gallery/14.jpg" class="img-thumbnail"   alt="image" @click="openModal('14.jpg')" />
            </div>
            <div>
          <img src="../assets/img/gallery/15.jpg" class="img-thumbnail"   alt="image" @click="openModal('15.jpg')" />
            </div>
            
  </div>
  <!-- <div class="col-md-6 col-lg-4 masonry-column">
    <div>
          <img src="../assets/img/gallery/20.jpg" class="img-thumbnail"   alt="image" @click="openModal('20.jpg')" />
            </div>
            <div>
          <img src="../assets/img/gallery/21.jpg" class="img-thumbnail"   alt="image" @click="openModal('21.jpg')" />
            </div>
  </div> -->





   
  

</div>
</div>

    <!-- IMAGE MODAL -->
    <b-modal ref="img-modal" no-close-on-backdrop hide-footer>
      <div class="d-block text-center">
        <img v-if="selectedImage != null" :src="require(`~/assets/img/gallery/${selectedImage}`)" />
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="closeModal">Close</b-button>
    </b-modal>


  </div>
</template>
<style scoped>
.masonry-column {
  padding: 0 1px;
}

.masonry-grid > div .thumbnail {
  margin: 5px 1px;
}
</style>
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