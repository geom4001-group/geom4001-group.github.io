# Assignment 1 : StoryMap README.md

Heyo! This is Elise. This README is dedicated to explaining the fundemantals of how to use GitHub, how we'll use it, and the layout of the project (in GitHub, this is also called a repository).

## 1. `assignment1` repository Layout
I've (or if you don't see it yet, I am in the process of doing so) organized `assignment1` such that if you were to download it as a .zip file and work on it on your own, it would show up with the same layout as the Assignment 1 Template on the Brightspace Assignment. This way, when we work on the assignment together, there won't be any errors with file locations. Below is what it looks like:

**assignment1** > repository/folder

-- **img** > all images go here.

-- **css** > MainStyle.css is here

-- **resources** > resources to help with the chapter "views" of the map.

-- index.html > the main page.

-- story.js > the javascript code for our story map.

-- README.md > the file you are reading right now :D

## 2. GitHub
Github's repositories are like folders - you can have multiple files in it, and every repository you create includes a `README.md` file. `README.md` are metadata files in which you can explain what's in the repository. You cannot create an empty folder on github - rather, once files are uploaded to the repository, these may be moved to create folders. For simplicity's sake, please leave folder making to me (Elise) because I'll be maintaining the repository files to fit the templates we learned in class.

### 2.1 GitHub Pull Requests

When you open a repository, there are multiple things to be aware of, but are easy to understand once you get used to them! For now, we'll stick to editting code.

In Google Drive, you can see in a shared document which collaborator has editted what, and multiple people can edit at once. It's inefficient to have people editting the same code at once, so GitHub as **Pull Requests**. Once you've worked on the code in your computer, you can open the original code on GitHub and replace the old code with the one you've worked on. Below is an image of a file to edit:

![image](https://user-images.githubusercontent.com/114946074/194427500-67587bd3-febe-483b-b148-8f8d089a7e2e.png)

You can see the code, and a load of other buttons. For now, ignore every other button and focus on the pencil icon (circled in red). You can now edit the file, and copy paste your updated code in it. THE CHANGES WONT SAVE UNTIL YOU SCROLL DOWN AND SAVE THE CHANGES. For the sake of our personal reflections, do NOT save directly to the main branch - rather select `Create a new branch for this commit and start a pull request`. Add a description of your edit to explain what you did, THEN CLICK ON PROPOSE CHANGES. **THE PULL REQUEST IS STILL NOT COMPLETE.**

![image](https://user-images.githubusercontent.com/114946074/194427950-76168d39-11be-45d6-a6fe-b697a0fbe509.png)
![image](https://user-images.githubusercontent.com/114946074/194428596-9769b4cb-9872-4224-b2b9-69edb1e5d02c.png)

You will be taken to a screen like the one below. Click On `Create Pull Request`. There you go - you've made a pull request!
![image](https://user-images.githubusercontent.com/114946074/194428852-94f4490a-faf7-4831-82f0-4112dd5b0456.png)

### 2.2 GitHub Branches

When Github saves your pull requests, it keeps a copy of the original code (referred to as `base branch` or `main` branch. It's the version of the file before your edits) and also creates a file that include your changes. This one is considered a patch, and an alternative version of the `main` branch. This way, when multiple people work on a file, you can keep the changes seperate without losing their progress.
![image](https://user-images.githubusercontent.com/114946074/194430400-2186de9d-488f-4822-afd7-c5a477fca3ef.png)

## Place-Holder Code Location
### 1. Mahnaz CSS for Chart
```
                img {
  border: 1px solid #ddd;
  padding: 5px;
  width: 520px;
}
/* Page content */
.content {
 padding: 16px;
}
body {
color: black;
}
h1, h2 {
color: black;
}
h4 {
color: Purple;
}
.chart-container {
    width: 300px;
    height:600px
}
chart.canvas.parentNode.style.height = '128px';
chart.canvas.parentNode.style.width = '128px';
        }
```
