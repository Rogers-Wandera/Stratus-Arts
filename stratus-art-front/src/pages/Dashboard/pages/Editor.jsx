import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { Header } from "../../../components/dashboard/Dashboard";
const Editor = () => {
  return (
    <div className="tw-m-2 md:tw-m-10 tw-p-2 md:tw-p-10 tw-bg-white tw-rounded-3xl">
      <Header title="Editor" category="Page" />
      <RichTextEditorComponent>
        <Inject services={[Toolbar, HtmlEditor, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
