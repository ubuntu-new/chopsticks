<template>
<client-only>
  <footer class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <div class="logo">
              <nuxt-link to="/">
                <img src="../assets/img/logo.webp" alt="logo"/>
              </nuxt-link>
            </div>

            <p>
              {{$t("slogan")}}
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          
          <!-- <div class="single-footer-widget">
            <h3>Quick Links</h3>

            <ul class="quick-links">
              <li><nuxt-link to="/gallery-one">Gallery</nuxt-link></li>
              <li><nuxt-link to="/cart">Cart</nuxt-link></li>
              <li><nuxt-link to="/checkout">Checkout</nuxt-link></li>
              <li><nuxt-link to="/login">Login</nuxt-link></li>
              <li><nuxt-link to="/signup">Signup</nuxt-link></li>
              <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
            </ul>
          </div> -->

        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>{{$t("information")}} </h3>

            <ul class="information-links">
              <li><nuxt-link to="/about">{{$t("about")}}</nuxt-link></li>
              <li><nuxt-link to="/contact">{{$t("contactus")}}</nuxt-link></li>
              <li><nuxt-link to="/gallery-one">{{$t("galleryone")}}</nuxt-link></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>{{$t("contactus")}}</h3>
<address>
            <ul class="footer-contact-info">
              <li>
                <i class="fas fa-map-marker-alt"></i>{{$t("streetaddress")}} 
              </li>
              <li>
                <a href="tel: +995577335080">
                   <i class="fas fa-phone"></i> (+995) 577335080 </a
                  >
              </li>
              <li>
                <i class="far fa-envelope"></i> Email Us:
                <a href="mailto:info@chopsstick.com.ge"
                  >info@chopsstick.com.ge</a
                >
              </li>
              <!-- <li><i class="fas fa-fax"></i> Fax: <a href="#">+123456</a></li> -->
            </ul>
            </address>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p> &copy; 2022 Webertela.Online. All Rights Reserved</p>
          </div>

          <!-- <div class="col-lg-6 col-md-6">
            <ul class="payment-card">
              <li>
                <a href="#" target="_blank"
                  ><img src="../assets/img/visa.png" alt="image"
                /></a>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><img src="../assets/img/mastercard.png" alt="image"
                /></a>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><img src="../assets/img/mastercard2.png" alt="image"
                /></a>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><img src="../assets/img/visa2.png" alt="image"
                /></a>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><img src="../assets/img/expresscard.png" alt="image"
                /></a>
              </li>
            </ul>
          </div> -->

        </div>
      </div>
    </div>
  </footer>
</client-only>
</template>