import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Selection,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Search,
} from "@syncfusion/ej2-react-grids";
import {
  customersData,
  // contextMenuItems,
  customersGrid,
} from "../../../assests/data/dummy";
import { Header } from "../../../components/dashboard/Dashboard";

const Customers = () => {
  return (
    <div className="tw-m-2 md:tw-m-10 tw-p-2 md:tw-p-10 tw-bg-white tw-rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Search", "Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
