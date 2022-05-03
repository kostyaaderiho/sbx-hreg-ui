import { styled } from '@material-ui/core/styles';

import { EntityStatus } from '~/types/entity';

type StatusColor = Record<EntityStatus, string>;

const STATUS_COLOR: StatusColor = {
    pending: '#ffa21d',
    approved: '#9bc837',
    archived: '#ff5a5a'
};

export const Wrapper = styled('span')(
    ({ status }: { status: EntityStatus }) => ({
        borderRadius: '12px',
        fontSize: '14px',
        lineHeight: '22px',
        color: '#fff',
        verticalAlign: '7px',
        fontWeight: 'normal',
        height: '24px',
        padding: '5px 15px',
        marginLeft: '15px',
        backgroundColor: status && STATUS_COLOR[status]
    })
);
