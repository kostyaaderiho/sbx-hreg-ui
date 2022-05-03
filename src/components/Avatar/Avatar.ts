import { styled } from '@material-ui/core/styles';

type AvatarSize = 'xl';

const AVATAR_SIZE: Record<AvatarSize, number> = {
    xl: 120
};

const getAvatarSizes = (size: AvatarSize) => ({
    width: `${AVATAR_SIZE[size]}px`,
    height: `${AVATAR_SIZE[size]}px`
});

export const AVATAR_SIZE_NAMES: Record<AvatarSize, AvatarSize> = {
    xl: 'xl'
};

type AvatarProps = {
    size?: AvatarSize;
};

export const Avatar = styled('img')(
    ({ size = AVATAR_SIZE_NAMES.xl }: AvatarProps) => ({
        display: 'inline-block',
        borderRadius: '50%',
        ...getAvatarSizes(size)
    })
);
