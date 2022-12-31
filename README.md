# HTML Table Elements

* **Purpose** - To gain familiarity with HTML Table Elements




## Objective
* In this exercise, the learner is responsible for defining a form element on the DOM.

* The `form` should include the following elements:
  * A `label` element for the text input
  * A `input` element of type "text"
  * A `select` element with at least 3 option elements
  * A `button` element of type "submit"
* The learner should also ensure that the `form` element has an appropriate id attribute, as this will be used to verify the form's existence in the provided JavaScript file.

### Test Verification
`./js/test/TestMainApplication.js` is provided to verify the existence of the form element and its child elements on the DOM. The learner should ensure that their form element satisfies the following conditions:
  * The form element should have an id attribute
  * The form element should contain a label element
  * The form element should contain an input element of type "text"
  * The form element should contain a select element with at least 3 option elements
  * The form element should contain a button element of type "submit"
* If any of these conditions are not met, the JavaScript file will log an error message to the console.
* The learner should ensure that their form element satisfies all of the above requirements and that it passes the verification checks in the JavaScript file.

### Solution View

![](./img/solution.png)


## How to Download

#### Part 1 - Forking the Project
* To _fork_ the project, click the `Fork` button located at the top right of the project.


#### Part 2 - Navigating to _forked_ Repository
* Navigate to your github profile to find the _newly forked repository_.
* Copy the URL of the project to the clipboard.

#### Part 3 - Cloning _forked_ repository
* Clone the repository from **your account** into the `~/dev` directory.
  * if you do not have a `~/dev` directory, make one by executing the following command:
    * `mkdir ~/dev`
  * navigate to the `~/dev` directory by executing the following command:
    * `cd ~/dev`
  * clone the project by executing the following command:
    * `git clone https://github.com/MYUSERNAME/NAMEOFPROJECT`

#### Part 4 - Check Build
* Ensure that the tests run upon opening the project.
    * You should see `Tests Failed: 99 of 99 tests`







## How to Submit

#### Part 1 -  _Pushing_ local changes to remote repository
* from a _terminal_ navigate to the root directory of the _cloned_ project.
* from the root directory of the project, execute the following commands:
    * add all changes
      * `git add .`
    * commit changes to be pushed
      * `git commit -m 'I have added changes'`
    * push changes to your repository
      * `git push -u origin master`

#### Part 2 - Submitting assignment
* from the browser, navigate to the _forked_ project from **your** github account.
* click the `Pull Requests` tab.
* select `New Pull Request`
