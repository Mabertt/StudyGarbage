<template>
  <div class="min-h-screen bg-[#f8f8f8] flex justify-center items-center font-lato">
    <!-- Mobile Container -->
    <div class="relative w-[375px] h-[812px] bg-white border border-[#e0e0e0] rounded-[44px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
      
      <!-- Grid Overlay -->
      <div class="absolute inset-0 pointer-events-none opacity-10 grid grid-cols-12 gap-5 px-4">
        <div v-for="i in 12" :key="i" class="bg-[#f0f0f0] h-full"></div>
      </div>
      
      <!-- Hero Image -->
      <div class="absolute top-[100px] left-0 right-0 flex justify-center items-center">
        <div class="w-[300px] h-[220px] rounded-[15px] overflow-hidden">
          <img 
            :src="heroImage" 
            alt="Dating Social Illustration" 
            class="w-full h-full object-cover"
            @error="handleImageError"
          />
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 text-center">
        <!-- Title Badge -->
        <div class="bg-[#FF5F5F] rounded-lg py-[13px] px-[15px] mb-5 inline-block">
          <h1 class="text-white text-xl font-bold tracking-[1px]">
            {{ title }}
          </h1>
        </div>
        
        <!-- Description -->
        <p class="text-[10px] leading-[14px] text-[#5A5A64] tracking-normal max-w-[280px] mx-auto">
          {{ description }}
        </p>
      </div>
      
      <!-- Progress Dots -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center h-[30px] gap-[3px]">
        <div 
          v-for="(dot, index) in progressDots" 
          :key="index"
          class="w-[7px] h-[7px] rounded-[1px] transition-colors duration-300"
          :class="dot.active ? 'bg-[#FF5F5F]' : 'bg-[#D9D9D9]'"
        ></div>
      </div>
      
      <!-- Navigation Buttons -->
      <div class="absolute bottom-10 left-4 right-4 flex justify-between items-center">
        <button 
          @click="handleSkip"
          class="w-[70px] h-[30px] rounded-lg bg-[#D9D9D9] text-black text-xs font-semibold tracking-[1.2px] flex items-center justify-center transition-all duration-300 hover:bg-[#c9c9c9] active:scale-95"
        >
          SKIP
        </button>
        <button 
          @click="handleNext"
          class="w-[70px] h-[30px] rounded-lg bg-[#FF5F5F] text-white text-xs font-semibold tracking-[1.2px] flex items-center justify-center transition-all duration-300 hover:bg-[#ff4a4a] active:scale-95"
        >
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive data
const heroImage = ref('https://elements-resized.envatousercontent.com/elements-cover-images/bdfffbdc-fce8-472a-9250-b26f570ece3a?w=2038&cf_fit=scale-down&q=85&format=auto&s=b13c249aff40662e789f2f6a017189952fb44f55e39c0f9834845c936cb351fd')
const title = ref('MEET NEW PEOPLE')
const description = ref('Maecenas in placerat nibh. Integer sollicitudin sapien et massa varius venenatis. Nulla facilisis purus nec nibh posuere volutpat. Nunc congue, arcu sit amet imperdiet sodales, tellus odio sagittis turpis, sed tincidunt nibh urna in leo. Duis et sodales elit, ut cursus est. Aenean magna metus, volutpat vel dignissim quis, malesuada eget ex.')

// Progress dots state
const progressDots = ref([
  { active: false },
  { active: true },
  { active: false }
])

// Event handlers
const handleImageError = () => {
  console.error('Failed to load hero image')
  // You could set a fallback image here:
  // heroImage.value = '/fallback-image.jpg'
}

const handleSkip = () => {
  console.log('Skipping to RegisterPage')
  router.push('/register')
}

const handleNext = () => {
  console.log('Next clicked - перехід на Onboarding3')
  // Перехід на наступний onboarding екран
  router.push('/onboarding3')
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap');

.font-lato {
  font-family: 'Lato', sans-serif;
}
</style>