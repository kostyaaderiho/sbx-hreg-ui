import { Recognition } from '~/types/recognition';

export const getColumsPerLine = (
    recognitions: Recognition[],
    columAmount = 3
) => {
    let colums = [];

    for (let i = 1, k = 0; i <= recognitions.length; i++) {
        if (i % columAmount || i === 0) {
            k++;
        } else {
            colums.push(columAmount);
            k = 0;
        }

        if (i === recognitions.length && k) {
            colums.push(k);
        }
    }

    return colums;
};

export const isObjectEmpty = (obj: {}) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};
