import React from "react";
import { Box, createStyles, makeStyles } from "@material-ui/core";
import { Columns, DataGrid, RowsProp } from "@material-ui/data-grid";
import CustomNoRowsOverlay from './CustomNoRowsOverlay'
const useStyles = makeStyles(() =>
  createStyles({
    tableContainer: {
      height: 200,
      flexGrow: 1,
    },
    table: {
      width: "100%",
    },
  })
);

interface DataTableProps {
  rows: RowsProp;
  columns: Columns;
}

const DataTable = ({ rows, columns }: DataTableProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.tableContainer}>
      <DataGrid
        className={classes.table}
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight
        components={{noRowsOverlay: CustomNoRowsOverlay,}}
      />
    </Box>
  );
};

export default DataTable;
