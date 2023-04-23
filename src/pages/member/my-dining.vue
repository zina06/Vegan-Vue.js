<template>
  <head>
  <!-- 구글 폰트 링크 추가 -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">
</head>
<br><br><br>
<nav class="nav nav-tabs justify-content-center nav-tabs-custom wrap" id="myTab" role="tablist">
  
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
        role="tab" aria-controls="home-tab-pane" aria-selected="true" style="margin-left: 10px; width: 350px; border: 1px solid white; border-radius: 0%;">나의
        예약</button>
   
 
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
        role="tab" aria-controls="profile-tab-pane" aria-selected="false" style="margin-left: 10px; width: 350px;  border: 1px solid white; border-radius: 0%;">방문
        완료</button>
    
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button"
        role="tab" aria-controls="contact-tab-pane" aria-selected="false" style="margin-left: 10px; width: 350px;  border: 1px solid white; border-radius: 0%;">취소
        노쇼</button>
  
 
</nav>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      <div v-if="upcomingReservations.length !=0" class="reservation-list" style="margin-top: 50px;">
        <ul class="ulrow">
          <li v-for="reservation in upcomingReservations" :key="reservation.reserveIdx"
            style="justify-content: flex-start;">
            <div class="reservation-item">
            
              <h4><b>{{ reservation.restaurantDTO.name }}</b></h4>
            
            <p>{{ reservation.restaurantDTO.city }}</p>
              <h4><b>{{dataFormat(reservation.reserveDate, "YYYY-MM-DD HH:mm")}} {{ reservation.resCount }}명</b></h4><br>
             
              <button class="btn btn-danger cancelbtn" @click="cancelReserve(reservation)">취소</button>
            </div>
          </li>
        </ul>
      </div>
      <div v-else style="text-align: center; margin-top: 50px;">
        <p @click="goToReservationPage" class="blue-text" style="font-size: 30px; height: 300px; margin-top: 100px;"> 다가올 방문 예정이 없습니다. 지금 바로 예약하세요!</p>
      
      </div>


    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
      <div v-if="completedReservations.length !=0" class="reservation-list" style="display: flex; flex-direction: column; margin-top: 50px;">
        <ul class="ulrow">
          <li v-for="reservation in completedReservations" :key="reservation.reserveIdx"
            style="justify-content: flex-start;">
            <div class="reservation-item">
              <span class="badge text-bg-info" style="width: 70px; margin-bottom: 10px; color: white;">방문완료</span>
            
              <h4><b>{{ reservation.restaurantDTO.name }}</b></h4>
            
              <p>{{ reservation.restaurantDTO.city }}</p>
          
              <h4><b>{{dataFormat(reservation.reserveDate, "YYYY-MM-DD HH:mm")}} {{ reservation.resCount }}명</b></h4><br>
              <div style="margin: auto;">
                <button v-if="reservation.visitDTO.reviewDTO==null && isReviewAvailable(reservation.visitDTO.visitDate)" 
                class="btn btn-default reviewbtn" type="button" 
                @click="goToReviewPage(reservation.visitDTO.visitIdx)">리뷰 작성하기</button>
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
      <div v-if="cancelledReservations.length !=0 " class="reservation-list" style="margin-top: 50px;">
        <ul class="ulrow">
          <li v-for="reservation in cancelledReservations" :key="reservation.reserveIdx"
            style="justify-content: flex-start;">
            <div class="reservation-item" style=" width: 500px;">
             
          
          <span v-if="reservation.cancelStatus=='o'" class="badge text-bg-danger" style="width: 50px; margin-bottom: 10px;">취소</span>
          <span v-else class="badge text-bg-danger" style="width: 50px; margin-bottom: 10px;">노쇼</span>
              <h4><b>{{ reservation.restaurantDTO.name }}</b></h4>
              <p style="color:grey"><b>{{ reservation.restaurantDTO.city }}</b></p>
              <h4 style="text-decoration: line-through; " ><b>{{dataFormat(reservation.reserveDate, "YYYY-MM-DD HH:mm")}} {{ reservation.resCount }}명 </b></h4>
             
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
import moment from 'moment';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const Swal = require('sweetalert2');
    const memberIdx = sessionStorage.getItem("memberIdx");
    const token = sessionStorage.getItem("token");
    const hasMemberIdx = sessionStorage.getItem('memberIdx');
    const hasManagerIdx = sessionStorage.getItem('managerIdx');

    const dataFormat = (value, format) =>{
      return moment(value).format(format);
    }

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
      }).catch(()=>{
        if(hasManagerIdx != null ||  memberIdx != hasMemberIdx){
        router.push({
            name:"Error"
          })
        }
        else{
          router.push({
            name:"Main"
          })
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
      }).catch(()=>{
        if(hasManagerIdx != null ||  memberIdx != hasMemberIdx){
        router.push({
            name:"Error"
          })
        }
        else{
          router.push({
            name:"Main"
          })
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
      }).catch(()=>{
        if(hasManagerIdx != null ||  memberIdx != hasMemberIdx){
        router.push({
            name:"Error"
          })
        }
        else{
          router.push({
            name:"Main"
          })
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
      dataFormat
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
  height: auto;
  margin: 50px;
  overflow: hidden;
  padding: 20px;
  width: 700px;
  
}

.nav-tabs-custom {
  background-color: #fcfdfd;
  margin: auto;
  width: 1200px;
  border-radius: 15px;
}

.nav-tabs-custom .nav-link.active {
  background-color: #8a7dac;
  color: #fff;
}

.ulrow {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
.reviewbtn{
background: lightgray;
width: 200px;
margin: auto;
}

.cancelbtn{
  background: rgb(243, 100, 100);
  border: rgb(243, 100, 100);
  width: 200px;
  margin: auto;
}

</style>
