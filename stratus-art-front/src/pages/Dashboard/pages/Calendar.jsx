import React from "react";
import {
  ScheduleComponent,
  Day,
  Month,
  Week,
  WorkWeek,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { Header } from "../../../components/dashboard/Dashboard";
import { scheduleData } from "../../../assests/data/dummy";

const Calendar = () => {
  return (
    <div className="tw-m-2 md:tw-m-10 tw-mt-24 md:tw-p-10 tw-bg-white tw-rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        // selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, Month, WorkWeek, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
