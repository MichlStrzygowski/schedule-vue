<template>
  <h1>Demo App</h1>
  <FullCalendar :options='calendarOptions' />

</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import plLocale from '@fullcalendar/core/locales/pl'


export default {
  name: "CalendarView",
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        selectable: true,
        locale: 'pl',
        locales: [ plLocale ],
        dateClick: this.handleDateClick,
        editable: true,
        events: [
          { title: 'Meeting', start: new Date() }
        ]
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    }
  }
}
</script>

<style scoped>

</style>