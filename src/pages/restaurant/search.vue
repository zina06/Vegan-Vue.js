<template>
  <div class="search-container" style="width: 2000px">
    <div class="search" style="border: 4px solid #808080; border-radius: 1%">
      <input
        type="text"
        placeholder="search"
        style="height: 8%; font-size: medium"
      />
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
        id="searchimg"
        style="float: left; height: 4%; width: 4%"
      />
      <!-- 검색 창   -->
      <div style="height: 65px; padding-bottom: 1%; background-color: #808080">
        <div class="icon-box" style="margin-bottom: 5px">
          <img
            src="@/assets/img/vegun-icon/vegetable.png"
            height="40px"
            alt="Image"
            style="
              float: left;
              border-radius: 5%;
              margin-left: 2%;
              margin-top: 3%;
            "
          />
          <div class="form-check" style="margin-top: 6%; float: left">
            <input
              class="form-check-input"
              type="checkbox"
              style="margin-top: 7px; margin-right: 3px"
              value=""
              id="flexCheckVegetable"
            />
            <label class="form-check-label" for="flexCheckVegetable">
              채소
            </label>
          </div>
        </div>

        <div class="icon-box" style="margin-bottom: 5px">
          <img
            src="@/assets/img/vegun-icon/milk.png"
            height="40px%"
            alt="Image"
            style="
              float: left;
              border-radius: 5%;
              margin-left: 2%;
              margin-top: 3%;
            "
          />
          <div class="form-check" style="margin-top: 6%; float: left">
            <input
              class="form-check-input"
              type="checkbox"
              style="margin-top: 7px; margin-right: 3px"
              value=""
              id="flexCheckMilk"
            />
            <label class="form-check-label" for="flexCheckMilk"> 우유 </label>
          </div>
        </div>

        <div class="icon-box" style="margin-bottom: 5px">
          <img
            src="@/assets/img/vegun-icon/egg.png"
            height="40px%"
            alt="Image"
            style="
              float: left;
              border-radius: 5%;
              margin-left: 2%;
              margin-top: 3%;
            "
          />
          <div class="form-check" style="margin-top: 6%; float: left">
            <input
              class="form-check-input"
              type="checkbox"
              style="margin-top: 7px; margin-right: 3px"
              value=""
              id="flexCheckEgg"
            />
            <label class="form-check-label" for="flexCheckEgg"> 계란 </label>
          </div>
        </div>

        <div class="icon-box" style="margin-bottom: 5px">
          <img
            src="@/assets/img/vegun-icon/fish.png"
            height="40px%"
            alt="Image"
            style="
              float: left;
              border-radius: 5%;
              margin-left: 2%;
              margin-top: 3%;
            "
          />
          <div class="form-check" style="margin-top: 6%; float: left">
            <input
              class="form-check-input"
              type="checkbox"
              style="margin-top: 7px; margin-right: 3px"
              value=""
              id="flexCheckFish"
            />
            <label class="form-check-label" for="flexCheckFish"> 생선 </label>
          </div>
        </div>
      </div>
      <!-- 조건 검색창 END -->

      <div class="container" style="height: 400px; font-size: small">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div
              class="card shadow-sm"
              style="
                height: 130px;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="width: 130px; height: 70%; border-radius: 10%"
                src="@/assets/img/product-1.jpg"
                alt=""
              />
              <div style="width: 130px; height: 40%; margin: auto">
                방울토마토
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card shadow-sm"
              style="
                height: 130px;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="width: 130px; height: 70%; border-radius: 10%"
                src="@/assets/img/product-2.jpg"
                alt=""
              />
              <div style="width: 130px; height: 40%; margin: auto">
                파인애플
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card shadow-sm"
              style="
                height: 130px;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="width: 130px; height: 70%; border-radius: 10%"
                src="@/assets/img/product-3.jpg"
                alt=""
              />
              <div style="width: 130px; height: 40%; margin: auto">고추</div>
            </div>
          </div>
          <div class="col">
            <div
              class="card shadow-sm"
              style="
                height: 130px;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="width: 130px; height: 70%; border-radius: 10%"
                src="@/assets/img/product-4.jpg"
                alt=""
              />
              <div style="width: 130px; height: 40%; margin: auto">딸기</div>
            </div>
          </div>
          <div class="col">
            <div
              class="card shadow-sm"
              style="
                height: 130px;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="width: 130px; height: 70%; border-radius: 10%"
                src="@/assets/img/product-5.jpg"
                alt=""
              />
              <div style="width: 130px; height: 40%; margin: auto">오이</div>
            </div>
          </div>
          <div class="col">
            <div
              class="card shadow-sm"
              style="
                height: 130px;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="width: 130px; height: 70%; border-radius: 10%"
                src="@/assets/img/product-6.jpg"
                alt=""
              />
              <div style="width: 130px; height: 40%; margin: auto">토마토</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Page Nation -->
      <div class="justify-content-center align-items-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination" style="margin-left: 5%">
            <li class="page-item">
              <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
      <!-- Page Nation END-->
    </div>
    <div style="width: 100%; height: 66vh; background-color: aqua">
      <naver-map style="width: 100%; height: 100%" :mapOptions="mapOptions">
        <div v-for="(item, idx) in markers" :key="idx">
          <naver-marker
            @click="onClickButton(idx)"
            :latitude="item.latitude"
            :longitude="item.longitude"
            @onLoad="onLoadMarker($event, idx)"
          >
          </naver-marker>
          <naver-info-window
            :marker="item.marker"
            :open="item.isOpen"
            @onLoad="onLoadInfoWindow($event, idx)"
          >
            <a href="https://www.naver.com/">abc</a>
            <div class="infowindow-style">
              {{ item.longitude }} 1111111111111111111😎
            </div>
          </naver-info-window>
        </div>
      </naver-map>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NaverMap, NaverMarker, NaverInfoWindow } from "vue3-naver-maps";

