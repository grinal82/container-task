module.exports = {
    verbose: true,
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx"],
    transformIgnorePatterns: ["/node_modules/"],
};
