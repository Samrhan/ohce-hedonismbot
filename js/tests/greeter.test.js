const Greeter = require('../greeter').Greeter

describe('Greeter', () => {
  it('should say "good night" at midnight', () => {
    const greeter = new Greeter()
    jest.spyOn(greeter.clock, 'currentHour').mockReturnValue(0)
    expect(greeter.greet()).toBe('Good night')
  })

  it.each(Array.from(Array(24).keys()))('should never return undefined', (h) => {
    const greeter = new Greeter()
    jest.spyOn(greeter.clock, 'currentHour').mockReturnValue(h)
    expect(greeter.greet()).not.toBeUndefined()
  })
})

