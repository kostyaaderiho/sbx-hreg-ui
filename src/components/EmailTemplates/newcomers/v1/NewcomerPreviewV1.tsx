/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import TelescopeIcon from '~/assets/icons/telescope-v1.png';
import LinkedinIcon from '~/assets/icons/linkedin-v1.png';
import GithubIcon from '~/assets/icons/github-v1.png';
import SkypeIcon from '~/assets/icons/skype-v1.png';
import { Newcomer } from '~/types/newcomer';

import {
    primaryTextGrey,
    seasonGradients
} from './NewcomerPreviewV1.constants';

type NewcomerPreviewV1Props = {
    photo: Newcomer['photo'];
    newcomer: Partial<Newcomer>;
    seasonId: number;
};

export const NewcomerPreviewV1: React.FC<NewcomerPreviewV1Props> = ({
    newcomer,
    seasonId,
    photo
}) => {
    const {
        selfIntroduction,
        department,
        linkedin,
        fullName,
        position,
        github,
        id
    } = newcomer;

    return (
        <table
            width='100%'
            style={{
                borderCollapse: 'collapse',
                backgroundColor: '#fff',
                borderRadius: '6px',
                overflow: 'hidden'
            }}
        >
            <thead>
                {department && (
                    <tr>
                        <td
                            align='center'
                            style={{
                                backgroundColor: seasonGradients.find(
                                    (gradient) => gradient.id === seasonId
                                )?.gradientSrc,
                                padding: '15px 0',
                                fontSize: '14px',
                                color: '#fff'
                            }}
                        >
                            {department}
                        </td>
                    </tr>
                )}
                <tr>
                    <td align='right'>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '16px 8px' }}>
                                        <a
                                            href={newcomer.telescope}
                                            title='Telescope'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <img
                                                src={TelescopeIcon}
                                                width='18'
                                            />
                                        </a>
                                    </td>
                                    <td style={{ padding: '16px 8px' }}>
                                        <a
                                            href={`skype:${newcomer.skype}?chat`}
                                            title='Skype'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <img src={SkypeIcon} width='18' />
                                        </a>
                                    </td>
                                    {linkedin?.length && (
                                        <td style={{ padding: '16px 8px' }}>
                                            <a
                                                href={linkedin}
                                                title='LinkedIn'
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <img
                                                    src={LinkedinIcon}
                                                    width='18'
                                                />
                                            </a>
                                        </td>
                                    )}
                                    {github?.length && (
                                        <td style={{ padding: '16px 8px' }}>
                                            <a
                                                href={github}
                                                title='Github'
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <img
                                                    src={GithubIcon}
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
                <tr>
                    <td
                        align='center'
                        style={{
                            padding: '50px 0 10px'
                        }}
                    >
                        <img
                            style={{
                                borderRadius: '50%'
                            }}
                            height='145'
                            width='145'
                            src={`${id ? '/' + photo : photo}`}
                        />
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td
                        style={{
                            color: primaryTextGrey,
                            padding: '0 50px',
                            fontWeight: 600,
                            fontSize: '24px'
                        }}
                        align='center'
                    >
                        {fullName}
                    </td>
                </tr>
                <tr>
                    <td
                        align='center'
                        style={{
                            color: primaryTextGrey,
                            padding: '5px 50px',
                            fontSize: '16px'
                        }}
                    >
                        {position}
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            padding: '0 50px 45px',
                            color: primaryTextGrey,
                            lineHeight: '24px',
                            fontSize: '14px'
                        }}
                    >
                        {selfIntroduction}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
