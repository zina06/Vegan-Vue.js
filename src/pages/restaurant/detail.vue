<template>
  
  <br>
  
  <br>
    <div class="detail-container">
      <div>
      
        <img src="@/assets/img/2.jpg" class="detailimg"><br><br>
        <h4><b>{{restaurantName}}</b>
        </h4>
        <br>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>&nbsp;&nbsp;{{ restauranInfo }}</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>&nbsp;&nbsp;{{ restauranVeganType }}</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
              <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
            </svg>&nbsp;&nbsp;{{ restauranMenu }}</p><br>
        <hr>

        <div>
            <div id="map"></div>
            
        </div>
         <br> 
        <button @click="goToKakaoMap" class="btn btn-secondary">길찾기
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"/>
          </svg>
        </button>
      
      
      </div>

    <hr>
  </div>
    <h4 class="review">n건의 리뷰</h4><br>
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
    



    return {

      getRestaurant,
      restaurantName,
      restauranInfo,
      restauranImg,
      restauranVeganType,
      restauranMenu,
      longitude,
      latitude
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
  margin-left: 500px;
}
.detailimg{
  width: 650px;
  height: 350px;
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

#map{
  width:450px; 
  height: 400px;
}
</style>