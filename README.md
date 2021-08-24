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
| Full Backend                                 |    H     |      4hrs      |     hrs      |    hrs     |
| Authentication                               |    H     |      3hrs      |     hrs      |    hrs     |
| Basic React                                  |    H     |      1hrs      |     hrs      |    hrs     |
| Add in Components and React Router           |    H     |      1hrs      |     hrs      |    hrs     |
| Basic JSX for Each Component                 |    H     |      1hrs      |     hrs      |    hrs     |
| Add Sign In and Sign Up                      |    H     |      3hrs      |     hrs      |    hrs     |
| Work on Message Board                        |    H     |      3hrs      |     hrs      |    hrs     |
| Make Edit and Delete for Messages            |    H     |      2hrs      |     hrs      |    hrs     |
| Work on Farm Page                            |    H     |      2hrs      |     hrs      |    hrs     |
| Add Crops and Buttons for Crops              |    H     |      2hrs      |     hrs      |    hrs     |
| Add Crop Counter                             |    H     |      2hrs      |    hrs     |   hrs    |
| Add Message Board/Leaderboard to Farm Page   |    H     |      1hrs      |     hrs      |    hrs     |
| Make Sure Crops Work Properly                |    H     |      1hrs      |     hrs      |    hrs     |
| CSS Styling                                  |    H     |      3hrs      |    hrs     |   hrs    |
| Media Queries                                |    H     |      1hrs      |     hrs      |    hrs     |
| Work on Leaderboard Component                |    M     |      2hrs      |     hrs      |    hrs     |
| Finish Leaderboard and add Styling           |    M     |      1hrs      |    hrs     |   hrs    |
| PMVP                                         |    L     |      5hrs      |     hrs      |    hrs     |
| Finish Up Functionality + Debugging          |    H     |      4hrs      |     hrs      |    hrs     |
| Linting                                      |    H     |      1hrs      |     hrs      |    hrs     |
| Final Review                                 |    H     |      1hrs      |     hrs      |    hrs     |
| Total                                        |    H     |     44hrs      |     hrs     |    hrs    |


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
