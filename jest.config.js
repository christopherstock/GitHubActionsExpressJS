module.exports = {
    testMatch: [
        '**/*.(test|spec).js',
    ],
    collectCoverage: true,
    coverageDirectory: 'public/coverage',
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'public',
                outputName: 'test-results.xml',
            }
        ]
    ]
};
