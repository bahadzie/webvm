# Introduction to Linux CLI

[Click here for a linux virtual machine](https://bahadzie.github.io/webvm/)

## Day 1
- When working in the CLI the first thing you type is a command
- All commands in linux are case sensitive `LS`, `Ls`, `ls`, `lS` are different
- Most commands in linux are lower case but this is a convention, not a rule
- Commands can optionally have parameters. These are typed after the command and separated by ` ` whitespace
- `a`, `Tab` to see all commands starting with *a*
- `z`, `Tab` to see all commands starting with *z*
- `Tab`, `Tab` to see all the commands available on a linux system
- `man tree` for a detailed manual of the `tree` command
- `tree --help` for a brief summary of how to use `tree`
- A command will have either have a deatiled manual or a brief summary
- `whoami` to know which user is logged in
- `hostname` to know which machine you are logged in to
- `pwd` to know which folder you are currently in

### Working with files and folders
The simplest way to think about files and folders (directories) is **A file is the content, and a directory is the container**. Examples of files are documents, photos, videos, commands. A folder is a way of grouping files that makes sense for the user.

Files and folders are arranged in a hierarchy starting from the root `/` This is the highest folder level in the hierarchy. Every other file and folder is directly or indirectly under `/`. All files in the linux system belong to a particular user and group. Files also have read write and execute permission associated with them. This determines who is allowed to do what it any file/folder.

`cd` is the command used to move around the file system. Below are some useful navigation shortcuts
- `cd ..` go one folder up from where you are
- `cd /` go to the root folder
- `cd ~` go to your home folder
- `cd -` go to the folder you came from

`ls` is the command for listing the contents of a folder. `ls -l` gives more details about files and folders including file permissions, user and group owners of the file, it's size etc.

Other useful commands when working with files include
- `mv` move or rename a file/folder
- `rm` delete a file/folder
- `touch` create an empty file
- `mkdir` make a directory/folder

### Editing text files
`nano` can be used to create or edit text files. 
To save any edits, 
  - `Ctrl+X` to exit
  - *Save modified buffer?*
  - `Y` or `y`
  - *Write to file: [filename]*
  - `Enter`

## Day 2

### Exercises
Please attempt the following

- In your home folder create a new folder called *exercises*
- Move to the *exercises* folder
- Create a new file called *answers.txt*
- Run the following command `tree / > tree_output.txt`
- *answers.txt Line 1*: size in Kb of *tree_output.txt*
- *answers.txt Line 2*: command used for ⬆️
- *answers.txt Line 3*: how many lines are in *tree_output.txt*
- *answers.txt Line 4*: command used for ⬆️
- combine *answer.txt* with *tree_output.txt* into a new file called *combined.txt* using `cat answer.txt tree_output.txt > combined.txt`
- *answers.txt Line 5*: how many lines are in *combined.txt*
- combine *answer.txt* twice and save it as *2xanswers.txt*
- *answers.txt Line 6*: command used for ⬆️
- combine *tree_output.txt* twice and save it as *2xtree_output.txt*
- *answers.txt Line 7*: command used for ⬆️
- using `tree --help` find the parameter you can add to the `tree` to show the size of files and folders in a human readable way.
- *answers.txt Line 8*: command used for ⬆️
- the command `grep exercise tree_output.txt` will search for the word *exercise* in the file *tree_output.txt*. What parameter can you add to `grep` to show the line numbers of the search term *exercise* in *tree_output.txt*.
- *answers.txt Line 9*: command used for ⬆️
