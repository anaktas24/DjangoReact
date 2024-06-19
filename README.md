Hello and welcome to Migrating Mango -
your fruity companion to migration! 🥭

Switzerland will be currently the only country which is fully functional, with accurate information on the general topics (which can be accessed without an account) but more importantly with the functionality to create a task list when a user profile is created. The "topics" instances are created in the seed file and so can be easily be modified or created - with more time it would be preferable to create an admin area for such tasks.


In the back-end  we have a database of "tasks" with title, content, and a variety of parameters around category, EU or non-EU based, order, etc. When a "user profile" is created, the user selects a variety of parameters based on their situation (EU or non-EU, work, study or family reunification, etc.) and a list of specific "user tasks" is created where each instance refers to a user and a task, and has a status (default: "Pending").

The logic for the above is quite complex given the variety of parameters in play.
Feel free to test this functionality by creating a new user profile, otherwise you can log in using the below credentials when its done.


Either way, you will  have access to the "My Tasks" page where you can view the aforementioned "user tasks". Clicking on a task will reveal additional edit options (task dropdown functionality created using Stimulus JavaScript) where you can view the user task show page, or change the status of the task using dynamic buttons. The page automatically reloads when the status of a task is changed, at which point it will appear in the correct section (greyed out if marked as complete).
