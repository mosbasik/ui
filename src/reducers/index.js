import { combineReducers } from 'redux';
import metadata from 'reducers/metadata';
import match from 'reducers/match';
import heroRanking, { ranking } from 'reducers/heroRanking';
import heroBenchmark, { benchmark } from 'reducers/heroBenchmark';
import search from 'reducers/search';
import gotPlayer, {
  player,
  playerMatches,
  playerPeers,
  playerHeroes,
  playerPros,
  playerRankings,
  playerHistogram,
  playerRecords,
  playerCounts,
  playerMMR,
  playerItems,
  playerWardmap,
  playerWordcloud,
} from 'reducers/gotPlayer';
import form, { getForm } from 'reducers/form';
import request from 'reducers/request';
import distributions from 'reducers/distributions';
import table, { getTable } from 'reducers/table';

// This is where we will export all our state retrieval functions (better encapsulation)
export {
  player,
  playerMatches,
  playerPeers,
  playerHeroes,
  playerPros,
  playerRankings,
  playerHistogram,
  playerRecords,
  playerCounts,
  playerMMR,
  playerItems,
  playerWardmap,
  playerWordcloud,
  getForm as form,
  benchmark,
  ranking,
  getTable as table,
};

export default combineReducers({
  metadata,
  gotPlayer,
  match,
  heroRanking,
  heroBenchmark,
  search,
  form,
  request,
  distributions,
  table,
});
