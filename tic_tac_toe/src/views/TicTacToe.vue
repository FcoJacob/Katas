<template>
  <div class="w-screen h-screen flex justify-center items-center bg-blue-950">
    <div class="w-4/12 h-4/6 flex flex-col bg-blue-50 rounded-2xl shadow-md shadow-blue-800 relative">
      <div class="w-full h-14 rounded-t-2xl p-3 flex justify-center items-center border-b border-solid border-gray-500">
        <h1 class="text-gray-700 text-xl font-bold">Tic Tac Toe!</h1>
      </div>
      <div
          data-testid="game-zone"
          class="w-full h-full bg-amber-100 py-3 px-4 flex flex-wrap"
      >
        <button
          v-for="value in 9"
          :key="value"
          class="w-1/3 h-1/3 bg-white border border-solid border-amber-200 font-bold text-9xl"
        >
          0
        </button>
      </div>
      <div class="w-full h-20 border-t border-solid border-gray-500 flex justify-around items-center">
        <!-- Register player X -->
        <div class="w-4/12 h-full flex justify-center items-center">
          Action X
        </div>
        <!-- Timer for change of player -->
        <div class="w-4/12 h-full flex justify-center items-center">
          Timer
        </div>
        <!-- Register player O -->
        <div class="w-4/12 h-full flex justify-center items-center">
          Action O
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>