function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }

function handleSubmit() {
  const name    = document.getElementById("name")?.value.trim();
  const email   = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all required fields.");
    return;
  }

  alert("Thanks, " + name + "! We'll be in touch soon.");
}


const schedule = {
      mon: [
        { title: "CrossFit Class", slots: ["6:00 AM", "12:00 PM", "5:30 PM"] },
        { title: "Open Gym", slots: ["9:00 AM – 11:00 AM"] },
        { title: "Masters / Functional Fit", slots: ["11:30 AM"] }
      ],
      tue: [
        { title: "CrossFit Class", slots: ["6:00 AM", "12:00 PM", "5:30 PM", "7:00 PM"] },
        { title: "Strength Training", slots: ["9:00 AM"] },
        { title: "HIIT & Conditioning", slots: ["6:30 PM"] }
      ],
      wed: [
        { title: "CrossFit Class", slots: ["6:00 AM", "12:00 PM", "5:30 PM"] },
        { title: "Open Gym", slots: ["9:00 AM – 11:00 AM"] },
        { title: "Mobility & Recovery", slots: ["7:00 PM"] }
      ],
      thu: [
        { title: "CrossFit Class", slots: ["6:00 AM", "12:00 PM", "5:30 PM", "7:00 PM"] },
        { title: "Strength Training", slots: ["9:00 AM"] },
        { title: "Masters / Functional Fit", slots: ["11:30 AM"] }
      ],
      fri: [
        { title: "CrossFit Class", slots: ["6:00 AM", "12:00 PM", "5:30 PM"] },
        { title: "Open Gym", slots: ["9:00 AM – 11:00 AM"] },
        { title: "HIIT & Conditioning", slots: ["6:30 PM"] }
      ],
      sat: [
        { title: "CrossFit Class", slots: ["8:00 AM", "10:00 AM"] },
        { title: "Open Gym", slots: ["11:00 AM – 1:00 PM"] },
        { title: "Mobility & Recovery", slots: ["12:00 PM"] }
      ],
      sun: [
        { title: "Open Gym", slots: ["8:00 AM – 11:00 AM"] },
        { title: "Mobility & Recovery", slots: ["11:00 AM"] }
      ]
};
const listEl = document.getElementById("schedule-list");
    const tabsEl = document.getElementById("day-tabs");

    function renderDay(day) {
      const groups = schedule[day];
      if (!groups || groups.length === 0) {
        listEl.innerHTML = '<p class="schedule-empty">No sessions scheduled. Check back soon.</p>';
        return;
      }

      listEl.innerHTML = groups.map(function (group) {
        const slots = group.slots.map(function (time) {
          return '<div class="schedule-slot"><span class="slot-time">' + time + '</span></div>';
        }).join("");
        return '<div class="schedule-group"><h2>' + group.title + '</h2>' + slots + '</div>';
      }).join("");
    }

    tabsEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".day-tab");
      if (!btn) return;
      tabsEl.querySelectorAll(".day-tab").forEach(function (t) {
        t.classList.remove("active");
      });
      btn.classList.add("active");
      renderDay(btn.dataset.day);
    });

    
    renderDay("mon");