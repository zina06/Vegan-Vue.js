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
                <i>특수문자를 제외한 5~15자리</i>
                <br>
                <br>
                <div>
                  <div id="canpost" hidden="hidden" data-validation='false'></div>
                  <span id="valid" hidden="hidden" style="color : red">이미 존재하는 아이디입니다.</span>
                  <span id="valid2" hidden="hidden" style="color : red">아이디를 입력해주세요</span>
                  <span id="valid3" hidden="hidden" style="color : green">가입 가능한 아이디입니다</span>
                </div>
                <div class="textForm">
                  <input type="password" name="password"  class="form-control" placeholder="비밀번호" data-pw="cant" v-model="password"/>
                </div>
                  <i>특수문자 / 문자 / 숫자 포함 형태의 8~15자리</i>
                <div>
                  <div id="canpassword" v-if="passwordNull" style="color : green">비밀번호를 입력해주세요.</div>
                  <div id="cantpassword" hidden="hidden" style="color : red">비밀번호 형식이다릅니다.</div>
                </div>
                <br>
                <div class="textForm" style="position: relative;">
                    <input type="password" name="confirm_password" class="form-control" placeholder="비밀번호 확인" v-model="password2" />
                    <button class="btn-pwcheck" type="button" id="pwcheckbutton" @click="checkPwd()">비밀번호 확인</button>
                    <div id="passok" hidden="hidden" style="color : red">비밀번호가 다릅니다.</div>
                </div>
                <span id="confirmMsg"></span>
                <br>
                <div class="textForm">
                <input type="text" name="name"  class="form-control" placeholder="이름" v-model="name"/>
                  <div id="namenull" style="color : red" v-if="nameNull">이름을 입력해주세요.</div>
                </div>
                <br>
                <div class="textForm">
                  <input name="email" type="text" class="form-control" placeholder="이메일" v-model="email">
                </div>
                <i>naver.com , gmail.com , daum.net 만 가능합니다</i>
                <br>
                <br>
                <div class="textForm" style="position: relative;">
                  <input name="phone" type="text" class="form-control" placeholder="전화번호" v-model="phone">
                  <button type="button" class="btn-sendauth" @click.prevent="sendSMS()">인증번호 요청</button>             
                </div>
                <i>숫자만 적어주세요</i>
                <br>
                <br>
                <div class="textForm">
                  <input name="authNo" type="text" class="form-control" placeholder="인증번호 입력" v-model="authNo">
                </div>
                <div>
                  <label for="veganType">비건 타입 선택: </label>
                  <select id="veganType" v-model="veganType">
                    <option value="strict">비건 (Vegan)</option>
                    <option value="lacto">락토 (Lacto Vegan)</option>
                    <option value="ovo">오보 (Ovo-Vegetarian)</option>
                    <option value="lacovo">락토 오보 (Lacto-ovo Vegetarian)</option>
                    <option value="pesco">페스코 (Pesco-Vegetarian)</option>
                    <option value="pollo">폴로 (Pollo-Vegetarian)</option>
                    <option value="flexi">플렉시테리언 (Flexitarian)</option>
                    <option value="other">기타</option>
                  </select><font-awesome-icon icon="question-circle" @click="showtype"/> 비건 타입이 궁금하다면 클릭
                  <input class="form-control" type="hidden" name="{{veganType}}" value="{{veganType}}" />
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
    const veganType = ref('');
    //const sid = process.env.TWILIO_ACCOUNT_SID;
    //const token = process.env.TWILIO_AUTH_TOKEN;
    //const client = require('twilio')(sid, token);
    let passok = false;
    let idok = false;
    const Swal = require('sweetalert2');

    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
      return passwordRegex.test(password);
    };

    const validateID = (id) => {
      const idRegex = /^(?=.*[a-zA-Z])[A-Za-z\d]{5,15}$/;
      return idRegex.test(id);
    };

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@(naver\.com|gmail\.com|daum\.net)$/;
      return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
      const phoneRegex = /^\d{9,12}$/;
      return phoneRegex.test(phone);
    };
    
    const checkPwd = () => {
      if(validatePassword(password.value) == false){
         Swal.fire({
          title: '비밀번호 유효성 검사',
          text: '비밀번호는 특수문자, 문자, 숫자를 포함한 8~15자리여야 합니다.',
          icon: 'error',
          confirmButtonText: '확인',
        });
        return;
      }
      else if(password.value == password2.value && password.value != ''){
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

    const showtype = () => {   
      Swal.fire({
        title: '비건 유형에 대해 알려드립니다',
        text: '알맞은 유형을 선택해주세요',
        imageUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMTAzMDVfMjM2/MDAxNjE0OTQyMDIxNjM5.6Ajipt9m7rdjeaF9KJXN8ohloCUWqaXQV52dgOY-91sg.YQaPafZyC82APA3G1zB7Zr5C7eUrbAla2ke8mdDnVRAg.JPEG.veverywhere/92%EC%B1%84%EC%8B%9D%EC%9D%98%EB%8B%A8%EA%B3%84.jpg?type=w800',
        imageWidth: 500,
        imageHeight: 500,
        imageAlt: 'Custom image'
      });
    }

    const signin = () => {
      if(id.value == '' || password.value == '' || password2.value == '' || name.value == ''
      || email.value == '' || phone.value == '' || authNo.value =='' || veganType.value == ''){
        Swal.fire({
          icon: 'error',
          title: '모든 항목을 작성해주세요',
        })
        return;
      }
      if(validateEmail(email.value) == false){
        Swal.fire({
          title: '이메일 유효성 검사',
          text: '옳바른 이메일 양식이 아닙니다',
          icon: 'error',
          confirmButtonText: '확인',
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
      if(validatePhone(phone.value) == false){
        Swal.fire({
          title: '번호 유효성 검사',
          text: '옳바른 번호 양식이 아닙니다',
          icon: 'error',
          confirmButtonText: '확인',
        })
        return;
      }
      const signup = async () =>{
          const res = await axios
            .post('signup',{
                              id : id.value,                     
                              password : password.value,
                              name : name.value,
                              phone : phone.value,
                              email : email.value,
                              veganType : veganType.value
                            })
            .then((result)=>{
              if(result.status==201){
                 Swal.fire({
                  icon:'success',
                  title:'회원가입이 완료되었습니다',
              }).then((res)=>{
             router.push({
              name: "Main"
             });
             })
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

    const sendSMS = () =>{
      if(validatePhone(phone.value) == false){
        Swal.fire({
          title: '번호 유효성 검사',
          text: '옳바른 번호 양식이 아닙니다',
          icon: 'error',
          confirmButtonText: '확인',
        })
        return;
      }else{
        Swal.fire({
          title: '인증번호가 발송되었습니다',
          icon: 'success',
          confirmButtonText: '확인',
        })
        sendSMS();
      }
    }
    
    const checkId = () =>{
      if(validateID(id.value) == false){
         Swal.fire({
          title: '아이디 유효성 검사',
          text: '아이디는 특수문자는 포함하지 않는 5~15자리여야 합니다.',
          icon: 'error',
          confirmButtonText: '확인',
        });
        return;
      }
      const checkidid = async () =>{
          const res = await axios
            .post('checkid',{
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
      veganType,
      checkPwd,
      signin,
      checkId,
      showtype,
      sendSMS
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

  label {
  margin-right: 10px; /* 라벨과 셀렉트 박스 간격 조정 */
  }

  select {
  margin-right: 10px; /* 셀렉트 박스와 숨은 필드 간격 조정 */
  }

  input[type="hidden"] {
  display: block; /* 숨은 필드는 블록 요소로 표시되도록 설정 */
  margin-top: 10px; /* 숨은 필드와 버튼 간격 조정 */
  }

  .btn-pwcheck{
  position: absolute;
  top: 0;
  right: 0;
  top: 6px;
  right: 5px;
  padding: 5px;
  background-color: #E0E0E0;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  }

  .btn-idcheck {
  position: absolute;
  top: 0;
  right: 0;
  top: 6px;
  right: 5px;
  padding: 5px;
  background-color: #E0E0E0;
  color: #000000;
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
  background-color: #E0E0E0;
  color: #000000;
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