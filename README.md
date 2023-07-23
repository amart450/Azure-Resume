# Azure-Resume
Making my resume in azure, following [ACG projects video.](https://youtu.be/ieYrBWmkfno)

## About
This is my Azure resume project following A Cloud Guru's Azure Resume challenge. 
I wanted to take on this challenge to develop and display my skills as an aspring cloud engineer.
I thought this was an amazing opportunity because it was a very practical approach to learning as I am 
applying to jobs currently. \
\
The static website is hosted on a serverless platform using Azure's Blob Storage,
an unscructured data cloud storage system. This holds all the html and css that goes into the front end. 
I utilized Azure functions and javascript to create a http trigger, which will add 1 to a counter I made stored in CosmosDB, when the website is visited.
The counter will then be displayed on my website to show how many times the website has been visited.
Using github actions, I implemented a CI/CD pipeline that automacially deploys the newest updates to the website if
changes are detected in the front end or the back end. I also added unit tests in order to test the counter whenever the back end is updated
to ensure functionality. \
\
There was lots of troubleshooting and a learning curve since I was not familiar with javascript and C sharp before this. There were also version dependancies 
since the web app could only be deployed using .NET SDK V 6.x. Ultimately, the "Cloud Guru Resume Challenge" served as an invaluable learning opportunity, 
expanding my proficiency in cloud engineering and nurturing my passion for cutting-edge technologies.

