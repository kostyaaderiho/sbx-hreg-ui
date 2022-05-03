import React from 'react';

export const RecognitionFooter = () => (
    <table
        style={{
            backgroundColor: '#474A59',
            borderCollapse: 'collapse'
        }}
        cellPadding='0'
        cellSpacing='0'
        width='650'
    >
        <tbody>
            <tr>
                <td
                    align='center'
                    style={{
                        padding: '22px 0 28px'
                    }}
                >
                    <table>
                        <tbody>
                            <tr>
                                <td
                                    valign='middle'
                                    style={{
                                        backgroundColor: '#30B6DD',
                                        padding: '7px 32px'
                                    }}
                                >
                                    <a
                                        href='https://epa.ms/IWantToBeRecognized'
                                        style={{
                                            fontFamily: 'Arial, sans-serif',
                                            textDecoration: 'none',
                                            fontSize: '14px',
                                            color: '#fff'
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
                                            I want to be recognized
                                        </strong>
                                    </a>
                                </td>
                                <td
                                    style={{
                                        padding: '0 7px'
                                    }}
                                ></td>
                                <td
                                    valign='middle'
                                    style={{
                                        backgroundColor: '#fff',
                                        padding: '7px 32px'
                                    }}
                                >
                                    <a
                                        href='https://epa.ms/nv7Kh'
                                        style={{
                                            textDecoration: 'none',
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '14px',
                                            color: '#525462'
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
                                            How to improve
                                        </strong>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
);
