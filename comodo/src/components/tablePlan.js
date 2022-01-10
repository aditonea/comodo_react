import React from "react"
import Table from "./table";


export default function TablePlan({
    tables,
    clickTable,
    clearTable,
    selection
}) {

    return (
        <div className="table-map">
            {tables.sort((a, b) => b.tableNo - a.tableNo).map((table, index) =>
                <Table
                    key={table.tableNo}
                    tableData={table}
                    clickTable={clickTable}
                    clearTable={clearTable}
                    index={index}
                    selection={selection}
                />)
            }
        </div >

    )
}