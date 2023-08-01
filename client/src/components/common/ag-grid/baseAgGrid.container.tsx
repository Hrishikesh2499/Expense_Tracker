import React from 'react';
import BaseAgGridComponent, { IProps } from './baseAgGrid.component';

const BaseAgGridContainer = (props: IProps) => {
    return (
        <BaseAgGridComponent {...props} />
    )
}

export default BaseAgGridContainer;