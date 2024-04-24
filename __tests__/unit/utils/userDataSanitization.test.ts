import { allowedCharsRegex, removeExtraWhiteSpaces } from '../../../app/utils/formInputSanitization';

describe('allowedChars Regex', () => {
  it('should not match letters, numbers, and allowed punctuation', () => {
    const validInput = 'Linkta, Org. -  ';
    expect(validInput.match(allowedCharsRegex)).toBeNull();
  });

  it('should match special characters not included in the allowed list', () => {
    const invalidInput = 'Linkta@Org#$';
    const matches = invalidInput.match(allowedCharsRegex);
    expect(matches).toEqual(['@', '#', '$']);
  });

  it('should match unicode characters outside of the normal alphabets and numbers', () => {
    const invalidUnicode = 'Linkta✓✕〄';
    const matches = invalidUnicode.match(allowedCharsRegex);
    expect(matches).toEqual(['✓', '✕', '〄']);
  });

  it('should match correctly in strings with both allowed and disallowed characters', () => {
    const mixedInput = 'Linkta; Org^*';
    const matches = mixedInput.match(allowedCharsRegex);
    expect(matches).toEqual([';', '^', '*']);
  });

  it('should handle empty strings correctly', () => {
    const emptyString = '';
    const matches = emptyString.match(allowedCharsRegex);
    expect(matches).toBeNull();
  });

  it('should not match entirely valid strings with multiple allowed characters', () => {
    const complexValidInput = '1234, Linkta - (2024)';
    expect(complexValidInput.match(allowedCharsRegex)).toBeNull();
  });

  it('should not match when there are no disallowed characters', () => {
    const noSpecialChars = 'Linkta Org 123';
    const matches = noSpecialChars.match(allowedCharsRegex);
    expect(matches).toBeNull();
  });
});

describe('removeExtraWhiteSpaces', () => {
  it('should handle an empty input string', () => {
    const input = '';
    const expected = '';
    expect(removeExtraWhiteSpaces(input)).toBe(expected);
  });

  it('should handle an input with no whitespaces', () => {
    const input = 'hellolinkta';
    const expected = 'hellolinkta';
    expect(removeExtraWhiteSpaces(input)).toBe(expected);
  });

  it('should remove leading and trailing whitespaces', () => {
    const input = '   hello linkta   ';
    const expected = 'hello linkta';
    expect(removeExtraWhiteSpaces(input)).toBe(expected);
  });

  it('should replace multiple consecutive whitespaces with a single space', () => {
    const input = 'hello    linkta   with   extra   spaces';
    const expected = 'hello linkta with extra spaces';
    expect(removeExtraWhiteSpaces(input)).toBe(expected);
  });

  it('should handle an input with different types of whitespaces', () => {
    const input = 'hello\tlinkta\nwith\r\ntabs';
    const expected = 'hello linkta with tabs';
    expect(removeExtraWhiteSpaces(input)).toBe(expected);
  });

  it('should handle an input with only whitespaces', () => {
    const input = '    ';
    const expected = '';
    expect(removeExtraWhiteSpaces(input)).toBe(expected);
  });
});