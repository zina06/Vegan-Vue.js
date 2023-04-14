<template>
  <ul class="nav nav-tabs justify-content-center nav-tabs-custom" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
        role="tab" aria-controls="home-tab-pane" aria-selected="true"
        style="color:black; margin-left: 10px; width: 200px;">나의 예약</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
        role="tab" aria-controls="profile-tab-pane" aria-selected="false"
        style="color:black; margin-left: 10px; width: 200px;">방문 완료</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button"
        role="tab" aria-controls="contact-tab-pane" aria-selected="false"
        style="color:black; margin-left: 10px; width: 200px;">취소 노쇼</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      <div class="reservation-list">
        <ul class="ulrow">
          <li v-for="reservation in upcomingReservations" :key="reservation.reserveIdx" style="justify-content: flex-start;">
            <div class="reservation-item">
              <div>예약일시</div>
              <div>{{ reservation.reserveDate.getFullYear() }}년 {{ reservation.reserveDate.getMonth()+1 }}월  {{ reservation.reserveDate.getDate() }}일  {{ reservation.reserveDate.getHours() }}시  {{ reservation.reserveDate.getMinutes() }}분</div>
              <div>{{ reservation.resCount }}</div>
              <div>{{ reservation.restaurantDTO.name }}</div>
              <div>{{ reservation.restaurantDTO.city }}</div>
              <button @click="cancelReserve(reservation.reserveIdx)"  >취소하기</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
      <div class="reservation-list">
        <ul class="ulrow">
          <li v-for="reservation in completedReservations" :key="reservation.id">
            <div class="reservation-item">{{ reservation.title }}
              <div class="text" @click="goToReviewPage()">리뷰 작성하기</div>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
      <div class="reservation-list">
        <ul class="ulrow">
          <li v-for="reservation in cancelledReservations" :key="reservation.id">
            <div class="reservation-item">{{ reservation.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
export default {
  setup() {

    const router = useRouter();


    const goToReviewPage = function () {
                router.push({
          name:"Login"
        });
        }
    
    const memberIdx = 1;
    //예약정보 불러오기
    const upcomingReservations = ref([]);
    const getReservations = async () =>{
      const res = await axios.get(`/Catchvegan/mydining/getReserves/${memberIdx}`);
      console.log(res);
      upcomingReservations.value = res.data;
      const array = [upcomingReservations.value.length];
      for(let i=0; i<upcomingReservations.value.length; i++){
        array[i] = new Date(upcomingReservations.value[i].reserveDate);
        upcomingReservations.value[i].reserveDate = array[i];
      }
      console.log(res);
    }
    getReservations();

    //예약취소
    /*
    const cancelReserve = (idx) =>{
      // console.log(idx);
      const cancel = async () =>{
        const res = async 
      }
    }
    */

    return {
      upcomingReservations,
      cancelledReservations: [
        { id: 5, title: '예약 4', status: '취소/노쇼' },
        { id: 6, title: '예약 5', status: '취소/노쇼' }
      ],
      completedReservations: [
        { id: 7, title: '예약 6', status: '방문 완료' },
        { id: 8, title: '예약 7', status: '방문 완료' },
        { id: 9, title: '예약 8', status: '방문 완료' }
      ],
      goToReviewPage
      //cancelReserve
    };
  }
};
</script>

<style scoped>
.reservation-list {
  overflow-y: scroll;
  height: 500px;
  width: 100%;
  margin-bottom: 50px;

}

.reservation-item {
  border: 1px solid #a39485;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  height: 300px;
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
  
}</style>
