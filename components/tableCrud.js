import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  marginTop: {
    "margin-top": "30px",
  },
});

const handleDelete = async (dt) => {
  alert("qwe");
  const newData = await fetch("api/people", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dt),
  }).then((res) => res.json());
};

export default function SimpleTable({ data }) {
  const classes = useStyles();

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <TableContainer component={Paper} className={classes.marginTop}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Siblings</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.id}>
                <TableCell component="th" scope="row">
                  {d.id}
                </TableCell>
                <TableCell align="right">{d.name}</TableCell>
                <TableCell align="right">{d.siblings.toString()}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit" placement="top">
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete" placement="top">
                    <IconButton
                      aria-label="toggleActivity"
                      onClick={() => handleDelete(d)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
