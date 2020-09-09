const config = require("./config")
require('jest')

test('checks config credentials are correct', () => {
    expect(config.USER).toBe('iocinemas.site@gmail.com')
    expect(config.PASS).toBe('team-io-rules')
})