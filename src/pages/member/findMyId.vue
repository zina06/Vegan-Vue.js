<template>
  <div>
    <div class="id-page">
        <h2>아이디 찾기</h2>
        <br>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="phoneNumber" placeholder="등록된 핸드폰 번호를 입력하세요" />
            <button type="button" @click="sendVerificationCode">인증번호 전송</button>
            <input type="text" v-model="verificationCode" placeholder="인증번호를 입력하세요" />
            <button type="submit">ID 찾기</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: '',
      verificationCode: '', 
    };
  },
  methods: {
    sendVerificationCode() {
    },
    submitForm() {
    },
  },
};
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