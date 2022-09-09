import axios from "axios";
import { useState } from "react";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Dataemployee = ({ pros }) => {
  console.log(pros);
  const [listdata, setListdata] = useState([]);

  const deletingElement = (ind) => {
    // pros.splice(ind,1)
    // setListdata([...pros])

    axios
      .delete(`http://localhost:8080/details/${ind}`)
      .then((res) => {
        //   setNewdata(res.data);
        pros.getdata();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell align="right">VehicleName</StyledTableCell>
              <StyledTableCell align="right">ParkingSlot</StyledTableCell>
              <StyledTableCell align="right">VehicleNumber</StyledTableCell>
              <StyledTableCell align="right">DateOfParking</StyledTableCell>
              <StyledTableCell align="right">ResevationNumber</StyledTableCell>
              <StyledTableCell align="right">VehicleType</StyledTableCell>
              <StyledTableCell align="right">OutletSlots</StyledTableCell>
              <StyledTableCell align="right">Deleting</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pros.newdata.map((ele, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{ele.vehicleName}</StyledTableCell>
                <StyledTableCell align="right">{ele.parkingSlot}</StyledTableCell>
                <StyledTableCell align="right">{ele.vehicleNumber}</StyledTableCell>
                <StyledTableCell align="right">{ele.dateOfParking}</StyledTableCell>
                <StyledTableCell align="right">{ele.id}</StyledTableCell>
                <StyledTableCell align="right">{ele.vehicletype}</StyledTableCell>
                <StyledTableCell align="right">{ele.Outlets}</StyledTableCell>
                <StyledTableCell align="right">
                  <button
                    onClick={() => {
                      deletingElement(ele.id);
                    }}
                  >
                    Delete
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
