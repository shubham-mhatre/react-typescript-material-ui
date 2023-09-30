import {
    TableContainer, TableBody, Table, TableHead, TableRow
    , TableCell, Paper
} from '@mui/material'
import React from 'react'



const MuiTable = () => {
    return (
        <>
            <TableContainer component={Paper}
                style={{ marginTop: "50px", width: "80%", marginLeft: "10%",maxHeight:"300px" }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {tableHeaders.map((rs) => (
                                <TableCell>{rs}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((rs) => (
                            <TableRow key={rs.id}>
                                <TableCell>{rs.first_name}</TableCell>
                                <TableCell>{rs.last_name}</TableCell>
                                <TableCell>{rs.email}</TableCell>
                                <TableCell>{rs.gender}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

const tableHeaders = ["firstname", "lastName", "email", "gender"];

const tableData = [{
    "id": 1,
    "first_name": "Tades",
    "last_name": "Mutch",
    "email": "tmutch0@nyu.edu",
    "gender": "Male",
    "ip_address": "37.77.81.40"
  }, {
    "id": 2,
    "first_name": "Silvano",
    "last_name": "Durden",
    "email": "sdurden1@odnoklassniki.ru",
    "gender": "Male",
    "ip_address": "232.108.75.248"
  }, {
    "id": 3,
    "first_name": "Gill",
    "last_name": "McRonald",
    "email": "gmcronald2@techcrunch.com",
    "gender": "Male",
    "ip_address": "97.17.247.88"
  }, {
    "id": 4,
    "first_name": "Geraldine",
    "last_name": "Tatem",
    "email": "gtatem3@ning.com",
    "gender": "Female",
    "ip_address": "51.243.43.60"
  }, {
    "id": 5,
    "first_name": "Marwin",
    "last_name": "Sneesby",
    "email": "msneesby4@bigcartel.com",
    "gender": "Male",
    "ip_address": "140.42.85.57"
  }, {
    "id": 6,
    "first_name": "Dewain",
    "last_name": "Capitano",
    "email": "dcapitano5@hexun.com",
    "gender": "Male",
    "ip_address": "99.20.145.90"
  }, {
    "id": 7,
    "first_name": "Glenda",
    "last_name": "Mila",
    "email": "gmila6@microsoft.com",
    "gender": "Female",
    "ip_address": "119.132.16.8"
  }, {
    "id": 8,
    "first_name": "Robb",
    "last_name": "Huddle",
    "email": "rhuddle7@google.nl",
    "gender": "Male",
    "ip_address": "240.119.191.191"
  }, {
    "id": 9,
    "first_name": "Fleming",
    "last_name": "Trustram",
    "email": "ftrustram8@opera.com",
    "gender": "Male",
    "ip_address": "112.68.40.218"
  }, {
    "id": 10,
    "first_name": "Deane",
    "last_name": "Radki",
    "email": "dradki9@soup.io",
    "gender": "Male",
    "ip_address": "27.39.96.29"
  }];

export default MuiTable
