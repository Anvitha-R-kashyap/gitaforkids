const portalData = {
  // Replace these two links first
  driveFolderUrl: "https://drive.google.com/drive/folders/1nLUU8O5mL-kbFqHX0g0RRmrkLAd4qWQq?usp=drive_link",

  // Add resources (PDF, YouTube, notes)
  resources: [
    {
      type: "PDF",
      title: "Gita-Dhyanam",
      link: "https://drive.google.com/file/d/1nsOFKEJM2n3ZTbLjvuSEYNPvRxWANey-/view?usp=drive_link"
    },

    {
      type: "PDF",
      title: "Chapter 1 - Arjuna Vishada Yoga - Arjuna’s Despair",
      link: "https://drive.google.com/file/d/12GBmzs7RUBbMG4QTkabw0kHgRDNeGWqq/view?usp=drive_link"
    },

    {
      type: "VIDEO",
      title: "Bhagavadgeeta prayer",
      link: "https://youtu.be/gkhkmpCO6ZU?si=aHpMxDysgc4ApfwI"
    },
    {
      type: "VIDEO",
      title: "Gita Mahatmyam",
      link: "https://youtu.be/ZPachY6Ddss?si=bQTic8I-4Ap5E_Aj"
    }
  ],

  // Add one item after every class
  dailyReviews: [
    {
      dayNumber: 17,
      date: "21 Apr 2026",
      title: "Chapter 5 - Karma Sanyasa yoga",
      intro: "Today we completed Chapter 5 - Karma Sanyasa yoga- Renunciation and started with Chapter 6 - Dhyana Yoga - Meditation.",
      mainPoints: [
        "Those on the path of Karma Yoga, always think am not the doer while engaged in seeing, hearing, touching, smelling, moving, sleeping, breathing, speaking, discarding, grasping and opening or closing the eyes. All these activities are happening automatically through the body, mind and intellect.",
        "Just like the lotus leaf doesn't get wet even though being in water, One who performs his duty with detachment and offers all work done to God, is not affected by sin(paapa)",
        "A learned person (Pandita) sees a Brahamana, a cow, an elephant, a dog and a dog eater as equal having the same inner soul (Atma)"      
      ],
      stories: [
        "We are responsible for our own raise or decline. We are our own friend (bandhu)if we lift ourselves by our own efforts and if we don’t, we become our own enemy (ripu). our success and failure is entirely in our hands. No one else can help or hurt us."
      ],
      homework: [
        "Read about Apartheid policy followed in South Africa.",
        "Practice Prayer shlokas"
      ]    
    },
    
    {
      dayNumber: 18,
      date: "22 Apr 2026",
      title: "Chapter 6 - Dhyana Yoga - Meditation",
      intro: "Today we continued with Chapter 6 - Dhyana Yoga - Meditation.",
      mainPoints: [
        "One should choose a clean place and sit on a proper seat comfortably, controlling the senses and with focused mind to practice Meditation (Dhyana Yoga), the process of self purification.",
        "Practicing Meditation is not possible for those who eat too much or eat too little, nor is it for those who sleep too much or stay awake for long hours.",
        "For one who eats, sleeps, enjoys entertainment moderately, maintains balance at work and in day to day activities in a disciplined way, regular Meditation practice shall destroy all sorrows."
      ],
      stories: [
        "Angulimala story on how one's mind can be a friend or enemy.",
        "Vivekananda story on how consistent practice of meditation leads to increased focus and clarity of mind."
      ],
      homework: [
        "Watch Wreck-It Ralph movie and correlate it to the Angulimala story.",
        "Practice prayer shlokas."
      ]
    },
    
  ],

  chanting: [
    {
      date: "10 Apr 2026",
      title: "Bhagavad Gita 2.47",
      shloka:
        "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
      audioUrl: "https://example.com/replace-with-swamy-chinmayananda-audio.mp3"
    }
  ]
};

const pdfResourcesGrid = document.getElementById("pdfResourcesGrid");
const youtubeResourcesGrid = document.getElementById("youtubeResourcesGrid");
const ongoingBatchesList = document.getElementById("ongoingBatchesList");
const chantingList = document.getElementById("chantingList");

function createResourceCard(item) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <span class="chip">${item.type}</span>
    <h3>${item.title}</h3>
    <a class="small-link" href="${item.link}" target="_blank" rel="noopener noreferrer">Open</a>
  `;
  return card;
}

function renderResourceGroup(grid, items, emptyMessage) {
  grid.innerHTML = "";
  if (!items.length) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${emptyMessage}</h3>
      <p>No items added yet.</p>
    `;
    grid.appendChild(card);
    return;
  }

  items.forEach((item) => {
    grid.appendChild(createResourceCard(item));
  });
}

