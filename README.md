Backend: Sending Messages from Django Views
In your Django views, you can use the messages framework to send feedback to the user. For example, consider the login_view function where we authenticate the user based on the submitted username and password. If the login is successful, the system sets a success message, and if the login fails, an error message is added instead.


Ill pass this ----> messages.error(request, 'Invalid credentials. Please try again.')  # Set an error message
