# Giffaw

**Basic Requirements:**

* A user can see the top 25 gifs (on page load)
* A user can search for gifs, using the input field
* A user can "load more" gifs

Your site should look something like this:

![desktop layout](https://cloud.githubusercontent.com/assets/3010270/13936044/2ffadf60-ef78-11e5-95c5-55b8aefe68d6.png)


## Introduction

We'll practice using `fetch` by making some requests to the Giphy API and updating the DOM with data recieved in the response.

API Homepage:
http://api.giphy.com/

API documentation here:
https://developers.giphy.com/docs/

#### Thinking Like An Engineer

As we get into more complicated problems, we need to start thinking more and more like engineers. Engineers break down large problems into the smallest possible parts, and tackle each small part one at a time.

This is one of the major skills for web development!

Here's some steps to follow to help get you in this mindset:

1. Familiarize yourself with the [docs](https://github.com/Giphy/GiphyAPI)
	- Specifically, we will be using the [search endpoint](https://github.com/Giphy/GiphyAPI#search-endpoint)
		- Also note the ever-important API Key situation (We will be using the [Public Beta API key](https://github.com/Giphy/GiphyAPI#public-beta-key))

2. Test the API out in your browser!
	- Go to http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC. This is the API request for the search term `cats`.
	- What do you see? It's a JSON Object!
	
3. Start coding!
	- Your first step is to make a `fetch` request fire when your page loads. Don't try to do everything at once! First try to log the data to the console. Then work on logging specific data you want. What do you need to get the gifs to actually load on the page? There is a bunch of stuff in this data object and you need to figure out what you need.
	- Once you narrowed that down, THEN you want to build functions that generate HTML Strings and `append()` them to the page.
	- First log those strings to the console, and make sure they look like you think they should. THEN append them into the DOM!

5. Get the input box to make a different AJAX call to the search URL.
	- Does a search box button have a default action? What do we want do with that?
	- Are we just appending more and more gifs to the dom? Do we need to clear previous gifs before loading more?

6. Add a `Load More` button that, when clicked, appends 25 more gifs to the bottom of the page.
	- You will need to make use of the `offset` query parameter. See [Search Endpoint](https://github.com/Giphy/GiphyAPI#search-endpoint) section for more information.

## Bonus:
Build a single model Express app that will allow a user to save their favourite gifs to a database and see them at the top of the page before any search results.

The wireframing, database design, and workflow are up to you. Have fun with it!


