<template>
  
  <br>
  
  <br>
    <div class="detail-container">
      <div class="detail">
      
        <img src="@/assets/img/2.jpg" class="detailimg"><br><br>
        <h3 class="restaurantName"><b>{{restaurantName}}</b>
        </h3> &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-info gotoreserve" @click="moveReservePage(idx)">예약하기</button>
        <br><br>
            <p><b>매장소개</b> <br> {{ restauranInfo }}</p>
            <p><b>비건유형</b> <br> {{ restauranVeganType }}</p>
            <p><b>메뉴</b> <br> {{ restauranMenu }}</p>
        <hr><br>

        <div>
            <div id="map"></div>
            
        </div>
         <br> 
        <div @click="goToKakaoMap" class="btn btn-success goToKakaoMap">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"/>
          </svg><br>길찾기
          
        </div>
      
      
      </div>

    <hr><br><br>
  </div>
        <div class="review">
          <div>
            <h4>n건의 리뷰</h4><br>
            <p>총 별점 &nbsp;&nbsp;별</p>
          </div>
        </div>
      

    
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
import axios from 'axios';
import {useRoute, useRouter} from 'vue-router';
import {ref} from 'vue';

export default {
  name: "KakaoMap",
  data () {
    const router=useRouter();
    const route = useRoute();
    const restaurantName=ref('');
    const restauranInfo=ref('');
    const restauranImg=ref('');
    const restauranVeganType=ref('');
    const restauranMenu=ref('');
    const longitude=ref(0);
    const latitude=ref(0);
    const restaurantIdx=route.params.restaurantIdx;



    const getRestaurant = async() =>{
			
			const res = await axios.get(`/Catchvegan/reserve/${restaurantIdx}`).then((Restaurant)=>{
		
			
				//console.log(Restaurant.data);

        restaurantName.value=Restaurant.data.name;
        restauranInfo.value=Restaurant.data.restaurantInfo;
        restauranImg.value=Restaurant.data.images;
        restauranVeganType.value=Restaurant.data.veganType;
        restauranMenu.value=Restaurant.data.menu;
				longitude.value=Restaurant.data.longitude;
        latitude.value=Restaurant.data.latitude;
        console.log(longitude);
        console.log(latitude);


			})
		};
		getRestaurant();
    // const img_icon = ref(require(""))
    

    const moveReservePage = (restaurantIdx) => {
      router.push({
          name : "Reserve",
          params : {
            idx : restaurantIdx,
          }
      });
    }

    return {

      getRestaurant,
      restaurantName,
      restauranInfo,
      restauranImg,
      restauranVeganType,
      restauranMenu,
      longitude,
      latitude,
      moveReservePage
    };
  },
 
  mounted() {
   
    if(!window.kakao || !window.kakao.maps){
      const script = document.createElement("script");
      script.type='text/javascript'
      script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ffdfa4b0a9f56ac90671c2cbb5d5fc4e";
      /* global kakao */
      script.addEventListener('load',()=>{
          kakao.maps.load(()=>{
            this.initMap();
            // this.loadMarker();
        //    console.log("카카오맵확인1");
        });
      });
      document.head.appendChild(script);
     
    }else{
     
      this.initMap();
      // this.loadMarker();
    //  console.log("카카오맵확인2");
     
    }
  },
  methods: {
    initMap() {
    

      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng( this.longitude,this.latitude ),
        level: 3,
      };
      console.log("받아온 값: "+this.longitude, this.latitude);
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
      console.log("지도뜨기");
      this.loadMarker();
    },
    loadMarker(){
     

      const markerPosition=new window.kakao.maps.LatLng(
        this.longitude, this.latitude 
      );

      const marker=new window.kakao.maps.Marker({
        position:markerPosition,
      });

      marker.setMap(this.map);

      console.log("마커뜨기");
    },
    goToKakaoMap() {
     
      const url = `https://map.kakao.com/link/to/${this.restaurantName},${this.longitude},${this.latitude}`;
      window.open(url);
    }
  },
  
};

</script> 



<style>
 .review, .detail-container, .review-container {
  display: flex; /* Flexbox를 사용 */
  justify-content: left; /* 가로 중앙 정렬 */
  align-items: left; /* 세로 중앙 정렬 */


}
.detailimg{
  width: 800px;
  height: 400px;
}

.review-container{
  width: 650px;
  height: 200px;
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

#map{
  width:450px; 
  height: 300px;
  float: left;
  margin-left: 40px;
}
.detail,  .review-container, .review{
  
  margin: auto;
}

.goToKakaoMap{
 margin-left: 50px;
 margin-top: 100px;
 border: 1px solid #8c8c8c;
 border-radius: 100%;
 background:#8c8c8c;

}

.goToKakaoMap:hover{
  background:#828282;
  border: 1px solid #828282;

}

.restaurantName{
  float: left;
}

.gotoreserve, .gotoreserve:hover{
  color: white;

}


</style>