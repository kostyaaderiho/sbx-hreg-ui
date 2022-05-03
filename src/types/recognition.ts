import { EntityStatus } from './entity';

export type Recognition = {
    recognitionGroupId: string | null;
    personalMessage: string;
    createdDate: number | null;
    status: EntityStatus;
    photo: string | Blob;
    nominator: string;
    category: number;
    position: string;
    fullName: string;
    country: string;
    message: string;
    title: string;
    id: string;
};
