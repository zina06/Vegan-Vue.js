<template>
  
  <br>
  <h4><b>식당이름</b></h4>
  <br>
    <div class="detail-container">
      <div>
      
        <img src="@/assets/img/2.jpg" class="detailimg"><br><br>
        <p>이 식당은 맛있는 음식과 분위기로 유명합니다. 메뉴에는 다양한 요리가 있으며, 특히 스테이크와 와인이 유명합니다.</p>
        <hr>
      
        <div>
          <div id="map" ref="map"></div>
          <div class="button-group">
           
            <button @click="changeSize(400)">show</button>
            <button @click="displayMarker(markerPositions1)">marker set 1</button>
            <button @click="displayMarker(markerPositions2)">marker set 2</button>
            <button @click="displayMarker([])">marker set 3 (empty)</button>
            <button @click="displayInfoWindow">infowindow</button>
          </div>
        </div>
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
  name: "KakaoMap",
  setup() {
    return {
      markerPositions1: [
        [33.452278, 126.567803],
        [33.452671, 126.574792],
        [33.451744, 126.572441],
      ],
      markerPositions2: [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912],
      ],
      markers: [],
      infowindow: null,
    };
  },
  mounted() {
    
    if (window.kakao && window.kakao.maps) {
      this.initMap();
      this.changeSize(400);
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ffdfa4b0a9f56ac90671c2cbb5d5fc4e";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
    displayInfoWindow() {
      if (this.infowindow && this.infowindow.getMap()) {
        //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
        this.map.setCenter(this.infowindow.getPosition());
        return;
      }

      var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      this.infowindow = new kakao.maps.InfoWindow({
        map: this.map, // 인포윈도우가 표시될 지도
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      this.map.setCenter(iwPosition);
    },
  },
  
};

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