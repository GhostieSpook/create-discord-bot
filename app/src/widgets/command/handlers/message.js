module.exports = async (message) => {
  if (!message.isUserMessage() || !message.isCommand()) {
    return;
  }

  const executable = message.getExecutable();
  if (!executable.isExecutable()) {
    return;
  }

  await executable.execute();
  if (!executable.isDeletable()) {
    return;
  }

  message.delete();
};
