import {
  Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { AppointmentType } from '../NewAppointmentModal/types';

type Props = {
  data: AppointmentType[];
};

function AppointmentsTable(props: Props) {
  const { data } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Especialidade</TableCell>
            <TableCell>Profissional</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Hora</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((schedule) => (
            <TableRow
              key={schedule.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {schedule.medico.especialidade.nome}
              </TableCell>
              <TableCell>{schedule.medico.nome}</TableCell>
              <TableCell>{schedule.dia}</TableCell>
              <TableCell>{schedule.horario}</TableCell>
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AppointmentsTable;
