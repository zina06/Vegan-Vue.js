<template>
  <body class="bg-body-tertiary">

    <div class="container">
      <main>
        <div class="py-5 text-center">
          <h2>Checkout form</h2>
          <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group
            has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>





        <div class="row g-5 ">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">식당정보</span>
              <!-- <span class="badge bg-primary rounded-pill">3</span> -->
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">식당 이름</h6>
                  <!-- <small class="text-body-secondary">on</small> -->
                </div>
                <span class="text-body-secondary">{{ resName }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">식당 소개</h6>
                  <!-- <small class="text-body-secondary">Brief description</small> -->
                </div>
                <span class="text-body-secondary">{{ resInfo }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">비건타입</h6>
                  <!-- <small class="text-body-secondary">Brief description</small> -->
                </div>
                <span class="text-body-secondary">{{ veganType }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between bg-body-tertiary">

                <h6 class="my-0">1인당 예약금</h6>
                <!-- <small>EXAMPLECODE</small> -->

                <span class="text-success">{{ amount }}</span>
              </li>
              <!-- <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li> -->
            </ul>

            <!-- <form class="card p-2">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Promo code">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </form> -->

            <br><br>

            <!-- <div>
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-danger" style="margin:auto">예약시간</span>
          
            </h4>
            
           
            <div style="display:flex; justify-content:center;">
              <VDatePicker v-model="date" :min-date="new Date()" :max-date="maxDate" style="margin:auto"/>
            </div>

            <br>
            <br>
            <div class="btn-group d-flex justify-content-between" role="group" aria-label="radio toggle button group">
              <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" disabled=”disabled”>
              <label class="btn btn-outline-success" for="vbtn-radio1">18:00</label>

              <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off" disabled=”disabled”>
              <label class="btn btn-outline-success" for="vbtn-radio2">18:30</label>

              <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off" disabled=”disabled”>
              <label class="btn btn-outline-success" for="vbtn-radio3">19:00</label>

              <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio4" autocomplete="off" disabled=”disabled”>
              <label class="btn btn-outline-success" for="vbtn-radio4">19:30</label>

              <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio5" autocomplete="off" disabled=”disabled”>
              <label class="btn btn-outline-success" for="vbtn-radio5">20:00</label>
            </div>

          </div> -->
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">예약자 정보</h4>
            <form class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-12">
                  <label for="firstName" class="form-label">이름</label>
                  <input type="text" class="form-control" id="firstName" placeholder="" value="" readonly>
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>



                <!-- <div class="col-12">
                  <label for="username" class="form-label">Username</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" id="username" placeholder="Username" required>
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div> -->

                <div class="col-12">
                  <label for="email" class="form-label">전화번호</label>
                  <input type="email" class="form-control" id="email" placeholder="" readonly>
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <!-- <div class="col-12">
                  <label for="address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div class="col-12">
                  <label for="address2" class="form-label">Address 2 <span
                      class="text-body-secondary">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                </div> -->


                <div class="col-md-12">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-danger" style="margin:auto">예약시간</span>

                  </h4>


                  <div style="display:flex; justify-content:center;">
                    <VDatePicker v-model="date" :min-date="new Date()" :max-date="maxDate" style="margin:auto"
                      :clickable="true" @click="onSelectDate" />
                  </div>

                  <br>
                  <br>
                  <div class="w-100" v-if="checkTime">
                    <div class="w-100 text-center">예약가능인원</div>
                    <div class="mx-auto d-flex justify-content-between">
                      <div class="flex-grow-2"></div>
                      <div class="flex-grow-2"></div>
                      <div class="flex-grow-2"></div>
                      <div class="text-primary">{{six}}명</div>
                      <div class="text-primary">{{sixHalf}}명</div>
                      <div class="text-primary">{{seven}}명</div>
                      <div class="text-primary">{{sevenHalf}}명</div>
                      <div class="text-primary">{{eight}}명</div>
                      <div class="flex-grow-2"></div>
                      <div class="flex-grow-2"></div>
                      <div class="flex-grow-2"></div>
                    </div>
                  </div>
                  
                  
                  <div class="btn-group d-flex col-md-12 w-50 justify-content-center align-items-center mx-auto"
                    role="group" aria-label="radio toggle button group">

                    <input type="radio" class="btn-check" value="18:00" name="vbtn-radio" id="vbtn-radio1"
                      v-model="reserveTime" autocomplete="off">
                    <label class="btn btn-outline-success" for="vbtn-radio1">18:00</label>

                    <input type="radio" class="btn-check" value="18:30" name="vbtn-radio" id="vbtn-radio2"
                      v-model="reserveTime" autocomplete="off">
                    <label class="btn btn-outline-success" for="vbtn-radio2">18:30</label>

                    <input type="radio" class="btn-check" value="19:00" name="vbtn-radio" id="vbtn-radio3"
                      v-model="reserveTime" autocomplete="off">
                    <label class="btn btn-outline-success" for="vbtn-radio3">19:00</label>

                    <input type="radio" class="btn-check" value="19:30" name="vbtn-radio" id="vbtn-radio4"
                      v-model="reserveTime" autocomplete="off">
                    <label class="btn btn-outline-success" for="vbtn-radio4">19:30</label>

                    <input type="radio" class="btn-check" value="20:00" name="vbtn-radio" id="vbtn-radio5"
                      v-model="reserveTime" autocomplete="off">
                    <label class="btn btn-outline-success" for="vbtn-radio5">20:00</label>

                  </div>

                </div>
                <div class="col-md-6">
                  <label for="country" class="form-label">예약인원</label>
                  <select class="form-select" id="country" v-model="resCount" v-on:change="changePerson" required>
                    <option value="">인원을 선택해주세요</option>
                    <option value="1">1 명</option>
                    <option value="2">2 명</option>
                    <option value="3">3 명</option>
                    <option value="4">4 명</option>
                    <option value="5">5 명</option>
                    <option value="6">6 명</option>
                    <option value="7">7 명</option>
                    <option value="8">8 명</option>
                    <option value="9">9 명</option>
                    <option value="10">10 명</option>
                    <option value="11">11 명</option>
                    <option value="12">12 명</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-6">
                  <label for="email" class="form-label">선결제금액</label>
                  <input type="email" class="form-control" id="email" v-model="payFirst" readonly>
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <!-- <div class="col-md-4">
                  <label for="state" class="form-label">State</label>
                  <select class="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="zip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required>
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>
                </div> -->
              </div>

              <hr class="my-4">

              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="same-address" v-model="refundOk">
                <label class="form-check-label" for="same-address">
                  [필수] 취소 및 환불 규정에 동의합니다.</label>
              </div>
              <br>
              <div class="col-6 refund">
                <div>2일전 취소: 100%환불</div>
                <div>1일전 취소: 50% 환불</div>
                <div>당일 취소: 환불 불가</div>
                <div>노쇼 시: 환불 불가</div>
              </div>

              <!-- <div class="form-check">
                <input type="checkbox" class="form-check-input" id="save-info">
                <label class="form-check-label" for="save-info">Save this information for next time</label>
              </div> -->

              <hr class="my-4">

              <h4 class="mb-3">결제</h4>

              <div class="my-3">
                <div class="form-check">
                  <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
                  <label class="form-check-label" for="credit">카카오 페이</label>
                </div>
                <!-- <div class="form-check">
                  <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
                  <label class="form-check-label" for="debit">Debit card</label>
                </div>
                <div class="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
                  <label class="form-check-label" for="paypal">PayPal</label>
                </div> -->
              </div>

              <!-- <div class="row gy-3">
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required>
                  <small class="text-body-secondary">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div class="col-md-6">
                  <label for="cc-number" class="form-label">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required>
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="cc-expiration" class="form-label">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div> -->

              <hr class="my-4">

              <button class="w-100 btn btn-primary btn-lg" @click="reserve">Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>

      <footer class="my-5 pt-5 text-body-secondary text-center text-small">
        <p class="mb-1">&copy; 2017–2023 Company Name</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>

  </body>
</template>

<script>
import router from '@/router/router';
import axios from 'axios';
import { ref } from 'vue';
export default {
  setup() {
    const newDate = new Date();
    const maxDate = ref(new Date().setMonth(newDate.getMonth() + 1));
    const reserveDate = ref(new Date());
    const six=ref(0);
    const sixHalf=ref(0);
    const seven=ref(0);
    const sevenHalf=ref(0);
    const eight=ref(0);
    const checkTime = ref(false);
    const Swal = require('sweetalert2');
    // const router = router();

    //달력선택 
    const onSelectDate = (context) => {

      // console.log(context);
      // console.log(context.target.ariaLabel);
      if (context.target.ariaLabel == null) {
        return;
      }
      const match = context.target.ariaLabel.match(/(\d+)년 (\d+)월 (\d+)일 (.+)/);


      const year = parseInt(match[1]);
      const month = parseInt(match[2]) - 1; // JavaScript에서 월은 0부터 시작하므로 1을 뺍니다.
      const day = parseInt(match[3]);
      // const dayOfWeek = match[4];
      const date = new Date(year, month, day);

    
      if (date < new Date()) {
        
        Swal.fire({
          icon : 'error',
          title : '예약할 수 없는 날입니다.'
        })
        return;
      }
      reserveDate.value = date;
      console.log(reserveDate.value);

      //해당 시간에 예약할 수 있는 인원과 시간 표시
      const canReserve = async() => {
        const data = {
          restaurantIdx : 5,
          reserveDate : reserveDate.value
        }
        const res = await axios.post(`/Catchvegan/reserve/getTime`,data);
        console.log(res);
        six.value=res.data.six;
        sixHalf.value = res.data.sixHalf;
        seven.value = res.data.seven;
        sevenHalf.value = res.data.sevenHalf;
        eight.value = res.data.eight;
        checkTime.value=true;
      }
      canReserve();

    }

    //식당과회원정보
    const resName = ref('');
    const resInfo = ref('');
    const veganType = ref('');
    const amount = ref('');

    const getResAndMember = async () => {
      const res = await axios.get(`/Catchvegan/reserve/5`);
      console.log(res);
      resName.value = res.data.name;
      resInfo.value = res.data.restaurantInfo;
      veganType.value = res.data.veganType;
      amount.value = res.data.reservePay;
    }
    getResAndMember();

    //예약진행
    // const resCount = ref('');
    // const reserveTime = ref('');
    // const reserve = (e) => {
    //   e.preventDefault();
    //   console.log(resCount.value);
    //   console.log(reserveTime.value);
    //   if (resCount.value == '' || reserveTime.value == '') {
    //     alert("예약인원과 시간을 선택해주세요");
    //     return;
    //   }
    //   const [hours, minutes] = reserveTime.value.split(':');
    //   reserveDate.value.setHours(hours, minutes);
    //   console.log(reserveDate.value);

    //   //결제요청전달
    //   const data = {
    //     memberIdx: 1,
    //     restaurantIdx: 3,
    //     reserveDate: reserveDate.value,
    //     resCount: parseInt(resCount.value)
    //   }
    //   const reserveNow = async () => {
    //     const res = await axios.post(`/reserve/ready/3`, data)
    //       .then(res => {
    //         console.log(res);
    //         const url = res.data.next_redirect_pc_url;
    //         const payUrl = window.open(url, 'newWindow', 'width=500,height=650');
    //         payUrl.focus();

    //       })
    //   }
    //   reserveNow();

    // }


    // //SSE
    // function handlePaymentResultEvent(event) {
    //   console.log(event);
    //   // 받은 데이터 처리 로직
    //   // ...
    //   if (event.data === 'success') {
    //     router.push({ name: 'Main' });
    //   } else if (event.data === 'fail') {
    //     alert('결제에 실패했습니다.');
    //   }
    // }

    // let paymentResultEventSource = new EventSource('http://localhost:8082/Catchvegan/reserve-result');
    // paymentResultEventSource.addEventListener('paymentResult', handlePaymentResultEvent);

    // router.afterEach(() => {
    //   // 페이지 이동 후에 paymentResultEventSource 객체 제거
    //   paymentResultEventSource.close();
    //   paymentResultEventSource = null;
    // });

    const resCount = ref('');
    const reserveTime = ref('');
    const refundOk = ref(false);
    let paymentResultEventSource = null;
    
    //선결제금액 보여주기
    const payFirst = ref('');
    const changePerson = () =>{
      if(resCount.value==''){
        return;
      }
      else{
        payFirst.value = resCount.value * amount.value
      }
    }



    const reserve = async (e) => {
      e.preventDefault();
      console.log(resCount.value);
      console.log(reserveTime.value);
      console.log(refundOk.value);
      const canReservePerson = ref('');
      if (resCount.value == '' || reserveTime.value == '') {
        Swal.fire({
          icon : 'error',
          title : '예약인원과 시간을 선택해주세요'
        })
        return;
      }
      if(reserveTime.value == '18:00'){
        canReservePerson.value = six.value;
      }
      if(reserveTime.value == '18:30'){
        canReservePerson.value = sixHalf.value;
      }
      if(reserveTime.value == '19:00'){
        canReservePerson.value = seven.value;
      }
      if(reserveTime.value == '19:30'){
        canReservePerson.value = sevenHalf.value;
      }
      if(reserveTime.value == '20:00'){
        canReservePerson.value = eight.value;
      }
      console.log(canReservePerson.value);
      if(parseInt(canReservePerson.value)<parseInt(resCount.value)){
        Swal.fire({
          icon : 'error',
          title : '예약가능인원을 초과하였습니다.'
        })
        return;
      }
      if (!refundOk.value) {
        Swal.fire({
          icon : 'error',
          title : '환불 규정에 동의해주세요'
        })
        return;
      }
      const [hours, minutes] = reserveTime.value.split(':');
      reserveDate.value.setHours(hours, minutes);
      console.log(reserveDate.value);

      // 결제 요청 전달
      const data = {
        memberIdx: 1,
        restaurantIdx: 5,
        reserveDate: reserveDate.value,
        resCount: parseInt(resCount.value)
      }
      const res = await axios.post(`/Catchvegan/reserve/ready/5`, data);
      console.log(res);
      const url = res.data.next_redirect_pc_url;
      const payUrl = window.open(url, 'newWindow', 'width=500,height=650');
      payUrl.focus();

      // SSE 처리
      function handlePaymentResultEvent(event) {
        console.log(event);
        // 받은 데이터 처리 로직
        // ...
        if (event.data === 'success') {
          payUrl.close();
          Swal.fire({
            icon : 'success',
            title : '예약이 완료되었습니다!',
            confirmButtonText: '확인'
          }).then(res =>{
            if(res.isConfirmed || !res.isConfirmed){
              router.push({ name: 'Mydining' });
            }
          })
          // router.push({ name: 'Mydining' });
        } else if (event.data === 'fail') {
          payUrl.close();
          alert('결제에 실패했습니다.');
        }
      }

      paymentResultEventSource = new EventSource('http://localhost:8082/Catchvegan/reserve-result');
      paymentResultEventSource.addEventListener('paymentResult', handlePaymentResultEvent);
    }

    const cancelReservation = () => {
      // 페이지 이동 후에 paymentResultEventSource 객체 제거
      paymentResultEventSource.close();
      paymentResultEventSource = null;
    }

    // 페이지 이동 시 SSE 객체 제거
    router.beforeEach((to, from, next) => {
      if (paymentResultEventSource !== null) {
        paymentResultEventSource.close();
        paymentResultEventSource = null;
      }
      next();
    });


    return {
      maxDate,
      onSelectDate,
      resName,
      resInfo,
      veganType,
      amount,
      reserve,
      resCount,
      reserveTime,
      six,
      sixHalf,
      seven,
      sevenHalf,
      eight,
      checkTime,
      refundOk,
      changePerson,
      payFirst
    }
  }
}
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

.refund {
  margin: auto;
  border-radius: 5px;
  border: 1px;
  height: auto;
  background-color: rgb(240, 240, 240);
  border: 2px solid black;
  padding: 12px;
}
</style>