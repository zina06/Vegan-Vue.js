<template>
  <head>
  <!-- 구글 폰트 링크 추가 -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">
</head>
  <ul class="nav nav-tabs justify-content-center nav-tabs-custom" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
        role="tab" aria-controls="home-tab-pane" aria-selected="true" style="margin-left: 10px; width: 200px;">나의
        예약</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
        role="tab" aria-controls="profile-tab-pane" aria-selected="false" style="margin-left: 10px; width: 200px;">방문
        완료</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button"
        role="tab" aria-controls="contact-tab-pane" aria-selected="false" style="margin-left: 10px; width: 200px;">취소
        노쇼</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      <div v-if="upcomingReservations.length !=0" class="reservation-list">
        <ul class="ulrow">
          <li v-for="reservation in upcomingReservations" :key="reservation.reserveIdx"
            style="justify-content: flex-start;">
            <div class="reservation-item">
              <button class="w-btn-outline w-btn-green-outline w-25" @click="cancelReserve(reservation)">취소</button>
              <div>예약일시</div>
              <div>{{ reservation.reserveDate.getFullYear() }}년 {{ reservation.reserveDate.getMonth() + 1 }}월 {{
                reservation.reserveDate.getDate() }}일 {{ reservation.reserveDate.getHours() }}시 {{
    reservation.reserveDate.getMinutes() }}분</div>
              <div>{{ reservation.resCount }}</div>
              <div>{{ reservation.restaurantDTO.name }}</div>
              <div>{{ reservation.restaurantDTO.city }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else style="text-align: center; margin-top: 50px;">
        <p @click="goToReservationPage" class="blue-text" style="font-size: 30px;">👉 다가올 방문 예정이 없습니다. 지금 바로 예약하세요!</p>
        <a style="font-size: 70px;">🙏</a>
      </div>


    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
      <div v-if="completedReservations.length !=0" class="reservation-list" style="display: flex; flex-direction: column;">
        <ul class="ulrow">
          <li v-for="reservation in completedReservations" :key="reservation.reserveIdx"
            style="justify-content: flex-start;">
            <div class="reservation-item">
              <h5 style="font-weight: bold;">예약 번호  <span style="font-size: 20px;">{{ reservation.reserveIdx }}</span></h5>
              <h5 style="font-weight: bold;">예약 일시</h5>
              <div>{{ reservation.reserveDate.getFullYear() }}년 {{ reservation.reserveDate.getMonth() + 1 }}월 {{
                reservation.reserveDate.getDate() }}일 {{ reservation.reserveDate.getHours() }}시 {{
    reservation.reserveDate.getMinutes() }}분</div>
              <h4>예약 인원</h4>
              {{ reservation.reviewIdx }}
              <div>{{ reservation.resCount }}</div>
              <h4>식당 이름</h4>
              <div>{{ reservation.restaurantDTO.name }}</div>
              <h4>도시</h4>
              <div>{{ reservation.restaurantDTO.city }}</div>
              <h4>방문시각</h4>
              <div>{{ reservation.visitDTO.visitDate }}</div>
              <div style="margin-top: auto;">
                <button v-if="reservation.visitDTO.reviewDTO==null && isReviewAvailable(reservation.visitDTO.visitDate)" type="button" @click="goToReviewPage(reservation.visitDTO.visitIdx)">리뷰 작성하기</button>
                <span v-else-if="reservation.visitDTO.reviewDTO==null && !isReviewAvailable(reservation.visitDTO.visitDate)">작성 기한이 지나 리뷰를 쓸 수 없어요.</span>
                <span hidden v-else></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else style="text-align: center; margin-top: 50px;">
        <p>방문 완료된 예약이 없습니다!</p>
      </div>
    </div>
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
      <div v-if="cancelledReservations.length !=0 " class="reservation-list">
        <ul class="ulrow">
          <li v-for="reservation in cancelledReservations" :key="reservation.reserveIdx"
            style="justify-content: flex-start;">
            <div class="reservation-item">
              <div>예약일시</div>
              <div>{{ reservation.reserveDate.getFullYear() }}년 {{ reservation.reserveDate.getMonth() + 1 }}월 {{
                reservation.reserveDate.getDate() }}일 {{ reservation.reserveDate.getHours() }}시 {{
    reservation.reserveDate.getMinutes() }}분</div>
              <div>{{ reservation.resCount }}</div>
              <div>{{ reservation.restaurantDTO.name }}</div>
              <div>{{ reservation.restaurantDTO.city }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else style="text-align: center; margin-top: 50px;">
        <p>예약취소/노쇼 이력이 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import axios from 'axios';
import { swal } from 'sweetalert2/dist/sweetalert2';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const Swal = require('sweetalert2');
    const memberIdx = sessionStorage.getItem("memberIdx");
    const token = sessionStorage.getItem("token");
    const errorcheck = async () => {
      if(token == null){
        router.push({
          name:"Main"
        });
      }
    };
    errorcheck(); 

    // const goToReviewPage = function () {
    //             router.push({
    //       name:"Login"
    //     });
    //     }
    

    // //예약정보 불러오기
    // const upcomingReservations = ref([]);
    // const getReservations = async () =>{
    //   const res = await axios.get(`/Catchvegan/mydining/getReserves/${memberIdx}`,{
    //     headers : {
    //       'AUTHORIZATION': 'Bearer ' + token
    //     }
    //   });
    
   

    
    //다가올 예약정보 불러오기
    const upcomingReservations = ref([]);
    const getReservations = async () => {
      const res = await axios.get(`/Catchvegan/mydining/getReserves/${memberIdx}`,{
        headers : {
          'AUTHORIZATION': 'Bearer ' + token
        }
      });
      console.log(res);
      upcomingReservations.value = res.data;
      const array = [upcomingReservations.value.length];
      for (let i = 0; i < upcomingReservations.value.length; i++) {
        array[i] = new Date(upcomingReservations.value[i].reserveDate);
        upcomingReservations.value[i].reserveDate = array[i];
      }
      console.log(res);
    }
    getReservations();
    
    //예약취소
    const cancelReserve = (reservation) =>{
      const ONE_DAY = 24 * 60 * 60 * 1000;
      console.log(reservation.reserveDate);

      // 현재 일자 객체 생성
      const currentDate = new Date();

      // 두 일자 간 차이 일 수 계산
      const diffInDays = Math.round((reservation.reserveDate.getTime() - currentDate.getTime()) / ONE_DAY);
      console.log(diffInDays);
      // 1일 이내 여부 판단
      if (diffInDays <= 1) {
        Swal.fire({
            icon : 'info',
            title : '예약일 하루전은 예약금의 50%만 환불됩니다.',
            text : '그래도 환불하시겠습니까?',
            showCancelButton: true, 
            confirmButtonText: '승인', // confirm 버튼 텍스트 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정
          }).then(res =>{
            if(res.isConfirmed){
              reservation.restaurantIdx=1;
              cancel(reservation);
            }
          })
      } else {
        console.log("예약일과 현재 일자의 차이가 1일 이상입니다.");
        Swal.fire({
            icon : 'info',
            title : '정말 취소하시겠습니까?',
            showCancelButton: true, 
            confirmButtonText: '승인', // confirm 버튼 텍스트 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정
          }).then(res =>{
            if(res.isConfirmed){
              cancel(reservation);
            }
          })
      }
      
      
      const cancel = async (reservation) =>{
        const res = await axios.post(`/Catchvegan/reserve/refund`,{
          reserveIdx : reservation.reserveIdx,
          payAmount : reservation.restaurantIdx
        },{
          headers : {
            'AUTHORIZATION': 'Bearer ' + token
          }
        });
        console.log(res);
        if(res.status==200){
          Swal.fire({
            icon : 'success',
            title : '취소가 완료되었습니다.',
            confirmButtonText: '확인'
          }).then(res =>{
            if(res.isConfirmed || !res.isConfirmed){
              location.reload();
            }
          })
        }
        else{
          Swal.fire({
            icon : 'error',
            title : '취소 실패 다시 시도해주세요',
            confirmButtonText: '확인'
          }).then(res =>{
            if(res.isConfirmed || !res.isConfirmed){
              location.reload();
            }
          })
        }
      
      }
    }

    //방문완료정보 불러오기
    const completedReservations = ref([]);
    const getVisitCompleted = async () => {
      const res = await axios.get(`/Catchvegan/mydining/getVisitCompleted/${memberIdx}`,{
        headers : {
          'AUTHORIZATION': 'Bearer ' + token
        }
      });
      console.log(res.data);
      completedReservations.value = res.data;
      const array = [completedReservations.value.length];
      for (let i = 0; i < completedReservations.value.length; i++) {
        array[i] = new Date(completedReservations.value[i].reserveDate);
        completedReservations.value[i].reserveDate = array[i];
        console.log(array[i]);
        console.log(completedReservations.value[i].visitDTO.visitDate);
      }
      console.log("completed" + completedReservations.value);
    }
    getVisitCompleted();

    //취소한 or 노쇼 예약정보
    const cancelledReservations = ref([]);
    const getReserveCancel = async () => {
      const res = await axios.get(`/Catchvegan/mydining/getReserveCancel/${memberIdx}`,{
        headers : {
          'AUTHORIZATION': 'Bearer ' + token
        }
      });
      console.log(res.data);
      cancelledReservations.value = res.data;
      const array = [cancelledReservations.value.length];
      for (let i = 0; i < cancelledReservations.value.length; i++) {
        array[i] = new Date(cancelledReservations.value[i].reserveDate);
        cancelledReservations.value[i].reserveDate = array[i];
        console.log(array[i]);
      }
      console.log(res);
    }
    getReserveCancel();
    
    //리뷰작성 이동
    const goToReviewPage = (visitIdx) => {
        router.push({
          name:"Reviewinsert",
          params : {
            visitIdx : visitIdx,
          }
        });
      }

    const goToReservationPage = () => {
      router.push({
        name: "Search",
      })
    }

    //리뷰 가능 시간(3일안에)
    const isReviewAvailable = (visitDate) => {
      const currentDate = new Date();
      const threeDaysAgo = new Date();
      const visitDate1 = new Date(visitDate);
      threeDaysAgo.setDate(currentDate.getDate() - 3); // visitDate로 부터 3일 전 날짜
      console.log("현재날짜 - 3일 " + threeDaysAgo);
      console.log("비짓 " + visitDate1);
      console.log(visitDate1 > threeDaysAgo);
      return visitDate1 > threeDaysAgo;
    };


    return {
      upcomingReservations,
      completedReservations,
      cancelledReservations,
      goToReviewPage,
      cancelReserve,
      isReviewAvailable,
      goToReservationPage,
      // cancelReserve
    };
  },
  computed: {
    // 마우스가 올라갈 때 파란색으로 텍스트 색상 변경
    textColor() {

      switch (this.isMouseOver) {
        case 'true':
          return "blue";
        case 'false':
          return '';
        default:
          return '';
      }
    }
  }
};


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

