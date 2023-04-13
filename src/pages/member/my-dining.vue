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
          <li v-for="reservation in upcomingReservations" :key="reservation.id" style="justify-content: flex-start;">
            <div class="reservation-item">{{ reservation.title }}</div>
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
export default {
  setup() {

    const router = useRouter();


    const goToReviewPage = function () {
            router.push(
                "/member/reviewinsert"
            )
        }

    return {
      upcomingReservations: [
        { id: 1, title: '예약 1', status: '방문 예정' },
        { id: 2, title: '예약 2', status: '방문 예정' },
        { id: 3, title: '예약 3', status: '방문 예정' },
        { id: 4, title: '예약 4', status: '방문 예정' }
      ],
      cancelledReservations: [
        { id: 5, title: '예약 4', status: '취소/노쇼' },
        { id: 6, title: '예약 5', status: '취소/노쇼' }
      ],
      completedReservations: [
        { id: 7, title: '예약 6', status: '방문 완료' },
        { id: 8, title: '예약 7', status: '방문 완료' },
        { id: 9, title: '예약 8', status: '방문 완료' }
      ],
      goToReviewPage,
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
