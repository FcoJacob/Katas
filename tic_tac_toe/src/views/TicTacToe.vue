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
          v-for="(value, index) in tabletGame"
          :key="index+value"
          role="buttonTabletGame"
          class="w-1/3 h-1/3 bg-white border border-solid border-amber-200 font-bold text-8xl"
          :disabled="false"
          @click="playerMovement(index)"
        >
          {{ value }}
        </button>
      </div>
      <div class="w-full h-28 border-t border-solid border-gray-500 flex justify-around items-center">
        <!-- Register player X -->
        <div
          data-testid="scoreX"
          class="w-4/12 h-full flex flex-col justify-start items-center"
        >
          <span class="w-full h-1/3 font-bold flex justify-center items-center pt-2">Won por player X</span>
          <span
            class="w-full h-2/3 flex justify-center items-center text-2xl pb-2 font-bold"
          >
            {{ score.playerX }}
          </span>
        </div>
        <!-- Timer for change of player -->
        <div class="w-4/12 h-full flex flex-col justify-start items-center">
          <span class="w-full h-1/3 font-bold flex justify-center items-center pt-2">{{ messagesGame }}</span>
          <button
            v-if="showBtnReturnGame && !showBtnStartGame"
            class="w-full h-1/3 mt-3 rounded-md mb-2 bg-purple-700 shadow-sm shadow-purple-400 py-1 text-white font-semibold active:shadow-none animate-pulse hover:animate-none hover:bg-purple-800 flex justify-center items-center"
            @click.prevent="restartGame"
          >
            Return Game?
          </button>
          <button
            v-else-if="showBtnStartGame"
            class="w-full h-1/3 mt-3 rounded-md mb-2 bg-purple-700 shadow-sm shadow-purple-400 py-1 text-white font-semibold active:shadow-none animate-pulse hover:animate-none hover:bg-purple-800 flex justify-center items-center"
            @click.prevent="startGame"
          >
            Start Game
          </button>
          <span v-else class="w-full h-2/3 font-bold flex justify-center items-center text-2xl pb-2">05:00</span>
        </div>
        <!-- Register player O -->
        <div
          data-testid="scoreO"
          class="w-4/12 h-full flex flex-col justify-start items-center"
        >
          <span class="w-full h-1/3 font-bold flex justify-center items-center pt-2">Won por player O</span>
          <span class="w-full h-2/3 flex justify-center items-center text-2xl pb-2 font-bold">
            {{ score.playerO }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TicTacToe from "@/views/TicTacToe";
import { computed, ref } from "vue";

const initGame = new TicTacToe()
const messagesGame = computed(() => initGame.getMessage())
const tabletGame = computed(() => initGame.getTabletGame())
const score = computed(() => initGame.getScore())
const showBtnReturnGame = computed(() => initGame.getReturnGame())
const showBtnStartGame = ref(true)

const startGame = () => {
  initGame.init()
  showBtnStartGame.value = false
}

const restartGame = () => {
  console.log("restartGame")
  // initGame.init()
  // showBtnStartGame.value = true
}

const playerMovement = (index: number) => {
  if(!showBtnStartGame.value) {
    initGame.play(index)
  }
}
</script>