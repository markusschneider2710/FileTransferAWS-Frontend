import { isFunction } from '@aws-amplify/ui';

/**
 * Utility function that takes the processFile prop, along with a file a key
 * and returns a Promise that resolves to { file, key, ..rest }
 * regardless if processFile is defined and if it is sync or async
 */
const resolveFile = ({ processFile, ...input }) => {
    return new Promise((resolve, reject) => {
        const result = isFunction(processFile) ? processFile(input) : input;
        if (result instanceof Promise) {
            result.then(resolve).catch(reject);
        }
        else {
            resolve(result);
        }
    });
};

export { resolveFile };
