<template>
    <div>
        <div class="login-page">
        <form action="/member/login" method="POST" class="loginForm" name="member">                                                                                         
            <h2>로그인</h2>
                <div class="textForm">
                    <input name="id" type="text" class="id" placeholder="아이디" v-model="id">
                </div>
                <div class="textForm">
                    <input name="password" type="password" class="password" placeholder="비밀번호" v-model="password">
                </div>
            <button class="loginBtn" type="submit" value="L O G I N" @click.prevent="login()">로그인</button>
            <div class="text-center mb-3">
                <a href="findMyId" class="text-secondary me-3">아이디 찾기</a>
                <span class="text-secondary">|</span>
                <a href="findMyPassword" class="text-secondary ms-3 me-3">비밀번호 찾기</a>
                <span class="text-secondary">|</span>
                <a href="signup" class="text-secondary ms-3">회원가입</a>
            </div>
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
        </form>
        </div>
    </div>
    <div class="common-footer"></div>
</template>

<script>
import { useRouter } from 'vue-router';
import {ref} from 'vue'
import axios from 'axios';

export default {
  setup(){
    const router = useRouter();
    const Swal = require('sweetalert2');
    const token = sessionStorage.getItem("token");
    const id = ref('');
    const password = ref('');

    const errorcheck = async () => {
      if(token != null){
        router.push({
          name:"Main"
        });
      }
    };
    errorcheck();

    const login = () =>{
      console.log(id.value);
      console.log(password.value);
      const login2 = async () =>{
        const res = await axios.post('/Catchvegan/member/login',{
            id : id.value,
            password : password.value
        }).then((result)=>{
          sessionStorage.setItem("token",result.headers.token);
          sessionStorage.setItem("id",id.value);
          Swal.fire({
          icon: 'success',
          title: '로그인 성공'     
          }).then(() => {
            router.push({ name: 'Main', params: { id: id.value } });
            location.reload();
            window.location.href = '/Catchvegan'
          });            
          if(result.headers.token == null){
            Swal.fire({
            icon: 'error',
            title: '로그인 실패'
            })
          }
          token.value = result.headers.token;
        }).catch((result) => {
          console.log(result);
        })
      }
      login2();
    }

    return{
      id,
      password,
      login
    }
  }
  

}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  font-family:sans-serif;
}

.text-center a {
  position: relative;
  display: inline-block;
  padding: 5px 10px;
  color: #999;
  text-decoration: none;
  transition: all 0.3s ease-out;
}

.text-center a:hover {
  color: #333;
  transform: translateY(-5px);
}

.text-center a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #999;
  transform: scaleX(0);
  transition: all 0.3s ease-out;
}

.text-center a:hover::before {
  transform: scaleX(1);
  background-color: #007bff; /* 애니메이션 동작 시 변경될 배경색 */
}

.text-center a:hover::before {
  transform: scaleX(1);
}


/*
.login-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
*/

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}


body {
  background-image:#34495e;
  overflow-y: hidden;
} 

.loginForm {
  width: 600px;
  padding: 30px, 20px;
  background-color: #FFFFFF;
  text-align: center;
  top: 40%;
  left: 50%;
  margin: auto;
  border-radius: 15px;
  border: 2px solid #000; /* 검은색 테두리 선 추가 */
}

.loginForm h2 {
  text-align: center;
  margin: 30px;
}

.textForm {
  border-bottom: 2px solid #adadad;
  margin: 30px;
  padding: 10px 10px;
}

.id {
  width: 100%;
  border: none;
  outline: none;
  color: #636e72;
  font-size: 16px;
  height: 25px;
  background: none;
}

.pw {
  width: 100%;
  border: none;
  outline: none;
  color: #636e72;
  font-size: 16px;
  height: 25px;
  background: none;
}

.loginBtn {
  position: relative;
  left: 40%;
  transform: translateX(-50%);
  margin-bottom: 40px;
  width: 80%;
  height: 40px;
  background: linear-gradient(125deg, #81ecec, #6c5ce7, #81ecec);
  background-position: left;
  background-size: 200%;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  display: inline;
}

.loginBtn:hover {
  background-position: right;
} 

.common-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>