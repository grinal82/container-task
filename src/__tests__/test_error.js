const ErrorRepository = require('../js/error')

describe("ErrorRepository", () => {
    let errorRepository;

    beforeEach(() => {
        errorRepository = new ErrorRepository();
    });

    test("should add an error to the repository", () => {
        errorRepository.addError(404, "Not found");
        expect(errorRepository.errors.size).toBe(1);
    });

    test("should return the correct error message", () => {
        errorRepository.addError(404, "Not found");
        errorRepository.addError(500, "Internal server error");
        expect(errorRepository.translate(404)).toBe("Not found");
        expect(errorRepository.translate(500)).toBe("Internal server error");
    });

    test('should return "Unknown error" for unknown error codes', () => {
        errorRepository.addError(404, "Not found");
        expect(errorRepository.translate(401)).toBe("Unknown error");
    });
});
