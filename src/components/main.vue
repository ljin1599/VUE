<script setup>
  import { ref } from "vue" // 뷰에서 컴포넌트 또는 DOM에 접근하기 위해 사용하는 속성

  import { useListStore } from "../stores/list"  // 저장소
  import { storeToRefs } from "pinia";  // 구조분해할당

  const time = ref("")  // 언제 선택창(select)
  const todo = ref("") // 할일 입력창(input)
  const list = useListStore() // 리스트 저장
  const { getDataAll } = storeToRefs(list) // 구조분해할당

  // Props로 값 넘기기
  const title = ref('To_Do_List')
  const date = ref('7.4')

  /*
  name : time todo 입력값 추가 함수
  date : 22.07.10
  */
  function addList() {
      list.$patch({ list: [ ...list.getDataAll, time.value, todo.value] });
      // 리스트에 추가 후 입력창 비우기
      time.value = "";
      todo.value = "";
  }

  defineProps({
    title: String,
    date: Number
  })

  defineEmits ({

  })

</script>

<template> 
  <div>
    <!-- 제목 -->
    <h1>{{ title }}</h1> <!-- props -->

    <!-- 날짜 표시 -->
    <h2>{{ date }} 수요일</h2> <!-- props -->

    <!-- 언제 선택창 -->
    <label class>언제 </label>
    <select v-model="time">
      <option>Today</option>
      <option>아침</option>
      <option>점심</option>
      <option>저녁</option>
    </select>
    
    <div>
      <!-- 할일 입력창 / keyup.enter : 엔터키 실행시 함수 실행 -->
      <input type="text" v-model="todo" @keyup.enter="addList([time, todo])"/>

      <!--언제,할일 추가 버튼 -->
      <button @click="addList([time, todo])" >추가</button>

      <!--  리스트 출력 -->
      <p v-for="(time, todo, index) in getDataAll" :key="index">
        {{ time, todo }}
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
