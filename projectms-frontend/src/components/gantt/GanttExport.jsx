import React, { Component } from "react";
import Gantt from "./components/Gantt";
import Toolbar from "./components/Toolbar";
import MessageArea from "./components/MessageArea";
import { useState } from "react";
import { useEffect } from "react";
import TaskService from "../../services/TaskService";

function GanttExport() {
  const [currentZoom, setCurrentZoom] = useState("Days");
  const [messages, setMessages] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    TaskService.getTasks().then((response) => {
      setTaskList(response.data);
    });
  }, []);

  const events = taskList.map((res) => {
    return {
      id: res.taskId,
      text: res.taskName,
      start_date: res.taskStartDate,
      duration: res.taskDuration,
      progress: 0.6,
    };
  });

  const addMessage = (message) => {
    const maxLogLength = 5;
    const newMessage = { message };
    const messages = [newMessage, ...this.state.messages];

    if (messages.length > maxLogLength) {
      messages.length = maxLogLength;
    }
    setMessages({ messages });
  };

  const logDataUpdate = (type, action, item, id) => {
    let text = item && item.text ? ` (${item.text})` : "";
    let message = `${type} ${action}: ${id} ${text}`;
    if (type === "link" && action !== "delete") {
      message += ` ( source: ${item.source}, target: ${item.target} )`;
    }
    addMessage(message);
  };

  const handleZoomChange = (zoom) => {
    setCurrentZoom(zoom);
  };
  const dataEvent = {
    data: events,
    links: [{ id: 1, source: 1, target: 2, type: "0" }],
  };

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show your Ganatt Chart
      </button>

      {show && (
        <div className="gantt-container">
          <div className="zoom-bar">
            <Toolbar zoom={currentZoom} onZoomChange={handleZoomChange} />
          </div>
          <Gantt
            tasks={dataEvent}
            zoom={currentZoom}
            onDataUpdated={logDataUpdate}
          />
          <MessageArea messages={messages} />
        </div>
      )}
    </div>
  );
}

export default GanttExport;
