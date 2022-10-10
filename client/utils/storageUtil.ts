/**
 * Store string record in the storage
 *
 * @param {string} key
 * @param {string | array | object} value
 */
export let setLocalStorage = (key: any, value: any) => {
    if (value && typeof (value) === 'string') {
        localStorage.setItem(key, value);
    } else {
        localStorage.setItem(key, JSON.stringify(value)); // convert arrays or objects into strings
    }
};

/**
 * Retrieve record from the storage using the key
 *
 * @param {string} key
 */
export let getLocalStorage = (key: any) => {
    const data = localStorage.getItem(key);
    try {
        // @ts-expect-error TS(2345): Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
        return JSON.parse(data); // converts a JSON string into a Javascript Object
    } catch (e) {
        return data;
    }
};

/**
 * Clear records from the storage using the key
 *
 * @param {string} key
 */
export let clearLocalStorage = (key: any) => localStorage.removeItem(key);