# Harvest Acres

[Deployed Link]()

## Project Name

Harvest Acres

## Project Description

This farm-style collection game is for those who love the game HayDay. In this game, you will be able to collect crops and chat with other players. Your goal is to collect as many crops as you can to impress the other farmers! Whoever collects the most crops will stand at the top of the leaderboard.


#### MVP

- Have a Login/Signup
- Let the user have a farm
- Let the farm have crops for the user to harvest
- Create a posting board for farmers to chat with others

## Libraries and Dependencies

| Library | Description  |
|---------|--------------|
|  React  |   Frontend Javascript client for building UI/UX   |
|  React Router  |  Library in React used for routing between views or screens      |
|  Ruby  |  Object oriented programming language     |
|  Ruby on Rails  |    Ruby Gem used to create backend servers and a database       |


## Wireframes

[Log-in and Sign-up Page](https://www.figma.com/file/cnerAVSF1yRxY2RPWwFRNu/Harvest-Acres-Log-In)

[Farm View](https://www.figma.com/file/WLFSns8vMAbuzKXtE8srCV/Harvest-Acres-Farm-Page?node-id=0%3A1)

[Message Board](https://www.figma.com/file/iOIOQ02YhAxyDKGCgB3ZiL/Harvest-Acres-Message-Board)

[Leaderboard](https://www.figma.com/file/MtNhRXYRgIf2cW4WGjHyiL/Harvest-Acres-Leaderboard)

## Component Tree

[Component Tree](https://whimsical.com/harvest-acres-component-hierarchy-XR1ujHqqv3ah3bQvEgBrgY)

## Component Architecture

```

app -> Controllers -> users_controller.rb, farms_controller.rb, posts_controller.rb, crops_controller.rb
    |
    -> Models -> user.rb, farm.rb, post.rb, crop.rb

client -> Src -> App.js
              |
              |-> Views -> Farm.jsx, MessageBoard.jsx, Leaderboard.jsx
              |
              -> Services -> apiConfig.js, auth.js, users.js, farms.js
              
config -> Initializers -> cors.rb
       |
       -> routes.rb

db -> Migrate -> migration files
   |
   -> schema.rb, seeds.rb


```


## Timeframes

| Component                                    | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic React                                  |    H     |      1hrs      |     2hrs      |    2hrs     |
| Add in Components and React Router           |    H     |      1hrs      |     2hrs      |    2hrs     |
| Basic JSX for Each Component                 |    H     |      1hrs      |     1hrs      |    1hrs     |
| Work on Home Page Component                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add in Play Game Button                      |    H     |      1hrs      |     1hrs      |    1hrs     |
| Add Event Listeners + Timer                  |    H     |      1hrs      |     3hrs      |    3hrs     |
| Add in Navigation Bar + Leaderboards Button  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Start First Puzzle                           |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Functionality between Puzzle + Home Page |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Submit Button for First Puzzle           |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Start Second Puzzle                          |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Functionality between Puzzle + Home Page |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Submit Button for Second Puzzle          |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Start Third Puzzle                           |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Functionality between Puzzle + Home Page |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Submit Button for Third Puzzle           |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Start Fourth Puzzle                          |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Functionality between Puzzle + Home Page |    H     |      2hrs      |     1hrs      |    1hrs     |
| Add Submit Button for Fourth Puzzle          |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Add Win or Lose Screen                       |    H     |      2hrs      |     3hrs      |    3hrs     |
| Work on Leaderboards Component               |    H     |      3hrs      |     5hrs      |    5hrs     |
| Allow Player to Post on Leaderboards         |    H     |      2hrs      |     3hrs      |    3hrs     |
| Finish Up Functionality + Debugging          |    H     |      4hrs      |     6hrs      |    6hrs     |
| PMVP Styling                                 |    L     |      5hrs      |     5hrs      |    5hrs     |
| Final Review                                 |    H     |      1hrs      |     2hrs      |    2hrs     |
| Total                                        |    H     |     45hrs      |     55hrs     |    55hrs    |


#### PostMVP

- Have a leaderboard
- Allow user to unlock different crops
- Add animations for harvesting crops, posting on board
- Have the post page as a pop-up
- Allow users to visit other farms


## ERD Model
[ERD Model](https://drive.google.com/file/d/16EXheHUGENQ3kTtG-ScM_yFyvkpP93rk/view?usp=sharing)

## Code Showcase

```
code
```

## Code Issues & Resolutions

-
-
-
