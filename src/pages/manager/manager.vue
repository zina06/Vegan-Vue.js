<template>
  <br><br>
<nav class="justify-content-center manage">
  <div class="nav nav-tabs nav-tabs-custom justify-content-center" id="nav-tab" role="tablist" style="width: 1000px; margin: 0 auto;">
    <button class="nav-link active with-nav-tabs panel-success" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style="color: black;">예약자 관리</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" style="color: black;">식당 관리</button>
    <!-- <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">방문 상태 </button> -->
   
  </div>
</nav>
<div class="tab-content nav-tabs-custom justify-content-center" id="nav-tabContent" >
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0" style="text-align: center;" >
    <br><br><br>
  
    <VDatePicker class="calendar" style="width: 800px;" @click="date"  v-model="minDate" :height="600" :attributes="attributes"/><br><br>
      <h4>예약리스트</h4>
      <h4> {{ formatreserveDate }}</h4><br>
    <div v-if="memberList && memberList.length > 0">
              
               <table class="table table-bordered" style="width: 800px; margin: auto;" >
                <thead style="background-color: #F3F3F3;">
                  <tr>
                  <th>예약자</th>
                  <th>전화번호</th>
                  <th width="80px">예약인원</th>
                  <th>예약시간</th>
                  <th width="80px">방문상태</th>
                  <th width="120px"></th>
                </tr>
                </thead>
               <tbody v-for="member in memberList" :key="member.memberidx" >
                <tr>
                    
                  <td>{{ member.memberDTO.name }}</td>
                  <td>{{ member.memberDTO.phone }}</td>
                  <td>{{ member.resCount }}</td>
                  <td>{{ member.reserveDate.getHours() }}시 {{ member.reserveDate.getMinutes() }}분</td>
                  <td>{{ member.visitStatus }}</td>
                  <td>
                    <button class="btn btn-info" @click="updateConfirm(member.reserveIdx,member.visitStatus)" v-if="member.cancelStatus==='x' && member.visitStatus==='x'">방문확정</button>
                    <button class="btn btn-info disabled" v-if="member.visitStatus==='o'" style="color: white;">방문확정</button>
                    <button class="btn btn-danger disabled" v-if="member.cancelStatus==='o'">예약취소</button>
                   
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
  <!--수정폼-->
  <div class="uform-container editform card" v-if="isEditing">
    <div class="inform card-body">
     <label style="text-align: left;"><b>식당 이름</b> </label><br> <input name="name" type="text" class="form-control restaurantname" v-model="restaurantName" required="required"/><br>
      <label style="float: left;"><b>메인 사진</b> </label><input class="form-control" type="file"  multiple accept="image/*" ref="fileRef" name="file" @change="onChangeFile($event)"><br>
    
      <div class="images" v-if="images.length > 0">
       
        <!-- <div v-for="fileName in files" :key="fileName" class="image">
          <img :src="`@/assets/uploadimages/${fileName}`" alt="이미지" class="uploadimg">
        </div> -->
       
        <img :src="require(`../../assets/img/restaurant/${images}`)" alt="이미지" class="uploadimg">
      </div>
      <label style="float: left;"><b>메뉴</b> </label><br> <input name="menu" type="text" class="form-control menu" v-model="menu" required="required" style="width: 100%; height: 100px;"/><br>
      <label style="float: left;"><b>매장소개</b> </label><br>
      <textarea class="form-control" id="exampleFormControlTextarea1" name="restaurantinfo" style="width: 100%; height: 200px;"  v-model="restauranInfo" required="required"></textarea><br>
      <div style="margin: auto; width: 200px;">
      <button class="btn btn-info update"  v-if="isEditing" style="margin-right: 10px;" @click="uploadAPI()">저장하기</button>
      <button class="btn btn-secondary update" @click="isEditing = false" v-if="isEditing">취소하기</button>
      </div>
    </div>
   
  </div>

  <!--디테일폼-->
  <div class="uform-container card detailform" v-else>
    <div class="inform card-body">
      <p style="text-align: left;"><b>식당 이름</b> <br> {{ restaurantName }}</p>
    <b>메인 사진</b><br>
      
    <img :src="require(`../../assets/img/restaurant/${images}`)" alt="이미지" class="uploadimg">
    <div>
   
   </div>
     <br> <p style="text-align: left;"><b>메뉴</b><br> {{ menu }}</p>
     <p style="width: 300px; height: 200px;">  <b>매장소개</b><br>
     
      {{ restauranInfo }}</p>
    
      <button class="btn btn-secondary update" style="margin: auto; display: block;" @click="isEditing = true" v-if="!isEditing">수정하기</button>
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
  const showReserveDate=ref(new Date([]));
  const route = useRoute();
  const router=useRouter();
  const managerIdx=route.params.managerIdx;
  const restaurantDTO = ref({
    name: '',
    restauranInfo: '',
    menu: '',
    images : ''

  })
  const restaurantName=ref('');
  const restauranInfo=ref('');
  const menu=ref('');
  const memberList=ref([]);
  const reservedDate=ref('');
  const memberListLength=ref('');

  const memberDateList=ref([]);
  const Swal = require('sweetalert2');
  const isEditing=ref(false);
  const files = ref(null);
  const images=ref('');
  let file2 = null;
  const reserveDateDate = ref([]);
  const token = sessionStorage.getItem("token");
  const hasMemberIdx = sessionStorage.getItem('memberIdx');
  const hasManagerIdx = sessionStorage.getItem('managerIdx');
  const memberIdx = sessionStorage.getItem("memberIdx");

    const managercheck = async () => {
      if(hasMemberIdx != null){
        router.push({
          name:"Error"
        })} 
    };
    managercheck();

    const managercheck2 = async () => {
      if(hasManagerIdx != null){
        router.push({
          name:"Main"
        })} 
    };
    managercheck2();

      axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 403) {
        router.push({
          name:"Error"
        })
    }
    return Promise.reject(error);
  }
);


  // const backendUrl = process.env.VUE_APP_BACKEND_URL;
  const attributes = ref([
  {
    // Boolean
    dot: true,
    dates: [
      
    ],
}])


  const file = ref('')
  const onChangeFile=(e)=>{
    file.value = console.log(e.target.files[0])
    files.value = e.target.files[0];
    file2=e.target.files[0];
  }
