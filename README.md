
# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)
![alt text](public/myscreenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [View my live Site](https://space-tourism-website-matt.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
-[TailwindCSS](https://tailwindcss.com/) - Mobile first class based CSS for Styling
-[React Router](https://reactrouter.com/en/main) - For navigation and routing


### What I learned

I have learnt how to effectively use React Router to navigate through the website pages(routes).I have also learnt how to use and customize  react tabs while using data.json file to populate the website from the destination,crew and technology data objects.

To see how you can add code snippets, see below:

```
Array.map to fetch data from .json file using useEffect() Hook
{Array.isArray(data) && data.map((item, index) => (
    <Tab key={index}
        className="crew-btn"
        onClick={() => setValue(index)}
        style={{
        backgroundColor: index === value ? "white" : "#979797",
        }}
    >
    
</Tab>
))}
```
```
tailwindCSS especially the backdrop-blur
export default function NavLinks() {
    return (
        <div className="nav-items bg-transparent backdrop-blur-md w-2/3 px-10">
            <ul className=" hidden md:flex lg:flex justify-around items-center uppercase  h-20 pr-10">
                <li className=" border-b-2 hover:border-b-2 py-7 px-4"><a href={`/`}><span className=" font-bold px-2">01</span>home</a></li>
                <li className="hover:border-b-2 py-7 px-4"><a href={`/destination`}><span className=" font-bold px-2">02</span>destination</a></li>
                <li className="hover:border-b-2 py-7 px-4"><a href={`/crew`}><span className=" font-bold px-2">03</span>crew</a></li>
                <li className="hover:border-b-2 py-7 px-4"><a href={`/technology`}><span className=" font-bold px-2">04</span>technology</a></li>
            </ul>
        </div>
    )
}
```
```
Using the react Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Nesting other routes inside the app route(Root Route)
    children: [
      {
        path: "/",
        element:<Hero />

      },
      {
      path: "/destination",
        element: <Destination />
      },
      {
        path: "/crew",
        element:<Crew />
      },
      {
        path: "/technology",
        element:<Technology />
      }
    ]    
  },
  
])
```


### Continued development
I have had a challenge applying different background images depending on the route selected.I will be doing more research on how to  improve the website.



### Useful resources

- [React Router](https://reactrouter.com/en/main/start/tutorial#setup) - This helped me to set up the website and nested my routes. I really liked this pattern and will use it going forward.
- [React Tabs](https://www.npmjs.com/package/react-tabs) - This is an amazing article which helped me understand how to use react-tabs since I tried Material UI tabs which had peerdependencies conflicts which couldn't resolve. I'd recommend it to anyone still learning this concept.


## Author

- Website - [My portifolio](https://www.matthewkuria.vercel.app)
- Frontend Mentor - [@matthewkuria](https://www.frontendmentor.io/profile/matthewkuria)
- Twitter - [@matthew-kuria](https://www.twitter.com/matthew-kuria)


## Acknowledgments

I would like to acknowledge Frontendmentor for coming up with  this challenge project and also all the contributors of StackOverFlow for their great contributions.
