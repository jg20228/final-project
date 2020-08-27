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
function createData(name, calories, fat, carbs, protein, price, btn1, btn2) {
  return { name, calories, fat, carbs, protein, price, btn1, btn2 };
}

const rows = [
  createData(
    <Checkbox
      color="primary"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />,
    "물품명1",
    "123",
    "tjd***",
    "1시간전",
    4.0,
    1000,
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
    "202***",
    "2시간전",
    4.3,
    1000,
    <Button>주문</Button>,
    <Button>삭제</Button>
  ),
  createData(
    <Checkbox
      color="primary"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />,
    "물품명3",
    "제목3",
    "lin***",
    "3시간전",
    6.0,
    1000,
    <Button>주문</Button>,
    <Button>삭제</Button>
  ),
  createData(
    <Checkbox
      color="primary"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />,
    "물품명4",
    "제목4",
    "ab***",
    "4시간전",
    4.3,
    1000,
    <Button>주문</Button>,
    <Button>삭제</Button>
  ),
  createData(
    <Checkbox
      color="primary"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />,
    "물품명5",
    "제목5",
    "ef***",
    "5시간전",
    3.9,
    1000,
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

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>item</StyledTableCell>
            <StyledTableCell align="right">위시</StyledTableCell>
            <StyledTableCell align="right">수량</StyledTableCell>
            <StyledTableCell align="right">배송수단</StyledTableCell>
            <StyledTableCell align="right">배송비</StyledTableCell>
            <StyledTableCell align="right">가격</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
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
