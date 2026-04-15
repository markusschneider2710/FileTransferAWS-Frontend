import { humanFileSize } from '@aws-amplify/ui';

const checkMaxFileSize = ({ file, getFileSizeErrorText, maxFileSize, }) => {
    if (maxFileSize === undefined)
        return '';
    if (file.size > maxFileSize) {
        return getFileSizeErrorText(humanFileSize(maxFileSize, true));
    }
    return '';
};

export { checkMaxFileSize };
