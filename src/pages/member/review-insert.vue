<template>
 
  <div class="uform-container editform card" style="margin-top: 100px;">
    <div class="inform card-body" style="height: 500px;">
      <label for="review-title" class="form-label"><b>리뷰 제목</b></label>
      <input type="text" class="form-control" id="title" v-model="title">
      <br>
      <div>
        <label for="review-content" class="form-label"><b>리뷰 내용</b></label>
        <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
        <br>
        <br>
        <h4 style="text-align: center; font-size: 1.1em;" ><b>당신의 점수는!</b></h4>
        <div class="star-rating space-x-4 mx-auto">
          <div style="margin-left: 10px;">{{ emoji }}</div>
          <input type="radio" id="5-stars" name="rating" value="5" v-model="rating" />
          <label for="5-stars" class="star pr-4">★</label>
          <input type="radio" id="4-stars" name="rating" value="4" v-model="rating" />
          <label for="4-stars" class="star">★</label>
          <input type="radio" id="3-stars" name="rating" value="3" v-model="rating" />
          <label for="3-stars" class="star">★</label>
          <input type="radio" id="2-stars" name="rating" value="2" v-model="rating" />
          <label for="2-stars" class="star">★</label>
          <input type="radio" id="1-star" name="rating" value="1" v-model="rating" />
          <label for="1-star" class="star">★</label>
        </div><br>
        <div>
          <label for="review-image" class="form-label"><b>사진 첨부</b></label>
          <input type="file" class="form-control" id="img" @change="onChangeFile">
        </div>
      </div><br><br>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn" type="button" @click="submitReview" style="margin: auto; background: #54a450; color: white;">작성하기</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
import Swal from 'sweetalert2';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const title = ref('');
    const content = ref('');
    const rating = ref('');
    const images = ref('');
    const visitIdx = route.params.visitIdx;
    let file2 = null;
    const file = ref('');
    const files = ref(null);
    const reviewDTO = ref({
      title: "",
      content: "",
      rating: "",
      images: "",
      visit: ""
  })

    const token = sessionStorage.getItem("token");
    const errorcheck = async () => {
        if(token == null){
          router.push({
            name:"Main"
          });
        }
      };
      errorcheck();


      const onChangeFile = (e) => {
      file.value = console.log(e.target.files[0])
      files.value = e.target.files[0];
      file2 = e.target.files[0];
    }

    const submitReview = async () => {
      if (!title.value) {
        Swal.fire({
          icon: 'error',
          title: '제목을 입력해주세요.',
        });
        return;
      }
      if (!content.value) {
        Swal.fire({
          icon: 'error',
          title: '내용을 입력해주세요.',
        });
        return;
      }
      if (!rating.value) {
        Swal.fire({
          icon: 'error',
          title: '별점을 작성해주세요.',
        });
        return;
      }
      if (file2 == null){
        Swal.fire({
          icon: 'error',
          title: '사진을 등록해주세요.',
        });
        return;
      }
      try {

        reviewDTO.value = {
          title: title.value,
          content: content.value,
          rating: rating.value,
          images: file.value,
          visitIdx: visitIdx,
        };
        

        const formData = new FormData();
        

        formData.append('file', file2);

        console.log(files.value);
        console.log(formData.get('reviewDTO'));

        const blob = new Blob([JSON.stringify(reviewDTO.value)], { type: 'application/json' });
        formData.append('reviewDTO', blob, 'reviewDTO.json');

      console.log("formData : " + formData.toString());
      console.log(formData.entries);

      
        const  response  = await axios.post('/reviewInsertFiles', formData,{
          headers : {
            'AUTHORIZATION': 'Bearer ' + token,
            'Content-Type': 'multipart/form-data'
          }
        }
        );
        console.log(response);
        if (response.status === 201) {
          Swal.fire({
            icon: 'success',
            title: '리뷰가 등록되었습니다.',
          }).then(() => {
            // Redirect to home page
            router.push({
              name: "Mydining"
            });
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: '리뷰 등록에 실패하였습니다.',
        });
      }
    };
    return {
      submitReview,
      title,
      content,
      rating,
      onChangeFile
    }
  },
  computed: {
    emoji() {
      switch (this.rating) {
        case '1':
          return '😭';
        case '2':
          return '😢';
        case '3':
          return '🙂';
        case '4':
          return '😀';
        case '5':
          return '😁';
        default:
          return '🧐';
      }
    }
  }
}
</script>
<style scoped>
.uform-container {
  margin: auto;
  width: 700px;
  margin-bottom: 100px;
  height: 550px;
}

.restaurantname {
  width: 300px;
  /* margin: auto; */
}

input[type="radio"] {
  opacity: 0;
  position: absolute;
}

.star-rating {
  display: flex;
  flex-direction: row-reverse;
  font-size: 2.25rem;
  line-height: 2.5rem;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
}

.star-rating input {
  display: none;
}

.star-rating label {
  -webkit-text-fill-color: transparent;
  /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2.3px;
  -webkit-text-stroke-color: #2b2a29;
  cursor: pointer;
}

.star-rating :checked~label {
  -webkit-text-fill-color: gold;
}

.star-rating label:hover,
.star-rating label:hover~label {
  -webkit-text-fill-color: #fff58c;
}
</style>