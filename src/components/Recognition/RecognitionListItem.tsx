import React, { useState, useRef, RefObject } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import {
    updateRecognition,
    updateRecognitionRequest,
    deleteRecognitionRequest
} from '~/redux/recognitions';
import { circleImage, getImageBlob } from '~/utils';
import { ENTITY_STATUS } from '~/constants/entity';
import { RecognitionCard } from '~/components/Recognition/RecognitionCard';
import { MenuControls } from '~/components/MenuControls';
import { MenuButton } from '~/components/MenuButton';
import {
    SwimlaneCard,
    SwimlaneCardControl,
    SwimlaneCardControls
} from '~/components/SwimlaneCard/SwimlaneCard.style';
import { Recognition } from '~/types/recognition';

export type RecognitionListItemProps = {
    recognition: Recognition;
};

export const RecognitionListItem: React.FC<RecognitionListItemProps> = ({
    recognition
}) => {
    const dispatch = useDispatch();
    const [backupRecognition, setBackupRecognition] =
        useState<Recognition | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [anchorEl, setAnchorEl] = useState<EventTarget | null>(null);
    const photoCanvas = useRef<HTMLCanvasElement>();

    const editCard = () => {
        setBackupRecognition(Object.assign({}, recognition));
        setIsEditing(true);
    };

    const archiveRecognition = () => {
        dispatch(
            updateRecognitionRequest({
                ...recognition,
                status: ENTITY_STATUS.archived
            })
        );
    };

    const approveRecognition = () => {
        dispatch(
            updateRecognitionRequest({
                ...recognition,
                status: ENTITY_STATUS.approved
            })
        );
    };

    const cancelEditCard = () => {
        setIsEditing(false);

        if (backupRecognition && backupRecognition.id) {
            dispatch(
                updateRecognition({
                    id: backupRecognition.id,
                    changes: backupRecognition
                })
            );
        }
    };

    const saveEditCard = async () => {
        if (photoCanvas.current) {
            circleImage(photoCanvas.current);

            const photo = await getImageBlob(photoCanvas.current);

            dispatch(updateRecognitionRequest({ ...recognition, photo }));
            setIsEditing(false);
        } else {
            dispatch(updateRecognitionRequest({ ...recognition }));
            setIsEditing(false);
        }
    };

    const onCardChange = (ev: { name: string; value: string; id: string }) => {
        dispatch(
            updateRecognition({
                id: ev.id,
                changes: {
                    [ev.name]: ev.value
                }
            })
        );
    };

    const isEditButtonEnabled =
        recognition.status !== ENTITY_STATUS.archived &&
        recognition.message.length;

    const isApproveButtonEnabled =
        recognition.status === ENTITY_STATUS.pending &&
        recognition.message.length;

    return (
        <SwimlaneCard>
            <RecognitionCard
                onCardChange={onCardChange}
                isEditing={isEditing}
                recognition={recognition}
                ref={photoCanvas as RefObject<HTMLCanvasElement>}
            />
            <SwimlaneCardControls>
                {isEditing ? (
                    <>
                        <SwimlaneCardControl>
                            <Button
                                onClick={cancelEditCard}
                                variant='contained'
                            >
                                Cancel
                            </Button>
                        </SwimlaneCardControl>
                        <SwimlaneCardControl>
                            <Button
                                disabled={!recognition.message.length}
                                onClick={saveEditCard}
                                variant='contained'
                                color='secondary'
                            >
                                OK
                            </Button>
                        </SwimlaneCardControl>
                    </>
                ) : (
                    <>
                        {isEditButtonEnabled && (
                            <SwimlaneCardControl>
                                <Button onClick={editCard} variant='contained'>
                                    Edit
                                </Button>
                            </SwimlaneCardControl>
                        )}
                        {recognition.status === ENTITY_STATUS.approved && (
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
                                    onClick={approveRecognition}
                                    color='primary'
                                    variant='contained'
                                >
                                    Approve
                                </Button>
                            </SwimlaneCardControl>
                        )}
                        {recognition.status !== ENTITY_STATUS.archived ? (
                            <>
                                <SwimlaneCardControl>
                                    <MenuButton
                                        MenuOpen={(ev) =>
                                            setAnchorEl(ev.target)
                                        }
                                    />
                                </SwimlaneCardControl>
                                <MenuControls
                                    onArchive={archiveRecognition}
                                    onDelete={() =>
                                        dispatch(
                                            deleteRecognitionRequest(
                                                recognition
                                            )
                                        )
                                    }
                                    anchorEl={anchorEl}
                                    onMenuClose={() => setAnchorEl(null)}
                                />
                            </>
                        ) : (
                            <SwimlaneCardControl>
                                <Button
                                    onClick={() =>
                                        dispatch(
                                            deleteRecognitionRequest(
                                                recognition
                                            )
                                        )
                                    }
                                    variant='contained'
                                >
                                    Delete
                                </Button>
                            </SwimlaneCardControl>
                        )}
                    </>
                )}
            </SwimlaneCardControls>
        </SwimlaneCard>
    );
};
