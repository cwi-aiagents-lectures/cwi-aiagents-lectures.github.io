(function () {
  // Theme toggle: remembers an explicit choice, otherwise follows the OS.
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Mark sessions as past / next based on today's date.
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  function parse(s) {
    var p = s.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  var sessions = document.querySelectorAll(".session[data-session-date]");
  var nextFound = false;
  sessions.forEach(function (el) {
    var d = parse(el.getAttribute("data-session-date"));
    var pill = el.querySelector("[data-status]");
    if (d < today) {
      el.classList.add("is-past");
      if (pill) { pill.textContent = "Done"; pill.classList.add("done"); pill.hidden = false; }
    } else if (!nextFound) {
      nextFound = true;
      el.classList.add("is-next");
      if (pill) { pill.textContent = d.getTime() === today.getTime() ? "Today" : "Up next"; pill.hidden = false; }
      var banner = document.querySelector("[data-next-up]");
      var link = el.querySelector(".session-card");
      var title = el.querySelector("h3");
      if (banner && link && title) {
        var label = d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
        banner.innerHTML = "Next session: <a></a> · " + label;
        var a = banner.querySelector("a");
        a.href = link.getAttribute("href");
        a.textContent = title.textContent;
        banner.hidden = false;
      }
    }
  });

  // On a single lecture page, show whether it is done or upcoming.
  var lecture = document.querySelector(".lecture[data-session-date]");
  if (lecture) {
    var ld = parse(lecture.getAttribute("data-session-date"));
    var lp = lecture.querySelector("[data-status]");
    if (lp) {
      if (ld < today) { lp.textContent = "This session has taken place"; lp.classList.add("done"); }
      else if (ld.getTime() === today.getTime()) { lp.textContent = "Today"; }
      else { lp.textContent = "Upcoming"; }
      lp.hidden = false;
    }
  }
})();
