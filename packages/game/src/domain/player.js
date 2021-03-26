export const makePlayer = ({ id, name, heartbeat } = {}) => {
  if (!id) throw new Error('Player must contain an id');
  if (!name) throw new Error('Player must have a name');
  return { id, name, heartbeat };
};

export const equals = (player1, player2) => player1?.id === player2?.id;
