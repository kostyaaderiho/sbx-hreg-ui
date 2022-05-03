import { SorterFunctions } from '~/hooks/useFilters/types';
import { SORT_ORDER } from '~/constants/newcomer';
import { Newcomer } from '~/types/newcomer';
import Winterv1 from '~/assets/images/email/newcomers/v1/email-header-winter-background-v1.jpg';
import Springv1 from '~/assets/images/email/newcomers/v1/email-header-spring-background-v1.jpg';
import Summerv1 from '~/assets/images/email/newcomers/v1/email-header-summer-background-v1.jpg';
import Autumnv1 from '~/assets/images/email/newcomers/v1/email-header-autumn-background-v1.jpg';
import RollingScopesv1 from '~/assets/images/email/newcomers/v1/email-header-the-rolling-scopes-v1.png';
import Winterv2 from '~/assets/images/email/newcomers/v2/email-header-winter-background-v2.jpg';
import Springv2 from '~/assets/images/email/newcomers/v2/email-header-spring-background-v2.jpg';
import Summerv2 from '~/assets/images/email/newcomers/v2/email-header-summer-background-v2.jpg';
import Autumnv2 from '~/assets/images/email/newcomers/v2/email-header-autumn-background-v2.jpg';
import Newcomers1 from '~/assets/images/email/newcomers/v1/email-header-newcomer.jpg';
import { SelectImage } from '~/components/SelectImageGallery';

const newcomersEmailImagesv1: SelectImage[] = [
    {
        imageSrc: Winterv1,
        title: 'Winter',
        id: 0
    },
    {
        imageSrc: Springv1,
        title: 'Spring',
        id: 1
    },
    {
        imageSrc: Summerv1,
        title: 'Summer',
        id: 2
    },
    {
        imageSrc: Autumnv1,
        title: 'Autumn',
        id: 3
    },
    {
        imageSrc: RollingScopesv1,
        title: 'The Rolling Scopes',
        id: 4
    }
];

const newcomersEmailImagesv2: SelectImage[] = [
    {
        imageSrc: Winterv2,
        title: 'Winter',
        id: 0
    },
    {
        imageSrc: Springv2,
        title: 'Spring',
        id: 1
    },
    {
        imageSrc: Summerv2,
        title: 'Summer',
        id: 2
    },
    {
        imageSrc: Autumnv2,
        title: 'Autumn',
        id: 3
    }
];

const newcomersUXDEmailImagesv1: SelectImage[] = [
    {
        imageSrc: Newcomers1,
        title: 'Newcomers',
        id: 0
    }
];

type TNewcomersImages = Record<string, SelectImage[]>;

export const newcomersImages: TNewcomersImages = {
    v1: newcomersEmailImagesv1,
    v2: newcomersEmailImagesv2
};

export const UXDnewcomersImages: TNewcomersImages = {
    v1: newcomersUXDEmailImagesv1
};

type PeopleSortConfig = {
    SORT_BY_JOB_TITLE: boolean;
};

export const INITIAL_FILTERS = {
    sorters: {
        SORT_BY_JOB_TITLE: true
    }
};

export const SORTERS_FUNC: SorterFunctions<Newcomer, PeopleSortConfig> = {
    SORT_BY_JOB_TITLE: () => (personA, personB) => {
        return SORT_ORDER[personA.position] - SORT_ORDER[personB.position];
    }
};
