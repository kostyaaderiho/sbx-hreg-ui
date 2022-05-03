import { v4 as uuidv4 } from 'uuid';

export const processFormData = <
    T extends { photo: string | Blob } & Record<string, any>
>(
    data: T
): FormData => {
    const fd = new FormData();

    for (const field in data) {
        if (field !== 'photo') {
            fd.append(field, data[field]);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    typeof data.photo === 'string'
        ? fd.append('photo', data.photo)
        : fd.append('photo', data.photo, uuidv4());

    return fd;
};
