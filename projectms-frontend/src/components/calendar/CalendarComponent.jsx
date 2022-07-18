import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TaskService from "../../services/TaskService";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// const events = [
//   {
//     title: "Big meeting",
//     allDay: true,
//     start: new Date(2022, 6, 0),
//     end: new Date(2022, 6, 0),
//   },
//   {
//     title: "vacation",
//     allDay: true,
//     start: new Date(2022, 6, 0),
//     end: new Date(2022, 6, 0),
//   },
//   {
//     title: "conderence",
//     allDay: true,
//     start: new Date(2022, 6, 7),
//     end: new Date(2022, 6, 10),
//   },
// ];

function CalendarComponent() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    TaskService.getTasks().then((response) => {
      setTaskList(response.data);
    });
  }, []);

  const events = taskList.map((res) => {
    let start = new Date(res.taskStartDate);
    let startDate = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate() + 1
    );

    let end = new Date(res.taskDueDate);
    let endDate = new Date(
      end.getFullYear(),
      end.getMonth(),
      end.getDate() + 2
    );

    return {
      id: res.taskId,
      title: res.taskName,
      start: startDate,
      end: endDate,
      allDay: true,
    };
  });

  let navigate = useNavigate();
  // const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  // const [selected, setSelected] = useState(events);

  const [selected, setSelected] = useState();

  const handleSelected = (event) => {
    setSelected(event);
    navigate(`/${event.id}&viewTask=${"view"}`);
  };

  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  // }

  return (
    <div className="App">
      <div>
        {/* <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <ReactDatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        /> */}

        {/* <ReactDatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        /> */}

        <button
          style={{ marginTop: "10px" }}
          onClick={() => {
            navigate(`/_addTask&taskAdd=${"add"}`);
          }}
        >
          Add Event
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={events.start}
        endAccessor={events.end}
        style={{ height: 500, margin: "50px" }}
        onSelectEvent={handleSelected}
      />
    </div>
  );
}

export default CalendarComponent;
