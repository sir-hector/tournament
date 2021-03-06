export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: "id"
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name'
    },
    {
        Header: 'GOALS SCORED',
        Footer: 'GOALS SCORED',
        accessor: 'goals_scored'
    },
    {
        Header: 'GOALS AGAINST',
        Footer: 'GOALS AGAINST',
        accessor: 'goals_against'
    },
    {
        Header: 'POINTS',
        Footer: 'POINTS',
        accessor: 'points'
    }
]

export const GROUP_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: "id"
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: "name"
    },
    {
        Header: 'Goals',
        Footer: 'Goals',
        columns: [
            {
                Header: 'GOALS SCORED',
                Footer: 'GOALS SCORED',
                accessor: 'goals_scored'
            },
            {
                Header: 'GOALS AGAINST',
                Footer: 'GOALS AGAINST',
                accessor: 'goals_against'
            },
        ]
    },
    {
        Header: 'POINTS',
        Footer: 'POINTS',
        accessor: 'points'
    }
]