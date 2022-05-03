import React, { useState, ChangeEvent, RefObject } from 'react';
import Button from '@material-ui/core/Button';

import UserPhotoPlaceholder from '~/assets/icons/userpic-icon.svg';
import pngBackground from '~/assets/images/png-background.png';

import * as S from './UploadImage.style';

export type UploadImageProps = {
    isDescriptionEnabled?: boolean;
    isButtonEnabled?: boolean;
    defaultImageURL?: string;
    ZOOM_STEP?: number;
    MIN_ZOOM?: number;
    onPhotoChange?: ({
        imageBase64,
        imageFile
    }: {
        imageBase64: string;
        imageFile: HTMLImageElement;
    }) => void;
    MAX_ZOOM?: number;
};

export const UploadImage = React.forwardRef<
    HTMLCanvasElement,
    UploadImageProps
>(
    (
        {
            isDescriptionEnabled = true,
            isButtonEnabled = true,
            defaultImageURL = '',
            ZOOM_STEP = 0.1,
            MIN_ZOOM = 0.5,
            onPhotoChange = () => {},
            MAX_ZOOM = 3
        },
        ref
    ) => {
        const [isEditMode, setIsEditMode] = useState(false);
        const [imageFile, setImageFile] = useState<
            (Blob & { name: string }) | null
        >(null);
        const [imageURL] = useState(defaultImageURL);

        const renderImage = (image: Blob) => {
            const canvas = document.getElementById(
                'uploadImage-imageCanvas'
            ) as HTMLCanvasElement;

            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            const canvasHeight = canvas.height;
            const canvasWidth = canvas.width;

            let CURRENT_ZOOM = 1;

            const Reader = new FileReader();
            let isDragging = false;
            let imageOffsetX = 0;
            let imageOffsetY = 0;

            let backgroundPNGImage = new Image();
            let uploadedImage = new Image();
            backgroundPNGImage.src = pngBackground;

            let selectedImageHeight = 300;
            let selectedImageWidth = 300;
            let clickedXPosition: number;
            let clickedYPosition: number;

            const clearCanvas = () => {
                if (ctx) {
                    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                }
            };

            const drawCanvas = (img: HTMLImageElement) => {
                clearCanvas();

                if (ctx) {
                    ctx.drawImage(backgroundPNGImage, 0, 0);
                    ctx.drawImage(
                        img,
                        imageOffsetX,
                        imageOffsetY,
                        selectedImageWidth * CURRENT_ZOOM,
                        selectedImageHeight * CURRENT_ZOOM,
                        0,
                        0,
                        canvasWidth,
                        canvasHeight
                    );
                }
            };

            const canvasPaintHandler = (img: HTMLImageElement) => {
                drawCanvas(img);
                onPhotoChange({
                    imageBase64: canvas.toDataURL(),
                    imageFile: img
                });
            };

            const onImageSelected = (img: HTMLImageElement) => {
                canvasPaintHandler(img);
            };

            const getCurrentMousePosition = (event: MouseEvent) => ({
                positionY: event.pageY - canvas.offsetTop,
                positionX: event.pageX - canvas.offsetLeft
            });

            const onWheelHandler = (event: MouseEvent & { deltaY: number }) => {
                if (CURRENT_ZOOM >= MAX_ZOOM && event.deltaY < 0) return;
                if (CURRENT_ZOOM <= MIN_ZOOM && event.deltaY > 0) return;

                CURRENT_ZOOM =
                    event.deltaY < 0
                        ? CURRENT_ZOOM + ZOOM_STEP
                        : CURRENT_ZOOM - ZOOM_STEP;
                canvasPaintHandler(uploadedImage);
            };

            const onMouseDownHandler = (ev: MouseEvent) => {
                isDragging = true;
                clickedXPosition = getCurrentMousePosition(ev).positionX;
                clickedYPosition = getCurrentMousePosition(ev).positionY;
            };

            const onMouseMoveHandler = (ev: MouseEvent) => {
                if (!isDragging) return;

                let diffY =
                    getCurrentMousePosition(ev).positionY - clickedYPosition;
                let diffX =
                    getCurrentMousePosition(ev).positionX - clickedXPosition;

                imageOffsetY = imageOffsetY - diffY * 2;
                imageOffsetX = imageOffsetX - diffX * 2;
                canvasPaintHandler(uploadedImage);

                clickedXPosition = getCurrentMousePosition(ev).positionX;
                clickedYPosition = getCurrentMousePosition(ev).positionY;
            };

            const onMouseUpHandler = () => {
                isDragging = false;
            };

            Reader.readAsDataURL(image);
            Reader.onload = () => {
                if (typeof Reader.result === 'string') {
                    uploadedImage.src = Reader.result;
                }

                uploadedImage.onload = () => onImageSelected(uploadedImage);
            };

            canvas.addEventListener('wheel', (ev) => {
                ev.preventDefault();
                onWheelHandler(ev);
            });

            canvas.onmousedown = (ev) => onMouseDownHandler(ev);

            canvas.onmousemove = (ev) => onMouseMoveHandler(ev);

            document.onmouseup = onMouseUpHandler;
        };

        const onImageChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
            const files = ev.target.files;

            if (!files || !files.length) return;

            setImageFile(files[0]);
            setIsEditMode(true);
            setTimeout(() => renderImage(files[0]));
        };

        let image = null;

        if (!imageFile && !imageURL.length) {
            image = <S.Image src={UserPhotoPlaceholder} />;
        } else if (imageFile) {
            image = (
                <canvas
                    id='uploadImage-imageCanvas'
                    width='120'
                    height='120'
                    ref={ref as RefObject<HTMLCanvasElement>}
                />
            );
        } else if (imageURL.length) {
            image = <S.Image src={'/' + imageURL} />;
        }

        return (
            <S.Wrapper>
                <S.ImageHolder editable={isEditMode}>{image}</S.ImageHolder>
                <div className='uploadImage-imageControls'>
                    {imageFile && isDescriptionEnabled && (
                        <S.Description>
                            <S.Label>File: </S.Label>
                            <S.Name>{imageFile.name}</S.Name>
                        </S.Description>
                    )}
                    {isButtonEnabled && (
                        <>
                            <input
                                id='uploadImage-uploadImageButton'
                                onChange={onImageChangeHandler}
                                style={{ display: 'none' }}
                                accept='image/*'
                                multiple
                                type='file'
                            />
                            <label htmlFor='uploadImage-uploadImageButton'>
                                <Button
                                    variant='contained'
                                    style={{ minWidth: '120px' }}
                                    component='span'
                                    color='secondary'
                                >
                                    Change photo
                                </Button>
                            </label>
                        </>
                    )}
                </div>
            </S.Wrapper>
        );
    }
);

UploadImage.displayName = 'UploadImage';