const markers = ref([
  {
    latitude: 37.51347, // 지도 중앙 위도
    longitude: 127.041722, // 지도 중앙 경도
    isOpen: false,
    type: "fish",
  },
  {
    latitude: 37.51347,
    longitude: 127.051722,
    isOpen: false,
    type: "egg",
  },
]);
const isOpen = ref(true);

const onLoadMarker = (markerObject, idx) => {
  markers.value[idx] = Object.assign({}, markers.value[idx], {
    marker: markerObject,
  });
  if (markers.value[idx].type === "vegetable")
    markers.value[idx].marker.setIcon(iconVegetable);
  else if (markers.value[idx].type === "fish")
    markers.value[idx].marker.setIcon(iconFish);
  else if (markers.value[idx].type === "egg")
    markers.value[idx].marker.setIcon(iconEgg);
  else if (markers.value[idx].type === "milk")
    markers.value[idx].marker.setIcon(iconMilk);
};

const onClickButton = (idx) => {
  for (var i = 0; i < markers.value.length; i++)
    markers.value[i].isOpen = false;
  markers.value[idx].isOpen = true;
};

const onLoadInfoWindow = (infoWindowObject, idx) => {
  markers.value[idx] = Object.assign({}, markers.value[idx], {
    infoWindow: infoWindowObject,
  });
};

const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 13,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};

const iconStyle = `<div style="background-color:red;">Hello</div>`;

// const itemImage1 = ref(
//   window.URL.createObjectURL("@/assets/img/product-6.jpg")
// );

const iconVegetable = ref(require("@/assets/img/vegun-icon/vegetable.png"));
const iconEgg = ref(require("@/assets/img/vegun-icon/egg.png"));
const iconFish = ref(require("@/assets/img/vegun-icon/fish.png"));
const iconMilk = ref(require("@/assets/img/vegun-icon/milk.png"));
</script>

<style>
.search-container {
  display: flex; /* Flexbox를 사용 */
  justify-content: left; /* 가로 중앙 정렬 */
  align-items: left; /* 세로 중앙 정렬 */
  margin-top: 50px;
  margin-left: 40px;
}

.icon-box {
  width: 25%;
  height: 100%;
  background-color: #808080;
  text-align: center;
  align-content: center;
  align-items: center;
  float: left;
  margin-top: 8px;
  font-weight: bolder;
  color: white;
}

.infowindow-style {
  color: black;
  background-color: white;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding: 6px 8px;
}
</style>
