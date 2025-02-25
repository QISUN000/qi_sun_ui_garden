import styled from 'styled-components';
import { TableProps } from './Table.types';

interface StyledTableProps {
  disabled?: boolean;
}

const TableContainer = styled.table<StyledTableProps>`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  background-color: ${props => props.disabled ? '#F3F4F6' : 'transparent'};
`;

const TableHeader = styled.thead`
  background-color: #3B82F6;
  color: white;
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #F3F4F6;
  }

  &:hover {
    background-color: #E5E7EB;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border: 1px solid #E5E7EB;
`;

const TableFooter = styled.tfoot`
  background-color: #E5E7EB;
  font-weight: 500;
`;

const TableFooterCell = styled.td`
  padding: 1rem;
  border: 1px solid #E5E7EB;
  text-align: left;
`;

export const Table = ({ headers, rows, disabled = false, footer }: TableProps) => {
  return (
    <TableContainer disabled={disabled} data-testid="table">
      <TableHeader>
        <tr>
          {headers.map((header, index) => (
            <TableHeaderCell key={index}>{header}</TableHeaderCell>
          ))}
        </tr>
      </TableHeader>
      <tbody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
      {footer && (
        <TableFooter>
          <tr>
            {footer.map((cell, index) => (
              <TableFooterCell key={index} colSpan={index === 0 && footer.length === 1 ? headers.length : 1}>
                {cell}
              </TableFooterCell>
            ))}
          </tr>
        </TableFooter>
      )}
    </TableContainer>
  );
};