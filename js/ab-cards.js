// Card Newest - Oldest
const cardsData = [
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
    status: "Ongoing",
    button: "",
  },
  {
    title: "ICT Services (The Chesterfield College Group)",
    text: "I started at Chesterfield College at the end of August 2021, working on a 'Kickstarter' Scheme from the Government to support people entering the workforce. This was a six-month programme designed to facilitate people into employment. I was fortunate to secure work at the college, which proved transformative for my career. After six months, I was offered a 'Customer Service Level 2' apprenticeship, enabling me to continue in the same role for an extended period whilst receiving formal training.",
    text_Bold: "Start",
    text_Desc:
      "Provided 1st‑line technical support to staff and students, handling tickets, emails, walk‑ins, and telephone enquiries. Managed Reprographics services, processing requests within set timeframes whilst collaborating with staff. Developed a job‑tracking sheet to enable pricing estimates and monitor progress effectively.",
    text_Bold1: "End",
    text_Desc1:
      "Supported procurement and resource handling whilst training colleagues and work-experience students. Acted as point of contact for Russian and Ukrainian students, utilising limited Russian language skills to facilitate effective communication.",
    date: "2024-09-01",
    status: "Ongoing",
    button: "<a href='experience.html#ict-apprentice' class='btn btn-primary'>Read More</a>",
  },
];

// Sorting state
let newestFirst = true;

// Rendering cards function
function renderCards() {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";
  const sortedCards = [...cardsData].sort((a, b) => {
    return newestFirst
      ? new Date(b.date) - new Date(a.date) // Newest
      : new Date(a.date) - new Date(b.date); // Oldest
  });

  // Create cards
  sortedCards.forEach((card) => {
    const cardHTML = `
      <div class="col-sm-6 mt-2">
          <div class="card text-light">
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
              <div class="card-footer"> ${card.date} | ${card.status}</div>
            </div>
          </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}
// Toggle sort order
document.getElementById("sortToggle").addEventListener("click", () => {
  newestFirst = !newestFirst;
  document.getElementById("sortToggle").textContent = newestFirst
    ? "Sort: Newest"
    : "Sort: Oldest";
  renderCards();
});
renderCards();
