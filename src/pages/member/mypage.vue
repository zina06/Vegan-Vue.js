<template>
  <div class="wrap">
    <div class="summaryContainer">
      <img src="@/assets/img/userimg.png" style="justify-content: center; width: 70px; height: 70px; margin-right: 20px;">
      <div class="item">
        <div class="number">{{ user.name }}</div>
        <div>이름</div>
      </div>
      <div class="item">
        <div class="number">{{ user.veganType }}</div>
        <div>유형</div>
      </div>
      <div class="item">
        <div class="number">{{ user.email }}</div>
        <div>이메일</div>
      </div>
      <div class="item">
        <div class="number">{{ user.phone }}</div>
        <div>전화번호</div>
      </div>
      <div class="item">
        <button type="button" @click="openModal">수정하기</button>
      </div>
    </div>
    <ul class="nav nav-tabs justify-content-center nav-tabs-custom" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
          role="tab" aria-controls="home-tab-pane" aria-selected="true"
          style="color:black; margin-left: 10px; width: 200px;" @click="toggleReviewList">리뷰 목록</button>
      </li>
    </ul>
    <br>
    <div v-if="reviewListOpen" class="tab-pane fade show active" id="nav-home" role="tabpanel"
      aria-labelledby="nav-home-tab" tabindex="0" style="text-align: center;">
      <div class="review-list">
        <h4 style="text-align: center;"><b>{{ reviews.length }}개의 리뷰</b></h4>
        <ul class="ulrow">
          <li v-for="review in reviews" :key="review.reviewIdx">
            <div class="review-item" v-if="review.reviewIdx">
              <div class="image-wrapper">
                <img :src="require(`../../assets/img/reviewimg/${review.images}`)" alt="review-image" class="review-image">
                <div >{{ review.title }}</div>
              </div>
              
              <div class="review-content">
                <div>
                  <h4><b>제목 : {{ review.title }}</b></h4>
                </div>
                <br>
                <div>내용 : {{ review.content }}</div>
                <span>
                  <svg v-for="i in review.rating" :key="i" fill="#FFDC3C" width="1em" height="1em"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <defs>
                      <path id="star-path-10"
                        d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z">
                      </path>
                      <clipPath id="star-clip-10">
                        <rect x="0" y="0" width="24" height="24"></rect>
                      </clipPath>
                    </defs>
                    <use xlink:href="#star-path-10" fill="#DBDBDB"></use>
                    <use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use>
                  </svg>
                  <svg v-for="i in 5 - review.rating" :key="i" fill="#FFDC3C" width="1em" height="1em"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <defs>
                      <path id="star-path-19"
                        d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z">
                      </path>
                      <clipPath id="star-clip-19">
                        <rect x="0" y="0" width="0" height="24"></rect>
                      </clipPath>
                    </defs>
                    <use xlink:href="#star-path-19" fill="#DBDBDB"></use>
                    <use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use>
                  </svg>
                </span>
              </div>
              <div class="review-action">
                <button type="button" class="delete-button" @click="deleteReview(review.reviewIdx)">리뷰 삭제</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="summaryContainer de">
        <button type="button" class="deletebutton" @click.prevent="RemoveMember()">회원 탈퇴하기</button>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
