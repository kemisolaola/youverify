<template>
  <div class="font-Sonoma">
    <div class="pl-4 bg-tetiary pt-2 pb-3 text-white">
      <p class="text-lg">Task</p>
    </div>
    <div
      class="text-sm font-light pt-2 text-center text-faded border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
    >
      <ul class="flex justify-around xl:justify-start lg:flex-wrap -mb-px text-xs xl:text-xs">
        <li class="mr-2 xl:mr-0">
          <a
            href="#"
            class="inline-block p-2 border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300"
            >24 Unassigned
          </a>
        </li>
        <li class="mr-2 xl:mr-1">
          <a
            href="#"
            class="inline-block p-2 text-dark border-b-2 border-dark rounded-t-lg active"
            >12 Assigned</a
          >
        </li>
        <li class="mr-2 xl:mr-1">
          <a
            href="#"
            class="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600"
            >30 Completed</a
          >
        </li>
      </ul>
    </div>
    <!-- Task List -->

    <div>
      <ul>
        <li v-for="i in 6" :key="i">
          <div class="grid grid-cols-5  md:grid-cols-4 p-4 xl:px-1 xl:grid-cols-5 items-center">
          <div class="col-span-1 pr-2 flex flex-col items-center">
            <img src="../assets/images/add.svg" class="w-10 mb-1" alt="" />
            <p class="text-faintGrey text-xs text-center">Assign Agent</p>
          </div>
          <div class="col-span-3 md:col-span-2 xl:col-span-3 text-xs justify-center flex flex-col ">
            <p class="">Abiodun Olawale Solomon</p>
            <p class="text-mediumGrey mt-1">12b Emmanuel Hign street, Sur...</p>
            <div class="flex items-center mt-1">
              <img src="../assets/images/building.svg" alt="" />
              <p class="text-mediumGrey ml-1">Sterling Bank Plc</p>
            </div>
            <div class="pt-3">
              <p class="text-capitalize text-blue">A Day Ago</p>
            </div>
          </div>
          <div class="col-span-1 text-xs flex justify-center">
            <img src="../assets/images/greater-than.png" alt="" >
          </div>
          </div>
          <hr >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style></style>
