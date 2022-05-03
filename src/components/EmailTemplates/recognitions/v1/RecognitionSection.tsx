import React from 'react';

import { Recognition as TRecognition } from '~/types';

import { Recognition } from './Recognition';
import { RECOGNITION_CONFIGS } from './config';
import { getColumsPerLine, isObjectEmpty } from './utils';
import { RecognitionCardLong } from './RecognitionCardLong';

type RecognitionSectionProps = {
    category: number;
    recognitions: Record<string, TRecognition[]>;
};

export const RecognitionSection: React.FC<RecognitionSectionProps> = ({
    category,
    recognitions = {}
}) => {
    if (isObjectEmpty(recognitions)) {
        return null;
    }

    let recognitionGroups = Object.keys(recognitions);
    let aggregatedByNominator;

    const renderSingleNomination = (
        recognitionList: TRecognition[],
        singleColumsOrder: number[]
    ) => {
        const OneNominationPerLine = ({
            recognition
        }: {
            recognition: TRecognition;
        }) => (
            <>
                <tr>
                    <td align='center' colSpan={3} valign='top'>
                        <RecognitionCardLong recognition={recognition} />
                    </td>
                </tr>
            </>
        );

        const TwoNominationPerLine = ({ items }: { items: TRecognition[] }) => (
            <>
                <tr>
                    <td valign='top'>
                        <RecognitionCardLong recognition={items[0]} />
                    </td>
                    <td
                        style={{
                            padding: '0 9px'
                        }}
                        valign='top'
                    ></td>
                    <td valign='top'>
                        <RecognitionCardLong recognition={items[1]} />
                    </td>
                </tr>
            </>
        );

        let k = 0;

        return singleColumsOrder.map((columnPerLine) => {
            let items = recognitionList.slice(k, k + columnPerLine);
            let separator = k !== recognitionList.length - 1 && (
                <tr>
                    <td
                        style={{
                            padding: '9px 0'
                        }}
                    ></td>
                </tr>
            );

            k = k + columnPerLine;

            switch (columnPerLine) {
                case 1:
                    return (
                        <>
                            <OneNominationPerLine
                                recognition={items[0]}
                                key={k}
                            />
                            {separator}
                        </>
                    );
                case 2:
                    return (
                        <>
                            <TwoNominationPerLine items={items} key={k} />

                            {separator}
                        </>
                    );
                default:
                    return (
                        <>
                            <OneNominationPerLine
                                recognition={items[0]}
                                key={k}
                            />
                            {separator}
                        </>
                    );
            }
        });
    };

    const renderMultipleNominations = (recognitionGroup: string, i: number) => (
        <tr key={recognitionGroup}>
            <td
                style={
                    i !== recognitionGroups.length - 1
                        ? { paddingBottom: '12px' }
                        : {}
                }
            >
                <Recognition recognitions={recognitions[recognitionGroup]} />
            </td>
        </tr>
    );

    if (category === 0) {
        const recognitionList = recognitionGroups.reduce<TRecognition[]>(
            (acc, current) => [...acc, ...recognitions[current]],
            []
        );

        const singleColumsOrder = getColumsPerLine(recognitionList, 2);

        aggregatedByNominator = renderSingleNomination(
            recognitionList,
            singleColumsOrder
        );
    } else {
        aggregatedByNominator = recognitionGroups.map((recognitionGroup, i) =>
            renderMultipleNominations(recognitionGroup, i)
        );
    }

    return (
        <table
            style={{
                background: RECOGNITION_CONFIGS[category].sectionColor
            }}
            cellPadding='0'
            cellSpacing='0'
            width='100%'
        >
            <tbody>
                <tr>
                    <td>
                        <table cellPadding='0' cellSpacing='0' width='100%'>
                            <tbody>
                                <tr>
                                    <td
                                        style={{
                                            padding: '0 30px 32px'
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontFamily: 'Arial, sans-serif',
                                                textTransform: 'uppercase',
                                                lineHeight: '24px',
                                                fontSize: '24px',
                                                textAlign: 'center',
                                                margin: 0,
                                                color: '#fff'
                                            }}
                                        >
                                            <b>
                                                {
                                                    RECOGNITION_CONFIGS[
                                                        category
                                                    ].title
                                                }
                                            </b>
                                        </p>
                                        <p
                                            style={{
                                                textAlign: 'center',
                                                fontSize: '16px',
                                                lineHeight: 1.5,
                                                marginBottom: 0,
                                                color: '#fff'
                                            }}
                                        >
                                            {
                                                RECOGNITION_CONFIGS[category]
                                                    .description
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            padding: '0 30px'
                        }}
                    >
                        <table cellPadding='0' cellSpacing='0' width='100%'>
                            <tbody>{aggregatedByNominator}</tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
