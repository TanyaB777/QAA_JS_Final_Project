Feature: Login form validation

Scenario Outline: UC-1 Test Login form with empty credentials
    Given I open the login page
    When I type "<username>" and "<password>" into the login fields
    And I clear the username input
    And I clear the password input
    And I click the "Login" button
    Then I should see the error message "<message>"

    Examples:
     | username | password | message |
     | standard_user | secret_sauce | Username is required |
     | problem_user | secret_sauce | Username is required |
     | visual_user | secret_sauce | Username is required |