# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Build out the project to the designs provided

### Screenshot

![Mobile Design](/profile-card-component-main/design/mobile-ss.png)

![Desktop Design](/profile-card-component-main/design/desktop-ss.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow

### What I learned

It took me awhile to figure out how would I layout the circles as background. I used other methods but the below code works best to my problem. I started styling the mainbox first and intend to solve the background circles on the last part. I used grid layout to center the mainbox and the attribution below it and set the background circles on the same container of the grid. 

```css
body {
  display: grid;
  grid-template-rows: 1fr 2fr .4fr .6fr;
  height: 100vh;
  background: url(/profile-card-component-main/images/bg-pattern-top.svg) bottom 45vh right 50vw,
  url(/profile-card-component-main/images/bg-pattern-bottom.svg) top 45vh left 50vw;
  background-color: hsl(185, 75%, 39%);
  background-repeat: no-repeat;
}
```
I adjust the height and width of the background circles on mobile version. And set the height of the mainbox a bit higher than its width, while on desktop version they have the same height and width.
```css
@media (max-width: 375px) {
  .mainbox {
    height: 350px;
    width: 320px;
  }

  body {
    display: grid;
    grid-template-rows: 1fr 2fr .4fr .6fr;
    height: 100vh;
    background: url(/profile-card-component-main/images/bg-pattern-top.svg) bottom 40vh right 40vw,
    url(/profile-card-component-main/images/bg-pattern-bottom.svg) top 40vh left 40vw;
    background-color: hsl(185, 75%, 39%);
    background-repeat: no-repeat;
  }
}
```
 
### Continued development

Grid layout and media queries are quite challenging to understand, and I am planning to work on many projects using this concept to understand it better. 

### Useful resources

- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me for many reason. It's easy to understand with the visual aids and code snippets and I really liked the pattern and will use it going forward.
- [HTML and CSS Guide](https://frontendmasters.github.io/bootcamp/) - This is an amazing article which helped me understand syntax of HTML and CSS. I'd recommend it to anyone still learning the concept.

## Author

- Website - [Kevin Rad Poquita](https://www.your-site.com)
- Frontend Mentor - [@radeau](https://www.frontendmentor.io/profile/radeau)
- Twitter - [@kvnRAD_](https://www.twitter.com/kvnRad_)

## Acknowledgments

I really appreciate the community in frontendmentor, though my question has been answered already by many of them, I just want to say thank you for those people extending there help to a neophyte to this industry - like me. Thank you so much!