* {
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
}

body {
    text-align: center;
    padding: 100px;
    background: whitesmoke;
    display: table-cell;
}
.w-btn {
    position: relative;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    
}

.w-btn-outline {
    position: relative;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    
}

.w-btn-green {
    background-color: #77af9c;
    color: #d7fff1;
}

.w-btn-green-outline {
    border: 3px solid #77af9c;
    color: darkgray;
}

.w-btn-green-outline:hover {
    background-color: #77af9c;
    color: #d7fff1;
}

.w-btn:hover {
    letter-spacing: 2px;
    transform: scale(1.2);
    cursor: pointer;
}

.w-btn-outline:hover {
    letter-spacing: 2px;
    transform: scale(1.2);
    cursor: pointer;
}

.w-btn:active {
    transform: scale(1.5);
}

.w-btn-outline:active {
    transform: scale(1.5);
}



p {
  cursor: pointer;
}

.blue-text:hover {
  color: rgb(35, 180, 117);
}
.reservation-list {
  overflow-y: scroll;
  height: 500px;
  width: 100%;
  margin-bottom: 50px;

  
}
.cancel:hover{
  background-color: #e0a800;
}
.reservation-item {
  border: 1px solid #a39485;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 400px;
  margin: 50px;
  overflow: hidden;
  padding: 20px;
  width: 500px;

}

.nav-tabs-custom {
  background-color: #fcfdfd;
  margin: auto;
  width: 1200px;
  border-radius: 15px;
}

.nav-tabs-custom .nav-link.active {
  background-color: #7fac7d;
  color: #fff;
}

.ulrow {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}


</style>