function renderResources() {
  const pdfItems = portalData.resources.filter(
    (item) => (item.type || "").toUpperCase() === "PDF"
  );
  const youtubeItems = portalData.resources.filter((item) => {
    const resourceType = (item.type || "").toUpperCase();
    return resourceType === "VIDEO" || resourceType === "YOUTUBE";
  });
  renderResourceGroup(pdfResourcesGrid, pdfItems, "PDF resources coming soon");
  renderResourceGroup(youtubeResourcesGrid, youtubeItems, "YouTube links coming soon");
}

function renderReviews() {
  ongoingBatchesList.innerHTML = "";

  const batchesAccordion = document.createElement("article");
  batchesAccordion.className = "accordion-item";
  batchesAccordion.innerHTML = `
    <button class="accordion-btn" type="button" aria-expanded="false">
      <div>
        <h3 class="accordion-title">Ongoing Batches</h3>
        <p class="accordion-sub">Open to see active class batches.</p>
      </div>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <div class="accordion-content-inner">
        <div id="batch12Container"></div>
      </div>
    </div>
  `;
  ongoingBatchesList.appendChild(batchesAccordion);

  const batch12Container = document.getElementById("batch12Container");
  const batch12Accordion = document.createElement("article");
  batch12Accordion.className = "accordion-item";
  batch12Accordion.innerHTML = `
    <button class="accordion-btn" type="button" aria-expanded="false">
      <div>
        <h3 class="accordion-title">Batch-12</h3>
        <p class="accordion-sub">Click to view daily class reviews.</p>
      </div>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <div class="accordion-content-inner">
        <div id="reviewsList"></div>
      </div>
    </div>
  `;
  batch12Container.appendChild(batch12Accordion);

  const reviewsList = document.getElementById("reviewsList");
  portalData.dailyReviews.forEach((review, index) => {
    const dayLabel = review.dayNumber ? `Day ${review.dayNumber}` : `Day ${index + 1}`;
    const mainPointsHtml = (review.mainPoints || [])
      .map((point) => `<li>${point}</li>`)
      .join("");
    const storiesHtml = (review.stories || [])
      .map((story) => `<li>${story}</li>`)
      .join("");
    const homeworkHtml = (review.homework || [])
      .map((task) => `<li>${task}</li>`)
      .join("");
    const item = document.createElement("article");
    item.className = "accordion-item";
    item.innerHTML = `
      <button class="accordion-btn" type="button" aria-expanded="false">
        <div>
          <h3 class="accordion-title">${dayLabel} - ${review.date}</h3>
          <p class="accordion-sub">${review.title || "Daily Review"}</p>
        </div>
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <p><strong>Review:</strong> ${review.intro || "Class discussion updated."}</p>
          <p><strong>Main Points Discussed:</strong></p>
          <ol>${mainPointsHtml || "<li>Points will be added soon.</li>"}</ol>
          <p><strong>Stories:</strong></p>
          <ol>${storiesHtml || "<li>Stories will be added soon.</li>"}</ol>
          <p><strong>Homework:</strong></p>
          <ol>${homeworkHtml || "<li>Homework will be added soon.</li>"}</ol>
        </div>
      </div>
    `;
    reviewsList.appendChild(item);
  });
}

function renderChanting() {
  chantingList.innerHTML = "";
  portalData.chanting.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card chant-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="card-meta">Added: ${item.date}</p>
      <p class="chanting-shloka">${item.shloka}</p>
      <audio controls preload="none" src="${item.audioUrl}">
        Your browser does not support the audio element.
      </audio>
    `;
    chantingList.appendChild(card);
  });
}

function setupAccordion() {
  const allAccordions = document.querySelectorAll(".accordion-item");
  const getDirectChildByClass = (parent, className) =>
    Array.from(parent.children).find((child) => child.classList.contains(className));
  allAccordions.forEach((accordion) => {
    const button = getDirectChildByClass(accordion, "accordion-btn");
    const content = getDirectChildByClass(accordion, "accordion-content");
    if (!button || !content) {
      return;
    }
    content.style.maxHeight = "";
    button.addEventListener("click", () => {
      const isOpen = accordion.classList.contains("open");
      if (isOpen) {
        accordion.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      } else {
        accordion.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function setDriveLinks() {
  const driveFolderBtn = document.getElementById("driveFolderBtn");
  driveFolderBtn.href = portalData.driveFolderUrl;
}

renderResources();
renderReviews();
renderChanting();
setupAccordion();
setDriveLinks();
