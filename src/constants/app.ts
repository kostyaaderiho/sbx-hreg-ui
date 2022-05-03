export type CountryId =
    | 'by'
    | 'uz'
    | 'ga'
    | 'lt'
    | 'arm'
    | 'by-uxd'
    | 'uz-uxd'
    | 'ga-uxd'
    | 'lt-uxd'
    | 'arm-uxd';

export type CountryName =
    | 'Belarus'
    | 'Belarus - UXD'
    | 'Uzbekistan'
    | 'Uzbekistan - UXD'
    | 'Georgia'
    | 'Georgia - UXD'
    | 'Lithuania'
    | 'Lithuania - UXD'
    | 'Armenia'
    | 'Armenia - UXD';

export type Country = {
    name: CountryName;
    id: CountryId;
};

export const COUNTRIES: Country[] = [
    {
        name: 'Belarus',
        id: 'by'
    },
    {
        name: 'Belarus - UXD',
        id: 'by-uxd'
    },
    {
        name: 'Uzbekistan',
        id: 'uz'
    },
    {
        name: 'Uzbekistan - UXD',
        id: 'uz-uxd'
    },
    {
        name: 'Georgia',
        id: 'ga'
    },
    {
        name: 'Georgia - UXD',
        id: 'ga-uxd'
    },
    {
        name: 'Lithuania',
        id: 'lt'
    },
    {
        name: 'Lithuania - UXD',
        id: 'lt-uxd'
    },
    {
        name: 'Armenia',
        id: 'arm'
    },
    {
        name: 'Armenia - UXD',
        id: 'arm-uxd'
    }
];

export const ENABLED_APP_VERSION = {
    v1: 'v1',
    v2: 'v2'
};

export const APP_VERSION = ENABLED_APP_VERSION.v1;

export const RECOGNITION_EXCEL_API_ENDPOINT = `/api/recognitionsExcel`;
export const RECOGNITION_API_ENDPOINT = `/api/recognitions`;
export const NEWCOMER_API_ENDPOINT = `/api/newcomers`;
