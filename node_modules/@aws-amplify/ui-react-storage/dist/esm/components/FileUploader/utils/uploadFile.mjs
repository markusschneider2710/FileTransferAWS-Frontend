import { uploadData } from 'aws-amplify/storage';
import { isFunction } from '@aws-amplify/ui';

async function uploadFile({ input, onError, onStart, onComplete, }) {
    const resolvedInput = await input();
    const uploadTask = uploadData(resolvedInput);
    const key = resolvedInput?.key ??
        resolvedInput?.path;
    if (isFunction(onStart)) {
        onStart({ key, uploadTask });
    }
    uploadTask.result
        .then((result) => {
        if (isFunction(onComplete) && uploadTask.state === 'SUCCESS') {
            onComplete(result);
        }
    })
        .catch((error) => {
        if (isFunction(onError)) {
            onError({ key, error });
        }
    });
    return uploadTask;
}

export { uploadFile };
