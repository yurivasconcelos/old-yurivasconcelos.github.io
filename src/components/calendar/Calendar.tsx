import { useRef, useState } from 'react';
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  // EventContentArg,
  // formatDate,
} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';
// import './booka-calendar.css';
import './booka-calendar2.css';
import {
  Dialog,
  DialogContent,
  Button,
  Input,
  Label,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../@shadcn';
import { toast } from 'sonner';
import { PersonIcon } from '@radix-ui/react-icons';

export function Calendar() {
  const [weekendsVisible, setWeekendsVisible] = useState<boolean>(true);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [open, setOpen] = useState(false);
  const calendarRef = useRef<FullCalendar>(null!);

  console.log(currentEvents, setWeekendsVisible);
  // function handleWeekendsToggle() {
  //   setWeekendsVisible(!weekendsVisible)
  // }

  function handleDateSelect(selectInfo: DateSelectArg) {
    console.log(selectInfo, createEventId());
    setOpen(true);
  }

  function handleEventClick(clickInfo: EventClickArg) {
    toast.info(`You clicked here ${clickInfo.event.title}`)
  }

  function handleEvents(events: EventApi[]) {
    setCurrentEvents(events);
  }

  function handleSaveEvent(myevent: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const calendarApi = calendarRef.current.getApi();

    setOpen(false);
    const t = document.getElementById('sg-test');
    console.log(t);
    toast.success('Evento criado', {
      // position: 'top-right',
      icon: <PersonIcon />,
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'OK',
        onClick: () => console.log('Undo'),
      },
      richColors: true,
      cancel: false,
      // className:'bg-green-50'
    });

    calendarApi.addEvent({
      id: createEventId(),
      title: 'Seu Evento Aqui',
      start: Date.now(),
      end: Date.now() + 10000000,
      color: '#FC47E4',
    });
    // calendarApi.scrollToTime(Date.now());

    // const title = prompt('Please enter a new title for your event');
    // const calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
    console.log(myevent);
  }

  return (
    <>
      <div className='demo-app'>
        {/* <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      /> */}
        <div className='demo-app-main p-2'>
          <FullCalendar
            locale={'pt-BR'}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            }}
            //custom views like 4 days, need to add to header tool bar.
            // views={{
            //   timeGridFourDay: {
            //     type: 'timeGrid',
            //     duration: { days: 4 },
            //   },
            // }}
            initialView={window.innerWidth > 1000 ? 'dayGridMonth' : 'timeGridWeek'}
            //slot
            slotLabelInterval={{ hours: 2 }}
            slotDuration={{ minutes: 15 }}
            allDaySlot={false}
            //sizing:
            height={window.innerWidth > 1000 ? '80vh' : '75dvh'}
            aspectRatio={2}
            //expandRows={false}

            nowIndicator={true}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            // businessHours={{
            //   daysOfWeek: [1, 2, 3, 4, 5],
            // }}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            // eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          
          
          defaultAllDay={false}
          */
            ref={calendarRef}
          />
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild />
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Adicionar Evento</DialogTitle>
            {/* <DialogDescription>Crie um evento no calendário.</DialogDescription> */}
          </DialogHeader>
          <div className='grid pt-4 gap-4'>
            <div className='grid grid-cols-3 items-center gap-2'>
              <Label htmlFor='servico'>Serviço</Label>
              <Select>
                <SelectTrigger className='col-span-2'>
                  <SelectValue placeholder='Escolha um serviço' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Serviços</SelectLabel>
                    <SelectItem value='unha'>Unha</SelectItem>
                    <SelectItem value='cabelo'>Cabelo</SelectItem>
                    <SelectItem value='sombrancelha'>Sombrancelha</SelectItem>
                    <SelectItem value='tatuagem'>Tatuagem</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='grid grid-cols-3 items-center gap-2'>
              <Label htmlFor='staff'>Staff</Label>
              <Select>
                <SelectTrigger className='col-span-2'>
                  <SelectValue placeholder='Escolha um membro' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup id='sg-test'>
                    <SelectLabel>Serviços</SelectLabel>
                    <SelectItem value='joao'>Joao</SelectItem>
                    <SelectItem value='Maria'>Maria</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='height'>Preço</Label>
              <Input id='price' defaultValue='R$80,00' className='col-span-2 h-8' />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveEvent} type='submit' className='mt-4 h-8 w-full'>
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

// function renderEventContent(eventInfo: EventContentArg) {
//   return (
//     <>
//       <div className=''>
//         <b>{eventInfo.event.title}</b>
//         <i>: {eventInfo.timeText} </i>
//       </div>
//     </>
//   );
// }

// function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
//   return (
//     <div className='demo-app-sidebar'>
//       <div className='demo-app-sidebar-section'>
//         <h2>Instructions</h2>
//         <ul>
//           <li>Select dates and you will be prompted to create a new event</li>
//           <li>Drag, drop, and resize events</li>
//           <li>Click an event to delete it</li>
//         </ul>
//       </div>
//       <div className='demo-app-sidebar-section'>
//         <label>
//           <input
//             type='checkbox'
//             checked={weekendsVisible}
//             onChange={handleWeekendsToggle}
//           ></input>
//           toggle weekends
//         </label>
//       </div>
//       <div className='demo-app-sidebar-section'>
//         <h2>All Events ({currentEvents.length})</h2>
//         <ul>
//           {currentEvents.map((event) => (
//             <SidebarEvent key={event.id} event={event} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// function SidebarEvent({ event }) {
//   return (
//     <li key={event.id}>
//       <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//       <i>{event.title}</i>
//     </li>
//   )
// }
