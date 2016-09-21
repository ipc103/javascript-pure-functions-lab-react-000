const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

function getNextEpisodeInPlaylist(episodes){
  return episodes[0];
}

function addToPlaylist(playlist, item){
  return [...playlist, item];
}

function removeFromPlaylist(playlist, item){
  let index = playlist.indexOf(item);
  return playlist.slice(index, -1)
}

function bingeWatch(playlist){
  let episode = getNextEpisodeInPlaylist(playlist);
  if (episode) {
    return bingeWatch(removeFromPlaylist(playlist, episode))
  } else {
    return 'Please let there be more!'
  }

}
