### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] create indivdiual items
- [ ] delete individual items
- [ ] edit individual items

##### Plan for Basic Requirements
* Create a movie log which has two parts : A list of movies to be watched and the list of movies you have watched
* Input Area1 (Movie List To  watch) : Movie name, date, imdb score, genre, if watched ?
* You can edit and delete a movie from the list

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

ex.
```javascript
item =  {
id: "thing used for key",
text-value: "some text",
categories: [ 'cat1', 'cat2' ],
isComplete: boolean,
dateCreated: dateCreated,
dateCompleted: dateCompleted
...
etc
}
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Spin
1. If you click on Yes for "if watched" in input Area 1, the movie appears on input Area 2 
2. Input Area 2 (The list of movies that has been watched): add comment, add personal score
    - You can also edit your comment and your personal score

#### My Schedule
##### Day 2
- Complete CRUD operations for basic requirements
   - Figure out how to edit an item 
- Finish the basic requirements. 
- Work on applying bootsrap

##### Day 3 & 4
- Figure out how to move data from input Area 1 to input 2 by adding new input fields (comment  personal score)
- Work on how to show comments and personal score of each movie
- Work on applying bootsrap

