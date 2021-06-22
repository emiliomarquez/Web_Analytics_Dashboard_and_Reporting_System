# Web Analyitcs Final Project - README
_Name: Emilio Marquez-Fernandez_

## Link to website: [emil-io.site](https://emil-io.site/)
- Authentication Info for emil-io.site:
--Username: grader
--Password: grader1

## Link to HW4 Login page: [login-page](https://reporting.emil-io.site)
- Admin User Info for hw4 login page:
--Username: grader-admin
--Email Address: grader-admin@grader.com
--Password: grader-admin
- Basic User Info for hw4 login page:
--Username: grader-basic
--Email Address: grader-basic@grader.com
--Password: grader-basic

## Authentication
- I have implemented Authentication through the use of JSON Web Tokens (JWT). I chose JWT because it allows for a simple http authentication to my api (https://emil-io.site/api/users). I am well knowledgable of how http works so incorporating an http-based authentication method was the best choice for me. I was also able to learn how to incorporate JWTs into my api in less than a day while as other authentication methods were more complex and would’ve taken more time to learn. I learned how to incorporate JWTs into my api with the help of the following guide: https://www.loginradius.com/blog/async/Nodejs-and-MongoDb-application-authentication-by-JWT/.
-  If I was building a more secure site, I probably would have spent more time on learning how to implement another authentication method such as OAuth. And not gone with JWTs because JWTs have known exploits. Here is an article covering most of the JWT exploits that I found when weighing the pros and cons of JWTs: https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/
- Another reason I chose JWTs as authentication because they were very compatible with the technologies I was using to build my Analytics App (e.g. MongoDB, ExpressJS, NodeJS).

## Dashboard
- The four charts I used for my dashboard were a pie, line and bar chart, and a scatter plot.
- I chose a pie chart to display the “Top 5 pages with Highest Activity Rate.” Where “Activity Rate” is defined as the total amount of activity data that was POSTed from a specific page (e.g. 22 total POST requests have been sent to api/activity from the page /cgi-bin/php-hello-html-world.php). 
- The reason I chose a pie chart for this data is so I can be able to compare how active different areas of emil-io.site are. I only included the Top 5 pages of emil-io.site so the pie chart would not be cluttered with too many slices and overload the viewer of this pie chart with too much information. With this information on the pie chart, I can identify which areas of emil-io.site are getting the most attention or most visitors. And I can also infer the areas of emil-io.site that can be improved or advertised more such that they can attract more visitors to those areas of emil-io.site and  eventually become the Top 5 pages with the highest rate on emil-io.site. 

- I chose a line chart, with discrete data, to display the “Max Page Load Time [in milliseconds] for Unique Site Visitors Overtime.” Where the most recent max page load time for a unique site visitor is to the far right and the oldest max page load time for a unique site visitor is to the far left.
- The reason I chose a line chart for this data to show the progression of the load time for a typical page on emil-io.site overtime. With this data visualization, I am able to identify if any recent updates I have applied to any page on my site is causing an increase or decrease in page load time. As a result of this information, I can possibly apply any needed changes to my site to remedy an increase of page load time. Or take notice that the most recent change to my site improved the performance of my site by decreasing the max page load time.

- I chose a bar chart to display the “Average Idle Time for Pages on emil-io.site”. 
- The reason I chose a bar chart for this data is to show a comparison of average idle time across different pages of emil-io.site. The page with the highest average idle time is located at the very top of the bar chart. And the page with the lowest average idle time is located at the very bottom of the bar chart. Note: some pages from the emil-io.site are not included due to not there not being an adequate amount of data yet on those pages to compute an average idle time.
- With this data visualization, I am able to identify where site visitors are potentially losing interest in the site or pages where site visitors are leaving the site.  As a result of this information, I can apply needed design changes to those pages on my site to retain site visitor interest for a longer duration and decrease average idle time on that specific page.

- I chose a scatter plot to display the “Mouse Button Click Coordinates of Home Page”. 
- The reason I chose a scatter plot for this data is to observe any relationships between a specific cluster of coordinates and mouse button clicks on my home page (or any other specific page on my site if I decide in the future to modify my scatter plot in mongoDB). With this information I am able to discern where a majority or a minority of site visitors are clicking on my website. And additionally whether those visitors are left clicking or right clicking. As a result of this information, I can spot any site design flaws where site visitors may be trying to click on a specific part of the page that they may think is a button or link but it is just text. Additionally with this data visualization, I can also spot where site visitors may be copying or highlighting text from my site.


## Report
- I chose a scatter plot to display the “Mouse Button Click Coordinates of the Top 5 Pages” for the same reasons I chose the scatter plot on the dashboard.
- I chose a bar chart to display the “Top 5 Pages with Highest Count of Mouse Button Clicks”. The reason I chose a bar chart is to show a comparison of the count of mouse button clicks across different pages of emil-io.site. The page with the highest count of mouse button clicks is located at the very top of the bar chart. And the page with the lowest count of mouse button clicks is located at the very bottom of the bar chart. 
- With this data visualization, I am able to identify which site pages that site visitors are interacting the most on my site.  As a result of this information, I can apply needed design changes to those pages on my site to retain site visitor interest for a longer duration and decrease average idle time on that specific page.