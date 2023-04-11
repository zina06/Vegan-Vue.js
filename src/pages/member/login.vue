<template>
    <div>
        <div class="login-page">
        <form action="doLogin" method="POST" class="loginForm" onsubmit="DoLoginForm__submit(this); return false;">                                                                                         
            <h2>로그인</h2>
                <div class="textForm">
                    <input name="loginId" type="text" class="id" placeholder="아이디">
                </div>
                <div class="textForm">
                    <input name="loginPw" type="password" class="pw" placeholder="비밀번호">
                </div>
            <input type="submit" class="loginBtn" value="L O G I N"/>
            <div class="text-center mb-3">
                <a href="#" class="text-secondary me-3">아이디 찾기</a>
                <span class="text-secondary">|</span>
                <a href="#" class="text-secondary ms-3 me-3">비밀번호 찾기</a>
                <span class="text-secondary">|</span>
                <a href="#" class="text-secondary ms-3">회원가입</a>
            </div>
        </form>
        </div>
    </div>
    <div class="common-footer"></div>
</template>

<script>
export default {
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
}



.login-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  background-image:#34495e;
  overflow-y: hidden;
} 

.loginForm {
  width: 700px;
  height: 500px;
  padding: 30px, 20px;
  background-color: #FFFFFF;
  text-align: center;
  top: 40%;
  left: 50%;
  margin: auto;
  border-radius: 15px;
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