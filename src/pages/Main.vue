<template>
  <head>
    <meta charset="utf-8" />
    <title>Foody - Organic Food Website Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />

    <!-- Favicon -->
    <link href="@/assets/img/favicon.ico" rel="icon" />

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Lora:wght@600;700&display=swap"
      rel="stylesheet"
    />

    <!-- Icon Font Stylesheet -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />

    <!-- Libraries Stylesheet -->
    <link src="@/assets/lib/animate/animate.min.css" rel="stylesheet" />
    <link
      src="@/assets/lib/owlcarousel/assets/owl.carousel.min.css"
      rel="stylesheet"
    />

    <!-- Customized Bootstrap Stylesheet -->
    <link src="@/assets/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Template Stylesheet -->
    <!-- <link src="@/assets/css/style.css" rel="stylesheet"> -->
  </head>

  <body>
    <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" src="@/assets/img/mainimg2.jpg" alt="Image" />
          <div class="carousel-caption">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-sm-7">
                  <div class="border-top border-lg-0 my-2 mt-lg-0">
                    <p class="display-2 mb-3 animated slideInDown banner">
                      당신을 위한 <br />
                      최고의 비건 식당
                    </p>
                    <div class="search">
                      <input
                        type="text"
                        placeholder="search"
                        list="addressShow"
                        v-model="address"
                      />
                      <router-link
                        @click="onClickSearch"
                        :to="{ name: 'Search' }"
                      >
                        <img
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
                          id="searchimg"
                        />
                      </router-link>
                      <datalist id="addressShow">
                        <option
                          v-for="(address, idx) in search.addressList"
                          :key="idx"
                        >
                          {{ address }}
                        </option>
                      </datalist>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--review start-->
    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px; margin-top: 100px;">
          <h2><b>최근 리뷰</b></h2>
          <!-- <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p> -->
        </div>
    <Carousel :items-to-show="2.5" :wrap-around="true" style="width: 70%; margin: auto;">
     
      <Slide  v-for="review in reviewList" :key="review.reviewIdx">
       
        <div class="carousel__item" style="height: fit-content; width: fit-content;">
         
          <img class="img-fluid" src="@/assets/img/blog-1.jpg" alt="" style="width:400px;">
              <div class="bg-light p-4"  style="width: auto; height: auto;">
                <p class="d-block h5 lh-base mb-4"><b>{{ review.restaurantDTO.name }}</b></p>
                <span>
                  <svg v-for="i in review.rating" :key="i" fill="#FFDC3C" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                  <svg v-for="i in 5-review.rating" :key="i" fill="#FFDC3C" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                </span>
                <p class="d-block h5 lh-base mb-4" style="font-size: 15px;">{{ review.content }}</p>
                <div class="text-muted border-top pt-4">
                  <small class="me-3"><i class="fa fa-user text-primary me-2"></i>{{ review.memberDTO.name }}</small>
                  <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                </div>
              </div>
        </div>
      
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <!--review end-->

    <!-- Feature Start -->
    <!-- <div class="container-fluid bg-light bg-icon my-5 py-6">
        <div class="container">
          <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
            <h1 class="display-5 mb-3">Our Features</h1>
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src="@/assets/img/icon-1.png" alt="">
                <h4 class="mb-3">Natural Process</h4>
                <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
                </p>
                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src="@/assets/img/icon-2.png" alt="">
                <h4 class="mb-3">Organic Products</h4>
                <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
                </p>
                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src="@/assets/img/icon-3.png" alt="">
                <h4 class="mb-3">Biologically Safe</h4>
                <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
                </p>
                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    <!-- Feature End -->

    

   
    



    <!-- Back to Top -->
    <a
      href="#"
      class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      ><i class="bi bi-arrow-up"></i
    ></a>
  </body>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
import { ref } from "vue";
import { useSearch } from "@/stores/search";

// export default {
//   name: 'App',
//   components: {

//   }
// }
export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const search = useSearch();
    const address = ref("");
    const addressList = ref([]);
    const onClickSearch = ref();

    search.setLocation();
    axios
      .get("http://localhost:8082/Catchvegan/search/addressList")
      .then((res) => {
        addressList.value = res.data;
      })
      .then(() => {
        search.setAddressListClear();
        for (let i = 0; i < addressList.value.length; i++) {
          search.setAddressListPush(addressList.value[i]);
        }
      })
      .catch((err) => {
        console.log("Catchvegun address List Get Fail");

        if (!err.response)
          console.log("Please check your internet connection.");
        else console.log("Error Status Code : " + err.response.status);

        return Promise.reject(err);
      });

    onClickSearch.value = () => {
      search.setAddress(address.value);
    };

    const getRecentReview = async () => {
      const res = await axios
        .get("/Catchvegan/review/recent")
        .then((Review) => {
          console.log(Review.data);
        });
    };
    getRecentReview();
    return {
      address,
      addressList,
      search,
      onClickSearch,
    };
  },
});
</script>

<style>
@import url("@/assets/css/style.css");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

.search {
  position: relative;
  width: 800px;
}

input {
  width: 100%;
  border: 1px solid white;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 15px;
}

#searchimg {
  position: absolute;
  width: 17px;
  top: 15px;
  right: 12px;
  margin: 0;
  cursor: pointer;
}
.carousel__next,
.carousel__icon {
  color: white;
  border: 1px solid white;
  border-radius: 100%;
  background: green;
  border: green;
}



</style>
