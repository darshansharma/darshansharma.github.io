---
title="How I created a simple reels downloader in flutter?"
slug="how-i-created-a-simple-reels-downloader-in-flutter"
excerpt=""
tags=["app","tech"]
type="post"
publish_at="28 Apr 2021 12:00 IST"
featured_image="https://firebasestorage.googleapis.com/v0/b/darshansharma-ur.appspot.com/o/images%2F1_OOkjCThzct47yIpOOzPfow.png?alt=media&token=951c2556-8dcb-4033-9eb7-7e8dedf9e90c"
---

Hi I am Darshan. Like many people I spent (not waste 😂 ) too much time on Instagram reels. I am very much into fitness and many fitness related videos comes into my feed so sometimes I want to download them.

### Why new app? 
I was using a simple app which when given reel url download the video into gallery but lately it was not working as intended so like everybody I uninstalled that app and went to play store to install new app that have same functionality. I installed and uninstalled many apps from play store in search of a decent simple app requiring no login, signup. After doing this for few minutes play store told me -

![funny gif image](https://firebasestorage.googleapis.com/v0/b/darshansharma-ur.appspot.com/o/images%2F1_IT6C9p1ogcQaB0iq4QYgAw.gif?alt=media&token=f4e9fd3b-ae4f-485c-9808-9d75bc5f4427 "funny gif image")  

so all in all though many apps were there but I thought this time to create one myself that is very simple in nature. No login, no signups, no ads, no in-app purchases. Therefore simple reels downloader has to born. 

## How?
Friday night 11:52PM I took my Thinkpad in my hand and started coding. So after trying for few hours I realised that the coding part was not as simple as I thought for simple reels downloader. 

![monkey gif image](https://firebasestorage.googleapis.com/v0/b/darshansharma-ur.appspot.com/o/images%2F1_A8cNAPhv9Vt7JgvVwbhHVw.gif?alt=media&token=2dc31774-0e11-4dd3-adae-7e0315c9faf3 "monkey gif image") 

Once I have download link then, everything was simple but when you copy reel link to share it is not the actual video downloadable link. So we need to transform the link given by instagram first. First I looked up facebook api page to see if they provide any api but there wasn’t any so then I looked up on web to see how the existing reels downloaders are working. 

![screenshot of a google search](https://firebasestorage.googleapis.com/v0/b/darshansharma-ur.appspot.com/o/images%2F1_OOkjCThzct47yIpOOzPfow.png?alt=media&token=951c2556-8dcb-4033-9eb7-7e8dedf9e90c "screenshot of a google search") 

I clicked on them and started looking at network tab to see and I found out that they were using instagram’s downloadable link which means instagram do provide downloadable but how was the question? So after searching a lot I found out a url which when hit returns graphQl data related to video in json format. I used 

```String videoUrl = graphql[‘video_url’];```

 to get the actual downloadable link.\nOnce we have actual downloadable link we can use consolidateHttpClientResponseBytes() function in flutter which saves the response as a list of 8 bit unsigned integers which then can be written to a file.
    
 ```var request = await httpClient.getUrl(Uri.parse(url));```
``` var response = await request.close();```
``` var bytes = await consolidateHttpClientResponseBytes(response); ```
``` file = File(filePath); ```
``` await file.writeAsBytes(bytes);```
 
 I hit the request and saved the response as bytes in a file and then write that file in internal storage of my device. If you are still confused about how unsigned 8 bit int is related to a video file then please read about [working with bytes in dart](https://medium.com/flutter-community/working-with-bytes-in-dart-6ece83455721)  

App link — [https://play.google.com/store/apps/details?id=com.darshansharma.simple_reels_downloader](https://play.google.com/store/apps/details?id=com.darshansharma.simple_reels_downloader) 

I myself post fitness related stuff on instagram so if you are also into fitness have a look at — 
[https://www.instagram.com/darshansharma_](https://www.instagram.com/darshansharma_/)

Now, I suppose it’s time I should put down my pen.

