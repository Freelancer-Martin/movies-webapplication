<template>
    <div class="app">
      <div class="container">
        <h1>Continue to select.</h1>
        <p class="description">You can continue to select with the currently selected target.</p>
        <vue-selecto
          dragContainer=".elements"
          v-bind:selectableTargets='[".selecto-area .cube"]'
          v-bind:hitRate='100'
          v-bind:selectByClick='true'
          v-bind:selectFromInside='true'
          v-bind:continueSelect='true'
          v-bind:ratio='0'
          @select="onSelect"
        ></vue-selecto>
  
        <div class="elements selecto-area" id="selecto1">
          <div class="cube" v-for="cube in cubes" :key="cube" :data-seat="cube"></div>
        </div>
        <div class="empty elements"></div>
  
        <div class="booking-form">
          <h2>Book Your Seat</h2>
          <form @submit.prevent="submitBooking">
            <div class="form-group">
              <label for="customerName">Customer Name:</label>
              <input type="text" id="customerName" v-model="bookingData.customerName" required>
            </div>
            <div class="form-group">
              <label for="customerEmail">Customer Email:</label>
              <input type="email" id="customerEmail" v-model="bookingData.customerEmail" required>
            </div>
            <button type="submit" :disabled="!canSubmitBooking">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { VueSelecto } from "vue3-selecto";
  
  export default {
    components: {
      VueSelecto,
    },
    data() {
      return {
        cubes: Array.from({ length: 60 }, (_, i) => i), // Generate array from 0 to 59
        bookingData: {
          customerName: '',
          customerEmail: '',
        },
      };
    },
    methods: {
      async onSelect(e) {
        const selectedSeats = e.added.map(el => el.dataset.seat);
        // Now you have an array of selected seat numbers (or IDs)
  
        // Update bookingData with selected seat numbers
        this.bookingData.seatNumber = selectedSeats.join(', ');
      },
      async submitBooking() {
        try {
          const response = await fetch('http://localhost:8080/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.bookingData),
          });
  
          if (!response.ok) {
            throw new Error('Failed to submit booking');
          }
  
          // Handle successful response if needed
          console.log('Booking submitted successfully');
        } catch (error) {
          console.error('Error submitting booking:', error);
          // Handle error
        }
      },
      canSubmitBooking() {
        // Add any validation logic here
        return this.bookingData.customer_name && this.bookingData.customer_email;
      },
    },
  };
  </script>
  
  <style>
  html, body, #root {
      position: relative;
      margin: 0;
      padding: 0;
      height: 100%;
      color: #333;
      background: #fdfdfd;
  }
  
  .app {
      position: relative;
      min-height: 100%;
      padding: 10px 20px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
  }
  
  .container {
      max-width: 800px;
      ;
  }
  
  body {
      background: #fff;
  }
  
  .logo {
      position: relative;
      width: 150px;
      height: 150px;
      margin: 0px auto;
      font-size: 0;
      text-align: left;
  }
  
  .logo.logos {
      width: 320px;
      text-align: center;
  }
  
  .logos .selecto {
      padding: 16px;
  }
  
  .logo img {
      position: relative;
      height: 100%;
      box-sizing: border-box;
  }
  
  .cube {
      display: inline-block;
      border-radius: 5px;
      width: 40px;
      height: 40px;
      margin: 4px;
      background: #eee;
      --color: #4af;
      line-height: 40px;
  }
  
  h1, .description {
      text-align: center;
  }
  
  .button {
      border: 1px solid #333;
      color: #333;
      background: transparent;
      appearance: none;
      -webkit-appearance: none;
      box-sizing: border-box;
      cursor: pointer;
      width: 120px;
      height: 42px;
      font-size: 14px;
      letter-spacing: 1px;
      transition: all ease 0.2s;
      margin: 0px 5px;
  }
  
  .button:hover {
      background: #333;
      color: white;
  }
  
  .elements {
      margin-top: 40px;
      border: 2px solid #eee;
  }
  
  .selecto-area {
      padding: 20px;
  }
  
  #selecto1 .cube {
      transition: all ease 0.2s;
  }
  
  .moveable #selecto1 .cube {
      transition: none;
  }
  
  .selecto-area .selected {
      color: #fff;
      background: var(--color);
  }
  
  .scroll {
      overflow: auto;
      padding-top: 10px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  
  .infinite-viewer, .scroll {
      width: 100%;
      height: 300px;
      box-sizing: border-box;
  }
  
  .infinite-viewer .viewport {
      padding-top: 10px;
  }
  
  .empty.elements {
      border: none;
  }
  
  .correct {
      position: relative;
      padding: 20px;
      text-align: center;
      margin: auto;
      width: 100%;
  }
  .correct .target {
      position: relative;
      width: 100px;
      height: 100px;
      color: #fff;
      margin: 10px 20px;
      line-height: 100px;
      text-align: center;
      display: inline-block;
  }
  .correct svg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      opacity: 0.9;
      transform: translateZ(0px);
  }
  .correct svg path {
      stroke: #333;
      stroke-width: 2;
      fill: transparent;
  }
</style>
  