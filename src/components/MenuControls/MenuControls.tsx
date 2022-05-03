import React, { MouseEventHandler } from 'react';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';

import * as S from './MenuControls.style';

export type MenuControlsProps = {
    onArchive: MouseEventHandler;
    onDelete: MouseEventHandler;
    anchorEl: any;
    onMenuClose: MouseEventHandler;
};

export const MenuControls: React.FC<MenuControlsProps> = ({
    onArchive,
    onDelete,
    anchorEl,
    onMenuClose
}) => (
    <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
        PaperProps={{
            style: {
                width: 180
            }
        }}
    >
        <S.MenuItem onClick={onArchive}>
            <ListItemIcon>
                <ArchiveIcon />
            </ListItemIcon>
            <Typography variant='inherit' noWrap>
                Archive
            </Typography>
        </S.MenuItem>
        <S.MenuItem onClick={onDelete}>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <Typography variant='inherit' noWrap>
                Delete
            </Typography>
        </S.MenuItem>
    </Menu>
);
