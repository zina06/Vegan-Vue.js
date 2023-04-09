<template>
 <div class="search-container">
   <div class="search" >
        <input type="text" placeholder="search">
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" id="searchimg">
   </div>
 </div>
   
</template>

<script>
export default {

}
</script>

<style>
.search-container {
  display: flex; /* Flexbox를 사용 */
  justify-content: left; /* 가로 중앙 정렬 */
  align-items: left; /* 세로 중앙 정렬 */
  margin-top: 50px;
  margin-left: 40px;
}
</style>