<template>
  <div class="bg-[#f8f8f8] flex justify-center items-center min-h-screen p-4 lato-font">
    <div class="w-full max-w-[375px] min-h-[812px] bg-white border border-[#e0e0e0] rounded-[44px] relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
      
      <!-- Сітка фону -->
      <div class="absolute inset-0 grid-overlay">
        <div v-for="n in 12" :key="n" class="bg-[#f0f0f0] h-full"></div>
      </div>
      
      <!-- Зображення -->
      <div class="absolute top-[100px] left-0 right-0 flex justify-center items-center">
        <div class="w-[300px] h-[220px] rounded-[15px] overflow-hidden">
          <img 
            src="https://elements-resized.envatousercontent.com/elements-cover-images/17170584-6276-4884-a568-c81f88a63ed1?w=2038&cf_fit=scale-down&q=85&format=auto&s=e203ea40c647f93037f7731ccd4c70987a317c0ff6e612eb9f8dc23baf9ee64c" 
            alt="Dating Social Illustration" 
            class="w-full h-full object-cover"
            @error="handleImageError"
          />
        </div>
      </div>
      
      <!-- Текстовий контент -->
      <div class="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 text-center">
        <div class="bg-[#FF5F5F] rounded-lg py-[13px] px-[15px] mb-5 inline-block">
          <div class="text-white text-xl font-bold tracking-[1px]">
            MEET NEW PEOPLE
          </div>
        </div>
        <div class="text-[10px] leading-[14px] text-[#5A5A64] tracking-normal max-w-[280px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada libero ex, at vestibulum mauris consequat ut. Proin sodales massa a purus scelerisque, vel ultricies leo blandit. Sed urna libero, lacinia sit amet dictum eu, elementum et metus. Donec ut velit faucibus, laoreet dolor eget, ullamcorper erat. Fusce quis lorem justo. Vestibulum hendrerit erat diam, nec sagittis sem efficitur porttitor. Nunc maximus dolor quam, quis iaculis lectus gravida sit amet. Nulla consequat nec enim ac efficitur. 
        </div>
      </div>
      
      <!-- Точки індикатора -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center h-[30px] gap-[3px]">
        <div class="w-[7px] h-[7px] rounded-[1px] bg-[#FF5F5F]"></div>
        <div class="w-[7px] h-[7px] rounded-[1px] bg-[#D9D9D9]"></div>
        <div class="w-[7px] h-[7px] rounded-[1px] bg-[#D9D9D9]"></div>
      </div>
      
      <!-- Кнопки -->
      <div class="absolute bottom-10 left-4 right-4 flex justify-between items-center">
        <button 
          @click="handleSkip"
          class="w-[70px] h-[30px] rounded-lg bg-[#D9D9D9] text-black text-xs font-semibold tracking-[1.2px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#c9c9c9]"
        >
          SKIP
        </button>
        <button 
          @click="handleNext"
          class="w-[70px] h-[30px] rounded-lg bg-[#FF5F5F] text-white text-xs font-semibold tracking-[1.2px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#ff4f4f]"
        >
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}

const handleSkip = () => {
  console.log('Skipping to RegisterPage')
  router.push('/register')
}

const handleNext = () => {
  console.log('Next clicked - перехід на Onboarding2')
  // Перехід на наступний onboarding екран
  router.push('/onboarding2')
}
</script>

<style scoped>
.lato-font {
  font-family: 'Lato', sans-serif;
}

.grid-overlay {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 0 16px;
  pointer-events: none;
  opacity: 0.1;
}

/* Адаптивність */
@media (max-width: 380px) {
  .rounded-\[44px\] {
    border-radius: 20px;
  }
}
</style>