import { EventInput } from '@fullcalendar/core'

let eventGuid = 0
const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Another Event',
    start: Date.now() - 999,
    backgroundColor: '#FFF000',   // an option!
    textColor: 'black', // an option!
    display: 'block',
    borderColor: 'black'
  },
  {
    id: createEventId(),
    title: 'Yuri Event',
    start: todayStr + 'T18:00:00',
    color: 'yellow',   // an option!
    textColor: 'black', // an option!
    backgroundColor: 'green',
    extendedProps: {
      department: 'BioChemistry'
    },
    description: 'Lecture'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
