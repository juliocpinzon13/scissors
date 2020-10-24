import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interaction from '@fullcalendar/interaction';
import timeline from '@fullcalendar/timeline';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import FullCalendar from '@fullcalendar/vue'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendar: false,
      calendarPlugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interaction, timeline ]
    }
  },
  props: {

  },
  computed: {

  },
  methods: {
    handleDateClick(arg) {
      alert(arg.date)
    }
  }
}