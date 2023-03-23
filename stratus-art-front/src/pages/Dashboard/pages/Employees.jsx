import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import {
  employeesData,
  // contextMenuItems,
  employeesGrid,
} from "../../../assests/data/dummy";
import { Header } from "../../../components/dashboard/Dashboard";

const Employees = () => {
  return (
    <div className="tw-m-2 md:tw-m-10 tw-p-2 md:tw-p-10 tw-bg-white tw-rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
