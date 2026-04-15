var FileStatus;
(function (FileStatus) {
    FileStatus["ADDED"] = "added";
    FileStatus["QUEUED"] = "queued";
    FileStatus["UPLOADING"] = "uploading";
    FileStatus["PAUSED"] = "paused";
    FileStatus["ERROR"] = "error";
    FileStatus["UPLOADED"] = "uploaded";
})(FileStatus || (FileStatus = {}));

export { FileStatus };
