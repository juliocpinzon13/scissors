<template>
  <div class="stylist-calendar">
    <div class="stylist-calendar__top-bar">
      <div class="stylist-calendar__top-bar-title">Scissors
        <span class="stylist-calendar__top-bar-sub-title">Los clientes a tu alcance</span>
      </div>
      <img class="stylist-calendar__top-bar-menu" src="/images/menu.png" alt="menu"/>
    </div>
    <div class="stylist-calendar__main-info">
      <div class="stylist-calendar__calendar">
        <FullCalendar
            defaultView="dayGridMonth"
            :plugins="calendarPlugins"
            :weekends="false"
            :events="[
    { title: 'event 1', date: '2019-06-01' },
    { title: 'event 2', date: '2019-06-02' }
  ]"
            @dateClick="handleDateClick"
        />
      </div>
    </div>
  </div>
</template>

<script src="./StylistCalendar.js"></script>
<style lang="scss">
  @import "StylistCalendar.css";
</style>