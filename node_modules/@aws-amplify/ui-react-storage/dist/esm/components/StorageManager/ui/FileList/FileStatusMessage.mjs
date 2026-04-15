import React__default from 'react';
import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import { Text, View } from '@aws-amplify/ui-react';
import { useIcons, IconError, IconCheck } from '@aws-amplify/ui-react/internal';
import { FileStatus } from '../../../FileUploader/types.mjs';

const FileStatusMessage = ({ errorMessage, getPausedText, getUploadingText, percentage, status, uploadSuccessfulText, }) => {
    const icons = useIcons('storageManager');
    switch (status) {
        case FileStatus.UPLOADING: {
            return (React__default.createElement(Text, { className: ComponentClassName.StorageManagerFileStatus }, getUploadingText(percentage)));
        }
        case FileStatus.PAUSED:
            return (React__default.createElement(Text, { className: ComponentClassName.StorageManagerFileStatus }, getPausedText(percentage)));
        case FileStatus.UPLOADED:
            return (React__default.createElement(Text, { className: classNames(ComponentClassName.StorageManagerFileStatus, classNameModifier(ComponentClassName.StorageManagerFileStatus, 'success')) },
                React__default.createElement(View, { as: "span", fontSize: "xl" }, icons?.success ?? React__default.createElement(IconCheck, null)),
                uploadSuccessfulText));
        case FileStatus.ERROR:
            return (React__default.createElement(Text, { className: classNames(ComponentClassName.StorageManagerFileStatus, classNameModifier(ComponentClassName.StorageManagerFileStatus, 'error')) },
                React__default.createElement(View, { as: "span", fontSize: "xl" }, icons?.error ?? React__default.createElement(IconError, null)),
                errorMessage));
        default:
            return null;
    }
};

export { FileStatusMessage };
