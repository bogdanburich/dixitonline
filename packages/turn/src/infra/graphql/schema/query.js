import { queryField, idArg } from 'nexus';
import { makeGetTurnPhase } from '../../../useCases/get-turn-phase';
import { TurnPhase } from './turn-phase';

export const GetTurnPhase = queryField('getTurnPhase', {
  type: TurnPhase,
  args: {
    turnId: idArg({ required: true }),
  },
  async resolve(_, { turnId }, { dataSources, currentUser }) {
    const getTurnPhase = makeGetTurnPhase({ turnRepository: dataSources.turnRepository });
    const turn = await getTurnPhase({ turnId, playerId: currentUser.id });
    return turn;
  },
});
