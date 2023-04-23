<template>
  
  <br><br>
  
  <br>
    <div class="detail-container">
      <div class="detail" style="width: 800px;">
     
      
       
          <img :src="require(`@/assets/img/restaurant/${restauranImg}`)" alt="이미지" class="uploadimg" style="width: 100%; height: 500px; margin-bottom: 30px;"><br>
          <h3 class="restaurantName"><b>{{restaurantName}}</b>
          </h3> &nbsp;&nbsp;&nbsp;&nbsp;
     
        <button class="btn btn-info gotoreserve" @click="moveReservePage(idx)" style="margin-bottom: 10px;">예약하기</button>
       
        <h5> <p class="badge">{{ restauranVeganType }} </p></h5>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
              </svg> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
              </svg>
              서울시 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
              </svg>
              {{ city }}</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
              <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
            </svg>&nbsp;&nbsp;{{ restauranInfo }}</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>&nbsp;&nbsp;{{ address }}</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>&nbsp;&nbsp;{{ restaurantPhone }}</p>
           
          <hr>
          
           <b>대표메뉴</b> <br><br>
            
            <span v-for="(item, index) in restauranMenu" :key="index">
              {{ item }}<br>
            </span>
        <hr><br>

        <div>
            <div id="map"></div>
            <div @click="goToKakaoMap" class="btn btn-success goToKakaoMap">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"/>
          </svg><br>길찾기
        </div>
        </div>
        <hr style="width:100%; margin-top: 200px;" class="gubun">
        <h4><b>리뷰 {{reviewCount}}</b></h4>
        <div style="background: #F3F3F3; border: 1px solid #F3F3F3; width:100%;height: 100px; border-radius: 0.5rem;">
         <p style="font-size: 1.8em; padding-top: 25px; padding-left: 30px; text-align: center;"  v-if="reviewCount!=0"><b>{{ averageRating.toFixed(1) }} </b></p> 
         <p style="font-size: 1.5em; padding-top: 25px; padding-left: 30px; text-align: center;"  v-else><b>등록된 리뷰가 없습니다.</b></p>
        </div> 
       
        
            <div class="rereview" v-if="reviewCount!=0">
           
             <br>
              <div  v-for="review in reviewList" :key="review.reviewidx" style="height: auto;">
                
                <img src="@/assets/img/userimg.png" id="memberimg" style="float:left;">
              <span>{{ review.memberDTO.name }}</span><br>
              <span>
                <span>
                  <svg v-for="i in review.rating" :key="i" fill="#FFDC3C" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                  <svg v-for="i in 5-review.rating" :key="i" fill="#FFDC3C" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                </span>

              
                </span><br><br>
              <img :src="require(`@/assets/uploadimages/${review.images}`)" style="max-width: 600px; max-height: 200px;">
              <p><b>{{ review.title }}</b></p>
              <p>{{ review.content }}</p>
              <hr>
            </div>
            </div>
          
       
       
        <div>
           
           
          
            
        </div>
      </div>
  </div>

  
</template>

 <script>
import axios from 'axios';
import {useRoute, useRouter} from 'vue-router';
import {onMounted, ref} from 'vue';
import { useSearch } from "@/stores/search";

