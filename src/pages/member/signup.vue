<template>
    <div>
        <form action="doJoin" method="POST" class="joinForm" onsubmit="DoJoinForm__submit(this); return false;">                                                                                         
            <h2>회원가입</h2>
                <div class="textForm">
                    <input name="loginId" type="text" class="id" placeholder="아이디">
                    <button type="button" class="btn-dupcheck">아이디 중복확인</button>
                </div>
                <div class="textForm">
                    <input name="loginPw" type="password" class="pw" placeholder="비밀번호">
                </div>
                <div class="textForm">
                    <input name="loginPwConfirm" type="password" class="pw" placeholder="비밀번호 확인">
                </div>
                <div class="textForm">
                    <input name="name" type="password" class="name" placeholder="이름">
                </div>
                <div class="textForm">
                    <input name="email" type="text" class="email" placeholder="이메일">
                </div>
                <div class="textForm">
                    <input name="cellphoneNo" type="number" class="cellphoneNo" placeholder="전화번호">
                    <button type="button" class="btn-sendauth">인증번호 요청</button>
                </div>
                <div class="textForm">
                    <input name="authNo" type="text" class="authNo" placeholder="인증번호 입력">
                </div>
            <input type="submit" class="joinbtn" value="J O I N"/>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  font-family:sans-serif;

}

body {
  background-image:#34495e;
} 

.joinForm {
  width: 700px;
  height: auto;
  padding: 30px, 20px;
  background-color:#ffffff;
  text-align:center;
  top:40%;
  left:50%; 
  margin: auto;
  border-radius: 15px;
} 

.joinForm h2 {
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
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}

.pw {
  width: 100%;
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}

.name {
  width: 100%;
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}

.email {
  width: 100%;
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}

.nickname {
  width: 100%;
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}

.cellphoneNo {
  width: 100%;
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}

.joinbtn {
  position:relative;
  left:40%;
  transform: translateX(-50%);
  margin-bottom: 40px;
  width:80%;
  height:40px;
  background: linear-gradient(125deg,#9bc53d,#4e7d0e,#9bc53d);
  background-position: left;
  background-size: 200%;
  color:white;
  font-weight: bold;
  border:none;
  cursor:pointer;
  transition: 0.4s;
  display:inline;
}

.joinbtn:hover {
  background-position: right;
} 

</style>