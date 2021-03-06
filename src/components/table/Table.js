import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { COLUMNS, GROUP_COLUMNS } from './columns'
import './css/table.css'

const Table = ({teams}) => {

    const columns = useMemo(() => GROUP_COLUMNS, [])
    const data = useMemo(() => teams, [teams])
    

    const tableInstance = useTable({
        columns: columns,
        data: data
    }, useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance
    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th{...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}
                                        </span>
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td{...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}

export default Table;