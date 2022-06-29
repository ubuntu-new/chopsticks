<template>
  <div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">{{$t('home')}}</nuxt-link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Checkout Area -->
    <div class="checkout-area ptb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="user-actions">
              <i class="fas fa-sign-in-alt"></i>
              <span
                >{{$t('returningcustomer')}}
                <nuxt-link to="/login">Click here to login</nuxt-link></span
              >
            </div>
          </div>
        </div>

        <form autocomplete="off">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="billing-details">
                <h3 class="title">{{$t('billingdetails')}}</h3>

                <div class="row">
                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <label>{{$t('fullname')}} <span class="required">*</span></label>
                      <input
                        type="text"
                        id="fullName"
                        v-model="personDetails.fullName"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <label>{{$t('address')}}  <span class="required">*</span></label>
                      <gmap-autocomplete
                      
                          placeholder=""
                          class="form-control"
                          @place_changed="setPlace">
                      </gmap-autocomplete>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >{{$t('enterancetobuilding')}}</label
                      >
                      <input
                        type="text"
                        id="enterance"
                        v-model="personDetails.enterance"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >{{$t('enterancesecuritycode')}}</label
                      >
                      <input
                        type="text"
                        id="security"
                        v-model="personDetails.security"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >{{$t('floor')}}</label
                      >
                      <input
                        type="text"
                        id="floor"
                        v-model="personDetails.floor"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >{{$t('flatnumber')}}</label
                      >
                      <input
                        type="text"
                        id="flat"
                        v-model="personDetails.flat"
                        class="form-control"
                      />
                    </div>
                  </div>


                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >{{$t('emailaddress')}} <span class="required">*</span></label
                      >
                      <input
                        type="email"
                        id="email"
                        v-model="personDetails.email"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>{{$t('phone')}} <span class="required">*</span></label>
                      <input
                        type="text"
                        id="phone"
                        v-model="personDetails.phone"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="order-details">
                <h3 class="title">{{$t('yourorder')}} </h3>

                <div class="order-table table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">{{$t('productname')}}</th>
                        <th scope="col">{{$t('total')}}</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="(cart, i) in cart" :key="i">
                        <td class="product-name">
                          <a href="#">{{ cart.name }}</a>
                        </td>

                        <td class="product-total">
                          <span class="subtotal-amount"
                            >{{ (cart.price * cart.quantity).toFixed(2) }}</span
                          >
                        </td>
                      </tr>

                      <tr>
                        <td class="total-price">
                          <span>{{$t('sum')}}</span>
                        </td>

                        <td class="product-subtotal">
                          <span class="subtotal-amount"
                            >{{ parseFloat(cartTotal).toFixed(2) }} &#8382;</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="payment-method">
                  <p>
                    <input
                      type="radio"
                      id="delivery"
                      name="radio-group"
                      @click="selectDeliveryMethod('delivery')"
                      checked
                    />
                    <label for="delivery">{{$t('delivery')}}</label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="pickup"
                      name="radio-group"
                       @click="selectDeliveryMethod('pickup')"
                    />
                    <label for="pickup">{{$t('localpickup')}}</label>
                  </p>
                </div>

                <div>
            <ul class="terms text-left" v-if="termsActive">
              “CHOPSTICKS”  ადგილზე მიწოდების მომსახურება მუშაობს დილის 11:00 დან ღამის 23:00 მდე.
              შეკვეთის მინიმალური თანხა 20 ლარი
              ადგილზე მიწოდება ხორციელდება: 
              <li><strong>
              თბილისი, ვაკის რაიონი (ბაგები, კაკლების დასახლება, წყნეთი) ადგილზე მიწოდების ღირებულება 3.5 ლარი
              </strong></li>
              <li><strong>
თბილისი, საბურთალოს რაიონი, ადგილზე მიწოდების ღირებულება 4 ლარი

              </strong></li>
              მიწოდება თბილისის ფარგლებში უფასოა,  70 ლარის ზემოდ შეკვეთის შემთხვევაში
