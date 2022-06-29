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

                <div v-if="termsActive">
            <h3>მიწოდების პირობები&nbsp;</h3>
<p><strong>&ldquo;CHOPSTICKS</strong><strong>&rdquo;</strong><strong>&nbsp;&nbsp;</strong><strong>ადგილზე მიწოდების მომსახურება მუშაობს დილის 11:00 დან ღამის 23:00 მდე.</strong></p>
<p><strong>შეკვეთის&nbsp;მინიმალური&nbsp;თანხა&nbsp;20&nbsp;ლარი</strong></p>
<p><strong>ადგილზე მიწოდება ხორციელდება მთელი თბილისის მაშტაბით:&nbsp;</strong></p>
<ul>
<li><strong>ვაკის, საბურთალოს და მთაწმინდის რაიონებში უფასო!</strong></li>
<li><strong>ხოლო დანარჩენ უბნებში მიტანის სერცისის ღირებულებაა 3.5 ლარი.&nbsp;</strong></li>
</ul>
<p><strong>გადახდა შესაძლებელია როგორც ბარათით (VISA / MASTERCARD, AMERICAN EXPRESS).&nbsp;&nbsp;ასევე ნაღდი ანგარიშსწორებით.</strong></p>
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
      <div class="d-block text-left">
        <div class="row">
          <div class="col tex-left">
           <section>
             <h3>მიწოდების პირობები&nbsp;</h3>
