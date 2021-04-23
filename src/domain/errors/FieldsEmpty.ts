class FieldsEmpty extends Error {
    constructor(fields: Array<String>) {
        super(`The following required fields are empty: ${fields.forEach((e) => e)}`);
        this.message = "RequiredFieldsAreEmpty";

    }
}

export default FieldsEmpty;