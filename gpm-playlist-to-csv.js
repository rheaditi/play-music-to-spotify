(function playlistToCSV(response){

  const csvHeader = ([[`"title"`,`"artist"`,`"album"`].join(',')]) + '\r\n';
  const songList = response[1][0];

  const songs = songList.map(song => {
    const title = song[1];
    const artist = song[3];
    const album = song[4];
    return ([`"${title}"`,`"${artist}"`,`"${album}"`].join(','));
  });
  
  // create the CSV content
  const csvText = csvHeader + songs.join('\r\n');
  console.log(`Crunched ${songs.length} songs`);

  // create a downloadable blob
  const fileBlob = new Blob(
    [csvText],
    { type: 'text/csv;charset=utf-8;'}
  );
  const url = URL.createObjectURL(fileBlob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `playlist_${Date.now()}`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();

  // clean-up
  document.body.removeChild(link);

})(temp1); // temp1 is the variable that got stored
