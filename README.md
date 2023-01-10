# Blaze e-commerce platform

[...]
This is the Blaze e-commerce platform. It is a full-stack e-commerce platform built with React. It focuses on providing a great user experience for both the store owner and the customer.
It is a work in progress, and is not yet ready for production use.

Check it out live at [blaze.store](https://#).

<p align="center">
<img src="https://user-images.githubusercontent.com/84287747/201928326-1f040605-4b4f-4e5d-9231-5cb7f061e19d.png" alt="drawing" style="width:500px;"/>
  </p>
## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Node.js, Express, MongoDB

It is made with React, and uses React Router for routing. It uses unique components for the UI, and Zustand for state management. It uses MongoDB for the database, and Express for the backend. It uses (...Stripe?) for payments. It uses (...React Helmet?) for SEO.

## Optimizations

<!-- You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews! -->

Just started working on it, so there's a lot of room for optimization. ;)

-   Make the Admin Sidebar into a component that uses the current route to determine which link is active and gets a different color.
-   Implement HttpOnly Cookies for the Authentification Token. Currently using local
    storage only.
-   Handle the Auth Check in a different way. Currently very "hacky", by checking if
    the token is given in localStorage and then sending it to the backend to check if it's valid. If it is valid, change the global auth state to true.
-   Handle Data Fetching better somehow. Currently passing IDs via the router for fetching product data. This is not ideal and can lead to problems in the backend.
-   Refactor a lot of code. Keeping binding names consistent, etc.

## Dev Status:

-   [ ] Navigation - 85%
-   [ ] Pages - 60%
-   [ ] Backend API - 60%
-   [ ] Auth - 95%
-   [ ] DB Infrastructure - 70%
-   [ ] Product Overview - 90%
-   [ ] Product Details - 90%
-   [ ] Shopping Cart - 90%
-   [ ] Order Summary - 0%
-   [ ] Checkout - 0%
-   [ ] ...

<!-- ## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those _whoa this is awesome_ or _fuck yeah I did it!_ moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing. -->
