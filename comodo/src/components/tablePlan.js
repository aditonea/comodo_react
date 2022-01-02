import React, { useState, useEffect } from "react"
import { tableData } from "../tableData";
import { userData } from "../userData";
import Table from "./table";


export default function TablePlan({ clickTable, tables, selection }) {


    return (
        <div className="table--map">
            {tables.sort((a, b) => b.tableNo - a.tableNo).map((table, index) =>
                <Table
                    key={table.tableNo}
                    table={table}
                    clickTable={clickTable}
                    selection={selection}
                    index={index} />)
            }
        </div >
    )
}