Feature: User Authentication

    User should be able to:
        Login with valid credentials
        Not login with invalid credentials

@login
Scenario: Login with valid credentials
    When I input valid login credentials
    And Click on the login button
    Then I should be redirected to "/agents" page
    
@login
Scenario: Login with invalid credentials
    When I input invalid login credentials
    And Click on the login button
    Then I should be presented with error message "Username/password is incorrect" on an alert modal