# Photos!

This website is a collection of all my hobby photography work.

I couldn't find a good static site generator that suited my use case, so I built my own site to showcase my photos. The advantage of this approach is that I could add proper filtering functionality for the photos.

It's nothing fancy; just a basic SPA built with ReactJS, Vite, TailwindCSS, and DaisyUI.

### Commands

1. **Build the image thumbnails.**
  
  I don't think it's really necessary for me to do this manually. I could probably run the thumbnail generation script on `prebuild` or `predev`. Alternatively, I could add the thumbnails to `.gitignore` and generate them while building the site. I'm too lazy to test this out right now, but maybe I'll improve it later.
  
  ```
  npm run thumbs
  ```

2. **Run the application in development mode.**
  
  ```
  npm run dev
  ```

### Deploy

Just push the changes. The github workflow should build the site and deploy it automatically for you.
