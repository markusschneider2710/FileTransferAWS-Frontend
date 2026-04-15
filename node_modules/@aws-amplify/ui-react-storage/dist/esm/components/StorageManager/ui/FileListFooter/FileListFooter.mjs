import React__default from 'react';
import { ComponentClassName } from '@aws-amplify/ui';
import { View, Button } from '@aws-amplify/ui-react';

function FileListFooter({ displayText, remainingFilesCount, onClearAll, onUploadAll, }) {
    const { clearAllButtonText, getUploadButtonText } = displayText;
    return (React__default.createElement(View, { className: ComponentClassName.StorageManagerPreviewerFooter },
        React__default.createElement(View, { className: ComponentClassName.StorageManagerPreviewerActions },
            React__default.createElement(Button, { size: "small", variation: "link", onClick: onClearAll }, clearAllButtonText),
            React__default.createElement(Button, { size: "small", variation: "primary", onClick: onUploadAll }, getUploadButtonText(remainingFilesCount)))));
}

export { FileListFooter };
