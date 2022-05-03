import { EntityStatus } from '~/types/entity';

export const ENTITY_STATUS: Record<EntityStatus, EntityStatus> = {
    pending: 'pending',
    approved: 'approved',
    archived: 'archived'
};

type JobTitles = Record<string, string>;

export const JOB_TITLES: JobTitles = {
    juniorSoftwareEngineer: 'Junior Software Engineer',
    softwareEngineer: 'Software Engineer',
    seniorSoftwareEngineer: 'Senior Software Engineer',
    leadSoftwareEngineer: 'Lead Software Engineer'
};

export const JOB_TITLES_UXD: JobTitles = {
    associateDesigner: 'Associate Experience Designer',
    designer: 'Experience Designer',
    seniorDesigner: 'Senior Experience Designer',
    leadDesigner: 'Lead Experience Designer'
};
