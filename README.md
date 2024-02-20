# my-library-app

This is an exercise from the javaScript course in Odin

Execution:

# html and css

> create all the necessary html needed on the page, the best approach is to create the major sections as we style them for example, we can with the header, then the sidebar and then main content section

> the header and sidebar are set to position fixed

> our form is in the sidebar and is set to display none in which we shall later use javaScript to display it

> the main content sections are set to display grid, their widths determine by fractional units and auto-fill and the card(books) are set fixed widths

# javaScript

> in this case, we create the an empty array to store our books where we shall get them in order to apply html to them and render them

> we create a generator object which we shall use create our books from information gotten from our form element

> we create addToLibrary function and in this function we shall use get the input values from our input elements in the sidebar and we shall create the a new book object with our inputs and store them in the library array:

- we have to reset the input elements to being empty
- we have to call the renderHTML function which will display our html on the main content section

> renderHTML function:

- we create an empty string variable to store our html
- we loop through the library array and apply a html to each book

* the best way to do this is first style a dummy book with all the necessary html and css and then import it to javaScript to insert the necessary object items to it.

- add a functional delete button

* add an onclick event on the delete button that splices the object at index and the render the new html

- after rendering the html we append it to the empty string variable
- outside the for loop we add set the main content innerHTML to the empty string variable

> fire the event listeners

- we add an event listener to submit button in order to display our new book input

- add an event listener to the add book button to display the sidebar

Improvements need:

> create user account manager

> add the books section where readers can upload books and make can be accessed by the public

> make the design responsive

> the platform should remember where the user left off

Issues:

> The event listener for changing the background of the book card on checking the "read" mark only works for the first element despite trying to debug it for a day.

> I need to figure out a way to close the sidebar on submitting the form

> I need to figure out a way to reject an empty form input

> The backdrop filter is not compatible with safari
