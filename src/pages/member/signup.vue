<template>
    <div>
        <form action="/member/signup" method="POST" name="member">
            <div style="text-align: center;">            
              <h2>회원 가입</h2>
            </div>
            <br>
                <div class="textForm" style="position: relative;">
                <input name="id" type="text" class="form-control" placeholder="아이디" v-model="id" />
                  <button class="btn-idcheck" type="button" id="checkbutton" @click="checkId()">아이디 중복 확인</button>
                </div>
                <br>
                <div>
                  <div id="canpost" hidden="hidden" data-validation='false'></div>
                  <span id="valid" hidden="hidden" style="color : red">이미 존재하는 아이디입니다.</span>
                  <span id="valid2" hidden="hidden" style="color : red">아이디를 입력해주세요</span>
                  <span id="valid3" hidden="hidden" style="color : green">가입 가능한 아이디입니다</span>
                </div>
                <div class="textForm">
                  <input type="password" name="password"  class="form-control" placeholder="비밀번호" data-pw="cant" v-model="password"/>
                  <div>특수문자 / 문자 / 숫자 포함 형태의 8~15자리</div>
                  <div id="canpassword" v-if="passwordNull" style="color : green">비밀번호를 입력해주세요.</div>
                  <div id="cantpassword" hidden="hidden" style="color : red">비밀번호 형식이다릅니다.</div>
                </div>
                <br>
                <div class="textForm">
                    <input type="password" name="confirm_password" class="form-control" placeholder="비밀번호 확인" v-model="password2" />
                  <div id="passok" hidden="hidden" style="color : red">비밀번호가 다릅니다.</div>
                </div>
                <div class="textForm">
                  <button class="btn btn-md btn-primary btn-block signup-btn" type="button" id="checkbutton" @click="checkPwd()">비밀번호 확인</button>
                <br>
                </div>
                <span id="confirmMsg"></span>
                <div class="textForm">
                <input type="text" name="name"  class="form-control" placeholder="이름" v-model="name"/>
                  <div id="namenull" style="color : red" v-if="nameNull">이름을 입력해주세요.</div>
                </div>
                <br>
                <div class="textForm">
                  <input name="email" type="text" class="form-control" placeholder="이메일" v-model="email">
                </div>
                <br>
                <div class="textForm" style="position: relative;">
                  <input name="phone" type="text" class="form-control" placeholder="전화번호" v-model="phone">
                  <button type="button" class="btn-sendauth">인증번호 요청</button>
                </div>
                <br>
                <div class="textForm">
                  <input name="authNo" type="text" class="form-control" placeholder="인증번호 입력" v-model="authNo">
                </div>
                <br>
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
            <button id="add" class="joinbtn" @click.prevent="signin()">계정 생성</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';

export default {
  setup(){
    const router = useRouter();
    const id = ref('');
    const password = ref('');
    const password2 = ref('');
    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const authNo = ref('');
    let passok = false;
    let idok=false;
    const Swal = require('sweetalert2');

    const checkPwd = () => {
      if(password.value == password2.value && password.value != ''){
        Swal.fire({
          icon: 'success',
          title: '비밀번호가 일치합니다'     
      })
        passok=true;
        return;
      }else{
        Swal.fire({
          icon: 'error',
          title: '비밀번호가 일치하지 않습니다',
          text: '다시 확인해주세요',
        })
        return;
      }
    }

    const signin = () => {
      if(id.value == '' || password.value == '' || password2.value == '' || name.value == ''
      || email.value == '' || phone.value == '' || authNo.value =='' ){
        Swal.fire({
          icon: 'error',
          title: '모든 항목을 작성해주세요',
        })
        return;
      }
      if(passok == false){
         Swal.fire({
          icon: 'error',
          title: '비밀번호 확인 버튼을 눌러주세요',
        })
        return;
      }
      if(idok == false){
         Swal.fire({
          icon: 'error',
          title: '아이디 중복확인을 해주세요',
        })
        return;
      }
      const signup = async () =>{
          const res = await axios
            .post('/member/signup',{
                              id : id.value,                     
                              password : password.value,
                              name : name.value,
                              phone : phone.value,
                              email : email.value,
                            })
            .then((result)=>{
              if(result.status==201){
                 Swal.fire({
                  icon:'success',
                  title:'회원가입이 완료되었습니다',
              })
                router.push("/Catchvegan");
              }
              if(result.data == 'success'){
                idok=true;
                Swal.fire({
                  icon:'success',
                  title:'사용가능한 아이디입니다'
              })
              }
          }).catch((result) =>{
            console.log(result);
          })
        }
        signup();
    }
    const checkId = () =>{
      const checkidid = async () =>{
          const res = await axios
            .post('/checkid',{
                              id : id.value
                            })
            .then((result)=>{
              if(result.data == 'success'){
                Swal.fire({
                icon: 'error',
                title: '사용이 불가능한 아이디입니다',
                })
                return;
              }
              if(result.data=='fail'){
                Swal.fire({
                  icon: 'success',
                  title:'사용가능한 아이디입니다',
               })
                idok=true;
                return;
              }
          }).catch((result) =>{
            console.log(result);
          })
        }
        checkidid();
    }

    return{
      id,
      password,
      password2,
      name,
      email,
      phone,
      authNo,
      checkPwd,
      signin,
      checkId
    }
  }
}
</script>

<style scoped>
    /* Add your custom styles here */

  div {
    max-width: 600px; /* 원하는 폼의 최대 너비로 설정 */
    margin: 0 auto; /* 가운데 정렬을 위한 margin 설정 */
  }

  .btn-idcheck {
  position: absolute;
  top: 0;
  right: 0;
  top: 6px;
  right: 5px;
  padding: 5px;
  background-color: #00FF00;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  }

  .btn-sendauth {
  position: absolute;
  top: 0;
  right: 0;
  top: 7px;
  right: 5px;
  padding: 5px;
  background-color: #00FF00;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
}



.joinbtn {
  background-image: linear-gradient(to right, #7eff57, #00ff94, #00ff94, #7eff57);
  background-size: 300% auto;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  animation: gradientAnimation 5s linear infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}

.signup-btn {
  background-color: #007BFF;
  color: #FFFFFF;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
}

.signup-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

.signup-btn:hover::after {
  opacity: 1;
}

.joinbtn:hover {
  opacity: 1;
}

    .textForm {
        margin-bottom: 10px;
    }
    
    .form-control {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    
    .btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 4px;
    }
    
    .btn-primary {
        color: #fff;
        background-color: #1ab31a;
        border-color: #00ff22;
    }
    
    .signup-btn {
        width: 100%;
        margin-top: 10px;
    }
    
    .joinbtn {
        width: 100%;
        margin-top: 10px;
        background-color: #1ab31a;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    #valid,
    #valid2,
    #valid3,
    #namenull,
    #cantpassword,
    #passok {
        margin-top: 5px;
        font-size: 12px;
    }
    
    #valid,
    #cantpassword,
    #passok {
        color: red;
    }
    
    #valid3,
    #namenull {
        color: green;
    }
</style>