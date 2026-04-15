import React__default from 'react';
import { useIcons, IconClose } from '@aws-amplify/ui-react/internal';
import { Button, VisuallyHidden, View } from '@aws-amplify/ui-react';

const FileRemoveButton = ({ altText, onClick, }) => {
    const icons = useIcons('storageManager');
    return (React__default.createElement(Button, { size: "small", onClick: onClick, testId: "storage-manager-remove-button" },
        React__default.createElement(VisuallyHidden, null, altText),
        React__default.createElement(View, { as: "span", "aria-hidden": true, fontSize: "medium" }, icons?.remove ?? React__default.createElement(IconClose, null))));
};

export { FileRemoveButton };
