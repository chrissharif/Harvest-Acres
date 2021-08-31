# Harvest Acres

[Deployed Link](https://eloquent-hopper-712409.netlify.app/)

## Project Name

Harvest Acres

## Project Description

This farm-style collection game is for those who love the game HayDay. In this game, you will be able to collect crops and chat with other players. Your goal is to collect as many crops as you can to impress the other farmers! Whoever collects the most crops will stand at the top of the leaderboard.

#### MVP

- Have a Login/Signup
- Let the user have a farm
- Let the user post on message board
- User will be able to edit and delete messages
- Create a posting board for farmers to chat with others

## Libraries and Dependencies

| Library       | Description                                                |
| ------------- | ---------------------------------------------------------- |
| React         | Frontend Javascript client for building UI/UX              |
| React Router  | Library in React used for routing between views or screens |
| Ruby          | Object oriented programming language                       |
| Ruby on Rails | Ruby Gem used to create backend servers and a database     |

## Wireframes

[Sign-In](https://www.figma.com/file/cnerAVSF1yRxY2RPWwFRNu/Harvest-Acres-Sign-In)

[Sign-Up](https://www.figma.com/file/aDaSsOTz76s7uKgc1RelL4/Harvest-Acres-Sign-Up)

[Farm View](https://www.figma.com/file/WLFSns8vMAbuzKXtE8srCV/Harvest-Acres-Farm-Page?node-id=0%3A1)

[Message Board](https://www.figma.com/file/iOIOQ02YhAxyDKGCgB3ZiL/Harvest-Acres-Message-Board)

[New Post](https://www.figma.com/file/0QtYzSP3B0yRXMsjK2GDLr/Harvest-Acres-New-Post)

[Edit Post](https://www.figma.com/file/RjAIuhhlk3I3HVRoFvZPUo/Harvest-Acres-Edit-Post)

[Leaderboard](https://www.figma.com/file/MtNhRXYRgIf2cW4WGjHyiL/Harvest-Acres-Leaderboard)

## Component Tree

[Component Tree](https://whimsical.com/harvest-acres-component-hierarchy-XR1ujHqqv3ah3bQvEgBrgY)

## Component Architecture

```

src
|__ App.js
    |__ Screens/
         |__ EditPost/
              |__ EditPost.jsx, EditPost.css
         |__ Farm/
              |__ Farm.jsx, Farm.css
         |__ Leaderboard/
              |__ Leaderboard.jsx, Leaderboard.css
         |__ MessageBoard/
              |__ MessageBoard.jsx, MessageBoard.css
         |__ Post/
              |__ Post.jsx, Post.css
         |__ SignIn/
              |__ SignIn.jsx, SignIn.css
         |__ SignUp/
              |__ SignUp.jsx, SignUp.css

    |__ Services
         |__ apiConfig.js, auth.js, users.js, farms.js, posts.js


```

## Timeframes

| Component                                  | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Full Backend                               |    H     |      4hrs      |     2hrs      |    2hrs     |
| Authentication                             |    H     |      3hrs      |     1hrs      |    1hrs     |
| Basic React                                |    H     |      1hrs      |     1hrs      |    1hrs     |
| Add in Components and React Router         |    H     |      1hrs      |     1hrs      |    1hrs     |
| Boilerplate for Components                 |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Add Sign In and Sign Up                    |    H     |      3hrs      |     3hrs      |    3hrs     |
| Work on Message Board                      |    H     |      3hrs      |     4hrs      |    4hrs     |
| Make Edit and Delete for Messages          |    H     |      2hrs      |     6hrs      |    6hrs     |
| Work on Farm Page                          |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Crop Counter                           |    H     |      2hrs      |    0.5hrs     |   0.5hrs    |
| Add Message Board/Leaderboard to Farm Page |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| CSS Styling                                |    H     |      6hrs      |     8hrs      |    8hrs     |
| Media Queries                              |    H     |      1hrs      |     1hrs      |    1hrs     |
| Work on Leaderboard Component              |    M     |      2hrs      |    0.5hrs     |   0.5hrs    |
| Finish Leaderboard and add Styling         |    M     |      1hrs      |    0.5hrs     |   0.5hrs    |
| PMVP                                       |    L     |      5hrs      |     2hrs      |    2hrs     |
| Finish Up Functionality + Debugging        |    H     |      4hrs      |     4hrs      |    4hrs     |
| Deployment                                 |    H     |      2hrs      |     1hrs      |    1hrs     |
| Linting                                    |    H     |      1hrs      |     1hrs      |    1hrs     |
| Final Review                               |    H     |      1hrs      |     1hrs      |    1hrs     |
| Total                                      |    H     |     46hrs      |    40.5hrs    |   40.5hrs   |

#### PostMVP

- Have a leaderboard
- Let users collect crops
- Allow user to unlock different crops
- Add animations for harvesting crops, posting on board
- Have the post page as a pop-up
- Allow users to visit other farms

## ERD Model

[ERD Model](https://drive.google.com/file/d/16EXheHUGENQ3kTtG-ScM_yFyvkpP93rk/view?usp=sharing)

## Code Showcase

This is the code for my Edit Post popup. I was very happy to get the popup working and be able to keep everything neat. I also never have used textarea, so this was also a learning moment for me.

```
{isOpen && <EditPost content={<>
  <form className='message-form' onSubmit={(e) => {
    e.preventDefault()
    handleUpdate(post.id, formData)
    togglePopup()
  }}>
  <textarea
    className='message-form-input'
    placeholder='edit message...'
    cols='30'
    rows='10'
    type='text'
    name='description'
    maxLength='100'
    autoComplete='off'
    value={description}
    onChange={handleChange}
  />
  <button className='message-board-button'>Edit Message</button>
  </form>
</>} handleClose={togglePopup} />}
```

## Code Issues & Resolutions

- Had problems with my routes
  - Realized URL was set as Url in api-config
- Wasn't able to type in my forms
  - Had a small syntax error
- Wasn't able to edit posts
  - Forgot to pass in 'id' through handleUpdate function
- User would be logged out on window refresh
  - Just had to add '?' to currentUser property
