const defaultFileUploaderDisplayText = {
    getFilesUploadedText(count) {
        return `${count} ${count === 1 ? 'file uploaded' : 'files uploaded'}`;
    },
    getFileSizeErrorText(sizeText) {
        return `File size must be below ${sizeText}`;
    },
    getRemainingFilesText(count) {
        return `${count} ${count === 1 ? 'file' : 'files'} uploading`;
    },
    getSelectedFilesText(count) {
        return `${count} ${count === 1 ? 'file' : 'files'} selected`;
    },
    getUploadingText(percentage) {
        return `Uploading${percentage > 0 ? `: ${percentage}%` : ''}`;
    },
    getUploadButtonText(count) {
        return `Upload ${count} ${count === 1 ? 'file' : 'files'}`;
    },
    getMaxFilesErrorText(count) {
        return `Cannot choose more than ${count} ${count === 1 ? 'file' : 'files'}. Remove files before updating`;
    },
    getErrorText(message) {
        return message;
    },
    doneButtonText: 'Done',
    clearAllButtonText: 'Clear all',
    extensionNotAllowedText: 'Extension not allowed',
    browseFilesText: 'Browse files',
    dropFilesText: 'Drop files here or',
    pauseButtonText: 'Pause',
    resumeButtonText: 'Resume',
    uploadSuccessfulText: 'Uploaded',
    getPausedText(percentage) {
        return `Paused: ${percentage}%`;
    },
};

export { defaultFileUploaderDisplayText };
