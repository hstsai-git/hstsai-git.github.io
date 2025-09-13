const data = [
  { title: "黑客松", date: "2025-10-05" },
  { title: "企業講座：AI與電商", date: "2025-10-12" },
];
const ul = document.querySelector("#events");
ul.innerHTML = data.map(e => `<li>${e.date}｜${e.title}</li>`).join("");
