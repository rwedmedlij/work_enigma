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
import { useDispatch, useSelector } from "react-redux";
import { addUser ,deleteUser} from "../redux/action";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
});

function createData(id, name, email) {
  return { id, name, email };
}
function TableUsers() {
  useEffect(()=>{
    Get_Users_From_DataBase();
  },[])
  const dispatch = useDispatch();
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const state2 = useSelector((state) => state.users.users);
  async function Get_Users_From_DataBase() {
    await fetch(`http://localhost:3002/user/get_Users`)
      .then((r) => r.json())
      .then((data) => {
        data.users.map(user=>{
          dispatch(addUser(user));
        })
        setUsers(data.users);
      });
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Option user={row} users={users} setUsers={setUsers}></Option>
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
