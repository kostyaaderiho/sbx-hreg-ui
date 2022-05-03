import translations from '~/i18n/translations.json';
import { EntityStatus } from '~/types/entity';

export type StatusLabel = Record<EntityStatus, string>;

export const STATUS_LABEL: StatusLabel = {
    pending: translations.card_pending_status,
    approved: translations.card_approved_status,
    archived: translations.card_archived_status
};
