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
				 <img src="~/assets/img/main-banner-image/bg5.jpg" class="img-fluid  mt-3  mb-3 text-left" alt="Responsive image" style="widht:100%; "></img>
			 </div>
		 </div>
		
	 </div>

    <div class="contact-area ptb-60">
      <div class="container">
			<div class="row">
			<div class="col-12">
			<h3>CHOPSTICKS</h3>
						<ul class="mt-5">
							<li>
								<h3>It uses utility classes for typography and spacing to space content out within the larger container.</h3>
							</li>
						</ul>
					</div>
					<div class="col-12 mt-5 mb-5">
						<h3>THAI WOK BAR</h3>
						
									<ul class="mt-5">
										<li>
											<h3> offers a unique possibility to create your own bowl by selecting a Base, Topping, a Sauce and EXTRA Topping by your taste.</h3>
										</li>
								</ul>
					 </div>
					 <div class="col-12 mt-5 mb-5">
						<h3>SPRING ROLLS, DUMPLINGS, POKE BOWLS, SALADS AND SOUPS</h3>
						
									<ul class="mt-5">
										<li>
											<h3>with exclusive  <strong>SOFT-SHELL CRAB BURGER</strong>, all at your disposal by ordering by our web site or enjoy our cozy terrace and inside seating.</h3>
										</li>
								</ul>
					 </div>
				</div>
			</div>
			
			
			
			<hr class="my-4">
			
			<p class="lead">
				<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			</p>
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
      contactInfo: {},
    }
  },
  mounted(){
    const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
      axios
      .request({
        method: "post",
        url: this.API_URL + "webertela/contactinfo/list",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      })
      .then((response) => {
        this.contactInfo = response.data.data;
      });
  }
}
</script>