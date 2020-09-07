import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Checkbox } from "@material-ui/core";

//스타일(열)
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

//스타일(행)
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

//객체 담을곳
function createData(chkBox, title, quantity, price, btn1, btn2) {
  return { chkBox, title, quantity, price, btn1, btn2 };
}

const rows = [
  createData(
    <Checkbox
      color="primary"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />,
    "물품명1",
    "123",
    "가격",
    <Button>주문</Button>,
    <Button>삭제</Button>
  ),
  createData(
    <Checkbox
      color="primary"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />,
    "물품명2",
    "제목2",
    "가격",
    <Button>주문</Button>,
    <Button>삭제</Button>
  ),
  createData(
    "",
    "",
    "",
    "",
    "",
    "",
    "상품 가격 : 10,100\n배송비 : 1000\n적립예상포인트 -"
  ),
];

//스타일 커스텀
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  let items = props;
  console.log(items);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">물품명</StyledTableCell>
            <StyledTableCell align="right">수량</StyledTableCell>
            <StyledTableCell align="right">가격</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.chkBox}
              </StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.btn1}</StyledTableCell>
              <StyledTableCell align="left">{row.btn2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
