import React__default from 'react';
import { ComponentClassName, humanFileSize } from '@aws-amplify/ui';
import { View, Text } from '@aws-amplify/ui-react';

const UploadDetails = ({ displayName, fileSize, }) => {
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(View, { className: ComponentClassName.FileUploaderFileMain },
            React__default.createElement(Text, { className: ComponentClassName.FileUploaderFileName }, displayName)),
        React__default.createElement(Text, { as: "span", className: ComponentClassName.FileUploaderFileSize }, fileSize ? humanFileSize(fileSize, true) : '')));
};

export { UploadDetails };
