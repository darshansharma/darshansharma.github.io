---
title="Let's Learn Tmux"
slug="lets-learn-tmux"
excerpt=""
tags=["linux", "how-to"]
type="post"
publish_at="17 Jan 2024 12:00 IST"
featured_image="https://dars-portfolio.s3.us-west-2.amazonaws.com/Images/Tmux-1.png"
---
# **Exploring Tmux: A Guide to Getting Started**

  

Tmux is a popular terminal multiplexer that allows you to manage multiple terminals in a single window. It offers a range of features including the ability to split the screen into multiple panes, open multiple windows, and manage sessions. In this article, we'll cover the basics of installing, using, and configuring tmux.

## **Installing Tmux**

  

### **macOS:**

  

```

brew install tmux

```

  

### **Linux:**

  

```

sudo apt-get install tmux

```

  

### **Windows:**

  

1. Download the latest version of tmux from the official website.

2. Extract the ZIP file to a folder on your computer.

3. Add the tmux folder to your PATH environment variable.

  

## **Opening Tmux**

  

To open a tmux session, simply run the following command in your terminal:

  

```

tmux

```

  

This will create a new session with a single pane.

  

## **Splitting the Terminal**

  

To split the terminal into multiple panes, you can use the following keybindings:

  

* **Ctrl + b + %:** Split the terminal vertically

* **Ctrl + b + '"' (double quote):** Split the terminal horizontally

* **Ctrl + b + o:** Rotate the panes

    
    
    
    
  ![Tmux session showing splitted terminal](https://dars-portfolio.s3.us-west-2.amazonaws.com/Images/Tmux-1.png)

    
        
        

## **Opening Windows and Panes**

  

To open a new window, use the following keybinding:

  

* **Ctrl + b + c:** Create a new window

  

To switch between windows, use the following keybindings:

  

* **Ctrl + b + n:** Next window

* **Ctrl + b + p:** Previous window

* **Ctrl + b + 0-9:** Switch to window 0-9

  

To open a new pane within a window, use the following keybinding:

  

* **Ctrl + b + ;:** Create a new vertical pane

* **Ctrl + b + Shift + ;:** Create a new horizontal pane

## **Navigating Panes and Windows**

  

To navigate between panes within a window, use the following arrow keys:

  

* **Up arrow:** Move to the pane above

* **Down arrow:** Move to the pane below

* **Left arrow:** Move to the pane to the left

* **Right arrow:** Move to the pane to the right

  

To navigate between windows, use the following keybindings:

  

* **Ctrl + b + n:** Next window

* **Ctrl + b + p:** Previous window

* **Ctrl + b + 0-9:** Switch to window 0-9




  ![Tmux-Session-Showing-Diff-Windows](https://dars-portfolio.s3.us-west-2.amazonaws.com/Images/Tmux-3.png)



## **Detaching and Reattaching Sessions**

  

To detach from a tmux session, use the following keybinding:

  

* **Ctrl + b + d:** Detach from the current session

  

To reattach to a detached session, use the following command in your terminal:

  

```

tmux attach

```

   
## **Conclusion**

     
In this article, we covered the basics of installing, using, and configuring tmux. With its powerful features and ease of use, tmux is an invaluable tool for anyone who works with multiple terminals on a regular basis. Whether you're a developer, system administrator, or just someone who wants to organize their terminal workflow, tmux is worth checking out.