<p><strong>&ldquo;CHOPSTICKS</strong><strong>&rdquo;</strong><strong>&nbsp;&nbsp;</strong><strong>ადგილზე მიწოდების მომსახურება მუშაობს დილის 11:00 დან ღამის 23:00 მდე.</strong></p>
<p><strong>შეკვეთის&nbsp;მინიმალური&nbsp;თანხა&nbsp;20&nbsp;ლარი</strong></p>
<p><strong>ადგილზე მიწოდება ხორციელდება მთელი თბილისის მაშტაბით:&nbsp;</strong></p>
<ul>
<li><strong>ვაკის, საბურთალოს და მთაწმინდის რაიონებში უფასო!</strong></li>
<li><strong>ხოლო დანარჩენ უბნებში მიტანის სერცისის ღირებულებაა 3.5 ლარი.&nbsp;</strong></li>
</ul>
<p><strong>გადახდა შესაძლებელია როგორც ბარათით (VISA / MASTERCARD, AMERICAN EXPRESS).&nbsp;&nbsp;ასევე ნაღდი ანგარიშსწორებით.</strong></p>
<h3><strong>როგორ მუშაობს</strong></h3>
<p>საიტზე&nbsp;<a href="http://www.chopsticks.com.ge/" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?q=http://www.chopsticks.com.ge&amp;source=gmail&amp;ust=1654849829704000&amp;usg=AOvVaw3v6Pjp1TOlKEEd4NrBdXiq" aria-invalid="true">WWW.CHOPSTICKS.COM.GE</a>&nbsp;აირჩევთ თქვენთვის სასურველ პროდუქტს. არჩეულ პროდუქტს დაამატებთ კალათაში. როდესაც დააჭერთ ღილაკს გაგრძელება, საიტი&nbsp;მოგთხოვთ რეგისტრაციას. შეგიძლიათ აირჩიოთ გამარტივებული ფორმა და მოახდინოთ რეგისტრაცია თქვენი FACEBOOK პროფილით.&nbsp;ამის შემდეგ მიუთითებთ როგორ გსურთ მიღება: თავად წაიღებთ რესტორან ვასაბიდან თუ გსურთ მოგართვათ კურიერმა. თუ აირჩევთ კურიერის მოტანას, მიუთითებთ თქვენს მისამართს და მოახდენთ ვიზა/მასტერქარდის ბარათით ანგარიშსწორებას,ან ნაღდი ფულით გადახდას. ამის შემდეგ დამზადდება თქვენი პროდუქტი და რამდენიმე წუთში კურიერი მოგართმევთ ადგილზე.&nbsp;</p>
<p><strong>&nbsp;</strong></p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">მოხმარების წესები და პირობები</strong></p>
<p style="list-style-type: none;">ჩოფსტიქსის მომსახურებით სარგებლობამდე გულდასმით წაიკითხეთ წინამდებარე მოხმარების წესები და პირობები და დარწმუნდით, რომ აცნობიერებთ და გესმით მისი შინაარსი.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">ზოგადი დებულებანი</strong></p>
<p style="list-style-type: none;">წინამდებარე მოხმარების წესები და პირობები შედგენილია საქართველოს კანონმდებლობის დაცვით და წარმოადგენს წინასწარ ჩამოყალიბებულ, მრავალჯერადი გამოყენებისათვის გამიზნულ პირობებს, რომელთაც&nbsp;<strong>ჩოპსტიქსი</strong>&nbsp;უდგენს მომხმარებელს (შემდგომში &bdquo;თქვენ&ldquo;) და რომელთა მეშვეობითაც რეგულირდება ურთიერთობა თქვენსა და კომპანიას შორის.</p>
<p style="list-style-type: none;"><strong>ჩოპსტიქსი&nbsp;</strong>წარმოადგენს ვებ-გვერდის (შემდგომში &bdquo;ვებ-გვერდი&ldquo;) და მასთან დაკავშირებული უფლებების კანონიერ მფლობელს. გაითვალისწინეთ, რომ კომპანიის ვებ-გვერდის&nbsp;<span style="list-style-type: none;"><a style="list-style-type: none;" href="http://www.wasabi.ge/" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?q=http://www.wasabi.ge/&amp;source=gmail&amp;ust=1654849829704000&amp;usg=AOvVaw2CnQFSvIWaYBBP-xdXvzvp">www.chopsticks.<wbr>com.ge</a>&nbsp;</span>მეშვეობით შემოთავაზებული მომსახურებით სარგებლობა, კერძოდ, კომპანიის პროდუქციის ან/და სხვა მომსახურების შეკვეთა გულისხმობს, რომ თქვენ გამოთქვამთ თანხმობას წინამდებარე მოხმარების წესებსა და პირობებზე.</p>
<p style="list-style-type: none;">ვებ-გვერდზე სტუმრობით და შემოთავაზებული მომსახურების სარგებლობით თქვენ აცხადებთ, რომ ხართ სრულწლოვანი ან ვებ-გვერდს სტუმრობთ და სარგებლობით მშობლის ან კანონიერი წარმომადგენლის თანდასწრებით ან წინასწარი თანხმობით, საქართველოს კანონმდებლობით განსაზღვრული წესების დაცვით.</p>
<p style="list-style-type: none;">ვებ-გვერდის გამოყენების მიზნით თქვენ უნდა გაიაროს რეგისტრაცია პირადი მონაცემების შეტანის გზით, რათა მოგენიჭოთ იდენტიფიცირებული მომხარებლის ანგარიში და პაროლი. თქვენს მიერ ანგარიშის თითოეულ ჯერზე გამოყენებისას უნდა გაიაროთ ავტორიზაცია ვებ-გვერდის მეშვეობით.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">1.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong style="list-style-type: none;">შეთანხმების</strong><strong style="list-style-type: none;">&nbsp;საგანი</strong></p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">1.1.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>შეთანხმების საგანს წარმოადგენს &bdquo;<strong>ჩოპსტიქსის</strong>&ldquo; ვებ-გვერდის მეშვეობით შემოთავაზებული მომსახურების გაწევა, კერძოდ, ვებ-გვერდზე განთავსებული საკვები პროდუქციის (შემდგომში &bdquo;პროდუქცია&ldquo;) შეკვეთის საშუალებით თქვენს მიერ მითითებულ მისამართზე მიტანა ან წინამდებარე მოხმარების წესებისა და პირობების თანახმად სხვა მომსახურეობის მიღება, რის სანაცვლოდაც თქვენ უნდა გადაიხადოთ ვებ-გვერდზე განთავსებული და წინასწარ განსაზღვრული ფულადი თანხა.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">1.2.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong>ჩოპსტიქს</strong>&nbsp;უფლება აქვს ნებისმიერ დროს შეიტანოს ცვლილება ვებ-გვერდის მეშვეობით შემოთავაზებული მომსახურების პირობებში და წინამდებარე მოხმარების წესებსა და პირობებში, შესაბამისი ინფორმაციული შეტყობინების საჯაროდ და თქვენთვის ხელმისაწვდომი ფორმით ვებ-გვერდზე გამოქვეყნების/შესაბამისი ცვლილების საშუალებით.</p>
<p style="list-style-type: none;">&nbsp;</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong style="list-style-type: none;">მომსახურების</strong><strong style="list-style-type: none;">&nbsp;პირობები</strong></p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.1.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>შეკვეთა სრულდება ვებ-გვერდის მეშვეობით.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.2.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>შეკვეთის განხორციელების მიზნით თქვენ უნდა გაიაროთ რეგისტრაცია ვებ-გვერდზე და მოახდინოთ თქვენი ანგარიშით ავტორიზაცია.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.3.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>პროდუქციის შერჩევა ხდება ვებ-გვერდზე განთავსებული პროდუქციის კალათაში დამატების საშუალებით. აგრეთვე, თქვენ შესაბამისი წესით უნდა მიუთითოთ სარგებლობთ მიტანის მომსახურეობით, თუ გსურთ პროდუქციის ადგილზე ვასაბის რესტორნიდან მიღება, რომელიც მდებარეობს ქ. თბილისში, ილო მოსაშვილის # 11 ში.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.4.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>ადგილზე პროდუქციის მიტანის მომსახურება ხორციელდება ქ. თბილისის იმ უბნებში, რომლებიც მითითებულია საიტზე შეკვეთის გვერდზე. ამ მომსახურებით სარგებლობის შემთხვევაში, უნდა მიუთითოთ შესაბამისი მისამართი მხოლოდ ქ. თბილისის საიტზე განთავსებული უბნების ფარგლებში, რომელზეც გსურთ პროდუქციის მიღება.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.5.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>შესაბამისი წესით უნდა აირჩიოთ გადახდის ფორმა (უნაღდო ან ნაღდი ანგარიშსწორების ფორმა).</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.6.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>უნაღდო ანგარიშსწორება ხორციელდება საკრედიტო/სადებეტო ბარათის მეშვეობით შესაბამის გადახდის გვერდზე, ხოლო ნაღდი ანგარიშსწორება ხორციელდება ნაღდი ფულის გადახდის მეშვეობით პროდუქციის ადგილზე მიტანის ან რესტორანში პროდუქციის მიღებისას&nbsp;&nbsp;<strong>ჩოპსტიქსის&nbsp;</strong>წარმომად<wbr>გენლისთვის ნაღდი ფულის გადაცემით.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.7.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>შეკვეთის სრულყოფილად შესრულების მიზნით, თქვენ უნდა მიუთითოთ თქვენი ტელეფონის ნომერი და შეავსოთ კომენტარის გრაფა, რომელშიც უნდა მიეთითოს შემდეგი ინფორმაცია: პროდუქციის მიტანისთვის მისამართთან დაკავშირებული ინფორმაცია და დეტალები, როგორიცაა სადარბაზოს კოდი და სხვა; პროდუქციასთან დაკავშირებული კომენტარი; ინფომარცია თუ რამდენი პერსონისთვისაა განკუთვნილი შეკვეთა და სხვა ინფორმაცია, რომელიც აუცილებელია&nbsp;<strong>ჩოპსტიქსის</strong>&nbsp;მიერ თქვენი შეკვეთის ჯეროვანი შესრულების მიზნით.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.8.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>შეკვეთის დასრულებისთვის თქვენ უნდა მონიშნოთ, რომ ეთანხმებით&nbsp;<strong>ჩოპსტიქსის</strong>&nbsp;<wbr>მოხმარების წესებსა და პირობებს, რის შემდეგაც ვებ-გვერდზე გამოჩნდება შეტყობინება შეკვეთის დასრულების თაობაზე.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.9.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong>ჩოპსტიქსი</strong>&nbsp;არაა პასუხისმგებელი სხვა ფორმით ან სხვა ნებისმიერი პირის ვებ-გვერდის/მომსახურების მეშვეობით პროდუქციის შეკვეთისას.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.10.</strong>&nbsp;<strong>ჩოპსტიქსი</strong>&nbsp;შეკვეთისთვის გადახდილი თანხის დაბრუნება ხდება მხოლოდ კომპანიის მიერ შეკვეთის მიუწოდებლობის შემთხვევაში, რაც არ ვრცელდება თქვენს მიერ არასწორად მითითებული მისამართის ან/და სხვა არსებითი მონაცემის გამო შეკვეთის მიუწოდებლობაზე, თქვენს მიერ მიწოდებულ/მიტანილ შეკვეთაზე უარის თქმაზე, შეკვეთის მცირედი დაგვიანებაზე, შეფერხების ან სხვა შემთხვევებზე, ასეთ შემთხვევაში გადახდილი თანხა არ დაბრუნდება.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.11.&nbsp;</strong><strong>ჩოპსტიქსი&nbsp;</strong>წარმომადგენლის მიერ შეკვეთილი პროდუქციისგან განსხვავებული პროდუქციის მიტანის შემთხვევაში, თქვენ უფლება გაქვთ არ ჩაიბაროთ ასეთი შეკვეთა, მოითხოვოთ შეკვეთილი პროდუქციის ან გადახდილი თანხის დაბრუნება.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">2.12.</strong>თანხის დაბრუნება ხდება 2 (ორი) სამუშაო დღის ვადაში იმავე ფორმით და იმავე ანგარიშზე, ასეთის არსებობის შემთხვევაში, რა ფორმითაც მოხდა თანხის გადახდა.</p>
<p style="list-style-type: none;">&nbsp;</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">3.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong>ჩოპსტიქსი&nbsp;</strong><strong style="list-style-type: none;">ვალდებულია:</strong></p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">3.1.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>მიიღოს და შეასრულოს თქვენი შეკვეთა, მარაგში შეკვეთილი პროდუქციის არსებობის შემთხვევაში.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">3.2.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>შეკვეთის მიღებიდან არაუგვიანეს 1 (ერთი) საათისა მიიტანოს პროდუქცია თქვენს მიერ მითითებულ მისამართზე.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">3.3.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>საქართველოს კანონმდებლობით დადგენილი წესით დაიცვას თქვენი პერსონალური მონაცემები.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">3.4.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>მოგაწოდოთ ხარისხიანი, სანიტარული და ჰიგიენური ნორმების დაცვით დამზადებული პროდუქცია.</p>
<p style="list-style-type: none;">&nbsp;</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">4.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong style="list-style-type: none;">თქვენ ვალდებული ხართ:</strong></p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">4.1.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong>ჩოპსტიქსი</strong>&nbsp;მიაწოდოს ზუსტი ინფომრაცია (სახელი, გვარი, მისამართი, ტელეფონის ნომერი, ელ-ფოსტის მისამართი).</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">4.2.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>გადაიხადოთ პროდუქციის ღირებულება. კეთილსინდისიერად და დროულად მიიღოთ შეკვეთილი პროდუქცია.</p>
<p style="list-style-type: none;">&nbsp;</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">5.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong style="list-style-type: none;">გადახდის წესი</strong></p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">5.1.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong>ჩოპსტიქსი</strong>&nbsp;შემოთავაზებული პროდუქციის ფასები მოცემულია ვებ-გვერდზე და მოიცავს საქართველოს კანონმდებლობით გათვალისწინებულ გადასახადებს. პროდუქციის ფასები არ მოიცავს მიტანის მომსახურების საფასურს.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">5.2.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong>ჩოპსტიქსი</strong>&nbsp;უფლება აქვს შეცვალოს პროდუქციის ფასები აღნიშნულის თაობაზე ვებ-გვერდზე შესაბამისი პროდუქციის ფასების ცვლილების მეშვეობით.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">5.3.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>შეკვეთილი პროდუქციის ფასი და მიტანის მომსახურების საფასური აისახება თქვენს კალათაში, შეკვეთის დასრულების და თანხის გადახდის მიზნით.</p>
<p style="list-style-type: none;">&nbsp;</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">6.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong style="list-style-type: none;">პროდუქცია</strong></p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">6.1.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong>ჩოპსტიქსის</strong>&nbsp;პროდუქცია შეესაბამება საქართველოს კანონმდებლობით დადგენილ ხარისხის სტანდარტებსა და მოთხოვნებს, იგი დამზადებულია ჰიგიენური ნორმების დაცვით.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">6.2.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong>ჩოპსტიქსის</strong>&nbsp;პროდუქციის შემადგენლობის/ინგრედიენტების შესახებ ძირითადი ინფორმაცია განთავსებულია ვებ-გვერდზე თითოეული პროდუქციის აღწერილობაში, ამასთან, შესაძლებელია, დაწვრილებით ყველა ინგრედიენტის შესახებ ინფორმაცია არ იყოს მოცემული. პროდუქცია შესაძლოა შეიცავდეს ალერგიის გამომწვევ ინგრედიენტებს, ისეთებს როგორიცაა სეზამი, მიწის თხილი, ზღვის პროდუქტი და სხვა. ამდენად, თქვენ გულდასმით და გულისხმიერად უნდა გაეცნოთ პროდუქციის აღწერილობას და მოცემულ ინგრედიენტებს, რათა გამორიცხოთ ამ პროდუქციის თქვენზე უარყოფითი ზემოქმედების რისკი, რომელიც შესაძლებელია გამოწვეული იყოს თქვენი ალერგიული ან/და სხვა სახის დამოკიდებულებით. პროდუქციის უცნობი ან/და თქვენთვის საეჭვო ინგრედიენტების შესახებ ინფორმაციის მიღების მიზნით ან საკვების მიმართ თქვენი განსაკუთრებული ან ჩვეულებრივისგან განსხვავებული მოთხოვნილებების არსებობის შემთხვევაში, თქვენ უნდა მიმართოთ &bdquo;<strong>ჩოპსტიქსის</strong>&ldquo; პროდუქციის შესახებ ნებისმიერი თქვენთვის საინტერესო ინფორმაციის მისაღებად.</p>
<p style="list-style-type: none;">&nbsp;</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">7.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong style="list-style-type: none;">პერსონალურ მონაცემთა დამუშავება</strong></p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">7.1.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>თქვენს მიერ &bdquo;<strong>ჩოპსტიქსის</strong>&ldquo; მომსახურებით სარგებლობისას, ვებ-გვერდზე რეგისტრირებული მონაცემების დამუშავება ხდება &bdquo;<strong>ჩოპსტიქსის</strong>&ldquo; მიერ ვებ-გვერდით შემოთავსებული მომსახურების თქვენი შეკვეთის საფუძველზე განსახორციელებლად.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">7.2.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>თქვენს მიერ &bdquo;<strong>ჩოპსტიქსის</strong>&ldquo; ვებ-გვერდზე რეგისტრაცია და ავტორიზაცია ხორციელდება ნებაყოფლობითობის საწყისებზე &bdquo;<strong>ჩოპსტიქსის</strong>&ldquo; ვებ-გვერდის მომსახურების მიღების მიზნით.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">7.3.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>თქვენ უფლება გაქვთ საქართველოს კანონმდებლობით დადგენილი წესით მიიღოთ ინფორმაცია &bdquo;<strong>ჩოპსტიქსის</strong>&ldquo; მიერ თქვენი პერსონალური მონაცემების დამუშავების თაობაზე, მოითხოვოთ მათი წაშლა და კანონმდებლობით დადგენილი სხვა მოქმედებების განხორციელება &bdquo;<strong>ჩოპსტიქსის</strong>&ldquo; ოფიციალურ ელ.ფოსტაზე წერილის გაგზავნის მეშვეობით:&nbsp;</p>
<p style="list-style-type: none;">&nbsp;</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">8.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong><strong style="list-style-type: none;">დასკვნით დებულებანი</strong></p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">8.1.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>დავის წარმოშობის შემთხვევაში მხარეები ეცდებიან დავა გადაჭრან მოლაპარაკების გზით. წინააღმდეგ შემთხვევაში საქმეს განიხილავს სასამართლო საქართველოს კანონმდებლობის შესაბამისად.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">8.2.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>&bdquo;<strong>ჩოპსტიქსი</strong>&ldquo; მოწოდებულია კეთილსინდისიერად და ჯეროვნად შეასრულოს შემოთავაზებული მომსახურება.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">8.3.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>&bdquo;<strong>ჩოპსტიქსი</strong>&ldquo; ზრუნავს ვებ-გვერდის მეშვეობით შემოთავაზებული მომსახურების ხარისხის განვითარებასა და გაუმჯობესებაზე, ამდენად &bdquo;ვასაბი&ldquo; დაინტერესებულია თქვენი მოსაზრებებით მომსახურების ხარისხთან დაკავშირებით.</p>
<p style="list-style-type: none;"><strong style="list-style-type: none;">8.4.<span style="list-style-type: none;">&nbsp;&nbsp;</span></strong>&bdquo;<strong>ჩოპსტიქსი</strong>&ldquo; ვებ-გვერდის, მომსახურები ან/და წინამდებარე &bdquo;მოხმარების წესებსა და პირობების&ldquo; შესანებ კითხვების არსებობის შემთხვევაში, გთხოვთ&nbsp; დარეკოთ ნომერზე:&nbsp;<strong>+995&nbsp;577 33 50 80</strong></p>
<h3 style="text-align: center;"><br><br></h3>
           </section>
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
      smsMessage: "THANK YOU, YOUR ORDER HAS BEEN CREATED!",
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