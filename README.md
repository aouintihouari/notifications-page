# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Notifications page solution](#frontend-mentor---notifications-page-solution)
  - [Table of contents](#table-of-contents)
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

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./design/desktop-preview.jpg)

_(Add a screenshot of your solution here.)_

### Links

- Solution URL: [Frontend Mentor Profile](https://www.frontendmentor.io/profile/aouintihouari)
- Live Site URL: [Live Project](https://aouintihouari.github.io/notifications-page/)
- Repository: [GitHub Repo](https://github.com/aouintihouari/notifications-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

This project helped me reinforce my understanding of DOM manipulation and event handling in JavaScript. I also improved my ability to create accessible and responsive layouts.

Here’s a snippet of JavaScript used in the project:

```js
markAsRead.addEventListener("click", () => {
  notifications.forEach((notification) => {
    notification.classList.remove("not-read");
    const readStatus = notification.querySelector(".read-status");
    if (readStatus) readStatus.style.display = "none";
  });
  notificationCount.textContent = "0";
});
```

### Continued development

In future projects, I would like to:

- Improve animations and transitions for better user experience.
- Implement a dark mode toggle.
- Optimize performance using lazy loading techniques.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - Great documentation for HTML, CSS, and JavaScript.
- [CSS Tricks](https://css-tricks.com/) - Helpful articles on styling techniques.

## Author

- Name: Houari Aouinti
- Frontend Mentor - [@aouintihouari](https://www.frontendmentor.io/profile/aouintihouari)
- GitHub - [@aouintihouari](https://github.com/aouintihouari)
