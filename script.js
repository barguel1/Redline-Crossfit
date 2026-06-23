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
