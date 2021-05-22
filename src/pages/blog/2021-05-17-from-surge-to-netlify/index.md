---
title: From Surge.sh to Netlify
date: '2021-05-17T20:14:21.593Z'
path: '/from-surge-to-netlify/'
category: 'blog'
tags:
  - programming
  - web
  - gatsbyjs
  - static
  - surge
  - netlify
  - macromedia
  - jasc
---

It's 2021 and it's been around 4 years since the last update, but this page has changed a lot in between. This is the third (or maybe fourth) design I implement in my personal site and I've been using Gatsby since the first version, from `0.x` to the current `3.x` and everything in between. <!-- end -->There's also another big change, I moved the hosting from [surge.sh](http://surge.sh) to [Netlify](https://www.netlify.com). I'll try to explain why I made the change and how I feel about both products.

## A little bit of history

Back in the day, my first websites were made purely on [Macromedia Dreamweaver](https://en.wikipedia.org/wiki/Adobe_Dreamweaver). I think I mainly used versions 2.0 and 3.0, and up to 6.0, just a bit before the Adobe acquisition. Back then, I didn't knew how to code. I mainly used Dreamweaver visual tools to build Lord of the Rings fan websites, with some graphical design made with [Jasc's Software](https://en.wikipedia.org/wiki/Jasc_Software) Paint Shop Pro. All of this brings me great memories. Late 90's/early 00's computer tech was awesome.

Albeit the webs I built were not optimal, not standard by any means and sometimes very slow, it was extremely _fun_ to build them this way. I just sit, connected with fellow Tolkien friends through IRC and started to create and ship stuff. Fast forward to 2017, for this page I spent a lot of time migrating from one Gatsby version to another, catching up with different data sources to power the content of this site, configuring domains, automatic deployments and so on. I feel right now that I reached a point when it's fun again to create and [be consistent with it](https://www.jason.af/build-consistent-content-creation-habit). Tools should help to build, not get in the middle. Netlify is one of those tools.

## Hosting your static site

Once you have your Gatsby website running, you want to publish it to the Internet and you need some kind of hosting. Everything that powers this web is either some kind of content (Markdown, yml) and JavaScript, and it ends up in a `public/` folder when you build it, optimized and ready for deployment. Initially I used Surge to publish it, which has been great. It is very easy to set up, it has a super simple CLI interface and you can publish with a single command. However, I wanted to enable https for the site and [you need a Surge Plus plan to do it with a custom domain](https://surge.sh/help/securing-your-custom-domain-with-ssl). I had a great experience the last time I used Netlify so I gave it a chance and moved my personal page from Surge to Netlify.

### What I find great about Netlify

This is what I accomplished with the Netlify starter plan:

- Automatic build and deployment from the GitHub repo.
- Free Let's Encrypt certificate, with 1-click configuration.
- Blazing fast load times.
- Comprehensible pricing tier.

The configuration was so easy that I can't remember exactly which steps it took to have everything configured, and I did it yesterday. I only remember that it was between four or five clicks and everything was working. Instantly. Perfectly. And super fast. And free. I can't recall the last time I used a service so well made, it feels like magic. Yes, I'm excited about Netlify.

### What's missing from Surge

I'm hyped about Netlify, but that doesn't mean Surge isn't great too. There are a couple of things I think favor Netlify if you compare:

- Pricing tiers are better in Netlify. In Surge, you jump from 0 to $30/month, but in Netlify the first bump starts at $19, and then you scale.
- With Netlify you need even _fewer_ steps to set up everything, which is mind boggling because Surge is also quite easy to use.
- SSL certificate with custom domain is free with Netlify (this is good for SEO too).

I still like the CLI interface of Surge, but I have to admit that Netlify's configuration panel is so good that I don't miss messing around with the command line stuff.

## I'm having fun again

In the end, this personal page is about testing things (there's another post about this soon), experimenting and learning by doing. What I like about my newest configuration is that it's even easier to have everything up and running and I can forget about deployments and hosting and focus on trying new stuff and experiment more.

I started [experimenting with Gatsby](https://github.com/alvaromb/gatsby-starter-app-landing) in early 2017, with version `0.10`. It looked very promising back then and I'm happy I invested time in learning about its basics. Right now, with [v3](https://www.gatsbyjs.com/docs) and combined with the ease of use of these deployment platforms, I feel it's easy and fun to experiment and build things again.
