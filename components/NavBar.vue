<template>
  <nav
    class="lg:h-20 px-4 lg:pl-8 lg:pr-6 py-2 grid grid-cols-2 lg:grid-cols-12 items-center justify-between"
  >
    <div class="col-span-1 lg:col-span-2">
      <img src="../assets/images/logo.svg" alt="" class="pt-2 w-40" />
    </div>
    <div
      class="col-span-1 flex justify-end lg:hidden items-center "
    >
      <img src="../assets/images/menu.png" class="w-6 cursor-pointer" alt="" @click="toggleMobileMenu" />
    </div>
    <!-- Midle grid -->
    <div class="col-span-6  lg:col-span-8 font-Euclid text-deepGrey text-sm ">
      <div class="flex items-center">
        <div
          class="rounded-full cursor-pointer  lg:flex items-center justify-center mr-2 hidden"
          @click="closeSideNav"
        >
          <img src="../assets/images/left-arrow.svg"  alt="" class="w-11 h-11" />
        </div>
        <div
          class=" flex-1 bg-grey h-10 lg:h-14 grid grid-cols-9 items-center px-3"
        >
          <div class="flex items-center   h-10 lg:h-14 col-span-1 pr-1">
            <p class="text-sm text-deepGrey">All</p>
            <img
              src="../assets/images/arrow-down.svg"
              class="w-3 h-3 ml-4 flex-auto"
            />
            <div class="border-r-2 py-4"></div>
          </div>
          <input
            type="text"
            placeholder="Search for anything here"
            class="bg-inherit flex-1  h-10 lg:h-14 w-6/7 border-none col-span-7 pl-2 focus:ring-0 !outline-none"
          />
          <div
            class="col-span-1 flex items-center justify-end pointer-events-none"
          >
            <img src="../assets/images/search.svg" class="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
    <!-- end middle grid -->
    <div class="col-span-2 ml-2 hidden lg:block">
      <div class="flex items-center justify-end lg:justify-between">
        <button
          type="button"
          class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-light rounded-lg mr-2"
        >
          <img src="../assets/images/alert.svg" class="w-5 h-5" alt="" />
          <div
            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2"
          >
            <span
              class="animate-ping absolute inline-flex w-6 h-6 rounded-full bg-red-500 opacity-75"
            ></span>

            2
          </div>
        </button>

        <img
          src="../assets/images/profile.png"
          class="w-5.5 h-5.5 rounded-full"
          alt=""
        />
        <div>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            class="flex items-center justify-between w-full text-dark py-2 pl-3 pr-4 font-medium"
          >
            Solomon
            <svg
              class="w-5 h-5 ml-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <SideBar
      class="transform top-0 left-0 w-64 bg-white fixed block lg:hidden h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    />
  </nav>
</template>
<script>
import SideBar from './SideBar.vue'
export default {
  components: {
    SideBar,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  computed: {},
  methods: {
    toggleMobileMenu() {
      this.isOpen = !this.isOpen
    },
    closeSideNav () {
      this.$emit('close')
    }
  },
}
</script>

<style></style>
