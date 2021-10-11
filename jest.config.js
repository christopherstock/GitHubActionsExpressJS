module.exports = {
    testMatch: [
        '**/*.(test|spec).js',
    ],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'public',
                outputName: 'jest-results.xml',
            }
        ]
    ]
};
