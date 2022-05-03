import { JOB_TITLES } from '~/constants/entity';

type SortOrder = Record<string, number>;

export const SORT_ORDER: SortOrder = {
    [JOB_TITLES.leadSoftwareEngineer]: 1,
    [JOB_TITLES.seniorSoftwareEngineer]: 2,
    [JOB_TITLES.softwareEngineer]: 3,
    [JOB_TITLES.juniorSoftwareEngineer]: 4
};
