export function init(language: string): Voikko;

export interface GrammarError {
  errorCode: number;
  startPos: number;
  errorLen: number;
  suggestions: Array<string>;
  shortDescription: string;
}

export interface Analysis {
  BASEFORM: string;
  CLASS: string;
  FSTOUTPUT: string;
  NUMBER: string;
  SIJAMUOTO: string;
  STRUCTURE: string;
  WORDBASES: string;
}

export interface Voikko {
  /**
   * Releases the resources allocated by libvoikko for this instance.
   */
  terminate: () => void;

  /**
   * Check the spelling of given word. Return true if the word is correct, false if it is incorrect.
   */
  spell: (word: string) => boolean;

  /**
   * a list of suggested spellings for given (misspelled) word. If the given word is correct, the list contains only the word itself
   */
  suggest: (word: string) => Array<string>;

  /**
   * Check the given text for grammar errors and return a list of GrammarError objects representing the errors that were found. Unlike the C based API this method accepts multiple paragraphs separated by newline characters.
   */
  grammarErrors: (text: string, language?: string) => Array<GrammarError>;

  /**
   * Analyze the morphology of given word and return the list of analysis results.
   */
  analyze: (word: string) => Array<Analysis>;

  /**
   *
   */
  tokens: () => void;
  /**
   *
   */
  sentences: () => void;
  /**
   *
   */
  getHyphenationPattern: () => void;
  /**
   *
   */
  hyphenate: () => void;
  /**
   *
   */
  setIgnoreDot: () => void;
  /**
   *
   */
  setIgnoreNumbers: () => void;
  /**
   *
   */
  setIgnoreUppercase: () => void;
  /**
   *
   */
  setAcceptFirstUppercase: () => void;
  /**
   *
   */
  setAcceptAllUppercase: () => void;
  /**
   *
   */
  setIgnoreNonwords: () => void;
  /**
   *
   */
  setAcceptExtraHyphens: () => void;
  /**
   *
   */
  setAcceptMissingHyphens: () => void;
  /**
   *
   */
  setAcceptTitlesInGc: () => void;
  /**
   *
   */
  setAcceptUnfinishedParagraphsInGc: () => void;
  /**
   *
   */
  setAcceptBulletedListsInGc: () => void;
  /**
   *
   */
  setNoUglyHyphenation: () => void;
  /**
   *
   */
  setHyphenateUnknownWords: () => void;
  /**
   *
   */
  setMinHyphenatedWordLength: () => void;
  /**
   *
   */
  setSuggestionStrategy: () => void;
}
