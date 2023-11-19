import isValid from "./isValidName";
import GREETING from "./constants/GREETING"

export default function sayHelloToUser(name) {
    if (!isValid(name)) {
        return 'Invalid name';
    }

    return `${GREETING}, ${name}!`;
}
