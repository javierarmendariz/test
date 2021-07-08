import React, { useState } from "react";
import GC from "@grapecity/spread-sheets";
import { SpreadSheets, Worksheet } from "@grapecity/spread-sheets-react";
import "@grapecity/spread-sheets-charts";
import * as spreadExcel from "@grapecity/spread-excelio";
import saveAs from "file-saver";

const spreadjsKey = '';
GC.Spread.Sheets.LicenseKey = spreadjsKey;
spreadExcel.LicenseKey = spreadjsKey;

const data = [
  {
    name: "A",
    numberOne: 42000,
    numberTwo: 8000
  },
  {
    name: "B",
    numberOne: 49000,
    numberTwo: 1000
  },
  {
    name: "C",
    numberOne: 49000,
    numberTwo: 1000
  },
  {
    name: "D",
    numberOne: 40000,
    numberTwo: 10000
  },
  {
    name: "E",
    numberOne: 30000,
    numberTwo: 20000
  },
  {
    name: "F",
    numberOne: 30000,
    numberTwo: 20000
  },
  {
    name: "G",
    numberOne: 25000,
    numberTwo: 25000
  },
  {
    name: "H",
    numberOne: 10000,
    numberTwo: 40000
  },
  {
    name: "I",
    numberOne: 3000,
    numberTwo: 7000
  },
  {
    name: "J",
    numberOne: 2000,
    numberTwo: 8000
  },
  {
    name: "K",
    numberOne: 25000,
    numberTwo: 25000
  }
];

const ExcelExport = () => {
  const [spread, setSpread] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const workbookInit = (spreadInstance) => {
    setSpread(spreadInstance);
  };

  const importFile = async () => {
    const excelFile = await imporFiletAsync();
    const excelIO = new spreadExcel.IO();
    excelIO.open(
      excelFile,
      (json) => {
        spread.fromJSON(json);
      },
      (e) => {
        console.log(e);
      }
    );
  };

  const imporFiletAsync = async () => {
    const file = await fetch("/Book1.xlsx");
    const blobFile = await file.arrayBuffer();
    return blobFile;
  };

  const exportFile = () => {
    const excelIO = new spreadExcel.IO();
    let fileName = "Excel";
    if (fileName.substr(-5, 5) !== ".xlsx") {
      fileName += ".xlsx";
    }

    const json = JSON.stringify(spread.toJSON({ includeBindingSource: true }));
    excelIO.save(
      json,
      (blob) => {
        saveAs(blob, fileName);
      },
      (e) => {
        console.log(e);
      }
    );
  };

  const addData = () => {
    const sheet = spread.sheets[1];
    sheet.tables.addFromDataSource("table1", 0, 0, data);
    const tableStyle = GC.Spread.Sheets.Tables.TableThemes.light1;
    const theTable = sheet.tables.findByName("table1");
    theTable.style(tableStyle);
  };

  const generatesFile = async () => {
    setIsLoading(true);
    await importFile();
    setTimeout(() => {
      addData();
      exportFile();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <input
        type="button"
        id="loadExcel"
        value="Export"
        onClick={generatesFile}
        disabled={isLoading}
      />
      <SpreadSheets workbookInitialized={workbookInit}>
        <Worksheet />
      </SpreadSheets>
    </div>
  );
};

export default ExcelExport;
