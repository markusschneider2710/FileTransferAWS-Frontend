import React__default from 'react';
import { ComponentClassName } from '@aws-amplify/ui';
import { Button } from '@aws-amplify/ui-react';

function FilePicker({ children, className = ComponentClassName.StorageManagerFilePicker, size = 'small', ...props }) {
    return (React__default.createElement(Button, { ...props, className: className, size: size }, children));
}

export { FilePicker };
