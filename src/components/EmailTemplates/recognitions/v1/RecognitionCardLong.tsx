/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Recognition } from '~/types/recognition';

type RecognitionCardLongProps = {
    recognition: Recognition;
};

export const RecognitionCardLong: React.FC<RecognitionCardLongProps> = ({
    recognition
}) => (
    <table
        cellPadding='0'
        cellSpacing='0'
        width='100%'
        style={{
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: '#fff',
            width: '286px'
        }}
    >
        <tbody>
            <tr>
                <td
                    style={{
                        padding: '20px 20px 8px'
                    }}
                >
                    <img src={`/${recognition.photo}`} width='88' height='88' />
                </td>
            </tr>
            <tr>
                <td
                    style={{
                        padding: '0 20px'
                    }}
                >
                    <b>
                        <span
                            style={{
                                fontSize: '16px',
                                fontFamily: 'Arial, sans-serif',
                                color: '#474A59'
                            }}
                        >
                            {recognition.fullName}
                        </span>
                    </b>
                </td>
            </tr>
            <tr>
                <td
                    style={{
                        padding: '0 20px'
                    }}
                >
                    <span
                        style={{
                            fontSize: '14px',
                            fontFamily: 'Arial, sans-serif',
                            lineHeight: '18px',
                            color: '#9FA1AE'
                        }}
                    >
                        {recognition.position}
                    </span>
                </td>
            </tr>
            <tr>
                <td
                    style={{
                        padding: '32px 20px 45px'
                    }}
                >
                    <p
                        style={{
                            fontSize: '14px',
                            fontFamily: 'Arial, sans-serif',
                            lineHeight: '18px',
                            color: '#474A59',
                            margin: 0
                        }}
                    >
                        {recognition.message}
                    </p>
                    <p
                        style={{
                            fontFamily: 'Arial, sans-serif',
                            fontStyle: 'italic',
                            textAlign: 'right',
                            fontSize: '14px',
                            color: '#474A59',
                            margin: 0
                        }}
                    >
                        From: {recognition.nominator}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
);
