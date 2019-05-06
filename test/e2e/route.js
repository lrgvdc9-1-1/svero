module.exports = {
  '<Route> Wildcard (*) Tests': (browser) => {
    browser
      // Checking if "/" Route loads Index Component
      .url('http://localhost:5001')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Hello from Index!')

      // Checking if non-existent route still loads Index Component
      .url('http://localhost:5001/does-not-exists')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Hello from Index!')
      .end();
  },
  '<Route> Basic path (/{name}) Tests': (browser) => {
    browser
      // Checking if "/" Route loads Index Component
      .url('http://localhost:5001/about')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Hello from About!')
      .end();
  },
  '<Route> Single param (/:name) Tests': (browser) => {
    browser
      // Checking if "/" Route loads Index Component
      .url('http://localhost:5001/user/Amanda')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Hello Amanda!')
      .end();
  },
  '<Route> Multiple params (/:name/:age) Tests': (browser) => {
    browser
      // Checking if "/" Route loads Index Component
      .url('http://localhost:5001/user/Amanda/30')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Hello Amanda, 30yo!')
      .end();
  },
  '<Route> Redirect Attribute Tests': (browser) => {
    browser
      // Checking if "/" Route loads Index Component
      .url('http://localhost:5001/company')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Hello from About!')
      .assert.urlContains('/about')
      .end();
  },
  '<Route> Redirect Attribute Tests': (browser) => {
    browser
      // Checking if "/" Route loads Index Component
      .url('http://localhost:5001/admin-false')
      .pause(100)
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Hello from Index!')
      .assert.urlContains('/')

      // Checking if "/" Route loads Index Component
      .url('http://localhost:5001/admin-true')
      .waitForElementVisible('h2')
      .assert.containsText('h2', 'Admin Panel')
      .assert.urlContains('/admin-true')
      .end();
  },
};