export default {
  name: "KakaoMap",
  setup () {
    const router=useRouter();
    const route = useRoute();
    const restaurantName=ref('');
    const restauranInfo=ref('');
    const restauranImg=ref('');
    const restauranVeganType=ref('');
    const restauranMenu=ref('');
    const longitude=ref('');
    const latitude=ref('');
    const address=ref('');
    const reviewList=ref('');
    const reviewCount=ref(0);
    const averageRating=ref(0);
    const restaurantIdx=route.params.restaurantIdx;
    const restaurantPhone=ref('');
    const map=ref('');
    const city=ref('');
    

    

    const getRestaurant = async() =>{
			
			const res = await axios.get(`/Catchvegan/restaurant/get/${restaurantIdx}`).then((Restaurant)=>{
		
        console.log("정보 받아오기");
				console.log(Restaurant.data);
      

        restaurantName.value=Restaurant.data.detail.name;
        restauranInfo.value=Restaurant.data.detail.restaurantInfo;
        restauranImg.value=Restaurant.data.detail.images;
        restauranVeganType.value=Restaurant.data.detail.veganType;
        restauranMenu.value=Restaurant.data.detail.menu;
        address.value=Restaurant.data.detail.address;
				longitude.value=Restaurant.data.detail.longitude;
        latitude.value=Restaurant.data.detail.latitude;
        restaurantPhone.value=Restaurant.data.detail.restaurantPhone;
        city.value=Restaurant.data.detail.city;
        
        console.log(longitude);
        console.log(latitude);
        console.log(restauranVeganType.value);
        reviewList.value=Restaurant.data.review;
        console.log(reviewList.value);
        reviewCount.value=Restaurant.data.review.length;
       
        let totalRating = 0;

        // 리뷰 평점 총합 계산
        for (let i = 0; i < reviewCount.value; i++) {
          totalRating += reviewList.value[i].rating;
        }

        // 평균 리뷰 평점 계산
        averageRating.value = totalRating / reviewCount.value;

        

        const menuArray = Restaurant.data.detail.menu;
        restauranMenu.value = menuArray.split('원,');
        
        
        for (let i=0; i< restauranMenu.value.length; i++)
        {
          if (i !== restauranMenu.value.length - 1)
            restauranMenu.value[i] += '원';
        }
        console.log(restauranMenu.value);
       })

      //  const ratingFrequency = [0, 0, 0, 0, 0];
     

          
    };
   
    const initMap=()=> {
    
        

      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(  latitude.value,longitude.value ),
        level: 3,
      };
      console.log("받아온 값: "+  latitude.value,longitude.value);
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      map.value = new kakao.maps.Map(container, options);
      console.log("지도뜨기");
      loadMarker();
      
    }

      const loadMarker=()=>{
     

      const markerPosition=new window.kakao.maps.LatLng(
        latitude.value,longitude.value
      );

      const marker=new window.kakao.maps.Marker({
        position:markerPosition,
      });

      marker.setMap( map.value);

      console.log("마커뜨기");
    }
    
  

    const moveReservePage = () => {
      router.push({
          name : "Reserve",
          params : {
            restaurantIdx : restaurantIdx,
          }
      });
    }

       const goToKakaoMap=()=> {
     
      const url = `https://map.kakao.com/link/to/${restaurantName.value},${latitude.value},${longitude.value}`;
      window.open(url);
    }
  
    Promise.resolve(getRestaurant()).then(() =>{initMap()})
   
    
    onMounted(() => {
      
      getRestaurant();

      if(!window.kakao || !window.kakao.maps){

      const script = document.createElement("script");
      script.type='text/javascript'
      script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ffdfa4b0a9f56ac90671c2cbb5d5fc4e";
      /* global kakao */
      script.addEventListener('load',()=>{
        //getRestaurant();
          kakao.maps.load(()=>{
       
          initMap();
          
            // this.loadMarker();
           console.log("카카오맵확인1");
         
        });
        
      });
      document.head.appendChild(script);
     
    }else{
   
      initMap();
   
      
     // this.loadMarker();
   //  console.log("카카오맵확인2");
    
   }
   
    });
    
    return {

      getRestaurant,
      restaurantName,
      restauranInfo,
      restauranImg,
      restauranVeganType,
      restauranMenu,
      longitude,
      latitude,
      moveReservePage,
      address,
      reviewList,
      reviewCount,
      averageRating,
      restaurantPhone,
      initMap,
      loadMarker,
      goToKakaoMap,
      city
    };
  },
 

  
};

</script> 



<style>

 .review, .detail-container, .review-container {
  display: flex; /* Flexbox를 사용 */
  justify-content: left; /* 가로 중앙 정렬 */
  align-items: left; /* 세로 중앙 정렬 */
  width: 900px;
  margin: auto;

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

.review{
  width: 650px;
}

#memberimg{
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-right: 10px;
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
 margin-left: 100px;
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

.rereview{
 height: auto;
}

li {
  list-style-type: none;
}

.badge{
  background: #e0e0e0;
  color: black;
  font-weight: lighter;
}
</style>