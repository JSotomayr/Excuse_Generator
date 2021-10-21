/* eslint-disable */
import "/workspace/vanillajs-hello/src/style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["A", "The", "My"];
  let subject = ["brother", "dog", "Roomba", "psychologist", "mother"];
  let action = ["took my", "yelled at my", "shot my", "threw my", "puked my"];
  let possession = ["homework", "sister", "backpack", "food", "motivation"];
  let where = [
    "on the street",
    "to the garbage",
    "at school",
    "in my house",
    "in the restaurant"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
