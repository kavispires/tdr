import { difference, flatMap, intersection, sample, sampleSize, shuffle, sortBy, uniq } from 'lodash';
import moment from 'moment';
import { DailyControleDeEstoqueEntry } from './types';

/**
 * Returns the current date in the format 'YYYY-MM-DD'.
 *
 * @returns {string} The current date in 'YYYY-MM-DD' format.
 */
export function getToday(): string {
  return moment().format('YYYY-MM-DD');
}

/**
 * Returns the date of yesterday in the format 'YYYY-MM-DD'.
 *
 * @returns {string} The date of yesterday in 'YYYY-MM-DD' format.
 */
export function getYesterday(): string {
  return moment().subtract(1, 'days').format('YYYY-MM-DD');
}

export function getNextDay(dateString: string): string {
  const inputDate = moment(dateString, 'YYYY-MM-DD');
  const nextDate = inputDate.add(1, 'days');

  return nextDate.format('YYYY-MM-DD');
}

const THRESHOLD = 500;
export function getWordsWithUniqueLetters(words: string[]): string[] {
  const selectedWords: string[] = [];
  const usedLetters: BooleanDictionary = {};
  let tries = 0;

  while (selectedWords.length < 4 && tries < THRESHOLD) {
    const word = sample(words) ?? '';
    const splitWord = word.split('');
    const isGood = splitWord.every((letter) => !usedLetters[letter]);
    if (isGood) {
      selectedWords.push(word);
      splitWord.forEach((letter) => {
        usedLetters[letter] = true;
      });
    } else {
      tries++;
    }
  }
  if (tries > THRESHOLD || selectedWords.length < 4) {
    console.count('Could not find 4 words with unique letters');
    while (selectedWords.length < 4) {
      const word = sample(words) ?? '';
      if (!selectedWords.includes(word)) {
        selectedWords.push(word);
      }
    }
  }

  if (selectedWords.length < 4) {
    console.error('Could not find 4 words with unique letters', selectedWords);
  }

  return selectedWords;
}

const usedWords: string[] = [];

const getNewWord = (words: string[], keyword: string, selectedWords: string[], index: number) => {
  const usedLetters = uniq([...flatMap(selectedWords.map((word) => word.split(''))), ...keyword.split('')]);

  const shortList = shuffle(
    words.filter((word) => word[index] === keyword[index] && !selectedWords.includes(word))
  );
  const rankedList = sortBy(shortList, (word) => {
    const matchCount = intersection(word.split(''), usedLetters).length;

    return matchCount;
  });

  return rankedList[0];
};

const shuffleLetters = (selectedWords: string[]) => {
  const letters = flatMap(selectedWords.map((word) => word.split('')));
  const preservedIndexes = [0, 5, 10, 15];
  const otherLetters = shuffle(letters.filter((_, index) => !preservedIndexes.includes(index)));

  let shuffledLetters: string[] = [];
  for (let i = 0; i < letters.length; i++) {
    if (preservedIndexes.includes(i)) {
      shuffledLetters.push(letters[i]);
    } else {
      shuffledLetters.push(otherLetters.shift() ?? '');
    }
  }

  return shuffledLetters;
};

export const generatePalavreadoGame = (words: string[], previouslyUsedWords: string[]) => {
  const shuffledWords = shuffle(difference(words, usedWords, previouslyUsedWords));

  // Select a random word from the list and call it 'keyword'
  const keyword = shuffledWords.pop() ?? '';

  const selectedWords: string[] = [];
  for (let i = 0; i < 4; i++) {
    const newWord = getNewWord(words, keyword, selectedWords, i);
    selectedWords.push(newWord);
  }

  usedWords.push(keyword, ...selectedWords);

  return {
    keyword,
    words: selectedWords,
    letters: shuffleLetters(selectedWords),
  };
};

const TOTAL_GOODS = 192;
const GOODS_SIZE = 16;
const ORDER_SIZE = 4;
const OUT_OF_STOCK_SIZE = 1;
export const generateControleDeEstoqueGame = (id: string, num: number) => {
  const [year, month, day] = id.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  const dayOfWeekIndex = date.getDay();

  const dayOfTheWeek = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ][dayOfWeekIndex];

  const entry: DailyControleDeEstoqueEntry = {
    id,
    number: num,
    type: 'controle-de-estoque',
    language: 'pt',
    title: dayOfTheWeek,
    goods: [],
    orders: [],
  };

  const goods = sampleSize(
    Array(TOTAL_GOODS)
      .fill('')
      .map((_, i) => `good-${i + 1}`),
    GOODS_SIZE + OUT_OF_STOCK_SIZE
  );
  const outOfStockGood = goods.pop();

  entry.goods = goods;
  entry.orders = sampleSize(entry.goods, ORDER_SIZE);
  // Add non-available requests
  entry.orders.push(outOfStockGood!);
  entry.orders = shuffle(entry.orders);

  return entry;
};
