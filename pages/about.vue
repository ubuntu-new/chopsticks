<template>
<client-only>
  <div>
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>About Chopsticks</li>
        </ul>
      </div>
    </div>

	 <div class="container-fluid">
		 <div class="row">
			 <div class="col">
				 <!-- <img src="~/assets/img/main-banner-image/bg5.jpg" class="img-fluid  mt-3  mb-3 text-left" alt="Responsive image" style="widht:100%; "> -->
         <img src="../assets/img/gallery/21.jpg" class="img-fluid  mt-3  mb-3 text-left"   alt="image" />
			 </div>
		 </div>
		
	 </div>

          <li >
 
</li>


    <div class="contact-area ptb-60">
      <div class="container">
			<div class="row mt-5 mb-5">
				<div class="col-md-3"  v-for="(about, index) in about">
					<h3>{{ about.title }}</h3>
					<font size="4">{{about.description}}</font>
				</div>
				
			</div>

			</div>	
			<hr class="my-4">
			</div>
		</div>

</client-only>
</template>

<script>
import axios from 'axios'
import config from "@/nuxt.config"

export default {

  data(){
    return {
      API_URL: config.head.API_URL,
      about: [],
    }
  },
  mounted(){
    const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
      axios
      .request({
        method: "post",
        url: this.API_URL + "webertela/about/list",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      })
      
      
      .then((response) => {
        this.about = response.data.data;

         if(this.currentLang == 'ka'){
              x.name_en = x.name;
              x.name = x.name_ge;
            } 
      });
  }
}
</script>