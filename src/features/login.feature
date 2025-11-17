Feature: Login form validation

@negative @login
Scenario Outline: UC-1 Test Login form with empty credentials
    Given I open the "Login" page
    When I type "<username>" and "<password>" into the login fields
    And I clear the username input
    And I clear the password input
    And I click the "Login" button
    Then I should see the error message "<message>"

    Examples:
     | username | password | message |
     | invalid_user | secret_sauce | Username is required |
     | user123 | secret_sauce | Username is required |
     | user$%^&* | secret_sauce | Username is required |

@negative @login
  Scenario Outline: UC-2 Test Login form with credentials by passing Username
    Given I open the "Login" page
    When I type "<username>" and "<password>" into the login fields
    And I clear the password input
    And I click the "Login" button
    Then I should see the error message "<message>"

    Examples:
     | username | password | message |
     | invalid_user | secret_sauce | Password is required |
     | user123 | secret_sauce | Password is required |
     | user$%^&* | secret_sauce | Password is required |

@positive @login
Scenario Outline: UC-3 Test Login form with credentials by passing Username & Password
    Given I open the "Login" page
    When I type "<username>" and "<password>" into the login fields
    And I click the "Login" button
    Then I should see the dashboard title "<dashboardTitle>"

    Examples:
      | username | password | dashboardTitle |
      | standard_user | secret_sauce | Swag Labs |
      | problem_user | secret_sauce | Swag Labs |
      | visual_user | secret_sauce | Swag Labs |