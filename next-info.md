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
-Head: copy cat HTML metadata head tag. "import Head from "next/head";"

-Routes are built right in. No extra downloads needed.

-Page routes exist as soon as the javascript file is created, and component is exported out of pages folder. Does not have to be manually added to home page in order to exist.

-API backend platform is built inside front end "pages" folder. Increases Speed.

##How To Next.js

###Create page/route

-1 Add file in page folder 'about.js'

-2a for static page, create typical react component inside file named: 'about.js' (lowercase)

-2b for dynamic pages, create folder inside pages folder. named: 'profile'

(FYI, its accessible + routed in upon creation)

###Create Dynamic Routes

1- create folder named profile (or anything) inside pages folder

2-add file ‘index.js’ in profile folder

3- create typical react component ( its not typical react. Next.js default pages are accessible + routed automatically upon creation)

4- create file with brackets of var name [varname].js

5- activate + structure dynamic inside [varname].js file

-A HOOK> import {useRouter} from 'next/router'

-B the variable name of the query parameter (specified data to sort) must be the same to pass the information right along to our user.

-C Routing is enhanced by built in search/query parameter

###ADD LINK

1- import Link from "next/link";

2- Add link that routes to about page
"<Link href="/about">About</Link>"

###Add Navbar To Layout

What is Layout?

-A HTML style tag "<Layout/>" with built in functionalitity

-Sets up page format by mounting permanent components by default. Ex, Navbar, footer, sidebars, ads

-Everything rendered between the Layout tag will act like children to their parent.

How to Add Navbar to Layout?

1- add Layout.js file to components folder

2- create layout component

3 import layout to lowest level component file named : \_app.js.
import Layout from "../components/Layout";

4 wrap the layout around the entire website component :

function MyApp({ Component, pageProps }) {
<Layout>
<Component {...pageProps} />
</Layout>

###404 Page

Next has a default 404 page but you can customize it.

Next recognizes the page by naming it 404

2- add 404.js file in pages folder

3- create UnknownPage component inside 404.js file
