import { FileStatus } from '../../types.mjs';
import { FileUploaderActionTypes } from './types.mjs';

const addFilesAction = ({ files, status, getFileErrorMessage, }) => ({
    type: FileUploaderActionTypes.ADD_FILES,
    files,
    status,
    getFileErrorMessage,
});
const clearFilesAction = () => ({
    type: FileUploaderActionTypes.CLEAR_FILES,
});
const queueFilesAction = () => ({
    type: FileUploaderActionTypes.QUEUE_FILES,
});
const setUploadingFileAction = ({ id, uploadTask, }) => ({
    type: FileUploaderActionTypes.SET_STATUS_UPLOADING,
    id,
    uploadTask,
});
const setUploadProgressAction = ({ id, progress, }) => ({
    type: FileUploaderActionTypes.SET_UPLOAD_PROGRESS,
    id,
    progress,
});
const setUploadStatusAction = ({ id, status, }) => ({
    type: FileUploaderActionTypes.SET_STATUS,
    id,
    status,
});
const setUploadSuccessAction = ({ id, resolvedKey, }) => ({
    type: FileUploaderActionTypes.SET_STATUS_UPLOADED,
    id,
    resolvedKey,
    status: FileStatus.UPLOADED,
});
const removeUploadAction = ({ id }) => ({
    type: FileUploaderActionTypes.REMOVE_UPLOAD,
    id,
});

export { addFilesAction, clearFilesAction, queueFilesAction, removeUploadAction, setUploadProgressAction, setUploadStatusAction, setUploadSuccessAction, setUploadingFileAction };
