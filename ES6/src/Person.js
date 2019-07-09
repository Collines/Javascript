/**
 * Example of ES6 features
 */
export default class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    speak(message) {
        console.log(`${this.fullName} says: ${message}`);
    }

    /**
     * Getter and interpolated string example
     */
    get fullName() {
        if (this.lastName) {
            return `${this.firstName} ${this.lastName}`;
        } else {
            return this.firstName;
        }
    }

    /**
     * @example
     * let person = new Person('John', 'Smith');
     * console.log(person);
     * @return {string}
     */
    toString() {
        return this.fullName;
    }
}
