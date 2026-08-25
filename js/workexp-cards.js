// Card Newest - Oldest
const cardsData = [
  {
    title: "Freelance Website Developer",
    text: "Due to my experience now with creating website applications for a number of years for personal use, and being suggested to by my brother, I have decided to take up website development as a freelancer",
    text_Bold: "My First Client: Steel Minion",
    text_Desc:
      "Steel Minions is a games studio within Sheffield who have requested me to create a new website for them.",
    text_Bold1: "How I am doing this",
    text_Desc1:
      "I started by having a group meeting with the team and discussing points of what they would like to see, this evlovded into me making prototype pages using Figma, and I am going on to developing their page using GitHub Pages.",
    date: "2026-01-01",
    status: "On going",
    button: "https://steelminions.github.io/",
  },
  {
    title: "Student Mentor",
    text: "During my time at Sheffield Hallam I took up student mentoring, starting with coffee mornings from my second year to then taking up 1-1 session with students.",
    text_Bold: "Coffee Mornings",
    text_Desc:
      "I cover one session a week on Tuesday mornings for students within the Department of Computing. These sessions give students the opportunity to talk about how their course is going, discuss topics around programming, explore work placement options, and gain insight into what working in the industry is like.",
    text_Bold1: "1‑to‑1 Mentoring",
    text_Desc1:
      "This involves meeting individually with students who request mentoring. During these sessions, I check in on how they are progressing with their studies, discuss their goals, and support them with managing deadlines. I provide guidance with programming, signpost services that can help them develop inspecific areas, and offer a space for them to talk through any challenges they are facing.",
    date: "2024-09-01",
    status: "Ended",
    button: "",
  },
  {
    title:
      '<h3 id="ict-apprentice">ICT Services Apprentice (The Chesterfield College Group)</h3>',
    text: "Completed a 6-month government-backed Kickstarter Scheme, followed by a Customer Service Level 2 apprenticeship, providing comprehensive IT and administrative support to the college.",
    text_Bold: "Technical Support & Reprographics",
    text_Desc:
      "Delivered 1st‑line technical support for staff and students, handling tickets, emails, walk‑ins, and telephone queries. Managed Reprographics services, processing requests within set timeframes and ensuring prompt delivery. Developed a job‑tracking sheet enabling pricing estimates and effective progress monitoring. Communicated with managers and external companies to keep clients informed.",
    text_Bold1: "Additional Responsibilities",
    text_Desc1:
      "Supported procurement and resource handling whilst training colleagues and work-experience students. Acted as point of contact for Russian and Ukrainian students, utilising limited Russian language skills to facilitate effective communication.",
    date: "2021-08-31",
    status: "Completed: 2023-08-31",
    button: ``,
  },
];

let newestFirst = true;

function renderCards() {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  const sortedCards = [...cardsData].sort((a, b) => {
    return newestFirst
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  sortedCards.forEach((card) => {
    const cardHTML = `
              <div class="col-sm-6 mt-2">
            <div class="card text-light" style="height:519.19px">
              <div class="card-header text-center text-light">
                <h3>${card.title}</h3>
              </div>
              <div class="card-body">
                <p class="fw-normal card-text">
                    ${card.text} <br /> <br />
                    <b>${card.text_Bold}</b> <br />
                    ${card.text_Desc} <br /> <br />
                    <b>${card.text_Bold1}</b> <br />
                    ${card.text_Desc1}
                    <br /> <br />
                   ${card.button}
                </p>
              </div>
              <div class="card-footer">${card.date} | ${card.status}</div>
            </div>
          </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

document.getElementById("sortToggle").addEventListener("click", () => {
  newestFirst = !newestFirst;
  document.getElementById("sortToggle").textContent = newestFirst
    ? "Sort: Newest"
    : "Sort: Oldest";
  renderCards();
});
renderCards();
