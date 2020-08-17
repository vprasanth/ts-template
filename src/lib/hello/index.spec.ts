import { sayHello } from './index';

test('should call console.log with passed in parameter', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  sayHello('world');
  expect(spy).toHaveBeenLastCalledWith('hello world');
  spy.mockRestore();
});