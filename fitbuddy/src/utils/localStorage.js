export const saveMessages = (messages) => {
  localStorage.setItem("chat", JSON.stringify(messages));
};

export const loadMessages = () => {
  const data = localStorage.getItem("chat");
  return data ? JSON.parse(data) : [];
};