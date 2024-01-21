---
title="Two Reaason To Use TypeScript?"
slug="two-reasons-to-use-typescript"
excerpt="TypeScript adds type checking to JavaScript, which can help you catch errors early and improve the quality of your code."
tags=["tech", "javascript", "course"]
type="post"
publish_at="20 Nov 2023 11:00 IST"
featured_image="https://firebasestorage.googleapis.com/v0/b/darshansharma-ur.appspot.com/o/images%2FTypeScript%20-%20photo.jpg?alt=media&token=0377a279-40a9-4ff5-bb75-4dbe3251d7e3"
---

 
## Why TypeScript?
<br> 
   

Reason 1: **Type checking:** TypeScript adds type checking to JavaScript, which can help you catch errors early and improve the quality of your code.   
    

Reason 2: **Backward compatibility:** TypeScript is fully compatible with JavaScript, so you can use your existing JavaScript code without any changes.
<br><br>  

## History 

**TypeScript was created by Microsoft in 2012.**  
**TypeScript was released as open source in 2014.**


<br><br>

<img  src="https://firebasestorage.googleapis.com/v0/b/darshansharma-ur.appspot.com/o/images%2FTypeScript%20-%20photo.jpg?alt=media"  width="300"  height="300"  alt="TypeScript"/>

<br><br>
Let me tell you little history of JavaScript -> there are some bugs and issues which are left when JavaScript (initially named Mocha) was created in 1995 by the company Sun MicroSystem for their web browser NetScape Navigator (very famous at that time, like Google Chrome is now). They tried to remove a lot of them in the version ES6 (ECMAScript6) [do you know why they call it ECMAScript and not JavaScript officially? If not, try to find out]. Sun MicroSystem’s main business was to sell hardware, later they got into the soware business too.
<br><br>

**Q - Why did they created JavaScript in the first place?**
Ans - Suppose you created a form in HTML and the user entered the wrong email (without @ in email) and pressed the submit button. Now this data will go to the server where backend code is running and it will check that @ in email is missing and send an error message to the user “Invalid Email Sent”.  
Now Suppose the backend server is in California, US and the user is filling the form in Noida, India. So,
<br>
 1. First the request travelled from Noida to California, US.   
 2. Then a response came back from California about “Invalid email” to Noida,
    India.
<br><br>
The above two steps in computer terminology is called round-trip time. So 1 round-trip time is wasted if the user types incorrect email, phone number etc.
<br><br>
I took the example of only 1 user and now you can scale it up to 1000 of users if a website is used by 1000 users in Noida, India.
<br><br>
So, Brendan Eich who at that time worked at Sun MicroSystem thought why not make these checks at the user machine itself and we can save this round trip-time => And thus JavaScript is born,
<br><br>
> -----------
<br><br>
When Brendan Eich created JavaScript he especially created it for Netscape Navigator (browser created by his company). Later on Microso also started using it on Internet Explorer which at that time was **the most famous and used browser** of early 2000s by making some more changes in JavaScript, Different browser will use different code of JavaScript is like different android phone will use different chargers instead of just one USB-TYPE-C. Hence a committee was formed which decided what features will JavaScript contain and all the browsers will respect that. The name of that committee is ECMA technical committee.
<br> <br>
In ES6 the committee introduced some new things but still it cannot introduce type-checking, return-type, interfaces, class and some more cool things. Actually they can never, even in future introduce these functionalities in JavaScript/ECMAScript because if they do it will break backward compatibility.
<br> <br>
So Microsoft created TypeScript which is JavaScript + with all these cool functionalities.
<br>  <br>
By introducing TypeScript in your project, after 2 weeks of time you yourself will start realising why it is important to maintain **TYPES**.
<br> <br>
SAME goes for Frontend developers who code in React/Vue or any other JavaScript framework/Library.
<br> <br>
Frontend Developers can mock once they know what types they will be getting from backend API calls and work independently from backend developers.
<br><br>
In between to make communication easier team use Swagger.  
Backend developers can post what type of data they will be creating once an API is finished in swagger first so that frontend developers don’t wait for backend developers to finish an API first and then start working.
<br>