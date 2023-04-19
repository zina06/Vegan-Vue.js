<template>
  <div>
    <div class="id-page">
        <h2>비밀번호 찾기</h2>
        <br>
        <form action="/member/findMyId" method="GET" name="member">
            <input type="text" v-model="id" placeholder="등록된 ID를 입력하세요" />
            <button type="button" @click="sendAuth()">인증번호 전송</button>
            <input type="text" v-model="authNo" placeholder="인증번호를 입력하세요" />
            <input type="password" v-model="password" placeholder="새로운 비밀번호를 입력하세요" />
            <i>특수문자 / 문자 / 숫자 포함 형태의 8~15자리</i>  
            <button type="button" @click="pwFind()">패스워드 설정</button>        
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';

export default {
  setup(){
    const router = useRouter();
    const Swal = require('sweetalert2');
    const id = ref('');
    const password = ref('');
    const authNo = ref('');
    const confirmId = ref('');
    const realPhoneNum = ref('');
    const realId = ref('');
    const phone = ref('');

    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
      return passwordRegex.test(password);
    };

    const validateID = (id) => {
      const idRegex = /^(?=.*[a-zA-Z])[A-Za-z\d]{5,15}$/;
      return idRegex.test(id);
    };

    const sendAuth = async () => {
      try {
        if(validateID(id.value) == false || validateID(id.value) == ''){
          Swal.fire({
            title: '아이디 유효성 검사',
            text: '옳바른 아이디 양식이 아닙니다',
            icon: 'error',
            confirmButtonText: '확인',
          })
          return;
       }
       const response = await axios.get('/Catchvegan/authPhone/findMyPassword/'+`${id.value}`);  
       realId.value= id.value; 
       console.log(response);

      //  if(`${id.value}` == id.value){      
          confirmId.value=response.data;   
          Swal.fire({
            icon: 'success',
            title: id.value + ' 로 인증번호가 전송되었습니다'   
            })
          return;
        // }
      } catch (error) {
        Swal.fire({
              icon: 'error',
              title: '가입되어있는 아이디가 없습니다'   
           })
        return;
      }
    }

    const pwFind = async () => {
      if(confirmId.value == '' || id.value == ''){
        Swal.fire({
            icon: 'error',
            title: '인증번호를 먼저 전송해주세요'   
          })
        return;
      }
      if(confirmId.value != authNo.value){
        Swal.fire({
            icon: 'error',
            title: '인증번호가 다릅니다.'   
          })
        return;
      }
      if(validatePassword(password.value) == false){
        Swal.fire({
          title: '비밀번호 유효성 검사',
          text: '비밀번호는 특수문자, 문자, 숫자를 포함한 8~15자리여야 합니다.',
          icon: 'error',
          confirmButtonText: '확인',
        });
        return;
      }
      else if(confirmId.value == authNo.value){
        try {
          const findPw = async () =>{
            const response = await axios.put(`/Catchvegan/authPhone/pwGet/${realId.value}`,{
              id : realId.value,
              password : password.value
            });
            confirmId.value = response.data;
            id.value=realId.value;
            Swal.fire({
              icon: 'success',
              title: '비밀번호가 새롭게 설정되었습니다'
          }).then((res)=>{
          router.push({
              name: "Main"
             });
          })
        }
        findPw();
      } catch (error) {
        console.error('Failed to fetch ID:', error);
        }
      }
    }
    return{
       sendAuth,
       pwFind,
       phone,
       authNo,
       id,
       password
    }
  }
}
</script>

<style scoped>
.id-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 400px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  animation: fade-in 0.5s ease;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button[type="button"],
button[type="submit"] {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"] {
  background-color: #28a745;
}

button[type="button"]:hover,
button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>