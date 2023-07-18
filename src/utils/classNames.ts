import { twMerge } from 'tailwind-merge';

export const classNames = (
  ...classes: (string | number | boolean | undefined)[]
) => twMerge(...classes.filter(Boolean).map(String));

if (import.meta.vitest) {
  describe('classNames', () => {
    it('should merge tailwind classes without falsy values', () => {
      expect(classNames('foo', 'bar')).toBe('foo bar');
      expect(classNames(false && 'foo', true && 'bar')).toBe('bar');
      expect(
        classNames(
          'px-6 bg-red-500',
          false && 'py-8 text-pink-300',
          'p-4 bg-blue-500'
        )
      ).toBe('p-4 bg-blue-500');
    });
  });
}
