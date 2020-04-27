const titleRenamed = (title, id, completed) => ({
  type: "TITLE_RENAMED",
  payload: { title, id, completed },
});

const titleRenamedSuccess = () => ({
  type: "TITLE_RENAMED_SUCCESS",
});

const titleRenamedFailed = (msg) => ({
  type: "TITLE_RENAMED_FAILED",
  payload: { msg },
});

export { titleRenamed, titleRenamedSuccess, titleRenamedFailed };
