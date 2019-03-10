# 📻 Google Play Music → CSV → Spotify

Import your playlist from Google Play Music to Spotify or any other service.

#### Note

This is what worked for me, on Chrome Version 73, as of 10th March 2019. If the structure of the API response changes or any changes to the script are required feel free to raise an issue / PR! ✌🏼

## Steps

1. Navigate to your playlist on the [Google Play Music web-app](https://play.google.com/music) on Chrome.
2. Open `Chrome's DevTools` (Cmd/Ctrl + Shift + C) and then:  
  a. Head over to the `Network` tab in the `DevTools` panel.  
  b. Refresh the page & filter the requests.  
  c. Find the request to the endpoint `loaduserplaylist` & click on the request to open up the details pane to the right.
![image](https://user-images.githubusercontent.com/6426069/54086809-e3e0bd00-4372-11e9-9a76-d424c3c0aeae.png)

3. On the details pane for that request:  
  a. Head to the `Preview` pane for that request. It should look like the picture below.  
  b. Right click at the top of the response body.  
  c. Select `Store as global variable` and it will get added to the `window` object as a temporary variable (initially `temp1`).
![image](https://user-images.githubusercontent.com/6426069/54087016-07a50280-4375-11e9-8afc-37ebfb648a2e.png)

4. Once the `temp1` variable is created, it will take you back to the `Console` tab & display the variable. If it looks something like the picture below, you did it correctly. This stores the entire response into the `temp1` variable. 
![image](https://user-images.githubusercontent.com/6426069/54087049-420e9f80-4375-11e9-9284-e4398a9d24c0.png)

5. Copy the script from [this file](http://github.com/rheaditi/play-music-to-spotify/blob/master/gpm-playlist-to-csv.js) and paste it onto the console & press enter to run it. It'll go through your playlist & create a CSV file for you to download.

6. You can then head over to [`TuneMyMusic`](https://www.tunemymusic.com/#step1) & use their `'Upload a file'` option to upload the downloaded CSV file and they should be able to parse your playlist & import it onto any of their supported destinations, including Spotify.

That's it! 🎧🎶

---

Once done you can revoke access for the app from [here](https://www.spotify.com/account/apps/); it's best to clean up.. just in-case :)


