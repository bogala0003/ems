import { NumbersOnlyDirective } from './numbers-only.directive';

describe('NumbersOnlyDirective', () => {
  it('should create an instance', (arg) => {
    const directive = new NumbersOnlyDirective(arg);
    expect(directive).toBeTruthy();
  });
});
