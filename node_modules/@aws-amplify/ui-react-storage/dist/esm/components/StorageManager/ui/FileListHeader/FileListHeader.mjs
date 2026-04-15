import React__default from 'react';
import { ComponentClassName } from '@aws-amplify/ui';
import { Text } from '@aws-amplify/ui-react';

function FileListHeader({ allUploadsSuccessful, displayText, fileCount, remainingFilesCount, selectedFilesCount = 0, }) {
    const { getFilesUploadedText, getRemainingFilesText, getSelectedFilesText } = displayText;
    return (React__default.createElement(Text, { className: ComponentClassName.StorageManagerPreviewerText }, selectedFilesCount
        ? getSelectedFilesText(selectedFilesCount)
        : allUploadsSuccessful
            ? getFilesUploadedText(fileCount)
            : getRemainingFilesText(remainingFilesCount)));
}

export { FileListHeader };