//  const insertVisit = ref({
//       visitIdx: null,
//       reserveIdx:0 ,
//       price: 0,
//       design: 0,
//       delivery: 0,
//     });
  



      const uploadAPI = async () => {
       
      try {
        restaurantDTO.value={
          name:restaurantName.value,
          menu:menu.value,
          restauranInfo:restauranInfo.value,
          images : file.value
        }

        // 폼데이터 객체 생성
        const formData = new FormData();
        
        // file 추가
        
        formData.append('file', file2);
       
        console.log(files.value);

   

        // formData.append('restaurantDTO', blob);
        const blob = new Blob([JSON.stringify(restaurantDTO.value)], { type: 'application/json' });
        formData.append('restaurantDTO', blob, 'restaurantDTO.json');
        formData.append('managerIdx', managerIdx);
        // formData.append('name', restaurantName.value);
        // formData.append('menu', menu.value);
        // formData.append('restaurantInfo', restauranInfo.value);
        console.log(formData.get('restaurantDTO'));
        // Content-Type 지정
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };

       console.log("formData : " + formData.toString());
       console.log(formData.entries);
        const { data } = await axios.post('/file/update',formData,{
          headers : {
            'AUTHORIZATION': 'Bearer ' + token
          }
        });    
        // return data?.restaurantIdx;
      } catch (err) {
        console.log(err);
        router.push({
            name:"Main"
        })
        // console.log( "dto"+formData);
      }
    
        Swal.fire({
            icon: 'success',
            title: '수정이 완료되었습니다.'     
              }).then((result) => {
          /* Read more about handling dismissals below */
          window.location.reload(true);
        })
    };

    // const managercheck = async () => {
    //   const res = await axios.get(`/Catchvegan/manager/${managerIdx}`,{
    //     headers : {
    //       'AUTHORIZATION': 'Bearer ' + token
    //     }
    //   }).catch(()=>{
    //     if(hasMemberIdx != null || managerIdx != hasManagerIdx){
    //       router.push({
    //         name:"Error"
    //       })
    //     }
    //     else{
    //       router.push({
    //         name:"Main"
    //       })
    //     }
    //   });
    // }
    // managercheck(); 
    

  const date = (context) => {
    console.log("context:"+context);
    console.log("예약날짜 : "+context.target.ariaLabel);
    if(context.target.ariaLabel==null){
      return;
    }
    const match = context.target.ariaLabel.match(/(\d+)년 (\d+)월 (\d+)일 (.+)/);
   
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

    const getMemberlist = async() => {
     const res = await axios.get(`/Catchvegan/manager/${managerIdx}?reserveDate=${formatreserveDate.value}`,{
      headers : {
        'AUTHORIZATION': 'Bearer ' + token
        }
      }).then((inform)=>{ 
        //  restaurantName.value=inform.data.restaurantDTO.name;  //식당이름
        //  restauranInfo.value=inform.data.restaurantDTO.restaurantInfo; //식당정보
        //  menu.value=inform.data.restaurantDTO.menu;  //메뉴
         memberList.value=inform.data.reservelist;
         memberListLength.value=inform.data.reservelist.length;
         const array = [memberList.value.length];
         const dateArray=[];
         for(let i =0; i<memberListLength.value; i++){
            array[i] = new Date(memberList.value[i].reserveDate);
          //  attributes.value[0].dates.push(array[i]);
            memberList.value[i].reserveDate = array[i];
            
            
         } 
         console.log(memberList.value);
         console.log("reserveIdx:"+inform.data.reservelist[0].reserveIdx);
         console.log("길이:"+memberListLength.value);
         console.log("예약날짜dd : "+showReserveDate.value);
         if (inform.data.reservelist) {
        // memberDateList.value=inform.data.reservelist.map((member) =>  moment(member.reserveDate).format('YYYY-MM-DD'));
          console.log(memberDateList.value);
          // console.log(attributes.value[0].dates);
      } 
      
          
      })
      // .catch(()=>{
      //   router.push({
      //       name:"Error"
      //     })
      // })
   };
   getMemberlist();
   console.log(attributes.value[0].dates);


  
  
}
  

  const getRestaurant = async() =>{
    const res = await axios.get(`/Catchvegan/manager/${managerIdx}?reserveDate=${formatreserveDate.value}`,{
      headers : {
        'AUTHORIZATION': 'Bearer ' + token
      }
    }).then((inform)=>{
       console.log(inform.data);
        restaurantName.value=inform.data.restaurantDTO.name;  //식당이름
        restauranInfo.value=inform.data.restaurantDTO.restaurantInfo; //식당정보
        menu.value=inform.data.restaurantDTO.menu;  //메뉴
        // memberListLength.value=inform.data.reservelist.length;
        reservedDate.value=inform.data.reserveDate;
        console.log(memberList.value);
        console.log("길이:"+memberListLength.value);
        console.log("이미지파일"+inform.data.restaurantDTO.images);
        images.value=inform.data.restaurantDTO.images;
        console.log("이미지:"+images.value);
        const array = [inform.data.all.length];
        for(let i =0; i<inform.data.all.length; i++){
          array[i] = new Date(inform.data.all[i].reserveDate);
          inform.data.all[i].reserveDate = array[i];
          attributes.value[0].dates.push(inform.data.all[i].reserveDate);
        }
        console.log(attributes.value[0].dates);
          //멤버 리스트에서 날짜만 추출하여 배열에 담기
        //   if (inform.data.reservelist) {
        // memberDateList.value=inform.data.reservelist.map((member) => member.reserveDate);} 
        // console.log(memberDateList.value);
        
    })
    // .catch(()=>{
    //   router.push({
    //         name:"Error"
    //       })
    // })
  };
  getRestaurant();
  
  //방문상태 변경
  const updateConfirm=async(reserveIdx, visitStatus)=>{
    console.log("방문확정");
    await axios.put('/Catchvegan/manager/confirmStatus', {reserveIdx:reserveIdx, visitStatus:'o' },{
      headers : {
        'AUTHORIZATION': 'Bearer ' + token
      }
    }).then(()=>{
        const creatVisit=async()=>{
        await axios.post('/Catchvegan/manager/createVisit', {reserveIdx:reserveIdx},{
          headers : {
            'AUTHORIZATION': 'Bearer ' + token
          }
        
        })
        console.log("확인");
      }
      creatVisit();
    })
      // this.creatVisit();
    
    // .catch(()=>{
    //   router.push({
    //         name:"Error"
    //       })
    // })
    console.log(reserveIdx);
    Swal.fire({
          icon: 'success',
          title: '방문이 확정되었습니다.'     
            }).then((result) => {
        /* Read more about handling dismissals below */
        window.location.reload(true);
      })
    
  }




    
  
  return{
    onChangeFile,
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
    // attrs,
    updateConfirm,
    isEditing,
    files,
    // selectFile,
    images,
    uploadAPI,
    file,
    attributes
   
  }
},


}
</script>

<style>
.nav-tabs-custom .nav-link.active {
  background-color: #7fac7d;
  color: #fff;
}
button.nav-link{
  height: 55px;
  width: 500px;
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
 width: 800px;

}

.inform{
  
  text-align: left; /* inform 내용을 왼쪽 정렬 */
 
}

.update{
  color: white;
}

.uploadimg{
 max-width: 100%;
 max-height: 100%;
}
.vdp-datepicker {
  height: 600px;
}

.vc-week{
  height: 70px;
}
</style>