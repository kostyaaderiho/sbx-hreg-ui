/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Recognition } from '~/types/recognition';

type RecognitionCardProps = {
    recognition: Recognition;
};

export const RecognitionCard: React.FC<RecognitionCardProps> = ({
    recognition
}) => (
    <table
        cellPadding='0'
        cellSpacing='0'
        width='100%'
        style={{
            margin: '0 auto',
            textAlign: 'center',
            width: '160px'
        }}
    >
        <tbody>
            <tr>
                <td>
                    <img src={`/${recognition.photo}`} width='88' height='88' />
                </td>
            </tr>
            <tr>
                <td
                    style={{
                        padding: '8px 0 0'
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
                <td>
                    <span
                        style={{
                            fontSize: '14px',
                            fontFamily: 'Arial, sans-serif',
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
                        padding: '8px 0 0'
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'Arial, sans-serif',
                            lineHeight: '18px',
                            fontSize: '14px',
                            color: '#454444',
                            margin: 0
                        }}
                    >
                        {recognition.personalMessage}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
);