export default {
  setup() {
    const memberIdx = sessionStorage.getItem("memberIdx");
    const reviewListOpen = ref(false);
    const toggleReviewList = () => {
      reviewListOpen.value = !reviewListOpen.value;
      console.log(reviewListOpen.value);
    }
    const Swal = require('sweetalert2');
    const isModalOpen = ref(false);
    const router = useRouter();
    const token = sessionStorage.getItem("token");
    const errorcheck = async () => {
      if(token == null){
        router.push({
          name:"Main"
        });
      }
    };
    errorcheck(); 
    //회원정보 수정창
    const openModal = () => {
      isModalOpen.value = true;
      let curretnId = user.value.id;
      let currentPassword = user.value.password; //기존 비밀번호
      let phone = user.value.phone; // 기존 전화번호
      let email = user.value.email;
      let veganType = user.value.veganType; // 기존 비건 유형

      console.log(currentPassword);
      console.log(phone);
      console.log(email);
      console.log(veganType);
      Swal.fire({
        title: '회원 정보 수정',
        html:
          `
          <input id="id" value =${curretnId} hidden>
          <input id="password" class="swal2-input" type="password">
          <div>비밀번호</div>
          <input id="phone" class="swal2-input" type="tel" value=${phone}>
          <div>전화번호</div>
          <input id="email" class="swal2-input" type="email" value=${email}>
          <div>이메일</div>
          <select id="vegan-type" class="swal2-input" defaultValue=${veganType}>
              <option value="lacto">비건 (Lacto Vegan)</option>
              <option value="lacto">락토 (Lacto Vegan)</option>
              <option value="ovo">오보 (Ovo-Vegetarian)</option>
              <option value="lacovo">락토 오보 (Lacto-ovo Vegetarian)</option>
              <option value="pesco">페스코 (Pesco-Vegetarian)</option>
              <option value="pollo">폴로 (Pollo-Vegetarian)</option>
              <option value="flexi">플렉시테리언 (Flexitarian)</option>
              <option value="other">기타</option>
          </select>
          <div>비건 유형</div>`,
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
          const id = document.getElementById('id').value;
          const password = document.getElementById('password').value;
          const phone = document.getElementById('phone').value;
          const email = document.getElementById('email').value;
          const veganType = document.getElementById('vegan-type').value;

          if (!password || password === currentPassword) {
            Swal.showValidationMessage('수정된 비밀번호를 입력해주세요');
            return false;
          }


          return {
            id,
            password,
            phone,
            email,
            veganType
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // 수정사항 저장
          modifyUser(result.value);
        }
        isModalOpen.value = false;
      });
    };

    //수정 post
    const modifyUser = async (formData) => {
      try {
        formData.memberIdx = memberIdx; // memberIdx 추가
        const response = await axios.put(`/Catchvegan/member/mypage`, formData,{
          headers : {
            'AUTHORIZATION': 'Bearer ' + token
          }
        });
        if (response.status == 201) {
          alert("비밀번호똑같아서못바꿈")
        }
        console.log('수정된 데이터:', formData);
        console.log('서버의 응답:', response);
      } catch (error) {
        console.error(error);
      }
    };

    //리뷰,멤버정보 불러오기
    const reviews = ref([]);
    const user = ref([]);
    const getReviews = async () => {
      const res = await axios.get(`/Catchvegan/member/mypage/${memberIdx}`,{
        headers : {
          'AUTHORIZATION': 'Bearer ' + token
        }
      });
      reviews.value = res.data[0].reviewDTOList;
      user.value = res.data[0];
      console.log(res.data[0]);
      console.log(res.data[0].reviewDTOList);
      console.log(user.value);
      console.log(reviews.value);
      console.log(reviews.value);

    }
    getReviews();

    //리뷰삭제
    const deleteReview = (idx) => {
      console.log(idx);
      const reviewIdx = idx;
      const remove = async () => {
        const res = await axios.delete(`/Catchvegan/review/${reviewIdx}`,{
          headers : {
            'AUTHORIZATION': 'Bearer ' + token
          }
        });
        console.log(res);
        if (res.status === 200) { // 삭제에 성공한 경우
          Swal.fire('삭제 완료', '', 'success').then(() => {
            window.location.reload();
          }); // SweetAlert로 삭제 완료 메시지를 띄운 후 새로고침
        }
      }
      remove();
    }

    return {
      toggleReviewList,
      reviewListOpen,
      isModalOpen,
      openModal,
      modifyUser,
      user,
      reviews,
      deleteReview,
    }
  }


}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

.summaryContainer.de {
  position: relative;
  width: 200px;
  height: 100px;
}

.deletebutton {
  font-size: 12px;
  padding: 3px 6px;
  position: absolute;
  bottom: 0;
  right: 0;
}
div {
  box-sizing: border-box;
}

.rating .fa {
  color: #ccc;
}

.rating .fa.checked {
  color: orange;
}

.rating .fa.half-checked:before {
  content: '\f089';
  position: absolute;
  color: orange;
  width: 50%;
  overflow: hidden;
}

.ulrow {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.review-list {
  overflow-y: scroll;
  height: 500px;
  width: 100%;
}

.review-item {
  border: 1px solid lightgray;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 200px;
  margin: 20px;
  overflow: hidden;
  width: 800px;
  background-color: white;
}

.review-item>div {
  padding: 10px;
  font-size: 16px;
}

.image-wrapper {
  position: relative;
  width: 150px;
}

.review-image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.review-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
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
  margin-top: 50px;
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
  margin: auto;
  margin-bottom: 50px;
  width: 1200px;

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


button[type="button"],
button[type="submit"] {
  width: 100%;
  padding: 0.5rem;
  border-radius: 3px #7fac7d;
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
}


/*  */
</style>