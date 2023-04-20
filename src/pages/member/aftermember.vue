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
    const hasMemberIdx = sessionStorage.getItem('memberIdx');
    const hasManagerIdx = sessionStorage.getItem('managerIdx');

     if(hasManagerIdx != null){
        router.push({
            name:"Error"
          })}
        else{
          router.push({
            name:"Main"
          })
        }

    const membercheck = async () => {
      if(hasMemberIdx == null){
        router.push({
          name:"Error"
        });
      }
    };
    membercheck();

    const errorcheck = async () => {
      if(token == null){
        router.push({
          name:"Error"
        });
      }
    };
    errorcheck();
    
    const checkin = async () => {
      const res = await axios.post('/Catchvegan/member/aftermember',null,{
         headers: {
        'AUTHORIZATION': `Bearer ${token}` // 헤더에 JWT 토큰 추가
      }
      }).then((result)=>{
        console.log('result.status'+result.status)
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
  } 
}
</script>

<style>

</style>