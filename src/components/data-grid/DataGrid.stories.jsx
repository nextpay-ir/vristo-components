import React from 'react';
import { DataGrid } from './DataGrid';

const meta = {
    title: 'Components/DataGrid',
    component: DataGrid,
    argTypes: {
        paginationModel: {
            control: false,
        },
        onPaginationModelChange: {
            action: 'pagination changed',
        },
        data: {
            control: false,
        },
        columns: {
            control: false,
        },
        getRowId: {
            control: false,
        }
    },
};
export default meta;

const columns = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: 'age',
        header: 'Age',
        cell: (info) => info.getValue(),
    },
];
const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Sam Brown', age: 23 },
];

const Template = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
    data,
    columns,
    getRowId: (row) => row.id,
    paginationModel: { pageIndex: 0, pageSize: 5 },
    onPaginationModelChange: (model) => console.log(model),
};
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    ...Default.args,
    className: 'custom-class',
};
export const LargePageSize = Template.bind({});
LargePageSize.args = {
    ...Default.args,
    paginationModel: { pageIndex: 0, pageSize: 10 },
};
export const SmallPageSize = Template.bind({});
SmallPageSize.args = {
    ...Default.args,
    paginationModel: { pageIndex: 0, pageSize: 3 },
};