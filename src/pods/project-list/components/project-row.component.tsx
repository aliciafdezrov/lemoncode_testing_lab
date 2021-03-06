import React from 'react';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Project } from '../project-list.vm';

type Props = RowRendererProps<Project>;

export const ProjectRowComponent: React.FunctionComponent<Props> = ({
  row,
  onEdit,
  onDelete,
}) => {
  return (
    <RowComponent data-testid={row.id}>
      <CellComponent>
        <Checkbox checked={row.isActive} disabled />
      </CellComponent>
      <CellComponent>{row.code}</CellComponent>
      <CellComponent>{row.name}</CellComponent>
      <CellComponent>{row.lastDateIncurred}</CellComponent>
      <CellComponent>
        {row.creationDate}
        <IconButton aria-label="edit project" onClick={() => onEdit(row.id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete project" onClick={() => onDelete(row)}>
          <DeleteIcon />
        </IconButton>
      </CellComponent>
    </RowComponent>
  );
};
