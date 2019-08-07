$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/ct_bnb/features/my_info.feature");
formatter.feature({
  "name": "Information about me",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "my self",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"efewtrell8c@craigslist.org\" \"jamesmay\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyInfoStepDefs.user_logs_in_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the my self page",
  "keyword": "When "
});
formatter.match({
  "location": "MyInfoStepDefs.the_user_is_on_the_my_self_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"my\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61581}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 107be3446565649143903381a5b795fb\n*** Element info: {Using\u003dlink text, value\u003dmy}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getCoordinates(Unknown Source)\n\tat org.openqa.selenium.interactions.internal.MouseAction.getActionLocation(MouseAction.java:65)\n\tat org.openqa.selenium.interactions.MoveMouseAction.perform(MoveMouseAction.java:43)\n\tat org.openqa.selenium.interactions.CompositeAction.perform(CompositeAction.java:36)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:641)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:594)\n\tat com.ctbnb.pages.TopNavigationBar.goToSelf(TopNavigationBar.java:38)\n\tat com.ctbnb.step_definitions.MyInfoStepDefs.the_user_is_on_the_my_self_page(MyInfoStepDefs.java:40)\n\tat ✽.the user is on the my self page(src/test/resources/com/ct_bnb/features/my_info.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "user info should match the db records using \"efewtrell8c@craigslist.org\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyInfoStepDefs.user_info_should_match_the_db_records_using(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my team",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"efewtrell8c@craigslist.org\" \"jamesmay\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyInfoStepDefs.user_logs_in_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the my team page",
  "keyword": "When "
});
formatter.match({
  "location": "MyInfoStepDefs.the_user_is_on_the_my_team_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"my\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61610}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 510c94bfa02578afeb8113233b041659\n*** Element info: {Using\u003dlink text, value\u003dmy}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getCoordinates(Unknown Source)\n\tat org.openqa.selenium.interactions.internal.MouseAction.getActionLocation(MouseAction.java:65)\n\tat org.openqa.selenium.interactions.MoveMouseAction.perform(MoveMouseAction.java:43)\n\tat org.openqa.selenium.interactions.CompositeAction.perform(CompositeAction.java:36)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:641)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:594)\n\tat com.ctbnb.pages.TopNavigationBar.goToTeam(TopNavigationBar.java:44)\n\tat com.ctbnb.step_definitions.MyInfoStepDefs.the_user_is_on_the_my_team_page(MyInfoStepDefs.java:75)\n\tat ✽.the user is on the my team page(src/test/resources/com/ct_bnb/features/my_info.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "team info should match the db records using \"efewtrell8c@craigslist.org\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyInfoStepDefs.team_info_should_match_the_db_records_using(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "batches",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I retrieve the batches information",
  "keyword": "Given "
});
formatter.match({
  "location": "BatchInfoStepDefs.i_retrieve_the_batches_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following batches should be displayed",
  "rows": [
    {
      "cells": [
        "7",
        "true"
      ]
    },
    {
      "cells": [
        "8",
        "false"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BatchInfoStepDefs.following_batches_should_be_displayed(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "campust test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@UI"
    }
  ]
});
formatter.step({
  "name": "user logs in using \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "correct campus should be displayed for \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "efewtrell8c@craigslist.org",
        "jamesmay"
      ]
    },
    {
      "cells": [
        "teachervamikemarcus@gmail.com",
        "mikemarcus"
      ]
    },
    {
      "cells": [
        "htwinbrowb4@blogspot.com",
        "kanyabang"
      ]
    }
  ]
});
formatter.scenario({
  "name": "campust test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@UI"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"efewtrell8c@craigslist.org\" \"jamesmay\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyInfoStepDefs.user_logs_in_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "correct campus should be displayed for \"efewtrell8c@craigslist.org\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BatchInfoStepDefs.correct_campus_should_be_displayed_for(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Campus name did not match expected:\u003c[VA]\u003e but was:\u003c[sign in]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat com.ctbnb.step_definitions.BatchInfoStepDefs.correct_campus_should_be_displayed_for(BatchInfoStepDefs.java:74)\n\tat ✽.correct campus should be displayed for \"efewtrell8c@craigslist.org\"(src/test/resources/com/ct_bnb/features/my_info.feature:25)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "campust test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@UI"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"teachervamikemarcus@gmail.com\" \"mikemarcus\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyInfoStepDefs.user_logs_in_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "correct campus should be displayed for \"teachervamikemarcus@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BatchInfoStepDefs.correct_campus_should_be_displayed_for(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Campus name did not match expected:\u003c[VA]\u003e but was:\u003c[sign in]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat com.ctbnb.step_definitions.BatchInfoStepDefs.correct_campus_should_be_displayed_for(BatchInfoStepDefs.java:74)\n\tat ✽.correct campus should be displayed for \"teachervamikemarcus@gmail.com\"(src/test/resources/com/ct_bnb/features/my_info.feature:25)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "campust test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@UI"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"htwinbrowb4@blogspot.com\" \"kanyabang\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyInfoStepDefs.user_logs_in_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "correct campus should be displayed for \"htwinbrowb4@blogspot.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BatchInfoStepDefs.correct_campus_should_be_displayed_for(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Campus name did not match expected:\u003c[IL]\u003e but was:\u003c[sign in]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat com.ctbnb.step_definitions.BatchInfoStepDefs.correct_campus_should_be_displayed_for(BatchInfoStepDefs.java:74)\n\tat ✽.correct campus should be displayed for \"htwinbrowb4@blogspot.com\"(src/test/resources/com/ct_bnb/features/my_info.feature:25)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "login as \u003cuser\u003e type",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user logs in as \u003cuser\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "there are available spots for scheduling",
  "keyword": "And "
});
formatter.step({
  "name": "the user hunts for a spot",
  "keyword": "When "
});
formatter.step({
  "name": "book button \u003cexpected\u003e be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "expected"
      ]
    },
    {
      "cells": [
        "team member",
        "should not"
      ]
    },
    {
      "cells": [
        "team lead",
        "should"
      ]
    },
    {
      "cells": [
        "teacher",
        "should"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login as team member type",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in as team member",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "there are available spots for scheduling",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user hunts for a spot",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "book button should not be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as team lead type",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in as team lead",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "there are available spots for scheduling",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user hunts for a spot",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "book button should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as teacher type",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in as teacher",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "there are available spots for scheduling",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user hunts for a spot",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "book button should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/ct_bnb/features/user_information.feature");
formatter.feature({
  "name": "User information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify information about the logged in user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ws"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api using \"teachervamikemarcus@gmail.com\" and \"mikemarcus\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the current user information using the me endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_current_user_information_using_the_me_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should be returned",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_be_returned()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user by id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ws"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 40 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the correct user information should be returned by the student endpoint",
  "rows": [
    {
      "cells": [
        "id",
        "40"
      ]
    },
    {
      "cells": [
        "firstName",
        "Angie"
      ]
    },
    {
      "cells": [
        "lastName",
        "Coatham"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_correct_user_information_should_be_returned_by_the_student_endpoint(String,String\u003e)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Angie]\u003e but was:\u003c[Engracia]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.ctbnb.step_definitions.UserInformationStepDefs.the_correct_user_information_should_be_returned_by_the_student_endpoint(UserInformationStepDefs.java:82)\n\tat ✽.the correct user information should be returned by the student endpoint(src/test/resources/com/ct_bnb/features/user_information.feature:14)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify information about the logged in user with the database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api using \"teachervamikemarcus@gmail.com\" and \"mikemarcus\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the current user information using the me endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_current_user_information_using_the_me_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.step({
  "name": "I get the user information by id \u003cid\u003e using the student endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "39"
      ]
    },
    {
      "cells": [
        "40"
      ]
    },
    {
      "cells": [
        "41"
      ]
    },
    {
      "cells": [
        "42"
      ]
    },
    {
      "cells": [
        "44"
      ]
    },
    {
      "cells": [
        "45"
      ]
    },
    {
      "cells": [
        "46"
      ]
    },
    {
      "cells": [
        "47"
      ]
    },
    {
      "cells": [
        "49"
      ]
    },
    {
      "cells": [
        "50"
      ]
    },
    {
      "cells": [
        "51"
      ]
    },
    {
      "cells": [
        "52"
      ]
    },
    {
      "cells": [
        "54"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 39 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 40 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 41 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 42 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 44 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 45 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 46 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 47 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 49 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 50 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 51 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 52 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify students by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the user information by id 54 using the student endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_the_user_information_by_id_using_the_student_endpoint(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information about current user should match the user table",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.the_information_about_current_user_should_match_the_user_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all students by id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get all students from users table",
  "keyword": "When "
});
formatter.match({
  "location": "UserInformationStepDefs.i_get_all_students_from_users_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student service should return same students",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInformationStepDefs.student_service_should_return_same_students()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/ct_bnb/features/user_registration.feature");
formatter.feature({
  "name": "User registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Permissions verification: team lead",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ws"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as team lead",
  "keyword": "Given "
});
formatter.match({
  "location": "UserRegistrationStepDefs.i_am_logged_reservation_api_as_team_lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try to register a new user",
  "keyword": "When "
});
formatter.match({
  "location": "UserRegistrationStepDefs.i_try_to_register_a_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system should return only teacher can register message",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegistrationStepDefs.system_should_return_only_teacher_can_register_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Permissions verification: team member",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ws"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as team member",
  "keyword": "Given "
});
formatter.match({
  "location": "UserRegistrationStepDefs.i_am_logged_reservation_api_as_team_member()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c422\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\n\tat sun.reflect.GeneratedMethodAccessor141.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:123)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:131)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:119)\n\tat com.prestashop.utilities.RestUtils.accessToken(RestUtils.java:36)\n\tat com.ctbnb.step_definitions.UserRegistrationStepDefs.i_am_logged_reservation_api_as_team_member(UserRegistrationStepDefs.java:59)\n\tat ✽.I am logged reservation api as team member(src/test/resources/com/ct_bnb/features/user_registration.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "I try to register a new user",
  "keyword": "When "
});
formatter.match({
  "location": "UserRegistrationStepDefs.i_try_to_register_a_new_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "system should return only teacher can register message",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegistrationStepDefs.system_should_return_only_teacher_can_register_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Permissions verification: teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ws"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try to register a new user",
  "keyword": "When "
});
formatter.match({
  "location": "UserRegistrationStepDefs.i_try_to_register_a_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the teacher should be authorised to add users",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegistrationStepDefs.the_teacher_should_be_authorised_to_add_users()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c422\u003e but was \u003c403\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\n\tat sun.reflect.GeneratedMethodAccessor141.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:123)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:131)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:119)\n\tat com.ctbnb.step_definitions.UserRegistrationStepDefs.the_teacher_should_be_authorised_to_add_users(UserRegistrationStepDefs.java:64)\n\tat ✽.the teacher should be authorised to add users(src/test/resources/com/ct_bnb/features/user_registration.feature:19)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify existing user email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try to register a new user with existing email",
  "keyword": "When "
});
formatter.match({
  "location": "UserRegistrationStepDefs.i_try_to_register_a_new_user_with_existing_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user with same email exists message should be returned",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegistrationStepDefs.user_with_same_email_exists_message_should_be_returned()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c422\u003e but was \u003c403\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\n\tat sun.reflect.GeneratedMethodAccessor141.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:123)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:131)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:119)\n\tat com.ctbnb.step_definitions.UserRegistrationStepDefs.user_with_same_email_exists_message_should_be_returned(UserRegistrationStepDefs.java:88)\n\tat ✽.user with same email exists message should be returned(src/test/resources/com/ct_bnb/features/user_registration.feature:26)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify existing user email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api as teacher",
  "keyword": "Given "
});
formatter.match({
  "location": "UserInformationStepDefs.i_am_logged_reservation_api_as_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register a new user",
  "keyword": "When "
});
formatter.match({
  "location": "UserRegistrationStepDefs.i_register_a_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new user should registered",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegistrationStepDefs.new_user_should_registered()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e but was \u003c403\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\n\tat sun.reflect.GeneratedMethodAccessor141.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:123)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:131)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:119)\n\tat com.ctbnb.step_definitions.UserRegistrationStepDefs.new_user_should_registered(UserRegistrationStepDefs.java:121)\n\tat ✽.new user should registered(src/test/resources/com/ct_bnb/features/user_registration.feature:32)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should be able to login as the new user",
  "keyword": "And "
});
formatter.match({
  "location": "UserRegistrationStepDefs.i_should_be_able_to_login_as_the_new_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/prestashop/features/account/login_page.feature");
formatter.feature({
  "name": "login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "login link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the Sign in link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_clicks_on_the_Sign_in_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "username and password fields should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.username_and_password_fields_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify user name and last name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"nitoyey@dumoac.net\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"John\" \"Smith\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62156}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: bc7061f9c78ef1773c27b842944e8c02\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"John\" \"Smith\" should be displayed(src/test/resources/com/prestashop/features/account/login_page.feature:13)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify goes to different site first",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@amazon_check"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user amazon",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user gets prices for \"Printed Chiffon Dress\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the price for \"Printed Chiffon Dress\" should be cheaper",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/prestashop/features/account/login_page_message_validation.feature");
formatter.feature({
  "name": "Error messages on the login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Invalid email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user tries to register an invalid email",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.the_user_tries_to_register_an_invalid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display error message \"Invalid email address.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.the_system_should_display_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "blank email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user tries to register blank email",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.the_user_tries_to_register_blank_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display error message \"Invalid email address.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.the_system_should_display_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "existing email",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "there is an existing user",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.there_is_an_existing_user()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"class name\",\"selector\":\"login\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62250}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 729422c7c72a3397e2f8fd3cdeea70e6\n*** Element info: {Using\u003dclass name, value\u003dlogin}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:403)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.there_is_an_existing_user(LoginStepDefs.java:81)\n\tat ✽.there is an existing user(src/test/resources/com/prestashop/features/account/login_page_message_validation.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user tries to register the same email",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.the_user_tries_to_register_the_same_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the system should display error message \"An account using this email address has already been registered. Please enter a valid password or request a new one.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.the_system_should_display_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature");
formatter.feature({
  "name": "Verify product information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify item name",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user selects \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "product name should be \"\u003cproduct\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the price should be \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "correct default count should be 1",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "price",
        "product"
      ]
    },
    {
      "cells": [
        "$28.98",
        "Printed Summer Dress"
      ]
    },
    {
      "cells": [
        "$26.00",
        "Printed Dress"
      ]
    },
    {
      "cells": [
        "$160.40",
        "Printed Chiffon Dress"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify item name",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"Printed Summer Dress\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product name should be \"Printed Summer Dress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.product_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the price should be \"$28.98\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_price_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "correct default count should be 1",
  "keyword": "And "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.correct_default_count_should_be(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify item name",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"Printed Dress\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product name should be \"Printed Dress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.product_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the price should be \"$26.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_price_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "correct default count should be 1",
  "keyword": "And "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.correct_default_count_should_be(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify item name",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"Printed Chiffon Dress\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product name should be \"Printed Chiffon Dress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.product_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the price should be \"$160.40\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_price_should_be(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c$16[0].40\u003e but was:\u003c$16[].40\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.prestashop.step_definitions.ProductInformaitonStepDefs.the_price_should_be(ProductInformaitonStepDefs.java:125)\n\tat ✽.the price should be \"$160.40\"(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "correct default count should be 1",
  "keyword": "And "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.correct_default_count_should_be(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I login using username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "users full name \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "John",
        "Smith",
        "nitoyey@dumoac.net",
        "password"
      ]
    },
    {
      "cells": [
        "Geraldine",
        "Whitehead",
        "lectus@sociisnatoquepenatibus.org",
        "password"
      ]
    },
    {
      "cells": [
        "Inigo",
        "Montoya",
        "vel.quam@Donec.org",
        "password"
      ]
    },
    {
      "cells": [
        "Elija",
        "Baker",
        "mollis.nec@quama.org",
        "password"
      ]
    },
    {
      "cells": [
        "Hakeem",
        "Wagner",
        "gravida.molestie@sagittissemper.ca",
        "password"
      ]
    },
    {
      "cells": [
        "Gareth",
        "Ruiz",
        "at.risus.Nunc@tempor.ca",
        "password"
      ]
    },
    {
      "cells": [
        "Bryar",
        "Gilbert",
        "at@tempusscelerisque.co.uk",
        "password"
      ]
    },
    {
      "cells": [
        "Charity",
        "Deleon",
        "tincidunt.tempus@egestas.com",
        "password"
      ]
    },
    {
      "cells": [
        "Cullen",
        "Stafford",
        "Proin.nisl@acarcuNunc.net",
        "password"
      ]
    },
    {
      "cells": [
        "Hadassah",
        "Fuentes",
        "et@ipsumprimisin.net",
        "password"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Vazquez",
        "tincidunt.nunc.ac@atiaculis.edu",
        "password"
      ]
    },
    {
      "cells": [
        "Martena",
        "Murray",
        "Donec.fringilla@mauris.org",
        "password"
      ]
    },
    {
      "cells": [
        "Quynn",
        "Rocha",
        "lorem@enimCurabiturmassa.net",
        "password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"nitoyey@dumoac.net\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"John\" \"Smith\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62353}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 957fd3cccc406a3096c0a31f5f0c0dd7\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"John\" \"Smith\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"lectus@sociisnatoquepenatibus.org\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Geraldine\" \"Whitehead\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62382}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 0ebae66607daa095592816572840628a\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Geraldine\" \"Whitehead\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"vel.quam@Donec.org\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Inigo\" \"Montoya\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62412}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 6b989343f7c053b7356885f96ce57139\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Inigo\" \"Montoya\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"mollis.nec@quama.org\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Elija\" \"Baker\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62444}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: fc2d249f3f2ab623bb40e112fabe592a\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Elija\" \"Baker\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"gravida.molestie@sagittissemper.ca\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Hakeem\" \"Wagner\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62473}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 6c063ba5fde555635815884e90ff544f\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Hakeem\" \"Wagner\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"at.risus.Nunc@tempor.ca\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Gareth\" \"Ruiz\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62502}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: ed844f57a6438e434ad32fba22e751c2\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Gareth\" \"Ruiz\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"at@tempusscelerisque.co.uk\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Bryar\" \"Gilbert\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62532}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: bc03899b98ec93286540a473cc2eed01\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Bryar\" \"Gilbert\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"tincidunt.tempus@egestas.com\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Charity\" \"Deleon\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62567}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 9ee6947f70141c4ffa26d520605b1344\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Charity\" \"Deleon\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"Proin.nisl@acarcuNunc.net\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Cullen\" \"Stafford\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62597}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 127737f05e9159d8ffa2d36c6b9b08b0\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Cullen\" \"Stafford\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"et@ipsumprimisin.net\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Hadassah\" \"Fuentes\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62631}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: fc63d147c0f7b30fe94d91894a8c40d9\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Hadassah\" \"Fuentes\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"tincidunt.nunc.ac@atiaculis.edu\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Sydney\" \"Vazquez\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62661}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 98937d1f003fd6d4c5266e57a0c5bf30\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Sydney\" \"Vazquez\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"Donec.fringilla@mauris.org\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Martena\" \"Murray\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62695}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 1935c2d2ff0cd52d39f91efe1a5cc0ec\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Martena\" \"Murray\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify usernames",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login using username \"lorem@enimCurabiturmassa.net\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.i_login_using_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users full name \"Quynn\" \"Rocha\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.users_full_name_should_be_displayed(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account\u003espan\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ysn-MacBook-Air.local\u0027, ip: \u00272601:647:4b01:3910:b5ae:256a:ff4:7235%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: /var/folders/fk/qstlxn250mq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62723}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: d4034e675b9597e2303100aff8753fe1\n*** Element info: {Using\u003dcss selector, value\u003d.account\u003espan}\n\tat sun.reflect.GeneratedConstructorAccessor90.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat com.prestashop.step_definitions.LoginStepDefs.users_full_name_should_be_displayed(LoginStepDefs.java:47)\n\tat ✽.users full name \"Quynn\" \"Rocha\" should be displayed(src/test/resources/com/prestashop/features/account/login_product_info_ddt.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Product details with map and outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user selects \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the system should display the product information:",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "name",
        "\u003cproduct\u003e"
      ]
    },
    {
      "cells": [
        "count",
        "1"
      ]
    },
    {
      "cells": [
        "condition",
        "New"
      ]
    },
    {
      "cells": [
        "size",
        "S"
      ]
    },
    {
      "cells": [
        "price",
        "\u003cprice\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "price",
        "product"
      ]
    },
    {
      "cells": [
        "$28.98",
        "Printed Summer Dress"
      ]
    },
    {
      "cells": [
        "$26.00",
        "Printed Dress"
      ]
    },
    {
      "cells": [
        "$16.40",
        "Printed Chiffon Dress"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Product details with map and outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"Printed Summer Dress\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display the product information:",
  "rows": [
    {
      "cells": [
        "name",
        "Printed Summer Dress"
      ]
    },
    {
      "cells": [
        "count",
        "1"
      ]
    },
    {
      "cells": [
        "condition",
        "New"
      ]
    },
    {
      "cells": [
        "size",
        "S"
      ]
    },
    {
      "cells": [
        "price",
        "$28.98"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_system_should_display_the_product_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Product details with map and outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"Printed Dress\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display the product information:",
  "rows": [
    {
      "cells": [
        "name",
        "Printed Dress"
      ]
    },
    {
      "cells": [
        "count",
        "1"
      ]
    },
    {
      "cells": [
        "condition",
        "New"
      ]
    },
    {
      "cells": [
        "size",
        "S"
      ]
    },
    {
      "cells": [
        "price",
        "$26.00"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_system_should_display_the_product_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Product details with map and outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"Printed Chiffon Dress\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display the product information:",
  "rows": [
    {
      "cells": [
        "name",
        "Printed Chiffon Dress"
      ]
    },
    {
      "cells": [
        "count",
        "1"
      ]
    },
    {
      "cells": [
        "condition",
        "New"
      ]
    },
    {
      "cells": [
        "size",
        "S"
      ]
    },
    {
      "cells": [
        "price",
        "$16.40"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductInformaitonStepDefs.the_system_should_display_the_product_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify \u003cpage\u003e title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the \u003cpage\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the title and url should be:",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Title",
        "\u003ctitle\u003e"
      ]
    },
    {
      "cells": [
        "Url",
        "\u003curl\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "page",
        "title",
        "url"
      ]
    },
    {
      "cells": [
        "home page",
        "My Store",
        "http://automationpractice.com/index.php"
      ]
    },
    {
      "cells": [
        "login page",
        "Login - My Store",
        "http://automationpractice.com/index.php?controller\u003dauthentication\u0026back\u003dmy-account"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify home page title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title and url should be:",
  "rows": [
    {
      "cells": [
        "Title",
        "My Store"
      ]
    },
    {
      "cells": [
        "Url",
        "http://automationpractice.com/index.php"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.the_title_and_url_should_be(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify login page title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title and url should be:",
  "rows": [
    {
      "cells": [
        "Title",
        "Login - My Store"
      ]
    },
    {
      "cells": [
        "Url",
        "http://automationpractice.com/index.php?controller\u003dauthentication\u0026back\u003dmy-account"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.the_title_and_url_should_be(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/prestashop/features/account/user_information.feature");
formatter.feature({
  "name": "User account information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verify account info",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I login using username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on the my personal information button",
  "keyword": "When "
});
formatter.step({
  "name": "the system should display the user\u0027s account information",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "\u003cfirstname\u003e",
        "\u003clastname\u003e",
        "\u003cusername\u003e",
        "\u003cpassword\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "John",
        "Smith",
        "nitoyey@dumoac.net",
        "password"
      ]
    },
    {
      "cells": [
        "Geraldine",
        "Whitehead",
        "lectus@sociisnatoquepenatibus.org",
        "password"
      ]
    },
    {
      "cells": [
        "Inigo",
        "Montoya",
        "vel.quam@Donec.org",
        "password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify account info",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
