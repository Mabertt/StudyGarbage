<template>
  <div class="bg-[#f5f5f5] flex justify-center items-center min-h-screen">
    <div class="w-[375px] h-[812px] bg-[#FF5F5F] flex flex-col justify-center items-center relative">
      
      <img src="https://img.icons8.com/?size=100&id=112373&format=png&color=000000" 
           alt="Heart" 
           class="w-20 h-20 mb-5">
      
      <div class="cherry-bomb text-white text-[50px] text-center mb-15">
        FATED
      </div>
      
      <div class="flex gap-[15px] mb-10">
        <RouterLink to="/login" class="w-[130px] h-[30px] rounded-lg bg-[rgba(255,255,255,0.1)] text-white text-xs font-extrabold tracking-[1.2px] lato flex items-center justify-center transition-all duration-300">
          LOGIN
        </RouterLink>
        <RouterLink to="/register" class="w-[130px] h-[30px] rounded-lg bg-white text-[#FF5F5F] text-xs font-extrabold tracking-[1.2px] lato flex items-center justify-center transition-all duration-300">
          REGISTER
        </RouterLink>
      </div>
      
      <div class="flex flex-col items-center w-full">
        <div class="w-[280px] bg-white rounded-lg py-4 px-5 mb-[15px]">
          <input type="text" v-model="form.username" class="w-full border-none outline-none bg-transparent text-center text-[15px] font-normal tracking-[1.5px] text-[#32323C] lato placeholder-[#32323C]" placeholder="user name">
        </div>
        
        <div class="w-[280px] bg-white rounded-lg py-4 px-5 mb-[15px]">
          <input type="password" v-model="form.password" class="w-full border-none outline-none bg-transparent text-center text-[15px] font-normal tracking-[1.5px] text-[#32323C] lato placeholder-[#32323C]" placeholder="password">
        </div>
        
        <div class="w-[280px] bg-white rounded-lg py-4 px-5 mb-[15px]">
          <input type="email" v-model="form.email" class="w-full border-none outline-none bg-transparent text-center text-[15px] font-normal tracking-[1.5px] text-[#32323C] lato placeholder-[#32323C]" placeholder="email">
        </div>
        
        <div class="lato text-[10px] font-normal tracking-normal text-white no-underline mt-[5px] mb-[10px] self-end mr-[47.5px]">
          FORGOT PASSWORD?
        </div>
        
        <div class="w-[280px] bg-white rounded-lg py-4 px-5 mb-[15px] text-center">
          <button @click="handleRegister" class="w-full border-none bg-transparent cursor-pointer text-[15px] font-extrabold tracking-[1.5px] text-[#FF5F5F] lato">
            REGISTER
          </button>
        </div>
        
        <div class="lato text-[10px] font-normal tracking-normal text-white text-center">
          ALREADY HAVE AN ACCOUNT? <RouterLink to="/login" class="text-white underline font-extrabold">LOGIN</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  username: '',
  password: '',
  email: ''
})

const handleRegister = () => {
  console.clear()
  console.log('--- REGISTER DATA ---')
  console.log('Username:', form.value.username)
  console.log('Password:', form.value.password)
  console.log('Email:', form.value.email)
  console.log('Full form object:', form.value)
  console.log('----------------------')
}
</script>

<style scoped>
.cherry-bomb {
  font-family: 'Cherry Bomb', cursive;
}
.lato {
  font-family: 'Lato', sans-serif;
}
.mb-15 {
  margin-bottom: 3.75rem; /* 60px */
}
</style>