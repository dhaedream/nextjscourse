#NEXT JS Intro

##Server-Side Rendering

-Server Side Rendering. The html data is stored on Server. -Faster bc data is downloaded directly from server.

###Client-Side Flow

Server sends HTML ready to render > Client/Browser renders HTML, VIEWABLE! + Downloads JS > Client Executes React > Now Interactive

##Client-Side Rendering

-Client side is what react uses -Set Back: regular react apps are invisible to bots bc the HTML doesnt exist unless its fetched by a client.

###Client-Side Flow

Server > Client/Browser Downloads JS > Client/Browser executes react >FINALLYYY page is viewable… and interactive

##Next JS Notes:

-Routes are built right in. No extra downloads needed.

-Page routes exist as soon as the javascript file is created, and component is exported out of pages folder. Does not have to be manually added to home page in order to exist.

-API backend platform is built inside front end "pages" folder. Increases Speed.

##How To Use

###Create page/route

1- Add file in page folder 'about.js'

2a- for static page, create typical react component inside file named: 'about.js' (lowercase)

2b for dynamic pages, create folder inside pages folder. named: 'profile'

(FYI, its accessible + routed in upon creation)
