import React from 'react';

import { Recognition as TRecognition } from '~/types/recognition';

import { RecognitionCard } from './RecognitionCard';
import { RecognitionHeader } from './RecognitionHeader';
import { getColumsPerLine } from './utils';

type SingleRowProps = { recognition: TRecognition };

const SingleRow: React.FC<SingleRowProps> = ({ recognition }) => (
    <tr>
        <td>
            <table cellPadding='0' cellSpacing='0' width='100%'>
                <tbody>
                    <tr>
                        <td
                            valign='top'
                            align='center'
                            style={{
                                padding: '16px 0'
                            }}
                        >
                            <RecognitionCard recognition={recognition} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
);

type DoubleRowProps = { recognitions: TRecognition[] };

const DoubleRow: React.FC<DoubleRowProps> = ({ recognitions }) => (
    <tr>
        <td>
            <table cellPadding='0' cellSpacing='0' width='100%'>
                <tbody>
                    <tr>
                        {recognitions.map((recognition, i) => (
                            <React.Fragment key={i}>
                                <td
                                    valign='top'
                                    style={{
                                        padding: '16px 32px'
                                    }}
                                ></td>
                                <td
                                    valign='top'
                                    key={i}
                                    style={{
                                        padding: '16px 0'
                                    }}
                                >
                                    <RecognitionCard
                                        recognition={recognition}
                                    />
                                </td>
                                {i === recognitions.length - 1 && (
                                    <td
                                        valign='top'
                                        style={{
                                            padding: '16px 32px'
                                        }}
                                    ></td>
                                )}
                            </React.Fragment>
                        ))}
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
);

type TrippleRowProps = { recognitions: TRecognition[] };

const TrippleRow: React.FC<TrippleRowProps> = ({ recognitions }) => (
    <tr>
        <td>
            <table cellPadding='0' cellSpacing='0' width='100%'>
                <tbody>
                    <tr>
                        {recognitions.map((recognition) => (
                            <td
                                valign='top'
                                style={{
                                    padding: '24px 18px 16px',
                                    textAlign: 'center'
                                }}
                                key={recognition.id}
                            >
                                <RecognitionCard recognition={recognition} />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
);

const RecognitionList = ({
    recognitions
}: {
    recognitions: TRecognition[];
}) => {
    let colums = getColumsPerLine(recognitions, 3);
    let k = 0;

    return (
        <>
            {colums.map((columnPerLine) => {
                let items = recognitions.slice(k, k + columnPerLine);

                k = k + columnPerLine;

                switch (columnPerLine) {
                    case 1:
                        return <SingleRow recognition={items[0]} key={k} />;
                    case 2:
                        return <DoubleRow recognitions={items} key={k} />;
                    case 3:
                        return <TrippleRow recognitions={items} key={k} />;
                    default:
                        return <SingleRow recognition={items[0]} key={k} />;
                }
            })}
        </>
    );
};

type RecognitionProps = { recognitions: TRecognition[] };

export const Recognition: React.FC<RecognitionProps> = ({ recognitions }) => (
    <table
        cellPadding='0'
        cellSpacing='0'
        width='100%'
        style={{
            backgroundColor: '#fff'
        }}
    >
        <tbody>
            <tr>
                <td>
                    <RecognitionHeader
                        nominator={recognitions[0].nominator}
                        message={recognitions[0].message}
                        title={recognitions[0].title}
                    />
                </td>
            </tr>
            <RecognitionList recognitions={recognitions} />
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
                        padding: '0 0 24px'
                    }}
                >
                    <a
                        href='https://epa.ms/nv7Kh'
                        style={{
                            textDecoration: 'none',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '14px',
                            color: '#00B0F0'
                        }}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <strong
                            style={{
                                textTransform: 'uppercase',
                                fontWeight: 'normal'
                            }}
                        >
                            Optional link
                        </strong>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
);
