# Welcome! My name is Nathanel Corpuz and this is my first Next.js portfolio project.

You can visit the website [here](https://nathan-leagueoflegends.vercel.app/)

## Introduction

- This is a recreation of League of Legends&apos; home page from their official website, using their modern brand guidelines as reference, along with other design materials.
- My main design goal is that players who visit the website should have an experience similar (but not totally the same) from the LoL client&apos;s UI / UX and in-game graphics
- I am not experienced in receiving requests for contributions / code edits yet, in case this comes up
- I plan to grow this project into other pages soon (how to play, champions, patch notes)

## Tools used

- [Figma](https://www.figma.com/ "Figma") — for design materials and mockups
- [Next.js](https://nextjs.org/ "Next.js") 13.4 (app directory) — for frontend implementation
- [TailwindCSS](https://tailwindcss.com/ "TailwindCSS") — for efficient and organized styling
- [TypeScript](https://www.typescriptlang.org/ "TypeScript") — for enhanced development experience
- [League Director](https://github.com/RiotGames/leaguedirectorhttps://github.com/RiotGames/leaguedirector "League Director") — for capturing in-game recording
- [Premiere Pro](https://www.adobe.com/products/premiere.html "Premiere Pro") — for editing video designs
- [ChatGPT](https://chat.openai.com/ "ChatGPT") — for design specs conversions, research, and additional copy content
- [Vercel](https://vercel.com/home "Vercel") — for website hosting
- [Notion](https://www.notion.so/ "Notion") — for project management

## Design Process

### 1. Research

- I studied Riot&apos;s current LoL website and researched any available branding materials / guidelines they might have
- I gathered design materials from various online resources by Riot Games and their partners
- I used Notion to notate design requirements based on research and gathered materials

### 2. Design

- I used the official LoL home page as reference to generate mockups
- I incorporated the gathered design materials into the mockups and made necessary adjustments using tools like Illustrator, GIMP, Premiere Pro, and League Director

### 3. Implementation

- I implemented the designs using Next.js with the recently launched app directory for a more efficient development experience and optimized frontend code
- I iterated on a few design materials as I implemented features in the frontend due to the nature of some design requirements

## Implementation Notes

- I decided not to clutter the app folder by creating a separate components folder to house the code needed per section components with scalability in mind, but I might change this implementation to keep everything in the app folder since colocation is accepted and semi-encouraged, based on the next.js docs.
- The public folder currently houses all assets with minimal organization, this might change in the future.

## Highlights

- This project features high quality materials, thanks to Riot Games&apos; brand guidelines and their partners
- The website is fully responsive from mobile to desktop
- Buttons are inspired by the ones in LoL client, for example, the home hero&apos;s CTA features resembles the LoL client&apos;s "Find Match" button, but not totally due to implementation (or knowledge) limitations. I did my best to make it feel similar anyhow.
- I recreated the interactive "Choose your Champion" section by combining icons from Riot&apos;s partner wearetopsecret and a video from the brand guidelines, along with additional hextech materials
- The "Slay with Style" section features a video I directed in-game using League Director and Premiere Pro, to highlight Yasuo&apos;s skins
- The "Game Modes" section features buttons that I recreated (manually vectored) from the LoL client&apos;s Play options, along with additional hextech materials
- The footer features a design that feels modern, minimalist, and aligned with Riot&apos;s brand guidelines

## Challenges and Solutions

### 1. Home hero hextech button

- Challenge: Can&apos;t apply borders to clipped paths
- Solution: Made the text pop out instead using a glow effect, to make it feel more similar to the LoL client&apos;s UI

### 2. Choose your Champion section

- Challenge: The official home page features a complex arrangement of elements for the buttons, video, texts, and champion highlight image
- Solution: I decided to make the UX a bit separated by dividing it into two parts, a "hero" and "interactive" sections

### 3. Slay With Style section

- Challenge: I couldn&apos;t brainstorm too much about how I can creatively approach the recreation of the way Riot highlighted skins, since the homepage features an already well-designed 3D experience
- Solution: I used League Director along with Premiere-Pro to instead follow a simple but personalized and unique approach, by directing 3 separate League replays that features Yasuo changing skins and stitching it to have a consistent feel while the video is being looped

### 4. Game Modes section

- Challenge: The organization of elements is a bit complex for my skills, with animations that can be hard to implement for responsiveness
- Solution: I utilized Figma vectors to incorporate the feel of LoL client&apos;s experience by recreating the 3 logos from the "Play" options from in-client, and sprinkled in a hextech feel and summoner&apos;s rift background to make the player feel more accustomed to the most popular game mode

## Credits

### 1. [League of Legends official website](https://www.leagueoflegends.com/)

- For image and video assets, design inspirations and references, and copy content

### 2. [Riot LoL online brand guidelines](https://brand.riotgames.com/en-us/league-of-legends/fundamentals/)

- For image, video, and hextech assets, web videos, design inspirations, and branding directions

### 3. [wearetopsecret](https://wearetopsecret.com/case-study/riot/) (designers / devs for Riot LoL&apos;s universe website)

- For the role icons used in the Choose your Champion section

### 4. [Icons8 Figma Plugin](https://www.figma.com/community/plugin/791103617505812222/Icons8-%E2%80%94-icons%2C-illustrations%2C-photos)

- For social media and other icons

### 5. [League Director](https://github.com/RiotGames/leaguedirector)

- For in-game capturing and directing

### 6. Researched Photos

- Summoner&apos;s Rift
  - [Website](http://lol-stats.net/ru_RU/posts/summoners-rift-11902)
  - [Image source](https://lol-stats.net/uploads/4SqRA7X85xvNQyLTyD9NskiGpgavHgF0xTnSRhjo.jpeg)
- ARAM
  - [Website](https://www.leagueoflegends.com/en-pl/news/game-updates/aram-2023-preview/)
  - [Image source](https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt265e0e9e81d5c49b/636d61097487894eca7dce7f/111422_PS2023ARAMPreviewArticle_Banner.jpg)
- TFT
  - [Website](https://www.surrenderat20.net/2019/10/red-post-collection-dev-on-tft-set-1.html)
  - [Image source](https://1.bp.blogspot.com/-KZFb-dj2cjM/XbB5wVcVQQI/AAAAAAABaHk/oJFhXbTM8WAOevKr8dvrPgJtX0zRWqe8wCLcBGAsYHQ/s1600/01_Banner_TFT_Learnings_8y7ikpvhe5um9bhprf2o.jpg)

## For developers

### Project structure

- app — single page
- components
  - common — components used across pages / sections
    - button
    - footer
    - header
    - text
  - pages — page / section-specific components

### Local installation guide

Use the following commands to install and run the website locally

- `npm i`
- `npm run dev`
- [localhost:3000](http://localhost:3000) is where the website will be hosted locally (default)

## Contact me

- Feel free to send me a message via my [LinkedIn](https://www.linkedin.com/in/nathanelcorpuz/) or [Twitter](https://twitter.com/nathanelcorpuz) profiles
