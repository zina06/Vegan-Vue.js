<template>
  <br><br>
<nav class="justify-content-center manage">
  <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist" style="width: 1200px; margin: 0 auto;">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">식당 정보 수정</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">예약자 확인</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">방문 상태 </button>
   
  </div>
</nav>
<div class="tab-content  justify-content-center" id="nav-tabContent" >
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0" style="text-align: center;" >
    <br><br>
  <h4><b>식당이름</b></h4>
  <br>
    <div class="detail-container">
      <div>
      
        <img src="@/assets/img/2.jpg" class="detailimg"><br><br>
        <p>이 식당은 맛있는 음식과 분위기로 유명합니다. 메뉴에는 다양한 요리가 있으며, 특히 스테이크와 와인이 유명합니다.</p>
      
        
      </div>
     
  </div>
  <button class="btn btn-info">수정하기</button>
<!-- <table class="table table" style="width: 800px;">
	<tr>
		<td>	
	
			<div class="mb-3" style="padding-top: 10px;">
		  <input class="form-control" id="exampleFormControlInput1" name="subject" placeholder="제목을 입력해주세요">
		  	</div>
		  	<div class="mb-3">
		 	<input class="form-control" type="file" id="formFile" name="upload" multiple="multiple">
		  	</div>
		   <div class="mb-3" style="padding-top: 10px;">
		   <textarea class="form-control" id="exampleFormControlTextarea1" name="content" style="width: 800px; height: 300px;" placeholder="내용을 입력하세요"></textarea>
		</div>

		</td>
	</tr>
	
	<tr>
		<td>
			<button type="submit">등록</button>
			<button type="button" onclick="location.href='list'">목록</button>
		</td>
	</tr>

</table> -->

  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0" style="text-align: center;">
    <br><br>
    
      <!-- <VCalendar /> -->
      <VDatePicker :minDate="minDate" class="calendar" style="width: 700px;" @click="date" :disabled="isDisabled"/><br><br>
      <div class="resmember">
        예약자 정보 확인<br>
        {{ text }}
      </div>

  
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0" style="text-align: center;">

  </div>
 
</div>
</template>

<script>
import { ref } from 'vue';
export default {

setup(){
  const isDisabled = ref(true);
  const minDate = ref(new Date());
  const reserveDate = ref(new Date());
  const text =ref('');
  const date = (context) => {
    console.log(context);
    console.log("예약날짜 : "+context.target.ariaLabel);
    if(context.target.ariaLabel==null){
      return;
    }
    const match = context.target.ariaLabel.match(/(\d+)년 (\d+)월 (\d+)일 (.+)/);
    text.value=context.target.ariaLabel;
    
    const year = parseInt(match[1]);
    const month = parseInt(match[2]) - 1; // JavaScript에서 월은 0부터 시작하므로 1을 뺍니다.
    const day = parseInt(match[3]);
    // const dayOfWeek = match[4];
    const date = new Date(year, month, day);
    reserveDate.value=date;
    console.log(reserveDate.value);
    console.log(match.value);
  }
  return{
    date,
    reserveDate,
    text,
    minDate,
    isDisabled
  }
}
}
</script>

<style>
button.nav-link{
  width: 200px;
}



</style>