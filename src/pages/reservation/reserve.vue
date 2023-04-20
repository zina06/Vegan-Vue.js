<template>
  
  <body class="bg-body-tertiary">
   
    <div class="container">
      <main>
       
        <br><br> 



        <img src="@/assets/img/reserve.png" style="width:100%; height: 100%;">
        <br><br><br>
        <div class="row g-5 " style="background: white;">
          
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text" style="font-weight: bold;" >식당정보</span>
             
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">식당 이름</h6>
               
                </div>
                <span class="text-body-secondary">{{ resName }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">식당 소개</h6>
             
                </div>
                <span class="text-body-secondary">{{ resInfo }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">비건타입</h6>
                 
                </div>
                <span class="text-body-secondary">{{ veganType }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">

                <h6 class="my-0">1인당 예약금</h6>
          

                <span class="text-success">{{ amount }}</span>
              </li>
              
            </ul>


            <br><br>

           
          </div>


            <div class="col-md-7 col-lg-8" >
             
              <h4 class="mb-3 " style="padding-left: 70px;"><b>* 예약자 정보</b></h4>
                <form class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-12" style="padding-left: 80px;">
                    <label for="firstName" class="form-label"><b>이름</b></label>
                    <input type="text" class="form-control" id="firstName" placeholder="" v-model="userName" readonly  style="width: 200px;">
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
   


               

                <div class="col-12" style="padding-left: 80px;">
                  <label for="email" class="form-label"><b>전화번호</b></label>
                  <input type="email" class="form-control" id="email" placeholder="" v-model="userPhone" readonly  style="width: 300px;">
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
             
                
              
                 <br> <br> 
                <div class="col-md-12" style="padding-top: 50px; width: 1200px;">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span style="font-weight: bold; padding-left: 70px;">* 예약시간</span>

                  </h4>
                  

                  <div style="display:flex; justify-content:center;">
                    <VDatePicker v-model="date" :min-date="new Date(Date.now() + 24 * 60 * 60 * 1000)" :max-date="maxDate" style="width: 800px; margin-left: 75px;"
                      :clickable="true" @click="onSelectDate"  />
                  </div>

                  <br>
                  <br>
                  
                  <div class="d-flex justify-content-center" style="margin:auto; padding-left: 50px;">
                    <table class="table table-responsive"
                      style="width: 500px; text-align: center;">
                      <tr>
                      <td v-if="alreadyReserve" class="col-2 text" style="width: 100px;  font-weight: bold; font-family: 'Helvetica Neue', sans-serif; font-size: 16px;">{{ six }}명</td>
                      <td v-if="alreadyReserve" class="col-2 text" style="width: 100px;  font-weight: bold; font-family: 'Helvetica Neue', sans-serif; font-size: 16px;">{{ sixHalf }}명</td>
                      <td v-if="alreadyReserve" class="col-2 text" style="width: 100px;  font-weight: bold; font-family: 'Helvetica Neue', sans-serif; font-size: 16px;">{{ seven }}명</td>
                      <td v-if="alreadyReserve" class="col-2 text" style="width: 100px;  font-weight: bold; font-family: 'Helvetica Neue', sans-serif; font-size: 16px;">{{ sevenHalf }}명</td>
                      <td v-if="alreadyReserve" class="col-2 text" style="width: 100px;  font-weight: bold; font-family: 'Helvetica Neue', sans-serif; font-size: 16px;">{{ eight }}명</td>
                      </tr>
                      <tr>
                        <td class="col-2" >
                          

                            <input type="radio" class="btn-check" value="18:00" name="vbtn-radio" id="vbtn-radio1"
                              v-model="reserveTime" autocomplete="off">
                            <label class="btn btn-outline-success" for="vbtn-radio1">18:00</label>
                        </td>
                        <td class="col-2" style="width: 100px;">
                            <input type="radio" class="btn-check" value="18:30" name="vbtn-radio" id="vbtn-radio2"
                              v-model="reserveTime" autocomplete="off">
                            <label class="btn btn-outline-success" for="vbtn-radio2">18:30</label>
                        </td>
                        <td class="col-2" style="width: 100px;">
                            <input type="radio" class="btn-check" value="19:00" name="vbtn-radio" id="vbtn-radio3"
                              v-model="reserveTime" autocomplete="off">
                            <label class="btn btn-outline-success" for="vbtn-radio3">19:00</label>
                        </td>
                        <td class="col-2" style="width: 100px;">
                            <input type="radio" class="btn-check" value="19:30" name="vbtn-radio" id="vbtn-radio4"
                              v-model="reserveTime" autocomplete="off">
                            <label class="btn btn-outline-success" for="vbtn-radio4">19:30</label>
                          </td>
                          <td class="col-2" style="width: 100px;">
                            <input type="radio" class="btn-check" value="20:00" name="vbtn-radio" id="vbtn-radio5"
                              v-model="reserveTime" autocomplete="off">
                            <label class="btn btn-outline-success" for="vbtn-radio5">20:00</label>

                          
                        </td>
                      </tr>
                    </table>
                  </div>
                  

                 

                </div>
                <div class="col-md-6">
                  <label for="country" class="form-label" style="padding-left: 80px; padding-top: 30px;"><b>* 예약인원</b></label>
                  <div style="padding-left: 80px;">
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
                </div>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-6">
                  <label for="email" class="form-label" style="padding-top: 30px;"><b>선결제금액</b></label>
                  <input type="email" class="form-control" id="email" v-model="payFirst" readonly  style="width: 300px;">
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                
              </div>

              <hr class="my-4">

              <div class="form-check" style="padding-left: 80px;">
                <input type="checkbox" class="form-check-input" id="same-address" v-model="refundOk">
                <label class="form-check-label" for="same-address">
                  &nbsp;&nbsp;[필수] 취소 및 환불 규정에 동의합니다.</label>
              </div>
              <br>
              <div class="col-6 refund"  style="padding-left: 20px; width: 70%;">
                <div>2일전 취소 : 100%환불</div>
                <div>1일전 취소 : 50% 환불</div>
                <div>당일 취소 : 환불 불가</div>
                <div>노쇼 시 : 환불 불가</div>
              </div>

              <!-- <div class="form-check">
                <input type="checkbox" class="form-check-input" id="save-info">
                <label class="form-check-label" for="save-info">Save this information for next time</label>
              </div> -->

              <hr class="my-4">

              <h4 class="mb-3" style="padding-left: 80px;"><b>결제</b></h4>

              <div class="my-3" style="padding-left: 80px;">
                <div class="form-check">
                  <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
                  <label class="form-check-label" for="credit">&nbsp;카카오페이</label>
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

              

              <hr class="my-4">

              <button class="w-100 btn btn-success btn-lg" @click="reserve" style="background: #4AB34A; border-color: #4AB34A;">예약 및 결제</button>
            </form>
          </div>
        </div>
      </main>

      
    </div>

  </body>
</template>

<script>
let paymentResultEventSource = null;
import router from '@/router/router';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onBeforeUnmount, onMounted, ref } from 'vue';
export default {
  
  setup() {
    const newDate = new Date();
    const maxDate = ref(new Date().setMonth(newDate.getMonth() + 1));
    const reserveDate = ref(new Date());
    const six = ref(0);
    const sixHalf = ref(0);
    const seven = ref(0);
    const sevenHalf = ref(0);
    const eight = ref(0);
    const checkTime = ref(false);
    const route = useRoute();
    const memberIdx = sessionStorage.getItem("memberIdx");
    const restaurantIdx = route.params.restaurantIdx;
    const Swal = require('sweetalert2');
    console.log(restaurantIdx);
    const token = sessionStorage.getItem("token");
    console.log(token);
    const errorcheck = async () => {
      if(token == null){
        router.push({
          name:"Main"
        });
      }
    };
    errorcheck();



    //달력선택 
    const alreadyReserve = ref(false);
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
          icon: 'error',
          title: '예약할 수 없는 날입니다.'
        })
        return;
      }
      reserveDate.value = date;
      console.log(reserveDate.value);

      //해당 시간에 예약할 수 있는 인원과 시간 표시
      const canReserve = async () => {
        const data = {
          restaurantIdx: restaurantIdx,
          reserveDate: reserveDate.value
        }
        const res = await axios.post(`/Catchvegan/reserve/getTime`, data , {
          headers : {
            'AUTHORIZATION': 'Bearer ' + token
          }
        });
        console.log(res);
        if(res.data == 'alreadyReserve'){
          Swal.fire({
            icon: 'error',
            title: '해당 날짜에 이미 예약이 존재합니다.'
          })
          alreadyReserve.value=false;
          return;
        }
        six.value = res.data.six;
        sixHalf.value = res.data.sixHalf;
        seven.value = res.data.seven;
        sevenHalf.value = res.data.sevenHalf;
        eight.value = res.data.eight;
        checkTime.value = true;
        alreadyReserve.value = true;
      }
      canReserve();

    }

    //식당과회원정보
    const resName = ref('');
    const resInfo = ref('');
    const veganType = ref('');
    const amount = ref('');
    const userName = ref('');
    const userPhone = ref('');
    const getResAndMember = async () => {
      const res = await axios.get(`/Catchvegan/reserve/${restaurantIdx}/${memberIdx}`,{
        headers : {
          'AUTHORIZATION': 'Bearer ' + token
        }
      });
      console.log(res);
      resName.value = res.data.RestaurantDTO.name;
      resInfo.value = res.data.RestaurantDTO.restaurantInfo;
      veganType.value = res.data.RestaurantDTO.veganType;
      amount.value = res.data.RestaurantDTO.reservePay;
      userName.value = res.data.MemberDTO.name;
      userPhone.value = res.data.MemberDTO.phone

    }
    getResAndMember();


    const resCount = ref('');
    const reserveTime = ref('');
    const refundOk = ref(false);
    // let paymentResultEventSource = null;

    //선결제금액 보여주기
    const payFirst = ref('');
    const changePerson = () => {
      if (resCount.value == '') {
        return;
      }
      else {
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
          icon: 'error',
          title: '예약인원과 시간을 선택해주세요'
        })
        return;
      }
      if (reserveTime.value == '18:00') {
        canReservePerson.value = six.value;
      }
      if (reserveTime.value == '18:30') {
        canReservePerson.value = sixHalf.value;
      }
      if (reserveTime.value == '19:00') {
        canReservePerson.value = seven.value;
      }
      if (reserveTime.value == '19:30') {
        canReservePerson.value = sevenHalf.value;
      }
      if (reserveTime.value == '20:00') {
        canReservePerson.value = eight.value;
      }
      console.log(canReservePerson.value);
      if (parseInt(canReservePerson.value) < parseInt(resCount.value)) {
        Swal.fire({
          icon: 'error',
          title: '예약가능인원을 초과하였습니다.'
        })
        return;
      }
      if (!refundOk.value) {
        Swal.fire({
          icon: 'error',
          title: '환불 규정에 동의해주세요'
        })
        return;
      }
      if(!alreadyReserve.value){
        Swal.fire({
          icon: 'error',
          title: '예약할 수 없는날입니다.'
        })
        return;
      }
      const [hours, minutes] = reserveTime.value.split(':');
      reserveDate.value.setHours(hours, minutes);
      console.log(reserveDate.value);

      // 결제 요청 전달
      const data = {
        memberIdx: memberIdx,
        restaurantIdx: restaurantIdx,
        reserveDate: reserveDate.value,
        resCount: parseInt(resCount.value)
      }
      const res = await axios.post(`/Catchvegan/reserve/ready/${restaurantIdx}`, data , {
        headers : {
          'AUTHORIZATION': 'Bearer ' + token
        }
      });
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
            icon: 'success',
            title: '예약이 완료되었습니다!',
            confirmButtonText: '확인'
          }).then(res => {
            if (res.isConfirmed || !res.isConfirmed) {
              router.push({ name: 'Mydining' });
            }
          })
          // router.push({ name: 'Mydining' });
        } else if (event.data === 'fail') {
          payUrl.close();
          alert('결제에 실패했습니다.');
        }
      }

      // paymentResultEventSource = new EventSource('http://localhost:8082/Catchvegan/reserve-result');
      paymentResultEventSource.addEventListener('paymentResult', handlePaymentResultEvent);
      paymentResultEventSource.onclose = function(event) {
        console.log('SSE connection closed');

        // SSE 연결이 끊어졌을 때, 새로운 요청 보내기
        paymentResultEventSource.close();
        paymentResultEventSource = new EventSource('http://localhost:8082/Catchvegan/reserve-result');
      };
    }

    onMounted(()=>{
      console.log("onMount");
      paymentResultEventSource = new EventSource('http://localhost:8082/Catchvegan/reserve-result');
      setTimeout(() => {
      alert("페이지가 만료되었습니다.");
      router.push({
        name: 'Main'
      })
    }, 3600000);
    })

    onBeforeUnmount(()=>{
      console.log("onBeforeUnmount");
      paymentResultEventSource.close();
      paymentResultEventSource = null;
    })



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
      payFirst,
      userName,
      userPhone,
      alreadyReserve
    }
  }


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
/* .btn {
  background:#3CB371 !important; 
  color: white;
  border: #3CB371;
} */

