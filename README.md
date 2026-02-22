## OFTW-UW Madison Website

This ReadMe contains instructions to download a copy of this repository
to your local machine so that you may make edits on the website. Having
working knowledge of HTML and CSS is recommended. If anything is confusing, please
create an issue or send a message to lhe227@wisc.edu

## Set up instructions

Install some kind of text-editor. VSCode is recommended, but any text-editor
works. 

Once you have downloaded your text-editor, open the terminal and run this command

### git clone <Insert HTTP or SSH to this repository>

You will have to go to the green "code" tab and copy the link. 

By now, you should have all of the files included in the repository. 

### What the files are

The folders contain the index.html, which are the different pages. The CSS (cascading stlyle sheets)
files specify the styling of the HTML. The app.js is mainly designed for the drop-down menu for media queries

### Adding your change to the remote repository

From your local machine (which would be your computer), use the terminal and type in these commands. 

1. git add . (this adds the changes you have done to the staging environment, which is a place for developers to specify which changes they want)
2. git commit -m"<Enter your message>" Here, this "commits" your changes. You are required to enter a message by default. Try to be as descriptive as possible.
3. git push. This "pushes" your changes to this github repository, which will make the changes visible on the actual website.

**If you are pushing for the first time with this repository run "git push -u origin main"** 

### Guide to the website for non CS majors. 

Please follow the directions for set up and note down the git commands. In the future, I may try to migrate this to a website where drag-and-drop functions are available, such as wordpress,
but for now, please bear with me. 

To change a block of text (paragraph), use control (or commmand on mac) F and type in <p> on an HTML document until you find the text that you want to change. 
Any text can be changed just be changing the text enclosed in the opening and closing tags in the HTML document. 
Ex.
<p> change me</p>
<p> I am changed</p>

Some common elements
<p></p> is a paragraph opening and closing tag. 
<h1></h1> is a header opening and closing tag. Anything that begins with h and ends with a number, like <h2></h2> is a header
<img> is an image tag. You will see it int he form of <img src = "image relative path">

Changing the CSS should only be done when one wants to change the font-size, font, coloring, positioning, images, etc. 

## Images

If one wants to change a background image, go to the respective CSS document and use control + F, and type in background-image until you find the one you want to delete. 

To change an image that's not a background image, go to the respective HTML document and type in "<img" to find the image tag. 

To download an image, please make sure to download it in the "images" folder in the repository. 

Copy the "relative path" by right clicking on the newly downloaded image on vscode. The relative path is where the program will find our image. It's a "path" to where the image is
based on the where the program is running from. 

Go to the specific background-image property or <img> element and copy and paste your relative path to the image. 

## Need Help?

For now, please email lhe227@wisc.edu 
