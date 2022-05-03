type RecognitionConfigType = Record<
    number,
    {
        title: string;
        description: string;
        sectionColor: string;
    }
>;

export const RECOGNITION_CONFIGS: RecognitionConfigType = {
    0: {
        title: 'Best start',
        description: 'For demonstrating great results and quick adaptation.',
        sectionColor: '#30B6DD'
    },
    1: {
        title: 'Recognition from customer',
        description: 'Customers highly appreciate your work. Keep up!',
        sectionColor: '#1A849A'
    },
    2: {
        title: 'Front-End & JavaScript Heroes',
        description: 'Thank you for making FE_JS awesome.',
        sectionColor: '#474A59'
    }
};
