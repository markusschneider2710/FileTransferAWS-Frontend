import React__default from 'react';
import { classNames, classNameModifier, ComponentClassName } from '@aws-amplify/ui';
import { View, Text } from '@aws-amplify/ui-react';
import { useIcons, IconUpload } from '@aws-amplify/ui-react/internal';

function DropZone({ children, displayText, inDropZone, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, testId, }) {
    const { dropFilesText } = displayText;
    const icons = useIcons('storageManager');
    return (React__default.createElement(View, { className: classNames(inDropZone &&
            classNameModifier(ComponentClassName.StorageManagerDropZone, 'active'), ComponentClassName.StorageManagerDropZone), "data-testid": testId, onDragStart: onDragStart, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDrop: onDrop, onDragOver: onDragOver },
        React__default.createElement(View, { as: "span", "aria-hidden": true, className: ComponentClassName.StorageManagerDropZoneIcon }, icons?.upload ?? React__default.createElement(IconUpload, null)),
        React__default.createElement(Text, { className: ComponentClassName.StorageManagerDropZoneText }, dropFilesText),
        children));
}

export { DropZone };
