import React, { useState, useEffect, useCallback } from 'react';

import * as S from './SelectImageGallery.style';

export type SelectImage = {
    imageSrc: string;
    title: string;
    id: number;
};

export type SelectImageGalleryProps = {
    onSelectImage: (i: number) => void;
    selectImages: SelectImage[];
    defaultSelection: number;
    className: string;
};

export const SelectImageGallery: React.FC<SelectImageGalleryProps> = ({
    defaultSelection = 0,
    onSelectImage,
    selectImages,
    className
}) => {
    const [selectedImageIndex, setSelectedImageIndex] =
        useState(defaultSelection);

    const selectImage = useCallback((i: number) => {
        setSelectedImageIndex(i);
        onSelectImage(i);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        selectImage(selectedImageIndex);
    }, [selectImage, selectedImageIndex]);

    return (
        <div className={className}>
            <S.Title>Email picture</S.Title>
            {!!selectedImageIndex && (
                <S.Description>
                    Please select a picture for email which is corresponded
                    current theme of year.
                </S.Description>
            )}
            <S.Selection>
                {selectImages.map((image, index) => {
                    const isSelected = index === selectedImageIndex;

                    return (
                        <div key={image.id}>
                            <S.SelectionImageWrapper
                                selected={isSelected}
                                onClick={() => selectImage(index)}
                            >
                                <S.SelectionImage
                                    src={image.imageSrc}
                                    selected={isSelected}
                                />
                            </S.SelectionImageWrapper>
                            <S.SelectionImageTitle>
                                {image.title}
                            </S.SelectionImageTitle>
                        </div>
                    );
                })}
            </S.Selection>
        </div>
    );
};
