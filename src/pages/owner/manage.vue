<template>
  <br><br>
<nav class="justify-content-center manage">
  <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist" style="width: 1200px; margin: 0 auto;">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">예약자 확인</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">나의 식당</button>
    <!-- <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">방문 상태 </button> -->
   
  </div>
</nav>
<div class="tab-content justify-content-center" id="nav-tabContent" >
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0" style="text-align: center;" >
    <br><br><br>
  
    <VDatePicker class="calendar" style="width: 700px;" @click="date" :attributes='attrs' v-model="minDate"/><br><br>
      <h4>예약자 목록</h4>
      <h4> {{ formatreserveDate }}</h4><br>
    <div v-if="memberList && memberList.length > 0">
              
              <table class="table table-bordered" style="width: 800px; margin: auto;" >
                <thead style="background-color: lightgray;">
                  <tr>
                  <th>이름</th>
                  <th>전화번호</th>
                  <th width="80px">예약인원</th>
                  <th>예약시간</th>
                  <th width="80px">방문상태</th>
                  <th width="120px">방문확정</th>
                </tr>
                </thead>
               <tbody v-for="member in memberList" :key="member.memberidx" >
                <tr>
                 
                  <td>{{ member.memberDTO.name }}</td>
                  <td>{{ member.memberDTO.phone }}</td>
                  <td>{{ member.resCount }}</td>
                  <td>{{ member.reserveDate.slice(14,19) }}</td>
                  <td>{{ member.visitStatus }}</td>
                  <td>
                    <button class="btn btn-info" @click="updateConfirm(member.reserveIdx,member.visitStatus)" v-if="member.visitStatus==='x'">방문확정</button>
                    <button class="btn btn-info disabled" v-if="member.visitStatus==='o'">방문확정</button>
                  </td>
                </tr>
              </tbody>
              </table>
            </div>
            <div v-else>
              <p>예약내역이 없습니다.</p>
            </div> 



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
    
      <!-- <div class="resmember">
        <h4>예약자 정보 확인 &nbsp;&nbsp;{{ formatreserveDate }}</h4><br>
        
       
               <div v-for="member in memberList" :key="member.memberDTO.memberidx" >
                    <div v-if="member.reserveDate && member.reserveDate.slice(0, 10)==formatreserveDate" >
              
                  <div class="card" style="width: 700px; margin: auto; text-align: left;">
                  
                  <div class="card-body">
                    <p class="card-text"><b>이름</b>&nbsp;&nbsp;&nbsp;{{ member.memberDTO.name }}</p>
                    <p class="card-text">
                      <b>전화번호</b>&nbsp;&nbsp;&nbsp;{{ member.memberDTO.phone }}
                    </p>                  
                    <p class="card-text">
                      <b>예약인원</b>&nbsp;&nbsp;&nbsp; {{ member.resCount }}
                    </p>
                    <p class="card-text">
                      <b>예약시간</b>&nbsp;&nbsp;&nbsp;{{ member.reserveDate.slice(14,19) }}
                    </p>
                    <p class="card-text">
                      <b>방문상태</b>&nbsp;&nbsp;&nbsp;{{ member.visitStatus }}
                      <button class="btn btn-info" style="float: right; color: white;">방문확정</button>
                    </p>
                    
                  </div>
                 
                </div>
                <br>

                  </div>
              </div> 
              
             
      </div> -->
       



            <br><br><br>
  
  <div class="uform-container editform">
    <div class="inform">
      <label style="float: left;"><b>식당 이름</b> </label><br> <input name="restaurantname" type="text" class="form-control restaurantname" v-model="restaurantName" required="required"/><br>
      <img src="@/assets/img/2.jpg" class="detailimg"><br><br> 
      <label style="float: left;"><b>메인 사진</b> </label><input class="form-control" type="file" id="formFile" name="upload" multiple="multiple"><br>
      <label style="float: left;"><b>메뉴</b> </label><br> <input name="menu" type="text" class="form-control menu" v-model="menu" required="required"/><br>
      <label style="float: left; margin-right: 10px;"><b>매장소개</b> </label>
      <textarea class="form-control" id="exampleFormControlTextarea1" name="restaurantinfo" style="width: 800px; height: 200px;"  v-model="restauranInfo" required="required"></textarea>
      <p></p>
    
      
    </div>
   
  </div>

  <div class="uform-container card detailform">
    <div class="inform card-body">
      <p style="text-align: left;"><b>식당 이름</b> <br> {{ restaurantName }}</p>
      <!-- <img src="@/assets/img/2.jpg" class="detailimg"><br><br> -->
    <b>메인 사진</b><img src=""><br><br>
     <br> <p style="text-align: left;"><b>메뉴</b><br> {{ menu }}</p>
     <p style="width: 300px; height: 200px;">  <b>매장소개</b><br>
     
      {{ restauranInfo }}</p>
    
      <button class="btn btn-info update" style="float: right;">수정하기</button>
    </div>
   
  </div>
  
  </div>
