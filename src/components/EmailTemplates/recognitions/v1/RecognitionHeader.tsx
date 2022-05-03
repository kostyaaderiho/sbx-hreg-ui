import React from 'react';

import { Recognition } from '~/types/recognition';

type RecognitionHeaderProps = {
    nominator: Recognition['nominator'];
    message: Recognition['message'];
    title: Recognition['title'];
};

export const RecognitionHeader: React.FC<RecognitionHeaderProps> = ({
    nominator,
    message,
    title
}) => (
    <table cellPadding='0' cellSpacing='0' width='100%'>
        <thead>
            <tr>
                <td
                    style={{
                        padding: '12px 0'
                    }}
                ></td>
            </tr>
            <tr>
                <td
                    align='center'
                    style={{
                        padding: '0 24px 6px'
                    }}
                >
                    <p
                        style={{
                            textAlign: 'center',
                            margin: 0
                        }}
                    >
                        <b>
                            <span
                                style={{
                                    fontFamily: 'Arial, sans-serif',
                                    lineHeight: '18px',
                                    fontSize: '20px',
                                    color: '#474A59'
                                }}
                            >
                                {title}
                            </span>
                        </b>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    align='center'
                    colSpan={3}
                    style={{
                        padding: '0 24px'
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'Arial, sans-serif',
                            lineHeight: '18px',
                            fontSize: '14px',
                            color: '#474A59'
                        }}
                    >
                        {message}
                    </span>
                </td>
            </tr>
            <tr>
                <td
                    align='right'
                    style={{
                        padding: '0 24px'
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'Arial, sans-serif',
                            fontStyle: 'italic',
                            lineHeight: '18px',
                            fontSize: '14px',
                            color: '#474A59'
                        }}
                    >
                        {nominator}
                    </span>
                </td>
            </tr>
        </thead>
    </table>
);
