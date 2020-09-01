import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MainService from "../../service/MainService";
import styles from "../../css/Img.css";

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const MypageTable = (props) => {
  let items = props.mypageCoupon;
  console.log(items);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>사진</TableCell>
            <TableCell align="center">아이디</TableCell>
            <TableCell align="right">쿠폰번호</TableCell>
            <TableCell align="right">사용시작가능날짜</TableCell>
            <TableCell align="right">사용불가날짜</TableCell>
            <TableCell align="right">사용여부</TableCell>
          </TableRow>
        </TableHead>
        {items.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="right">{row.id}</TableCell>
            <TableCell align="right">{row.code}</TableCell>
            <TableCell align="right">{row.validityStart}</TableCell>
            <TableCell align="right">{row.validityEnd}</TableCell>
            <TableCell align="right">{row.availability}</TableCell>
          </TableRow>
        ))}
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};
export default MypageTable;
