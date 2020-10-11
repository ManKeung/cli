/*
 * @Description: 函数
 * @Author: Mankeung
 * @Date: 2020-08-28 09:24:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-19 14:25:59
 */

// 函数类型
function add(x: number, y:number): number {
  return x + y
}

const myAdd: (x: number, y: number) => number = function(x: number, y: number): number {return x + y}

// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) return `${firstName} ${lastName}`

  return firstName
}

// 剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
}

// this和箭头函数
// const deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     return () => {
//       const pickedCard = Math.floor(Math.random() * 52)
//       const pickedSuit = Math.floor(pickedCard / 13)

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
//     }
//   }
// }

// const cardPicker = deck.createCardPicker()
// const pickedCard = cardPicker()
// alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

const deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52)
      const pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}

const cardPicker = deck.createCardPicker()
const pickedCard = cardPicker()
alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
