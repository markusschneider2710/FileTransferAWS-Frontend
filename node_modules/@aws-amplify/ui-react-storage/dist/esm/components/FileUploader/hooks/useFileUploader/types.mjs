var FileUploaderActionTypes;
(function (FileUploaderActionTypes) {
    FileUploaderActionTypes[FileUploaderActionTypes["ADD_FILES"] = 0] = "ADD_FILES";
    FileUploaderActionTypes[FileUploaderActionTypes["CLEAR_FILES"] = 1] = "CLEAR_FILES";
    FileUploaderActionTypes[FileUploaderActionTypes["QUEUE_FILES"] = 2] = "QUEUE_FILES";
    FileUploaderActionTypes[FileUploaderActionTypes["REMOVE_UPLOAD"] = 3] = "REMOVE_UPLOAD";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_STATUS"] = 4] = "SET_STATUS";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_PROCESSED_FILE_KEY"] = 5] = "SET_PROCESSED_FILE_KEY";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_STATUS_UPLOADED"] = 6] = "SET_STATUS_UPLOADED";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_STATUS_UPLOADING"] = 7] = "SET_STATUS_UPLOADING";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_UPLOAD_PROGRESS"] = 8] = "SET_UPLOAD_PROGRESS";
})(FileUploaderActionTypes || (FileUploaderActionTypes = {}));

export { FileUploaderActionTypes };
