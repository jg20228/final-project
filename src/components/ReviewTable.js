import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useEffect } from "react";

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
/* function createData(id, title, content, username, createDate, star) {
  return { id, title, content, username, createDate, star };
} */

/* const rows = [
  createData("물품명1", "123", "tjd***", "1시간전", 4.0),
  createData("물품명2", "제목2", "202***", "2시간전", 4.3),
  createData("물품명3", "제목3", "lin***", "3시간전", 6.0),
  createData("물품명4", "제목4", "ab***", "4시간전", 4.3),
  createData("물품명5", "제목5", "ef***", "5시간전", 3.9),
]; */

//스타일 커스텀
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ReviewTable = (props) => {
  let items = props.reviewData;
  console.log(items);

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>상품명</StyledTableCell>
            <StyledTableCell align="right">제목</StyledTableCell>
            <StyledTableCell align="right">글쓴이</StyledTableCell>
            <StyledTableCell align="right">작성시간</StyledTableCell>
            <StyledTableCell align="right">평점</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.content}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.createDate}</StyledTableCell>
              <StyledTableCell align="right">{row.star}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReviewTable;
