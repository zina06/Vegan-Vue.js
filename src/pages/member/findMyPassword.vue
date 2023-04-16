<template>
  <div>
    <div class="password-page">
      <h2>비밀번호 찾기</h2>
      <br>
      <form @submit.prevent="submitForm">
        <input type="text" class="idcheck" v-model="username" placeholder="아이디를 입력하세요" />
        <i class="hiddenword">저장되어 있는 휴대폰 번호로 인증번호가 전송됩니다</i>
        <button type="button" @click="sendVerificationCode">인증번호 전송</button>
        <input type="text" v-model="verificationCode" placeholder="인증번호를 입력하세요" />
        <input type="password" v-model="newPassword" placeholder="새 비밀번호를 입력하세요" />
        <button type="submit">비밀번호 변경</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      verificationCode: '',
      newPassword: '',
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

.password-page {
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
  width: 400px; /* 폼의 너비를 400px로 조정 */
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  animation: fade-in 0.5s ease; /* 폼의 애니메이션 효과 추가 */
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
  transition: background-color 0.3s ease; /* 버튼의 애니메이션 효과 추가 */
}

button[type="submit"] {
  background-color: #28a745;
}

button[type="button"]:hover,
button[type="submit"]:hover {
  background-color: #0056b3; /* 버튼에 호버 효과 추가 */
}


.btn-idcheck {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 0.5rem;
  cursor: pointer;
}

.btn-idcheck:hover {
  background-color: #0056b3;
}
</style>