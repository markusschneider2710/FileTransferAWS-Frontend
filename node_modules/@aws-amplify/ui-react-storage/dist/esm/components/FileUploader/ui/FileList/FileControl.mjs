import React__default from 'react';
import { ComponentClassName } from '@aws-amplify/ui';
import { View, Loader, Button } from '@aws-amplify/ui-react';
import { FileStatus } from '../../types.mjs';
import { FileStatusMessage } from './FileStatusMessage.mjs';
import { FileRemoveButton } from './FileRemoveButton.mjs';
import { UploadDetails } from './FileDetails.mjs';
import { FileThumbnail } from './FileThumbnail.mjs';

function FileControl({ onPause, onResume, displayName, errorMessage, isImage, isResumable, loaderIsDeterminate, onRemove, progress, showThumbnails = true, size, status, displayText, thumbnailUrl, }) {
    const { getPausedText, getUploadingText, uploadSuccessfulText, pauseButtonText, resumeButtonText, } = displayText;
    return (React__default.createElement(View, { className: ComponentClassName.FileUploaderFile },
        React__default.createElement(View, { className: ComponentClassName.FileUploaderFileWrapper },
            showThumbnails ? (React__default.createElement(FileThumbnail, { isImage: isImage, fileName: displayName, url: thumbnailUrl })) : null,
            React__default.createElement(UploadDetails, { displayName: displayName, fileSize: size }),
            status === FileStatus.UPLOADING ? (React__default.createElement(Loader, { className: ComponentClassName.FileUploaderLoader, variation: "linear", percentage: progress, isDeterminate: loaderIsDeterminate, isPercentageTextHidden: true })) : null,
            isResumable &&
                (status === FileStatus.UPLOADING || status === FileStatus.PAUSED) ? (status === FileStatus.PAUSED ? (React__default.createElement(Button, { onClick: onResume, size: "small", variation: "link" }, resumeButtonText)) : (React__default.createElement(Button, { onClick: onPause, size: "small", variation: "link" }, pauseButtonText))) : null,
            React__default.createElement(FileRemoveButton, { altText: `Remove file ${displayName}`, onClick: onRemove })),
        React__default.createElement(FileStatusMessage, { uploadSuccessfulText: uploadSuccessfulText, getUploadingText: getUploadingText, getPausedText: getPausedText, status: status, errorMessage: errorMessage, percentage: progress })));
}

export { FileControl };
