/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Newcomer } from '~/types/newcomer';

import { NewcomerPreviewV1 } from './NewcomerPreviewV1';

type EmailTemplateV1Props = {
    emailMessage: string;
    emailImage: string | null;
    seasonId: number;
    newcomers: Newcomer[];
};

export const EmailTemplateV1: React.FC<EmailTemplateV1Props> = ({
    emailImage,
    emailMessage,
    newcomers,
    seasonId
}) => (
    <table
        cellSpacing='0'
        cellPadding='0'
        width='100%'
        style={{
            backgroundColor: '#fff'
        }}
    >
        <tbody>
            <tr>
                <td valign='top' align='center'>
                    <div>
                        <table
                            cellPadding='0'
                            cellSpacing='0'
                            width='880'
                            style={{
                                boxShadow: '0 1px 24px 0 rgba(0, 0, 0, 0.04)',
                                backgroundColor: '#f2f3f7',
                                borderRadius: '6px'
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td style={{ padding: '12px 0' }}></td>
                                </tr>
                                <tr>
                                    <td valign='top' align='center'>
                                        <div>
                                            <table
                                                style={{
                                                    borderCollapse: 'collapse',
                                                    width: '600px',
                                                    margin: '0 auto'
                                                }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src={
                                                                    emailImage!
                                                                }
                                                                style={{
                                                                    borderRadius:
                                                                        '3px 3px 0 0',
                                                                    display:
                                                                        'block'
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>

                                                    <tr
                                                        style={{
                                                            backgroundColor:
                                                                '#fff'
                                                        }}
                                                    >
                                                        <td
                                                            style={{
                                                                fontSize:
                                                                    '15px',
                                                                padding: '50px',
                                                                color: '#525462'
                                                            }}
                                                        >
                                                            {emailMessage
                                                                .split('\n')
                                                                .map(
                                                                    (
                                                                        item,
                                                                        key
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                key
                                                                            }
                                                                        >
                                                                            {
                                                                                item
                                                                            }
                                                                            <br />
                                                                        </span>
                                                                    )
                                                                )}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                padding:
                                                                    '12px 0'
                                                            }}
                                                        ></td>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {newcomers
                                                        .sort(
                                                            (
                                                                {
                                                                    department:
                                                                        dep1
                                                                },
                                                                {
                                                                    department:
                                                                        dep2
                                                                }
                                                            ) =>
                                                                dep1.toLowerCase() >
                                                                dep2.toLowerCase()
                                                                    ? 1
                                                                    : dep1.toLowerCase() <
                                                                      dep2.toLowerCase()
                                                                    ? -1
                                                                    : 0
                                                        )
                                                        .map((newcomer) => (
                                                            <React.Fragment
                                                                key={
                                                                    newcomer.id
                                                                }
                                                            >
                                                                <tr>
                                                                    <td>
                                                                        <NewcomerPreviewV1
                                                                            newcomer={
                                                                                newcomer
                                                                            }
                                                                            photo={
                                                                                newcomer.photo
                                                                            }
                                                                            seasonId={
                                                                                seasonId
                                                                            }
                                                                        />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            padding:
                                                                                '12px 0'
                                                                        }}
                                                                    ></td>
                                                                </tr>
                                                            </React.Fragment>
                                                        ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 0' }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
);
