<template>
  <div class="font-Sonoma">
    <div
      class="px-4 bg-tetiary pt-2 pb-3 text-white flex justify-between items-center"
    >
      <p class="text-lg">Agent</p>
      <input
        v-if="isOpen"
        v-model="searchAgent"
        type="text"
        placeholder="Search for agent"
        class="bg-inherit flex-1 w-6/7 border-none col-span-7 pl-2 focus:ring-0 !outline-none"
      />
      <img
        @click="openSearch"
        src="../assets/images/search-white.svg"
        class="w-4 h-4"
      />
    </div>
    <div
      class="text-sm font-light pt-2 text-center text-faded border-b border-gray-200"
    >
      <ul class="flex justify-between -mb-px">
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >All
          </a>
        </li>
        <li class="mr-2 flex items-center">
          <img
            class="flex-shrink-0 w-2.5 h-2.5"
            src="../assets/images/green-bullet.svg"
          />

          <a
            href="#"
            class="inline-block p-2 text-dark border-b-2 border-dark rounded-t-lg active"
            >Online</a
          >
        </li>
        <li class="mr-2 flex items-center">
          <img
            class="flex-shrink-0 w-2.5 h-2.5"
            src="../assets/images/red-bullet.svg"
          />

          <a
            href="#"
            class="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600"
            >Offline</a
          >
        </li>
      </ul>
    </div>

    <!-- Agent List -->
    <div>
      <ul>
        <li v-if="filterByName.length < 1">
        No available agent
        </li>
        <li v-for="(agent, i) in filterByName" :key="i">
          <div class="grid grid-cols-4 py-4 pl-1 pr-2 items-center">
            <div class="col-span-1 pr-2 flex flex-col items-center">
              <img
                src="../assets/images/profile.png"
                class="w-12 h-12 rounded-full"
                alt=""
              />
            </div>
            <div class="col-span-2 text-xs">
              <p class="">{{agent.name}}</p>
              <p class="text-mediumGrey mt-1">{{agent.phoneNumber}}</p>
              <p class="text-mediumGrey mt-1">{{agent.location}}</p>
            </div>
            <div class="col-span-1 text-xs flex justify-end pr-4">
              <img src="../assets/images/greater-than.png" alt="" />
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      searchAgent: "",
      agents: [
      {name: 'Abiodun Olawale Solomon', phoneNumber: '08069786754', location: 'Akure'},
      {name: 'Rebekah Chinanza Okoro', phoneNumber: '08069786754', location: 'Akure'},
      {name: 'Segun AyoDele Solomon', phoneNumber: '08069786754', location: 'Akure'},
      {name: 'Mohammed Daniel Peter', phoneNumber: '08069786754', location: 'Akure'},
      {name: 'Bunmi Jack David', phoneNumber: '08069786754', location: 'Akure'},
      {name: 'Abiola Fabunmi Joseph', phoneNumber: '08069786754', location: 'Akure'},
      ]
    }
  },
  computed: {
    filterByName() {
      return this.agents.filter((name) => {
        return name.name.toLowerCase().includes(this.searchAgent);
      });
    }
  },
  methods: {
    openSearch() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style></style>