</div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { computed, ref, watch  } from 'vue';
import axios from 'axios';
import {useRoute, useRouter} from 'vue-router';
export default {

setup(){
  const isDisabled = ref(true);
  const minDate = ref(new Date());
  const reserveDate = ref(new Date());
  const formatreserveDate =ref('');
  const route = useRoute();
  const router=useRouter();
  const managerIdx=route.params.managerIdx;
  const restaurantName=ref('');
  const restauranInfo=ref('');
  const menu=ref('');
  const memberList=ref([]);
  const reservedDate=ref('');
  const memberListLength=ref('');
  const attrs = ref([]);
  const memberDateList=ref([]);
  const Swal = require('sweetalert2');
  
  

  
  const date = (context) => {
    console.log("context:"+context);
    console.log("예약날짜 : "+context.target.ariaLabel);
    if(context.target.ariaLabel==null){
      return;
    }
    const match = context.target.ariaLabel.match(/(\d+)년 (\d+)월 (\d+)일 (.+)/);
    // text.value=context.target.ariaLabel;
    
    const year = parseInt(match[1]);
    const month = parseInt(match[2]) - 1; // JavaScript에서 월은 0부터 시작하므로 1을 뺍니다.
    const day = parseInt(match[3]);
    // const dayOfWeek = match[4];
    const date = new Date(year, month, day);
    reserveDate.value=date;
    console.log("현재날짜 : "+reserveDate.value);
    // console.log(match.value);
    console.log("오늘:"+minDate.value)

    const reserveDateObj = new Date(reserveDate.value);
    const reserveYear = reserveDateObj.getFullYear();
    const reserveMonth = String(reserveDateObj.getMonth() + 1).padStart(2, '0');
    const reserveDay = String(reserveDateObj.getDate()).padStart(2, '0');
    const formattedReserveDate = `${reserveYear}-${reserveMonth}-${reserveDay}`;
    formatreserveDate.value = formattedReserveDate;
    console.log("예약날짜 : "+formatreserveDate.value);


    const getMemberlist = async() =>{
    
     const res = await axios.get(`/Catchvegan/manager/${managerIdx}?reserveDate=${formatreserveDate.value}`).then((inform)=>{
        console.log(inform);
        //  restaurantName.value=inform.data.restaurantDTO.name;  //식당이름
        //  restauranInfo.value=inform.data.restaurantDTO.restaurantInfo; //식당정보
        //  menu.value=inform.data.restaurantDTO.menu;  //메뉴
         memberList.value=inform.data.reservelist;
         memberListLength.value=inform.data.reservelist.length;
         console.log("길이:"+memberListLength.value);
          
      })
   };
   getMemberlist();


  
  
}
  

  const getRestaurant = async() =>{
    
    const res = await axios.get(`/Catchvegan/manager/${managerIdx}?reserveDate=${formatreserveDate.value}`).then((inform)=>{
       console.log(inform);
           
        restaurantName.value=inform.data.restaurantDTO.name;  //식당이름
        restauranInfo.value=inform.data.restaurantDTO.restaurantInfo; //식당정보
        menu.value=inform.data.restaurantDTO.menu;  //메뉴
        // memberListLength.value=inform.data.reservelist.length;
        reservedDate.value=inform.data.reserveDate;
        console.log(memberList.value);
        console.log("길이:"+memberListLength.value);
          // //멤버 리스트에서 날짜만 추출하여 배열에 담기
        //   if (inform.data.reservelist) {
        // memberDateList.value=inform.data.reservelist.map((member) => member.reserveDate.slice(0, 10));} 
        // console.log(memberDateList.value);
        
    })
  };
  getRestaurant();
  
  //방문상태 변경
  const updateConfirm=async(reserveIdx, visitStatus)=>{
    console.log("방문확정");
    await axios.put('/Catchvegan/manager/confirmstatus', {reserveIdx:reserveIdx, visitStatus:'o' })
    console.log(reserveIdx);
    Swal.fire({
          icon: 'success',
          title: '방문이 확정되었습니다.'     
            }).then((result) => {
        /* Read more about handling dismissals below */
        window.location.reload(true);
      })
    
  }


  
    // const getMemberlist = async() =>{
     
    //     const res = await axios.get(`/Catchvegan/manager/${managerIdx}`,{
    //       reserveDate : reservedDate.value
    //     }).then((inform)=>{

    //         // console.log(inform.data);
    //         // console.log(inform.data.reservelist[0].memberDTO.name);
    //         // console.log(inform.data.restaurantDTO.name);
    //         restaurantName.value=inform.data.restaurantDTO.name;  //식당이름
    //         restauranInfo.value=inform.data.restaurantDTO.restaurantInfo; //식당정보
    //         menu.value=inform.data.restaurantDTO.menu;  //메뉴
    //         //memberList.value=inform.data.reservelist[0].memberDTO;  //예약한 사람 리스트
    //         // console.log(inform.data.reservelist[0].memberDTO);
    //         // console.log("=========");
    //         // console.log(inform.data.reservelist);
    //         memberList.value=inform.data.reservelist;
    //         // console.log("reserveDate:"+inform.data.reservelist[0].reserveDate);
           
    //         for(let i=0;i<inform.data.reservelist.length;i++){
    //           // console.log("배열의예약데이트"+inform.data.reservelist[i].reserveDate);
    //           // console.log("오늘날짜:"+formatreserveDate.value);
    //               console.log( "예약리스트:"+memberList[i].value);
    //             if(inform.data.reservelist[i].reserveDate.slice(0, 10)==this.formatreserveDate){
    //               memberList.value=inform.data.reservelist[i];
    //             }
    //         }
    //         memberListLength.value=inform.data.reservelist.length;
    //         console.log(memberList.value);
    //         console.log("길이:"+memberListLength.value);
    //     })
    //   };
    //   getMemberlist();

    
  
  return{
    date,
    reserveDate,
    formatreserveDate,
    minDate,
    isDisabled,
    // getMemberlist,
    restaurantName,
    restauranInfo,
    menu,
    memberList,
    reservedDate,
    memberListLength,
    attrs,
    updateConfirm,

  }
},

}
</script>

<style>
button.nav-link{
  width: 300px;
}

.restaurantname{
  width: 300px;
  /* margin: auto; */
}

.menu{
  width: 500px;
}

.uform-container{
 margin: auto;
 width: 500px;

}

.inform{
  
  text-align: left; /* inform 내용을 왼쪽 정렬 */
 
}

.update{
  color: white;
}

</style>