<template>
  <h1>마이페이지</h1>
  <div class="wrap">
    <div class="profile-image">
      <img src="" alt="프로필 사진" style="justify-content: center;">
    </div>
    <div class="summaryContainer">
      <div class="item">
        <div class="number">한예찬</div>
        <div>이름</div>
      </div>
      <div class="item">
        <div class="number">{{userType}}</div>
        <div>유형</div>
      </div>
      <div class="item">
        <div class="number">{{userNickname}}</div>
        <div>닉네임</div>
      </div>
      <div class="item">
        <div class="number">{{userPhoneNumber}}</div>
        <div>전화번호</div>
      </div>
      <div class="item">
        <button @click="openModal">수정하기</button>
      </div>
    </div>
    <div class="listContainer">
        <div class=""  @click="toggleReviewList">***리뷰목록***
          <span class="circle"></span>
        </div>
    </div>
    <div v-if="reviewListOpen">
      <h2>리뷰 목록</h2>
      <!-- 리뷰 목록을 보여주는 내용을 작성 -->
    </div>
  </div>
  <!-- 모달 창 -->
  <div v-if="isModalOpen" class="modal-backdrop fade show">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>프로필 수정</h2>
      <div class="form-group">
        <label for="user-type">유형</label>
        <input id="user-type" type="text" v-model="userType" />
      </div>
      <div class="form-group">
        <label for="user-nickname">닉네임</label>
        <input id="user-nickname" type="text" v-model="userNickname" />
      </div>
      <div class="form-group">
        <label for="user-phone-number">전화번호</label>
        <input id="user-phone-number" type="text" v-model="userPhoneNumber" />
      </div>
      <div class="form-group">
        <button @click="modifyUser">저장하기</button>
        <button @click="closeModal">취소하기</button>
      </div>
    </div>
  </div>
</template>


<script>
import { reactive,ref } from 'vue';
export default {
  setup() {
    const reviewListOpen = ref(false);
    const toggleReviewList = () => {
      reviewListOpen.value = !reviewListOpen.value;
      console.log(reviewListOpen.value);
    }
    const isModalOpen = ref(false);
    const openModal = () => {
      isModalOpen.value = true;
      console.log(isModalOpen.value)
    };
    const closeModal = () => {
      isModalOpen.value = false;
      console.log(isModalOpen.value)
    };

    const user = reactive({
      userType: '일반 사용자',
      userNickname: '닉네임',
      userPhoneNumber: '010-0000-0000',
    });
    const modifyUser = () => {
      // 사용자 정보 수정 로직 구현
      closeModal();
    };

    return {
      toggleReviewList,
      reviewListOpen,
      isModalOpen,
      openModal,
      closeModal,
      modifyUser,
      user,
    }
  }


}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

div {
  box-sizing: border-box;
}

/* alert badge */
.circle {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  background-color: #ff0000;
  position: absolute;
  top: -5px;
  left: 110%;
}

/* 녹색 텍스트 */
.green {
  color: #24855b;
}

.wrap {
  background-color: #F8F8F8;
}

/* 녹색배경 */
.greenContainer {
  height: 132px;
  background-color: #24855b;

  display: flex;
  align-items: flex-end;
  padding: 16px;
}

.greenContainer .grade {
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
}

.greenContainer .name {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
}

.greenContainer .modify {
  margin-left: auto;
}

/* 단골상점 , 상품후기 , 적립금 박스 */
.summaryContainer {
  background-color: white;
  display: flex;
  padding: 21px 16px;
  height: 90px;
  margin-bottom: 10px;
}

/* 단골상점 , 상품후기 , 적립금 */
.summaryContainer .item {
  flex-grow: 1
}

/* 녹색 숫자 */
.summaryContainer .number {
  font-size: 19px;
  font-weight: bold;
  color: #24855b;
}

/* 텍스트 */
.summaryContainer .item>div:nth-child(2) {
  font-size: 13px;
}

/* ================== 주문/배송조회 박스 시작 ==================== */
.shippingStatusContainer {
  padding: 21px 16px;
  background-color: white;
  margin-bottom: 10px;
}

/* 주문/배송조회 타이틀 */
.shippingStatusContainer .title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* 장바구니 결제완료 배송중 구매확정 [로우] */
.shippingStatusContainer .status {
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
}

/* 장바구니 결제완료 배송중 구매확정 [아이템]  */
.shippingStatusContainer .item {
  display: flex;
}

.shippingStatusContainer .number {
  font-size: 31px;
  font-weight: 500;
  text-align: center;
}

.shippingStatusContainer .text {
  font-size: 12px;
  font-weight: normal;
  color: #c2c2c2;
  text-align: center;
}

.shippingStatusContainer .icon {
  display: flex;
  align-items: center;
  padding: 20px;
  width: 16px;
  height: 16px;
}


/*=================== 주문목록 ~ 찜한상품 리스트 ==================*/
.listContainer {
  padding: 0;
  background-color: #ffffff;
  margin-bottom: 10px;
}

.listContainer .item {
  display: flex;
  align-items: center;
  padding: 16px;
  color: black;
  text-decoration: none;
  height: 56px;
  box-sizing: border-box;
}

.listContainer .icon {
  margin-right: 14px;
}

.listContainer .text {
  font-size: 16px;
  position: relative;
}

.listContainer .right {
  margin-left: auto;
}


/*=================== 내지갑의 보유 적립금 들어가는 부분 ================*/
.listContainer .smallLight {
  font-size: 14px;
  color: #c2c2c2;
}

.listContainer .smallLight>span {
  margin-left: 10px;
}

.listContainer .right .blct {
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
}



/* 공지사항 이용안내 고객센터 */
.infoContainer {
  background-color: white;
  display: flex;
  height: 100px;
  margin-bottom: 10px;
}

.infoContainer .item {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 13px;
  text-decoration: none;
  color: black;
}

.infoContainer .item>div:first-child {
  margin-bottom: 2px;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal-content {
  background-color: #fff;
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}


/*  */
</style>