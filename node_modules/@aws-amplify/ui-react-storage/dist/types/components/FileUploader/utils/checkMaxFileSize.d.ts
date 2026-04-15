export declare const checkMaxFileSize: ({ file, getFileSizeErrorText, maxFileSize, }: {
    file: File;
    getFileSizeErrorText: (sizeText: string) => string;
    maxFileSize?: number | undefined;
}) => string;
