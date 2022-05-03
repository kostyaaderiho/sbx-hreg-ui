import { EntityStatus } from './entity';

export type Newcomer = {
    selfIntroduction: string;
    isSubmitted: boolean;
    createdDate: number;
    photo: string | Blob;
    status: EntityStatus;
    department: string;
    telescope: string;
    position: string;
    fullName: string;
    linkedin: string;
    country: string;
    github: string;
    dribbble: string;
    behance: string;
    heroes: string;
    skype: string;
    id: string;
    telegram: string;
};
