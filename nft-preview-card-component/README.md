# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- [Solution URL:](https://github.com/radeau/frontend-mentor-challenges/tree/master/nft-preview-card-component)
- [Live Site URL:](https://radeau.github.io/frontend-mentor-challenges/nft-preview-card-component/src/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS
- Mobile-first workflow

### What I learned

I learn more about how to use the tools(npm,tailwind-cli,etc..) from installation up to its documentation. From the design itself, the challenging part is the hover state img where it took me some time to figure out how would I do it. So, I reach out to stackoverflow, asked help about my problem and lucky enough to have someone knows how to it. This code snippet below help me achieved it: 

```html
  <div class="w-full rounded-md bg-cover bg-center bg-[url('../images/image-equilibrium.jpg')]">
    <div class="w-full rounded-md bg-blue-1100 opacity-0 hover:opacity-70 transition duration-300 ease-in-out cursor-pointer">
      <div class="flex justify-center items-center h-72">
        <img src="../images/icon-view.svg" alt="">
      </div>
    </div>
  </div>
```

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [radeau](https://radeau.github.io/portfolio/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

I really appreciate the community in frontendmentor, though my question has been answered already by many of them, I just want to say thank you for those people extending there help to a neophyte to this industry - like me. Thank you so much!😃 😉