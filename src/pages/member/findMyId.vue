<template>
  <div>
    <div class="id-page">
        <h2>아이디 찾기</h2>
        <br>
        <form action="/member/findMyId" method="GET" name="member">
            <input type="text" v-model="phone" placeholder="등록된 핸드폰 번호를 숫자만 입력하세요" />
            <button type="button" @click="sendAuth()">인증번호 전송</button>
            <input type="text" v-model="authNo" placeholder="인증번호를 입력하세요" />
            <button type="button" @click="idFind()">ID 찾기</button>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import reserveVue from '../reservation/reserve.vue';

export default {
  setup(){
    const router = useRouter();
    const Swal = require('sweetalert2');
    const id = ref('');
    const phone = ref('');
    const authNo = ref('');
    const confirmId = ref('');
    const realPhoneNum = ref('');

    const validatePhone = (phone) => {
      const phoneRegex = /^\d{9,12}$/;
      return phoneRegex.test(phone);
    };
 
    const sendAuth = async () => {
      try {
        if(validatePhone(phone.value) == false || validatePhone(phone.value) == ''){
          Swal.fire({
            title: '번호 유효성 검사',
            text: '옳바른 번호 양식이 아닙니다',
            icon: 'error',
            confirmButtonText: '확인',
          })
          return;
        }
       const response = await axios.get('/Catchvegan/authPhone/findMyId/'+`${phone.value}`);
       if(`${phone.value}` == phone.value){          
          confirmId.value=response.data;
          realPhoneNum.value=phone.value;
          Swal.fire({
            icon: 'success',
            title: '인증번호가 전송되었습니다'   
            })
          return;
        }
      } catch (error) {
        Swal.fire({
            icon: 'error',
            title: '가입되어있는 아이디가 없습니다'   
          })
        return;
      }
    }

    const idFind = async () => {
      if(confirmId.value == ''){
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
      else{
        try {
          const findId = async () =>{
            const resposne = await axios.get("/Catchvegan/authPhone/idGet/" + `${realPhoneNum.value}`);
            id.value = resposne.data;
            Swal.fire({
            icon: 'success',
            title: '아이디는 ' + id.value + " 입니다."
          })
        }
        findId();
      } catch (error) {
        console.error('Failed to fetch ID:', error);
        }
      }
    }
    return{
       sendAuth,
       idFind,
       phone,
       authNo
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