Feature: Interact with reports

    User should be able to :
        Search for records in Trips, Agents, and Merchants reports
        Download report in excel or pdf format
        View flight transactions in request log and download the generated report in excel format

@TripsReport
Scenario: Navigate user to trips report view
    Given User has logged in successfully
    When Navigates to Trips report 
    Then I should be redirected to "/reports-trips" page

@AgentReport
Scenario: Navigate user to agents report view
    Given User has logged in successfully
    When Navigates to Agent report 
    Then I should be redirected to "/reports-agents" page

@MerchantReport
Scenario: Navigate user to merchants report view
    Given User has logged in successfully
    When Navigates to Merchant report 
    Then I should be redirected to "/reports-merchants" page

@RequestLog
Scenario: Navigate user to request log view
    Given User has logged in successfully
    When Navigates to request logs 
    Then I should be redirected to "/reports-request-logs" page

@MonitoringConsole
Scenario: Navigate user to monitoring console view
    Given User has logged in successfully
    When Navigates to monitoring console 
    Then I should be redirected to "/monitoring-console" page