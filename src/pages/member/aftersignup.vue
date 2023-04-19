<template>
  Member Token onload
</template>

<script>
import axios from 'axios';
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';

export default{
  setup(){
    const router = useRouter();
    const token = sessionStorage.getItem("token");
    const checkin = async () => {
      const res = await axios.post('/Catchvegan/member/aftersignup',null,{
         headers: {
        'AUTHORIZATION': `Bearer ${token}` // 헤더에 JWT 토큰 추가
      }
      }).then((result)=>{
        console.log('result.status'+result.status)
        //성공했을때 코드
        // if(result.status != 200 || result.status != 201){
        //   router.push({
        //   name:"Error"
        // });
        // }
      }).catch((result)=>{
        //에러코드가 왔을때
        if(result.status != 200 || result.status != 201){
          router.push({
            name:"Error"
          })
        }
      })
    }
    checkin();

    const errorcheck = async () => {
      if(token == null){
        router.push({
          name:"Error"
        });
      }
    };
    errorcheck();
  } 
}
</script>

<style>

</style>