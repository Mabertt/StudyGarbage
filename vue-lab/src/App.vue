<template>
  <header>
    <div class="max-w-4xl mx-auto">
      <nav class="p-4 bg-white rounded-b-lg shadow-sm border-b">
        <div class="flex items-center space-x-6">
          <RouterLink 
            to="/" 
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            active-class="text-blue-600 after:w-full"
          >
            Home
          </RouterLink>
          
          <RouterLink 
            to="/about" 
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            active-class="text-blue-600 after:w-full"
          >
            About
          </RouterLink>
          
          <RouterLink 
            to="/contact" 
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            active-class="text-blue-600 after:w-full"
          >
            Contact
          </RouterLink>
          
          <div class="flex-1"></div>
          
          <RouterLink 
            to="/onboarding1" 
            class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            active-class="border-blue-600 text-blue-600 bg-blue-50"
          >
            To Home
          </RouterLink>

          <RouterLink 
            to="/register" 
            class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            active-class="border-blue-600 text-blue-600 bg-blue-50"
          >
            Register
          </RouterLink>
          
          
          <RouterLink 
            to="/login" 
            class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            active-class="border-blue-600 text-blue-600 bg-blue-50"
          >
            Login
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <main class="max-w-4xl mx-auto mt-8 p-4">
    <RouterView />
  </main>
</template>