გადახდა შესაძლებელია როგორც ბარათით ასევე ნაღდი ანგარიშსწორებით
            </ul>
            <hr>
                  <p>
                    <input type="checkbox" id="terms" v-model="termsChecked" />
                    <u @click="$refs['terms-modal'].show();">{{$t('igree')}}</u>
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  @click="add('cash')"
                  class="btn btn-primary order-btn"
                  >{{$t('cashondelivery')}}</a
                >
                <a
                  href="javascript:void(0)"
                  @click="add('online')"
                  class="btn btn-primary order-btn"
                  >{{$t('onlinepayment')}}</a
                >
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
    <!-- End Checkout Area -->

    <b-modal ref="accept-modal" no-close-on-backdrop hide-footer>
      <div class="d-block text-center">
        <h3>{{$t('yourordercreated')}}</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="closeModal">Close</b-button>
    </b-modal>

    <b-modal ref="error-modal" no-close-on-backdrop hide-footer>
      <div class="d-block text-center">
        <h3>შეკვეთის მიღებისას მოხდა შეცდომა!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="closeErrorModal">Close</b-button>
    </b-modal>

    <b-modal ref="terms-modal" no-close-on-backdrop hide-footer title="Terms & Conditions">
      <div class="d-block text-center">
        <div class="row">
          <div class="col-12">
            <h2>მიწოდების პირობები</h2>
            <ul class="terms text-left">
              “CHOPSTICKS”  ადგილზე მიწოდების მომსახურება მუშაობს დილის 11:00 დან ღამის 23:00 მდე.
              შეკვეთის მინიმალური თანხა 20 ლარი
              ადგილზე მიწოდება ხორციელდება: 
              <li><strong>
              თბილისი, ვაკის რაიონი (ბაგები, კაკლების დასახლება, წყნეთი) ადგილზე მიწოდების ღირებულება 3.5 ლარი
              </strong></li>
              <li><strong>
თბილისი, საბურთალოს რაიონი, ადგილზე მიწოდების ღირებულება 4 ლარი

              </strong></li>
              მიწოდება თბილისის ფარგლებში უფასოა,  70 ლარის ზემოდ შეკვეთის შემთხვევაში
