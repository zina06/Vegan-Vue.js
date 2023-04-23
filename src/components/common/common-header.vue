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
              <strong class="greeting" v-if="!headerstate && hasMemberIdx">{{ loginid }} 님 반갑습니다</strong>
              <strong class="greeting" v-if="!headerstate && hasManagerIdx">{{ loginid }} 님 반갑습니다</strong>
              <button type="button" class="custom-button" @click.prevent="main()">HOME</button>
              <button type="button" class="custom-button" v-if="headerstate" @click.prevent="signup()">회원가입</button>
              <button type="button" class="custom-button" v-if="headerstate" @click.prevent="login()">로그인</button>
              <button type="button" class="custom-button" v-if="!headerstate && hasMemberIdx" @click.prevent="logout()">로그아웃</button>
              <button type="button" class="custom-button" v-if="!headerstate && hasMemberIdx" @click.prevent="mypage()">내정보</button>
              <button type="button" class="custom-button" v-if="!headerstate && hasMemberIdx" @click.prevent="mydining()">마이다이닝</button>
              <button type="button" class="custom-button" v-if="!headerstate && hasManagerIdx" @click.prevent="logout()">로그아웃</button>
              <button type="button" class="custom-button" v-if="!headerstate && hasManagerIdx" @click.prevent="manager()">식당관리</button>
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
      const loginid = sessionStorage.getItem("id");
      const hasMemberIdx = sessionStorage.getItem('memberIdx');
      const hasManagerIdx = sessionStorage.getItem('managerIdx');
      
      const check = () => {
        if(token == null){
          headerstate.value = true;
        }else{
          // console.log(headerstate.value);
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
            // const b = Swal.getHtmlContainer().querySelector('b')
            // timerInterval = setInterval(() => {
            //   b.textContent = Swal.getTimerLeft()
            // }, 100)
            router.push({
              name:"Main"
            });
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('로그아웃하는중')
          }
        }).then(() => {
          router.push({
            name:"Main"
          });
        })
        headerstate.value = true;
        alert(3);
        sessionStorage.clear();
        location.reload();
      }

      const router = useRouter();

      const mypage = () => {
        router.push({
          name:"Mypage",
          params:{"id": hasMemberIdx}
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

      const mydining = () => {
        router.push({
          name:"Mydining",
          params:{"id": hasMemberIdx}
        });
      }

      const manager = () => {
        router.push({
          name:"Manager",
          params:{"managerIdx": hasManagerIdx}
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
        manager,
        hasManagerIdx,
        hasMemberIdx,
        loginid
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
  font-size: 20px;
  font-weight: bold;
  color: #3CB815;
  margin-right: 10px;
  padding: 13px 40px 0px 40px;
}

.custom-button {
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 20px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-right: 10px;

}

.custom-button:last-of-type {
  margin-right: 0;
}

.custom-button:hover {
  color:#3CB815;
}
</style>