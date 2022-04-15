<template>
  <div>
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>

    <div class="contact-area ptb-60">
      <div class="container">
        <div class="section-title">
          <h2><span class="dot"></span> Contact Us</h2>
        </div>

        <div class="row">
          <div class="col-lg-5 col-md-12">
            <div class="contact-info">
              <h3>Here to Help</h3>
              <p>
                Have a question? You may find an answer in our FAQs. But you can
                also contact us.
              </p>

              <ul class="contact-list">
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <span
                    v-html="contactInfo.address"
                  ></span>
                </li>
                <li>
                  <a href="tel: +995577335080">
                    <i class="fas fa-phone"></i>
                    <span
                      v-html="contactInfo.mob"
                      class="nutritional"
                    ></span> 
                  </a>
                </li>
                <li>
                  <i class="far fa-envelope"></i>
                  <a v-html="contactInfo.email" :href="'mailto:' + contactInfo.email"
                    ></a
                  >
                </li>
                <!-- <li><i class="fas fa-fax"></i> Fax: <a href="#">+123456</a></li> -->
              </ul>

              <h3>Opening Hours:</h3>
              <ul class="opening-hours">
                <li><span>Monday:</span> 11AM - 11PM</li>
                <li><span>Tuesday:</span> 11AM - 11PM</li>
                <li><span>Wednesday:</span> 11AM - 11PM</li>
                <li><span>Thursday:</span> 11AM - 11PM</li>
                <li><span>Friday:</span> 11AM - 11PM</li>
                <li><span>Saturday:</span> 11AM - 11PM</li>
                <li><span>Sunday:</span> 11AM - 11PM</li>
              </ul>

              <h3>Follow Us:</h3>
              <ul class="social">
                <li>
                  <a
                    href="https://www.facebook.com/Chopsticks-104866125102188"
                    target="_balank"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <!-- <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li> -->
                <li>
                  <a
                    href="https://www.instagram.com/chopstickstbilisi/"
                    target="_blanck"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@chopstickstbilisi?lang=en"
                    target="_blanck"
                    ><i class="fab fa-tiktok"></i
                  ></a>
                </li>
                <!-- <li>
                  <a href="#"><i class="fab fa-behance"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-skype"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="col-lg-7 col-md-12">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <iframe
                  width="100%"
                  height="450"
                  style="border: 0"
                  loading="lazy"
                  allowfullscreen
                  :src="contactInfo.description_ge"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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