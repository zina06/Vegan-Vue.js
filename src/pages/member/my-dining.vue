<template>
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
      <div class="reservation-list">
        <ul class="ulrow">
          <li v-for="reservation in upcomingReservations" :key="reservation.reserveIdx"
            style="justify-content: flex-start;">
            <div class="reservation-item">
              <div>예약일시</div>
              <div>{{ reservation.reserveDate.getFullYear() }}년 {{ reservation.reserveDate.getMonth() + 1 }}월 {{
                reservation.reserveDate.getDate() }}일 {{ reservation.reserveDate.getHours() }}시 {{
    reservation.reserveDate.getMinutes() }}분</div>
              <div>{{ reservation.resCount }}</div>
              <div>{{ reservation.restaurantDTO.name }}</div>
              <div>{{ reservation.restaurantDTO.city }}</div>
              <button type="button" @click="cancelReserve(reservation.reserveIdx)">취소하기</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
      <div class="reservation-list" style="display: flex; flex-direction: column;">
        <ul class="ulrow">
          <li v-for="reservation in completedReservations" :key="reservation.reserveIdx"
            style="justify-content: flex-start;">
            <div class="reservation-item">
              <h4>예약일시</h4>
              {{ reservation.reserveIdx }}
              <div>{{ reservation.reserveDate.getFullYear() }}년 {{ reservation.reserveDate.getMonth() + 1 }}월 {{
                reservation.reserveDate.getDate() }}일 {{ reservation.reserveDate.getHours() }}시 {{
    reservation.reserveDate.getMinutes() }}분</div>
              <h3>예약 인원</h3>
              {{ reservation.reviewIdx }}
              <div>{{ reservation.resCount }}</div>
              <h3>식당 이름</h3>
              <div>{{ reservation.restaurantDTO.name }}</div>
              <h3>도시</h3>
              <div>{{ reservation.restaurantDTO.city }}</div>
              <div>{{ reservation.visitDTO.visitDate }}</div>
              <div style="margin-top: auto;">
                <button v-if="reservation.visitDTO.reviewDTO==null && isReviewAvailable(reservation.visitDTO.visitDate)" type="button" @click="goToReviewPage()">리뷰 작성하기</button>
                <span v-else-if="reservation.visitDTO.reviewDTO==null && !isReviewAvailable(reservation.visitDTO.visitDate)">작성 기한이 지나 리뷰를 쓸 수 없어요.</span>
                <span hidden v-else></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
      <div class="reservation-list">
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
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
export default {
  setup() {
    const memberIdx = 37;
    const router = useRouter();

    
    //다가올 예약정보 불러오기
    const upcomingReservations = ref([]);
    const getReservations = async () => {
      const res = await axios.get(`/Catchvegan/mydining/getReserves/${memberIdx}`);
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
    // const cancelReserve = (idx) =>{
    //   // console.log(idx);
    //   const cancel = async () =>{
    //     const res = async 
    //   }
    // }

    //방문완료정보 불러오기
    const completedReservations = ref([]);
    const getVisitCompleted = async () => {
      const res = await axios.get(`/Catchvegan/mydining/getVisitCompleted/${memberIdx}`);
      console.log(res.data);
      completedReservations.value = res.data;
      const array = [completedReservations.value.length];
      for (let i = 0; i < completedReservations.value.length; i++) {
        array[i] = new Date(completedReservations.value[i].reserveDate);
        completedReservations.value[i].reserveDate = array[i];
        console.log(array[i]);
      }
      console.log("completed" + completedReservations.value);
    }
    getVisitCompleted();

    //취소한 or 노쇼 예약정보
    const cancelledReservations = ref([]);
    const getReserveCancel = async () => {
      const res = await axios.get(`/Catchvegan/mydining/getReserveCancel/${memberIdx}`);
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
    const goToReviewPage = () => {
        router.push({
          name:"Reviewinsert"
        });
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
      isReviewAvailable,
      // cancelReserve
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

button[type="button"],
button[type="submit"] {
  width: 100%;
  padding: 0.5rem;
  border-radius: 1px #7fac7d;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"] {
  background-color: #7fac7d;
  color: white;
}

button[type="button"]:hover,
button[type="submit"]:hover {
  background-color: #7fac7d;
  color: white;
}</style>
