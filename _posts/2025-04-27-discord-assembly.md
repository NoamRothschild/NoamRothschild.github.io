---
title: Full-Duplex Communication in Assembly
description: about that time I did networking and encryption in assembly to have fun
author: noamrtd
date: 2025-04-27 09:43:00 +0800
categories: [networking, encryption, assembly]
tags: [coding, low-level]
pin: true
image: 
  path: discord-demo.png
---
[GitHub repository of the final project](https://github.com/NoamRothschild/asm)

## Introduction
Assembly. You all hate it. "unreadable machine code", "a debugging nightmare", "incompatitable across different devices" - some might say, but I think it is beautiful.

Something about uncovering those layers of abstraction, and understanding how things really work always make's me hooked.

Try once to look at something you take for granted, and tell yourself: "but how does it work?", and then do the same for your result on and on. Slowly but surely, layer by layer, you will begin to understand how things *really* work behind the sences.

In the old days, people were making compilers for languages like Fortran, or C to escape the hell of dealing with raw CPU instructions and memory (Another article from me will most likely come about this topic too). People wanted layers of abstraction that would help them program faster and with a better experience overall (I'm ignoring for now the cross-platform aspect since this is not what this article is about).

I did not live to experience those old days. Instead I was born into a world where you can drag a 3d cube into a grid, click a magic green button and have a game (has its pros and cons). While this process mainly made making games feel exciting as a child, it also lit a spark inside me - the fact that I can operate this black box to do those kinds of things, and the fact that once I'm done I can really feel ownership of a thing I made got me pumped into programming - venturing into the unknown.

Last year, I moved into a new school. I've been searching for a better place to learn Computer Science than my old school - And I found just the place. After our professor taught us the basics of 16 bit assembly, and guided us through our way to coding a simple snake game he threw us straight into work. "You have until the end of the year to make a project in assembly, and present it to the class".

## The project

I immediately knew I wanted to make something special - I wanted to stand out, and it had to be done with networking.
So I started researching. Our environment ([dosbox](https://www.dosbox.com/)) had poor networking capabilities. it only supported an old protocol named IPX. while I did have success emulating the TCP/IP model over IPX - using tools I found on the internet, it was not worth the trouble. I opted to learn another architecture of assembly, one that would allow me better access to networking.
My initial plans were to create a simple old forums website, allowing users to look and respond to simple posts.

## Nasm Here I Go!
If you're not already familiar with assembly, it is the raw machine code sent to the CPU to execute instructions.
As we know, Hardware differs from device to device, meaning that for every device you program you might have to learn another version of assembly just so you can work there. And even if you write for the same hardware, your operating system will also play an essential role here (for the same reasons software for windows cannot natively run on linux). In my example, I had moved from a Windows 3.0 device (emulated) into Linux (Specifically x86-64) - Here for the Operating System reason. With a few tutorials I got ready to go and printed my first `"Hello World!\n"` on a Linux device. _From now on my limits are endless - oh wait, how do I actually work with memory here again?_ (I quit and did nothing for a month straight until I bothered to come back and realize how to load one byte at a time)

After I came back I was feeling confident, and started worki-

Whats that? I can create a TCP socket in 30 lines?

But where is the fun in that?

I came here in order to really understand how networking works behind the scenes and got treated with a magic black box. After some checking, I realized that even if I would want to write networking from scratch, it would be very restrictive, and maybe even not possible because of the fact the code is running in user space and some direct things I might need won't be accessible from that low privilege level.

I told myself i'll go back to making a game to calm myself down, but decided it would be cool if the game would run from the browser instead of the terminal - The idea was to render to a buffer in assembly and send it to a canvas on the browser:

I started with the first part - found a cool simple algorithm for fake 3d rendering called [Voxel Space](https://github.com/s-macke/VoxelSpace) and implemented it, chaining it with a listening TCP socket to return a new frame for each time the socket received from a client an input key (wasd)

with a simple python renderer I got a basic demo working:
{% include embed/youtube.html id='4efJBanv8nc' %}

now is the second step: making my TCP socket run on the browser should'nt be THAT hard... right?

What a rabbit hole I've dug myself into...

## WebSockets - The Beginning

The second protocol parallel to HTTP, supported by the browser is WebSockets. 
*"WebSockets are a full-duplex, bidirectional protocol for communication between a client and a server over the web"*. **and now with less arrogant words:** WebSockets allow for 2 devices to talk much like we people talk: each computer at any time can say something and always listens. This differs from the usual Server-Client architecture because it allows for more flexibility, and an easier way to send and receive updates in real time.

Said protocol requires the server to respond with a request following this criteria: 
Accept the switch, and generate a special value to prove that the WebSocket handshake was valid.
From [the official document of WebSockets](https://datatracker.ietf.org/doc/html/rfc6455), in order to start a conversation, we must first hash a given key using [SHA1](https://en.wikipedia.org/wiki/SHA-1), and then send the [Base64](https://en.wikipedia.org/wiki/Base64) of it as a header in the request. This part is required in order for the connection to start.

It now may be the appropriate time to mention some constaints we were given: If you wrap around some internet code of someone else, you won't understand how said things really work into the deepest level. Linking with the C library was crossed out and using code of other people was also not an option.

_Oh shit_. No external libraries meant I had to write all of them by myself. I was not scared of base64 since its general concept was not so complex, and I managed to pull it off in a single afternoon, but SHA-1 was a different story. It may be only the first of its series, and as of todays standards its not a strong [hashing algorithm](https://www.okta.com/identity-101/hashing-algorithms/), but oh well I guess I have to do it....

## SHA-1

Reading the SHA1 RFC was a wild adventure. Slowly but surely, I began to understand what a basic hashsing algorithm really is. I began to uncover those layers of abstraction.

After a full week of reading the document I finally felt ready to conquer this mission: Section by section, I started implementing the [SHA1 RFC](https://datatracker.ietf.org/doc/html/rfc3174). It was an experience I could never forget, (and was the hardest part in my whole project by far). I verified every instruction added, just to make sure no bugs will appear (they did show up), I spent countless hours on the debugger, only to find out I forgot to swap the [endianness](https://en.wikipedia.org/wiki/Endianness) before performing an operation - the type of bugs only to be seen when writing assembly.

After a few days of hard work, which came immediately after a week full of research and design I was done. The excitement I felt the moment I was done still stays with even months later.

A simple working websocket echo server was up - A success from my POV.

## Synchronizing the Unsynchronized

Did I mention my server relies on multiple processes? (I didn't yet know what a [thread](https://en.wikipedia.org/wiki/Thread_(computing)) is at that time) this might seem useful at first glance, a server could serve multiple clients in parallel without stopping the server from working until a request is done. but it does come with its cons:

My approach relied on Linux's COW (Copy-On-Write) mechanism. Essentially, when a process is forked, it shares memory with its parent until one of them modifies it. Then, that page of memory is copied. This means any changes made by one process aren’t visible to others — a serious problem if, say, one process tries to add a user and others don’t see the update.

After some research, I discovered a couple of ways to create shared memory between processes. I ended up using `shmget()` and `shmat()` — two syscalls for allocating and attaching shared memory segments across processes.

What followed were multiple hours of frustration trying to figure out how to properly pass arguments to the syscall that requests shared memory. Turned out the C wrapper behaved differently from the interrupt call, this whole story left me with only one option...

## Diving Into The Linux Source Code

I've tried everything, I even went as far as creating a some C code and going through the compilers (gcc) instructions to find out how to properly call the function, but I failed.

When all documentation is gone, and you are lost, only one thing is left: reading the *actual* source code (because reading assembly instructions still had layers of abstraction needed to be uncovered). In most places this is a what you do, but here I was dealing with the linux kernel's source code.

Without much hesitation I jumped in, cloned the Linux repository mirror from GitHub and went straight into work. Thankfully, my interrupt had a separate file dedicated just to it, and working with it was not _that_ difficult.

I overlooked a subtle important rule buried in the Linux syscall conventions which led me to a depressive and angry state, but eventually I did manage to get it all nice and working. 

If there are a few things I took from this experience is how properly structured and documented code looks like, and that sometimes uncovering the abstraction to realize how something works can be a lot of fun!.

<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
> TODO: 
> - [ ] dots moving game
> - [ ] databases (linked list)
> - [ ] start of discord
> - [ ] AI-Frontend
> - [ ] simple authentication
> - [ ] channels && cookies
> - [ ] pfp (redundant)
> - [ ] competition
{: .prompt-info }
<!-- markdownlint-restore -->
