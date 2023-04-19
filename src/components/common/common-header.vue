<template>
  <div class="container-fluid  px-0 wow fadeIn" data-wow-delay="0.1s">
  
        <!-- <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
          <div class="col-lg-6 px-5 text-start">
           
          
          </div>
                   <router-link to="/Catchvegan" class="nav-item nav-link active">Home</router-link>
              <router-link to="/Catchvegan/member/signup" class="nav-item nav-link" v-if="headerstate">회원가입</router-link>
              <router-link to="/Catchvegan/member/login" class="nav-item nav-link" v-if="headerstate">로그인</router-link>
              <router-link to="/Catchvegan" class="nav-item nav-link" v-if="!headerstate">내정보</router-link>
              <router-link to="/Catchvegan" class="nav-item nav-link" v-if="!headerstate">마이다이닝</router-link>
        </div>  -->
  
        <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <router-link to="/Catchvegan" class="navbar-brand ms-4 ms-lg-0" >
            <!-- <h1 class="fw-bold text-primary m-0">Catch<span class="text-secondary">Vegan</span></h1> -->
            <img src="@/assets/img/mainlogo.png" id="logoimg">
          </router-link>
          <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
              <button type="button" class="nav-item nav-link active custom-button" @click.prevent="tokentest()">토큰실험용</button>
              <strong class="greeting" v-if="!headerstate">{{ sessionid }} 님 반갑습니다!</strong>
              <button type="button" class="nav-item nav-link active custom-button" @click.prevent="main()">HOME</button>
              <button type="button" class="nav-item nav-link active custom-button" v-if="headerstate" @click.prevent="signup()">회원가입</button>
              <button type="button" class="nav-item nav-link active custom-button" v-if="headerstate" @click.prevent="login()">로그인</button>
              <button type="button" class="nav-item nav-link active custom-button" v-if="!headerstate && hasMemberIdx" @click.prevent="logout()">로그아웃</button>
              <button type="button" class="nav-item nav-link active custom-button" v-if="!headerstate && hasMemberIdx" @click.prevent="mypage()">내정보</button>
              <button type="button" class="nav-item nav-link active custom-button" v-if="!headerstate && hasMemberIdx" @click.prevent="mydining()">마이다이닝</button>
              <button type="button" class="nav-item nav-link active custom-button" v-if="!headerstate && hasManagerIdx" @click.prevent="logout()">로그아웃</button>
              <button type="button" class="nav-item nav-link active custom-button" v-if="!headerstate && hasManagerIdx">나는어드민</button>
            <!-- <div class="d-none d-lg-flex ms-2">
              <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                <small class="fa fa-search text-body"></small>
              </a>
              <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                <small class="fa fa-user text-body"></small>
              </a>
              <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                <small class="fa fa-shopping-bag text-body"></small>
              </a>
            </div> -->
            </div>
          </div>
        </nav>

        <!-- <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
          <div class="col-lg-6 px-5 text-start">                  
          </div>        
        </div>  -->
      </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: "common-header",
    setup() {
      const Swal = require('sweetalert2');
      const headerstate = ref(false);
      const token = sessionStorage.getItem("token");
      const hasMemberIdx = sessionStorage.getItem('memberIdx');
      const hasManagerIdx = sessionStorage.getItem('managerIdx');
      const check = () => {
        if(token == null){
          headerstate.value = true;
        }else{
          console.log(headerstate.value);
        }
      }
      check();

      const logout = () => {
        let timerInterval
        Swal.fire({
          title: '로그아웃하는중',
          html: '로그아웃하는중',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('로그아웃하는중')
          }
        })
        headerstate.value = true;
        sessionStorage.clear();
        location.reload();
      }

      const router = useRouter();

      const sessionid = sessionStorage.getItem("id");

      const mypage = () => {
        router.push({
          name:"Mypage",
          params:{"id": sessionid}
        });
      }

      const login = () => {
        router.push({
          name:"Login"
        });
      }

      const signup = () => {
        router.push({
          name:"Signup"
        });
      }

      const main = () => {
        router.push({
          name:"Main"
        });
      }

      const tokentest = () => {
        console.log(token);
        router.push({
          name:"Aftersignup",
          params:{"token": token}
        });
      }

      const mydining = () => {
        router.push({
          name:"Mydining",
          params:{"id": sessionid}
        });
      }

      return{
        logout,
        headerstate,
        mypage,
        mydining,
        login,
        signup,
        main,
        sessionid,
        tokentest,
        hasManagerIdx,
        hasMemberIdx
      }
    }
}
</script>

<style>
#logoimg{
  width: 300px;
  height: 65px;
}

.greeting {
  font-weight: bold;
  margin-right: 10px; /* 오른쪽으로 10px의 간격 설정 */
  padding: 20px 10px;
}

.custom-button {
  display: inline-block; /* inline-block 속성으로 링크처럼 보이게 설정 */
  background-color: #fff; /* 버튼 배경색을 초록색으로 설정 */
  color: #fff; /* 버튼 텍스트 색상을 흰색으로 설정 */
  padding: 5px 5px; /* 버튼의 내부 여백 설정 */
  font-size: 18px; /* 버튼 텍스트 크기 설정 */
  border: none; /* 버튼 테두리 제거 */
  border-radius: 4px; /* 버튼 테두리 둥글게 설정 */
  cursor: pointer; /* 커서를 손가락 모양으로 설정 */
  transition: transform 0.2s ease-in-out; /* 애니메이션 효과 설정 */
  text-decoration: none; /* 링크 효과 제거 */
}

.custom-button:hover {
  transform: scale(1.1); /* 마우스 호버 시 버튼 크기를 1.1배로 확대하는 애니메이션 설정 */
}

</style>