გადახდა შესაძლებელია როგორც ბარათით ასევე ნაღდი ანგარიშსწორებით
            </ul>
             <hr >
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h2>საქონლის ღირებულების გადახდა</h2>
            <ul class="terms  text-left">
              <strong>მყიდველი იხდის შეკვეთას შემდეგთაგან ერთი-ერთიგზით:</strong>
              <li>ნაღდი ფულადი ანგარიშსწორების გზით მიწოდების სამსახურისგან უშუალოდ  შეკვეთის მიღებისას;</li>
              <li>მიწოდების სამსახურისგან უშუალოდ შეკვეთის მიღებისას საკრედიტო ბარათით;</li>
              <li>ონლაინ საკრედიტო ბარათით საიტზეშეკვეთის გაფორმებისას;</li>
              <li>ონლაინ გადახდისთვის მიიღება საბანკობარათები VISA / MASTERCARD, AMERICAN EXPRESS;</li>
              <li>საიტზე გადახდის ტიპის "ონლაინსაბანკობარათის" არჩევისას სისტემა ავტომატურად გადამისამართებთ მყიდველს ბანკის გადახდის სისტემის გვერდზე. გადახდის სისტემის გვერდზე მყიდველი დამოუკიდებლად შეიყვანს ყველა საჭირო საბანკო ბარათის მონაცემს და დგამს ტრანზაქციის განხორციელებისათვის საჭირო ნაბიჯებს;</li>
              <li>ტრანზაქციის წარმატებით დასრულების შემთხვევაში მყიდველი გადამისამართდება საიტის მთავარ გვერდზე. ტრანზაქციის განხორციელებაზე უარის თქმის შემთხვევაში მყიდველი გადამისამართდება საიტზე, სადაც მას გაუკეთდება შეთავაზება, გაიმეოროს მცდელობა ან აირჩიოს გადახდის სხვა ტიპი;</li>
              <li>გადახდების განხორციელების უსაფრთხოების მოთხოვნების დასაკმაყოფილებლად, ბანკი-ეკვაიერი იყენებს სპეციალიზებულ ტექნოლოგიას ინტერნეტის ქსელში გადახდების უსაფრთხოების უზრუნველსაყოფად, რომელიც შემუშავებულია PAYMENT SYSTEMS 3-D SECURE- ისმიერ;</li>
              <li>მყიდველის ძირითადი მონაცემების (პერსონალურიმონაცემები, მონაცემები გადახდის ბარათის რეკვიზიტების შესახებ) გადაცემა ხდება კრიპტოგრაფიული საშუალებების (SSL / TLS) გამოყენებით თაღლითობის თავიდან ასაცილებლად;</li>
              <li>მყიდველის მიერ მოწოდებული პერსონალური ინფორმაციის კონფიდენციალურობას უზრუნველყოფს ბანკი-ეკვაიერი. შეყვანილი ინფორმაცია არ მიეწოდება მესამე პირებს, გარდა საქართველოსკანონმდებლობით გათვალისწინებული შემთხვევებისა. მყიდველის მიერ მოწოდებული კონფიდენციალური ინფორმაციის შესახებ რაიმეკითხვის შემთხვევაში, მყიდველი დაუკავშირდება ბანკ-ეკვაიერს.</li>
            </ul>
                <hr >
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h2>მიწოდებადა უკან დაბრუნება</h2>
            <ol class="terms  text-left">
              საქონლის მიწოდება მყიდველზე ხორციელდება ვადებში, რომელიც შეთანხმებულია მხარეთა მიერ გამყიდველის თანამშრომლის მიერ შეკვეთის დადასტურებისთანავე. თუ მყიდველი არიღებს შეკვეთას შეთანხმებულ ვადაში, გამყიდველს აქვს უფლება,გააუქმოს შეკვეთა მყიდველის დამატებითი ინფორმირების გარეშე. თუშეკვეთა წინასწარ არის გადახდილი, თანხები შეიძლება დაუბრუნდეს მყიდველს კანონით დადგენილ ვადაში.
              <li><strong>
                  გამყიდველი ვალდებულია, გადასცესმყიდველს საქონელი, რომელიც სრულად შეესაბამება მის შეკვეთას, რომლის ხარისხი შეესაბამება საიტზე მყიდველისთვის მიწოდებულ ინფორმაციას.
              </strong></li>
              <li><strong>
                 საქონლის მიღებისთანავე მყიდველი ამოწმებს მიღებული საქონლის შესაბამისობას მის შეკვეთასთან, მიწოდებული საქონლის კომპლექტურობის, გარეგნული სახისადმი პრეტენზიების  არარსებობას საქონლის მიღებიდან 5 (ხუთი) წუთის განმავლობაში.
              </strong></li>
              <li><strong>
შეკვეთის მიღების შემდეგ, საქონლის რაოდენობაზე, კომპლექტურობასა და სახეზე პრეტენზიები არ მიიღება.
              </strong></li>
              <li><strong>
შეკვეთილი საქონლის შემოწმება, ისევე როგორც ყველა ანგარიშ სწორებ აგამყიდველის წარმომადგენელთან, წარმოებს არაუმეტეს 10 წუთის განმავლობაში.
              </strong></li>
              <li><strong>
საქონლის გადაზიდვის ღირებულება განისაზღვრება წინასწარ, მყიდველის მისამართიდან გამომდინარე.
              </strong></li>
            </ol>
             <hr >
          </div>
        </div>
        
      </div>
      <b-button class="mt-3 green" variant="outline-success" block @click="acceptTermsModal">{{$t('аccepted')}}</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="declineTermsModal">{{$t('decline')}}</b-button>
    </b-modal>

    <b-modal ref="check-modal" no-close-on-backdrop hide-footer >
      <div class="d-block text-center">
        <h3>{{ checkMessage }}</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="closeCheckModal">OK</b-button>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import config from "@/nuxt.config"


