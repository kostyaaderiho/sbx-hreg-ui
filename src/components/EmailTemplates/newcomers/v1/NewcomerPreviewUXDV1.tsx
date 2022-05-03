/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import {
    DribbbleIconUrl,
    BehanceIconUrl,
    TelescopeIconUrl,
    LinkedinIconUrl,
    SkypeIconUrl,
    TelegramIconUrl
} from '~/assets/icons/icons';
import HeroesButton from '~/assets/images/email/newcomers/uxd/HeroesButton.png';
import { Newcomer } from '~/types/newcomer';

import {
    darkBlueBackground,
    blueBackground
} from './NewcomerPreviewV1.constants';

type NewcomerPreviewUXDV1Props = {
    photo: Newcomer['photo'];
    newcomer: Partial<Newcomer>;
};

export const NewcomerPreviewUXDV1: React.VFC<NewcomerPreviewUXDV1Props> = ({
    newcomer,
    photo
}) => {
    const {
        selfIntroduction,
        department,
        linkedin,
        fullName,
        position,
        dribbble,
        behance,
        heroes,
        telegram,
        skype,
        id
    } = newcomer;

    return (
        <table
            style={{
                borderCollapse: 'collapse',
                color: 'white',
                margin: '0 50px',
                backgroundColor: darkBlueBackground
            }}
            border-collapse='separate'
        >
            <thead>
                <tr>
                    <td style={{ padding: '10px 40px' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            style={{
                                                borderRadius: '50%'
                                            }}
                                            height='145'
                                            width='145'
                                            src={`${id ? '/' + photo : photo}`}
                                        />
                                    </td>
                                    <td
                                        colSpan={2}
                                        style={{
                                            padding: '20px',
                                            width: '100%'
                                        }}
                                    >
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontWeight: 600,
                                                            fontSize: '24px'
                                                        }}
                                                    >
                                                        {fullName}
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: '16px'
                                                        }}
                                                    >
                                                        {position}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: '16px'
                                                        }}
                                                    >
                                                        {department}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            padding:
                                                                                '8px'
                                                                        }}
                                                                    >
                                                                        <a
                                                                            href={
                                                                                newcomer.telescope
                                                                            }
                                                                            title='Telescope'
                                                                            target='_blank'
                                                                            rel='noreferrer'
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    TelescopeIconUrl
                                                                                }
                                                                                width='18'
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    {skype?.length && (
                                                                        <td
                                                                            style={{
                                                                                padding:
                                                                                    '8px'
                                                                            }}
                                                                        >
                                                                            <a
                                                                                href={`skype:${newcomer.skype}?chat`}
                                                                                title='Skype'
                                                                                target='_blank'
                                                                                rel='noreferrer'
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        SkypeIconUrl
                                                                                    }
                                                                                    width='18'
                                                                                />
                                                                            </a>
                                                                        </td>
                                                                    )}
                                                                    {linkedin?.length && (
                                                                        <td
                                                                            style={{
                                                                                padding:
                                                                                    '8px'
                                                                            }}
                                                                        >
                                                                            <a
                                                                                href={
                                                                                    linkedin
                                                                                }
                                                                                title='LinkedIn'
                                                                                target='_blank'
                                                                                rel='noreferrer'
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        LinkedinIconUrl
                                                                                    }
                                                                                    width='18'
                                                                                />
                                                                            </a>
                                                                        </td>
                                                                    )}
                                                                    {dribbble?.length && (
                                                                        <td
                                                                            style={{
                                                                                padding:
                                                                                    '8px'
                                                                            }}
                                                                        >
                                                                            <a
                                                                                href={
                                                                                    dribbble
                                                                                }
                                                                                title='Dribbble'
                                                                                target='_blank'
                                                                                rel='noreferrer'
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        DribbbleIconUrl
                                                                                    }
                                                                                    width='18'
                                                                                />
                                                                            </a>
                                                                        </td>
                                                                    )}
                                                                    {behance?.length && (
                                                                        <td
                                                                            style={{
                                                                                padding:
                                                                                    '8px'
                                                                            }}
                                                                        >
                                                                            <a
                                                                                href={
                                                                                    behance
                                                                                }
                                                                                title='Behance'
                                                                                target='_blank'
                                                                                rel='noreferrer'
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        BehanceIconUrl
                                                                                    }
                                                                                    width='18'
                                                                                />
                                                                            </a>
                                                                        </td>
                                                                    )}
                                                                    {telegram?.length && (
                                                                        <td
                                                                            style={{
                                                                                padding:
                                                                                    '8px'
                                                                            }}
                                                                        >
                                                                            <a
                                                                                href={
                                                                                    telegram
                                                                                }
                                                                                title='Telegram'
                                                                                target='_blank'
                                                                                rel='noreferrer'
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        TelegramIconUrl
                                                                                    }
                                                                                    width='18'
                                                                                />
                                                                            </a>
                                                                        </td>
                                                                    )}
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </thead>
            <tbody
                style={{
                    lineHeight: '24px',
                    fontSize: '14px'
                }}
            >
                <tr>
                    <td
                        style={{
                            padding: '10px 40px',
                            borderRadius: '10px',
                            backgroundColor: blueBackground,
                            width: '50%'
                        }}
                    >
                        {selfIntroduction}
                        <table style={{ width: '100%', paddingTop: '10px' }}>
                            <tr>
                                <td align='center'>
                                    <a
                                        href={heroes}
                                        title='Heroes'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img
                                            src={HeroesButton}
                                            width='230px'
                                            style={{ width: '230px' }}
                                        />
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
