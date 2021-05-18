---
title: New blog and new site
date: '2017-03-31T00:02:32.169Z'
path: '/new-blog-new-site/'
category: 'blog'
---

To be honest, I've never been an active blogger. However, I really enjoy
installing, changing and redoing my website from time to time. I have never been
a web developer, so for me it's a challenge to take a peek into how these
things are done and how the web development evolves.<!-- end -->

## New hosting: Surge.sh

I moved the hosting from my Dreamhost account to a new service called
[surge.sh](http://surge.sh), which is fantastic. It's a service to publish static
webpages and its **super easy** to configure and deploy. You just need to
install the `surge` CLI from npm:

```sh
$ npm i -g surge
```

And then hit `surge` in the directory you want to publish. Configuring a custom
domain is also really easy. I'm really into the philosophy of static webpages so
Surge was definitely a way to go. My blog is much much faster now and I won't get
more spam from people trying to get into my old blog admin.

## Gatsby

I also moved from Dropplets to [Gatsby](https://github.com/gatsbyjs/gatsby),
which is a static site generator built with React.js. It's still in beta but
its working really well and they have what they call _starters_, some pre-defined
examples of sites built with Gatsby. You can type this to tell Gatsby to create
a new product based on their blog _starter_:

```sh
$ gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog
```

After this, running `gatsby build` generates the static site into the `public/`
directory, which you can then upload it to surge.sh. As a React Native developer
since the day 0, I've been working for a few years with the React component model,
so I'm looking forward to invest some time to start adding things into the site.

Thanks for reading, take care! 🤗
