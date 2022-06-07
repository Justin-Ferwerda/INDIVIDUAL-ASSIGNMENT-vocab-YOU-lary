import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// TODO: Get all cards
const getCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards/.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// TODO: Get single card
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// TODO: Create Card
const createCard = (cardObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/cards.json`, cardObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cards/${response.data.name}.json`, payload)
        .then(() => {
          getCards(cardObject.uid).then(resolve);
        });
    }).catch(reject);
});

// TODO: Delete Card
const deleteCard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cards/${firebaseKey}.json`)
    .then(() => {
      getCards(uid).then((cardsArray) => resolve(cardsArray));
    })
    .catch((error) => reject(error));
});

// TODO: Update Card
const updateCard = (cardObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/cards/${cardObject.firebaseKey}.json`, cardObject)
    .then(() => {
      getCards(cardObject.uid).then(resolve);
    })
    .catch(reject);
});

// TODO: filter Card by Language

export {
  getCards, getSingleCard, createCard, deleteCard, updateCard
};
