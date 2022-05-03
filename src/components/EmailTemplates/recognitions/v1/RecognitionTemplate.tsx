/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Recognition } from '~/types/recognition';

import Section_1_2 from './images/section_1_2.jpg';
import Section_2_3 from './images/section_2_3.jpg';
import HeaderImg from './images/emailHeader.png';
import RecognitionPreFooterImg from './images/prefooter.jpg';
import { RecognitionFooter } from './RecognitionFooter';
import { RecognitionSection } from './RecognitionSection';

const aggregateCategoryRecognitions = (
    recognitions: Recognition[],
    category: Recognition['category']
) => {
    let recognitionList = recognitions.filter(
        (recognition) => recognition.category === category
    );

    if (!recognitionList.length) return {};

    return recognitionList.reduce<Record<string, Recognition[]>>(
        (acum, recognition) => {
            const { recognitionGroupId } = recognition;

            if (!recognitionGroupId) {
                return acum;
            }

            if (!acum[recognitionGroupId]) {
                acum[recognitionGroupId] = [];
            }

            acum[recognitionGroupId].push(recognition);

            return acum;
        },
        {}
    );
};

type RecognitionTemplateProps = {
    emailImage: string;
    recognitions: Recognition[];
};

export const RecognitionTemplate: React.FC<RecognitionTemplateProps> = ({
    emailImage,
    recognitions
}) => {
    // Best start recognitions
    let bestStartRecognitions = aggregateCategoryRecognitions(recognitions, 0);
    let bestStartRecognitionsTemplate = (
        <RecognitionSection recognitions={bestStartRecognitions} category={0} />
    );

    // Recognition from custmer
    let recognitionFromCustomer = aggregateCategoryRecognitions(
        recognitions,
        1
    );

    let recognitionFromCustomerTemplate = (
        <RecognitionSection
            recognitions={recognitionFromCustomer}
            category={1}
        />
    );

    // New opportunities
    let newOpportunities = aggregateCategoryRecognitions(recognitions, 2);
    let newOpportunitiesTemplate = (
        <RecognitionSection recognitions={newOpportunities} category={2} />
    );

    return (
        <table cellSpacing='0' cellPadding='0' width='100%'>
            <tbody>
                <tr>
                    <td valign='top' align='center'>
                        <div>
                            <table
                                style={{
                                    borderCollapse: 'collapse',
                                    margin: '0 auto'
                                }}
                                cellPadding='0'
                                cellSpacing='0'
                                width='650'
                            >
                                <tbody>
                                    {/* Header */}
                                    <tr>
                                        <td valign='top'>
                                            <img
                                                style={{
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    display: 'block'
                                                }}
                                                src={HeaderImg}
                                                width='650'
                                                height='55'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style={{
                                                backgroundColor: '#fff',
                                                padding: '24px 56px'
                                            }}
                                        >
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p
                                                                style={{
                                                                    fontFamily:
                                                                        'Arial, sans-serif',
                                                                    fontSize:
                                                                        '14px',
                                                                    margin: 0
                                                                }}
                                                            >
                                                                Hello Front -
                                                                End & JavaScript
                                                                people!
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                padding: '6px 0'
                                                            }}
                                                        ></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p
                                                                style={{
                                                                    fontFamily:
                                                                        'Arial, sans-serif',
                                                                    margin: 0,
                                                                    fontSize:
                                                                        '14px'
                                                                }}
                                                            >
                                                                We are happy to
                                                                share with you
                                                                our{' '}
                                                                <b>
                                                                    Monthly
                                                                    Recognition
                                                                    Digest #2!
                                                                    November
                                                                </b>{' '}
                                                                has brought us a
                                                                lot to be proud
                                                                of! Hope, you’ll
                                                                find this
                                                                information
                                                                inspiring and do
                                                                your best to
                                                                make our team
                                                                even stronger.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                width='650'
                                                height='328'
                                                src={emailImage}
                                                style={{
                                                    maxWidth: '100%',
                                                    height: 'autp',
                                                    display: 'block'
                                                }}
                                            />
                                        </td>
                                    </tr>

                                    {/* Recognition sections */}
                                    <tr>
                                        <td>{bestStartRecognitionsTemplate}</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img
                                                style={{
                                                    display: 'block'
                                                }}
                                                src={Section_1_2}
                                                width='650'
                                                height='190'
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>{newOpportunitiesTemplate}</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img
                                                style={{
                                                    display: 'block'
                                                }}
                                                src={Section_2_3}
                                                width='650'
                                                height='190'
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            {recognitionFromCustomerTemplate}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img
                                                src={RecognitionPreFooterImg}
                                                style={{
                                                    display: 'block'
                                                }}
                                                width='650'
                                                height='110'
                                            />
                                        </td>
                                    </tr>

                                    {/* Footer section */}
                                    <tr>
                                        <td>
                                            <RecognitionFooter />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
