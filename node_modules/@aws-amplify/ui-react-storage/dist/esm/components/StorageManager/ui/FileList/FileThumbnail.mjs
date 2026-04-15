import React__default from 'react';
import { ComponentClassName } from '@aws-amplify/ui';
import { Image, View } from '@aws-amplify/ui-react';
import { useIcons, IconFile } from '@aws-amplify/ui-react/internal';

const FileThumbnail = ({ fileName, isImage, url, }) => {
    const icons = useIcons('storageManager');
    const thumbnail = isImage ? (React__default.createElement(Image, { alt: fileName, src: url })) : (icons?.file ?? React__default.createElement(IconFile, null));
    return (React__default.createElement(View, { className: ComponentClassName.StorageManagerFileImage }, thumbnail));
};

export { FileThumbnail };
