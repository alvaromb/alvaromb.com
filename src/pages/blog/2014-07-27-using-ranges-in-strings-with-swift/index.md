---
title: Using ranges in strings with Swift
date: '2014-07-27T22:12:03.284Z'
readNext: '/my-second-post/'
path: '/using-ranges-in-strings-with-swift/'
category: 'blog'
tags:
  - programming
  - swift
---

Swift is still under development, so there are a lot of things to be done from the Apple team. One of these things is the use of ranges in the `String` type.<!-- end --> One would expect to create a substring this way:

```swift
let substring = string.substringWithRange(2..5)
```

But unfortunately, this doesn’t work. There’s even a [rdar filled](http://openradar.appspot.com/radar?id=6373877630369792) for that. If we can use ranges using the two or three dot notation, it would be very nice to do it to create substrings. In the meantime, we can use the existing `NSString`’s methods:

```swift
let string = "string" as NSString
let substring = string.substringWithRange(NSMakeRange(2, 5))
```

In [this SO question](http://stackoverflow.com/questions/24044851/how-do-you-use-string-substringwithrange-or-how-do-ranges-work-in-swift) you can find more ways to use ranges in `String`’s.
