import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Option from "../components/Option";
import { fetchUsers } from "../redux";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, name, email) {
  return { id, name, email };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function TableUsers() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  function Get_Users_From_DataBase() {
    fetch(`http://localhost:3002/user/get_Users`)
    .then((r) => r.json())
    .then((data) => {
      dispatch(
        fetchCompanies(data.firstPage.fundName, data.firstPage.chanel)
      );
      setUsers(data.users);
    });
  }
  window.onload = function() {
    Get_Users_From_DataBase();
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row,index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Option user={row}></Option>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableUsers;
