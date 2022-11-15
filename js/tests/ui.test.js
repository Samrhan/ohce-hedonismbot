const UI = require('../ui').UI

describe('UI', () => {
  it('main loop', () => {
    const ui = new UI();
    jest.spyOn(ui.interactor, 'printMessage');
    jest.spyOn(ui.interactor, 'readInput').mockReturnValueOnce('hello').mockReturnValueOnce('oto').mockReturnValueOnce('quit');
    ui.mainLoop();
    expect(ui.interactor.readInput).toHaveBeenCalledTimes(3)
    expect(ui.interactor.printMessage).toHaveBeenCalledTimes(3);
    expect(ui.interactor.printMessage).toHaveBeenNthCalledWith(1, 'olleh');
    expect(ui.interactor.printMessage).toHaveBeenNthCalledWith(2, 'oto');
    expect(ui.interactor.printMessage).toHaveBeenNthCalledWith(3, 'That was a palindrome!');
  })
})

