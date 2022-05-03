import React, { useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';

import { NewcomerCard } from '~/components/Newcomer';
import {
    updateNewcomerRequest,
    deleteNewcomerRequest,
    updateNewcomer
} from '~/redux/newcomers';
import { ENTITY_STATUS } from '~/constants/entity';
import { SnackBar } from '~/components/SnackBar';
import { MenuButton } from '~/components/MenuButton';
import { MenuControls } from '~/components/MenuControls';
import {
    SwimlaneCard,
    SwimlaneCardControl,
    SwimlaneCardControls
} from '~/components/SwimlaneCard/SwimlaneCard.style';
import { Newcomer } from '~/types/newcomer';

export type NewcomerListItemProps = {
    newcomer: Newcomer;
};

export const NewcomerListItem: React.FC<NewcomerListItemProps> = ({
    newcomer
}) => {
    const dispatch = useDispatch();
    const [isSnackbarOpened, setIsSnackbarOpened] = useState(false);
    const [backupNewcomer, setBackupNewcomer] = useState<Newcomer | null>(null);
    const [snackBarMessage, setSnackBarMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [anchorEl, setAnchorEl] = useState<EventTarget | null>(null);

    const isEditButtonEnabled =
        newcomer.status !== ENTITY_STATUS.archived &&
        newcomer.selfIntroduction.length;

    const isApproveButtonEnabled =
        newcomer.status === ENTITY_STATUS.pending &&
        newcomer.selfIntroduction.length;

    const SnackbarClose = () => {
        setIsSnackbarOpened(false);
        setSnackBarMessage('');
    };

    const editCard = () => {
        setBackupNewcomer(Object.assign({}, newcomer));
        setIsEditing(true);
    };

    const archiveNewcomer = () => {
        dispatch(
            updateNewcomerRequest({
                ...newcomer,
                status: ENTITY_STATUS.archived
            })
        );
    };

    const approveNewcomer = () => {
        dispatch(
            updateNewcomerRequest({
                ...newcomer,
                status: ENTITY_STATUS.approved
            })
        );
    };

    const deleteNewcomerHandler = () => {
        dispatch(deleteNewcomerRequest(newcomer));
    };

    const cancelEditCard = () => {
        setIsEditing(false);
        if (backupNewcomer && backupNewcomer.id) {
            dispatch(
                updateNewcomer({
                    id: backupNewcomer.id,
                    changes: backupNewcomer
                })
            );
        }
    };

    const saveEditCard = () => {
        dispatch(updateNewcomerRequest(newcomer));
        setIsEditing(false);
    };

    const onCardChange = (ev: { name: string; value: string; id: string }) => {
        dispatch(
            updateNewcomer({
                id: ev.id,
                changes: {
                    [ev.name]: ev.value
                }
            })
        );
    };

    const EditControls = () => (
        <>
            <SwimlaneCardControl>
                <Button onClick={cancelEditCard} variant='contained'>
                    Cancel
                </Button>
            </SwimlaneCardControl>
            <SwimlaneCardControl>
                <Button
                    disabled={!newcomer.selfIntroduction.length}
                    className='swimlaneCardControls-control'
                    onClick={saveEditCard}
                    variant='contained'
                    color='secondary'
                >
                    OK
                </Button>
            </SwimlaneCardControl>
        </>
    );

    return (
        <SwimlaneCard>
            <NewcomerCard
                onCardChange={onCardChange}
                isEditing={isEditing}
                newcomer={newcomer}
            />
            <SwimlaneCardControls>
                {isEditing ? (
                    <EditControls />
                ) : (
                    <>
                        {isEditButtonEnabled && (
                            <SwimlaneCardControl>
                                <Button onClick={editCard} variant='contained'>
                                    Edit
                                </Button>
                            </SwimlaneCardControl>
                        )}
                        {newcomer.status === ENTITY_STATUS.approved && (
                            <SwimlaneCardControl>
                                <Button disabled={true}>
                                    <DoneIcon />
                                    Approved
                                </Button>
                            </SwimlaneCardControl>
                        )}
                        {isApproveButtonEnabled && (
                            <SwimlaneCardControl>
                                <Button
                                    onClick={approveNewcomer}
                                    color='primary'
                                    variant='contained'
                                >
                                    Approve
                                </Button>
                            </SwimlaneCardControl>
                        )}
                        {newcomer.status !== ENTITY_STATUS.archived ? (
                            <>
                                <SwimlaneCardControl>
                                    <MenuButton
                                        MenuOpen={(ev: MouseEvent) => {
                                            setAnchorEl(ev.target);
                                        }}
                                    />
                                </SwimlaneCardControl>
                                <MenuControls
                                    onArchive={archiveNewcomer}
                                    onDelete={() => deleteNewcomerHandler()}
                                    anchorEl={anchorEl}
                                    onMenuClose={() => setAnchorEl(null)}
                                />
                            </>
                        ) : (
                            <SwimlaneCardControl>
                                <Button
                                    onClick={() => deleteNewcomerHandler()}
                                    variant='contained'
                                >
                                    Delete
                                </Button>
                            </SwimlaneCardControl>
                        )}
                    </>
                )}
            </SwimlaneCardControls>
            <SnackBar
                message={`The link to ${snackBarMessage}'s form copied to clipboard.`}
                isSnackbarOpened={isSnackbarOpened}
                onClose={SnackbarClose}
            />
        </SwimlaneCard>
    );
};
