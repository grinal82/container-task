class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    addError(code, message) {
        this.errors.set(code, message);
    }

    translate(code) {
        const message = this.errors.get(code);
        return message ? message : "Unknown error";
    }
}

// eslint-disable-next-line no-undef
module.exports = ErrorRepository;
