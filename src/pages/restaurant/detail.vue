<template>
  <br>
  <h4><b>식당이름</b></h4>
  <br>
    <div class="detail-container">
      <div>
      
        <img src="@/assets/img/2.jpg" class="detailimg"><br><br>
        <p>이 식당은 맛있는 음식과 분위기로 유명합니다. 메뉴에는 다양한 요리가 있으며, 특히 스테이크와 와인이 유명합니다.</p>
        <hr>
        
      </div>

    <hr>
  </div>
    <h4>n건의 리뷰</h4><br>
    <span class="detail-container">총 별점 &nbsp;&nbsp;별
    
    </span>
    <div class="review-container">
      
      <hr>
      <img src="@/assets/img/userimg.png" id="memberimg">
      
        <div class="content">
          회원이름 <br>
          별점    날짜<br><br>
          <p>내용</p>
        </div>
      
    </div>

  
  
</template>

<script>
export default {

}
</script>

<style>
h4, .detail-container, .review-container {
  display: flex; /* Flexbox를 사용 */
  justify-content: left; /* 가로 중앙 정렬 */
  align-items: left; /* 세로 중앙 정렬 */
  margin-left: 500px;
}
.detailimg{
  width: 450px;
  height: 250px;
}

.review-container{
  width: 650px;
  height: 300px;
  border: 1px solid lightgray;
  
}

#memberimg{
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: 23px;
}

.content{
  margin-top: 30px;
}
</style>