export default {
  data() {
    return {
      place: {},
      mapURL: "",
      API_URL: config.head.API_URL,
      personDetails: {
        fullName: '',
        address: '',
        email: '',
        phone: '',
        enterance: '',
        security: '',
        floor: '',
        flat: '',
      },
      smsMessage: "Your Order has Been Accepted!",
      order_data: {},
      response: {},
      termsChecked: false,
      checkMessage: "",
      deliverymethod: 'delivery',
      termsActive : true,
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    loggedUser() {
      return this.$store.getters.getUser
    },
    cartTotal() {
      return this.$store.getters.totalAmount
    },
  },
  mounted() {
    if(this.cart.length == 0){
      this.$router.push('/');
    }
  },
  methods: {
    selectDeliveryMethod(val){
      if(val == 'delivery'){
        this.termsActive = true;
      } else {
        this.termsActive = false;
      }
        this.deliverymethod = val;
        this.$forceUpdate();
    },
    setPlace(place) {
      this.personDetails.address = place.name;
        this.place = place;
        this.mapURL = "https://www.google.com/maps/search/?api=1&query=qwerty&query_place_id=" + this.place.place_id;
    },
    openCheckModal(error){
      this.$refs['check-modal'].show();
      this.checkMessage = error;
    },
    closeCheckModal(){
      this.$refs['check-modal'].hide();
    },
    closeModal(){
      this.$refs['accept-modal'].hide();
      this.$store.dispatch('cartEmpty');
      this.$router.push('/');
    },
    closeErrorModal(){
      this.$refs['error-modal'].hide();
    },
    acceptTermsModal(){
      this.termsChecked = true;
      this.$refs['terms-modal'].hide();
    },
    declineTermsModal(){
      this.termsChecked = false;
      this.$refs['terms-modal'].hide();
    },
    sendSMS(number, message){

        const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
        var bodyFormData = new FormData();
        bodyFormData.set("mobile", number);
        bodyFormData.set("text", message);

        axios
            .request({
            method: "post",
            url: this.API_URL + "sms/send",
            headers: {
                Authorization: "Bearer " + TOKEN,
            },
            data: bodyFormData,
            })
            .then((response) => {
            // this.response = response.data;
        });
    },
    add(paymentType) {
      if(paymentType == 'cash'){
        if(this.personDetails.fullName == '' || this.personDetails.address == '' || this.personDetails.phone == ''){
          this.openCheckModal('Fullname, Address and Phone Fields Are Required!');
        } else if(!this.termsChecked){
          this.openCheckModal('Accept Terms And Conditions!');
        } else {
          this.order_data.items = this.cart;
          this.order_data.customer = this.personDetails;
          this.order_data.customer.mapURL = this.mapURL;
          this.order_data.paymentMethod = "cash-on-delivery";
          this.order_data.deliverymethod = this.deliverymethod;
          var TOKEN = '';
          if(this.loggedUser.isAuth){
            alert('logged user token');
            this.order_data.user_id = this.loggedUser.id;
            TOKEN = this.loggedUser.token;
          } else {
            alert('guest token');
            TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
            this.order_data.user_id = -10;
          }
          this.$store.dispatch('addOrder', this.order_data)
          // const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
          axios.request({
            method: "post",
            url:
              this.API_URL + "orders/create",
            headers: {
              Authorization: "Bearer " + TOKEN,
            },
            data: this.order_data,
          }).then((response) => {
            this.response = response.data;
            if(response.data == null){
              this.$refs['error-modal'].show();
            } else {
              this.$refs['accept-modal'].show();
              this.smsMessage = this.smsMessage;
              this.sendSMS(this.personDetails.phone, this.smsMessage);
            }
            // this.closeModal();
            // this.$store.dispatch('cartEmpty');
            // this.$router.push('/');
          });
        }
      } else if(paymentType == 'online'){
         this.openCheckModal('ONLINE BANK PAYMENT');
      }
    },
  },
}
</script>