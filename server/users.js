const users = [];

function changeNameAndRoom({ name, room }) {
  name = name.trim().toLowerCase().concat("$");
  room = room.trim().toLowerCase().concat("$");
}

function addUser({ id, name, room }) {
  const isUser = users.find((user) => user.room === room && user.name === name);
  if (isUser) {
    return {
      error: "Hacker already exist! Try another name.",
    };
  }
  const user = { id, name, room };
  users.push(user);

  return {
    user,
  };
}

function removeUser(id) {
  const index = users.findIndex((user) => {
    user.id === id;
  });
  if (index !== 1) {
    return users.splice(index, 1)[0];
  }
}

function getUser(id) {
  users.find((user) => user.id === id);
}

function getUsersInRoom(room) {
  users.filter((user) => user.room === room);
}

module.exorts = {
  changeNameAndRoom,
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
