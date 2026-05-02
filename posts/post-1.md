# My Blog

A simple personal blog built with HTML, CSS and JavaScript.

## About

This blog is written by Pukar Ojha. Posts are stored in `blog.json` and loaded dynamically with vanilla JavaScript.

## Pages

- **index.html** - shows list of all blog posts
- **post.html** - shows individual blog post content

## How to add a new post

Open `blog.json` and add a new object to the array:

```json
{
    "id": 3,
    "title": "My New Post",
    "date": "2024-03-01",
    "content_excerpt": "Short preview of the post...",
    "content": "Full content of the post goes here..."
}
```

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
