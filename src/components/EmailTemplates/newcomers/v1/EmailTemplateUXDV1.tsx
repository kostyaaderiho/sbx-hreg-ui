/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Newcomer } from '~/types/newcomer';
import { Bubbles, Arrows } from '~/assets/icons/icons';

import {
    darkBlueBackground,
    greyBackground
} from './NewcomerPreviewV1.constants';
import { NewcomerPreviewUXDV1 } from './NewcomerPreviewUXDV1';

type EmailTemplateUXDV1Props = {
    emailMessage: string;
    titleEmailMessage: string;
    dateOfEmail: string;
    newcomers: Newcomer[];
};

export const EmailTemplateUXDV1: React.VFC<EmailTemplateUXDV1Props> = ({
    titleEmailMessage,
    dateOfEmail,
    emailMessage,
    newcomers
}) => (
    <table
        cellSpacing='0'
        cellPadding='0'
        width='100%'
        style={{
            backgroundColor: greyBackground
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
                                borderRadius: '6px',
                                color: 'white'
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td valign='top' align='center'>
                                        <div>
                                            <table
                                                style={{
                                                    borderCollapse: 'collapse',
                                                    width: '600px',
                                                    margin: '0 auto',
                                                    backgroundColor:
                                                        darkBlueBackground,
                                                    padding: '26px'
                                                }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <td>
                                                            <table
                                                                style={{
                                                                    padding:
                                                                        '50px 50px 40px',
                                                                    width: '100%'
                                                                }}
                                                            >
                                                                <tbody>
                                                                    <tr>
                                                                        <td
                                                                            style={{
                                                                                paddingRight:
                                                                                    '10px'
                                                                            }}
                                                                        >
                                                                            <table
                                                                                style={{
                                                                                    width: '250px'
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                fontSize:
                                                                                                    '40px',
                                                                                                fontWeight:
                                                                                                    'bold',
                                                                                                lineHeight:
                                                                                                    '1',
                                                                                                paddingBottom:
                                                                                                    '25px'
                                                                                            }}
                                                                                        >
                                                                                            {
                                                                                                titleEmailMessage
                                                                                            }
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            {emailMessage
                                                                                                .split(
                                                                                                    '\n'
                                                                                                )
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
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                width='200'
                                                                                src={
                                                                                    Bubbles
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
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                fontSize:
                                                                    '16px',
                                                                textAlign:
                                                                    'center',
                                                                fontWeight:
                                                                    'bold'
                                                            }}
                                                        >
                                                            {dateOfEmail}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align='center'>
                                                            <img
                                                                src={Arrows}
                                                                width='66'
                                                                alt=''
                                                                style={{
                                                                    padding:
                                                                        '5px'
                                                                }}
                                                            />
                                                        </td>
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
                                                                <tr
                                                                    style={{
                                                                        backgroundColor:
                                                                            darkBlueBackground
                                                                    }}
                                                                >
                                                                    <td>
                                                                        <NewcomerPreviewUXDV1
                                                                            newcomer={
                                                                                newcomer
                                                                            }
                                                                            photo={
                                                                                newcomer.photo
                                                                            }
                                                                        />
                                                                    </td>
                                                                </tr>
                                                                <tr
                                                                    style={{
                                                                        backgroundColor:
                                                                            darkBlueBackground
                                                                    }}
                                                                >
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
