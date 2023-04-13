<template>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">리뷰 제목</label>
    <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">리뷰 내용</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="mb-3">
    <label for="formFileSm" class="form-label"></label>
    <input class="form-control form-control-sm" id="formFileSm" type="file">
  </div>

  <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off">
<label class="btn btn-secondary" for="option1">1</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
<label class="btn btn-secondary" for="option2">2</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off">
<label class="btn btn-secondary" for="option3">3</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
<label class="btn btn-secondary" for="option4">4</label>
<input type="radio" class="btn-check" name="options" id="option5" autocomplete="off">
<label class="btn btn-secondary" for="option5">5</label>



<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-outline-success" type="button">Button</button>
  <button class="btn btn-outline-dark" type="button">Button</button>
</div>
</template>

<script>
export default {

}
</script>

<style>
.option2{
  color: aquamarine;
}
</style>