/* .btn-check{
  width: 100px; 
  height: 40px;
 

} */
*{
  font-family: Noto Sans KR;
}
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
  border: 1px solidrgb(240, 240, 240);
  padding: 12px;
}
.timebtn{
  background-color: #77af9c;
    color: #d7fff1;
    border: 1px solid #77af9c;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
}
.timebtn:hover{
  background-color: #d7fff1 !important;
  color: #77af9c !important;
  border: 1px solid #d7fff1 !important;
}

.timebtn:selected{
  background-color: #d7fff1 !important;
  color: #77af9c !important;
  border: 1px solid #d7fff1 !important;
}

/* .w-btn, .btn, .btn-hover, btn-check {
    position: relative;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    
}
.w-btn-green, .btn, .btn:hover{
    background-color: #77af9c;
    color: #d7fff1;
   
} */
.btn-outline-success{
  background-color: #4AB34A !important;
    color:white !important;
    width: 100px;
    border: #4AB34A !important;
    margin-right: 10px;
}

.btn-outline-success:hover,
.btn-outline-success:visited,
.btn-outline-success:focus,
.btn-outline-success:active,
.btn:active
{
    background-color:#90ee90 !important;
    color:white !important;
    width: 100px;
    border: #90ee90 !important;
    margin-right: 10px;
}
.vc-week{
  height: 70px;
}
</style>