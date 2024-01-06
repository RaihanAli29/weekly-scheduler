# Weekly Scheduler

## Table of Contents

- [Description](#description)
- [Preview](#preview)
- [Usage](#usage)
- [Languages](#languages)
- [Notes](#Notes)
- [Deployment](#deployment)
- [Resources](#resources)

## Description

Developed a daily planner enabling users to manage their schedule from 9am to 9pm, tracking their availability.

## Preview

![Weekly Scheduler Preview](./images/05-third-party-apis-homework-demo.gif)

## Usage
- Open Weekly Scheduler in browser of choice. 
- Select hour.
- Input details to pertaining to the hour. 
- Save by clicking on the icon on the right. 
- Repeat as neccassary.
- Refresh the page and your inputs will still be available to view. 

## Languages
- JavaScript
- jQuery
- HTML
- CSS
- GitHub

# Notes

```
 for (var hour = 9; hour <= 21; hour++)
```

I used a loop to create time blocks for each hour from 9 AM to 9 PM. 

```
$("<textarea>").addClass("col event " + (isPast ? "past" : isPresent ? "present" : "future")),
```
I added a conditional (ternary) operator wilst adding classes to selected textarea elements, the styling of the selected elements change according to the CSS and whether the hour is in the past, present or future. 

# Resources
- Conditional (ternary) operator [- read more...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- Format (day.js) [- read more...](https://day.js.org/docs/en/display/format)
- this and $(this) in jQuery callbacks [- read more...](https://coding.abel.nu/2013/04/this-and-this-in-jquery-callbacks/)
- .val() method [- read more...](https://www.w3schools.com/jquery/html_val.asp)
- contains() selector [- read more...](https://www.w3schools.com/jquery/sel_contains.asp)

# Acknowledgements
