import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import './css/table.css'

const Table = () => {

    const example = [
        {
            "id": 1,
            "name": "Karol",
            "points": 3,
            "goals_scored": 3,
            "goals_against": 3,
        },
        {
            "id": 2,
            "name": "Karol",
            "points": 3,
            "goals_scored": 3,
            "goals_against": 3,
        },
    ]
    
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => example, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance
    console.log(data)
    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th{...column.getHeaderProps()}>
                                        {column.render('Header')}
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
            <tfoot>
            {
                footerGroups.map(footerGroup => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                    {
                        footerGroup.headers.map(column => (
                            <td {...column.getFooterProps}>
                            {column.render('Footer')}
                            </td>

                        ))
                    }
                    </tr>
                ))
            }
            </tfoot>
        </table>
    )

}

export default Table;