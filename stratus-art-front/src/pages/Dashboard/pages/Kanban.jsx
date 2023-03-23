import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../../../assests/data/dummy";
import { Header } from "../../../components/dashboard/Dashboard";

const Kanban = () => {
  return (
    <div className="tw-m-2 md:tw-m-10 tw-p-2 md:tw-p-10 tw-bg-white tw-rounded-3xl">
      <Header title="Kanban" category="Page" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
