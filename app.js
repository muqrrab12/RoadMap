// Progress for the 10 months, saved in this browser only (localStorage).
(function () {
  var KEY = "ai-ml-roadmap-progress-v1";
  var checks = document.querySelectorAll(".month-check");
  var fill = document.getElementById("progress-fill");
  var text = document.getElementById("progress-text");
  var resetBtn = document.getElementById("reset-btn");

  function load() {
    try {
      var saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      checks.forEach(function (box) {
        var on = saved.indexOf(box.getAttribute("data-month")) !== -1;
        box.checked = on;
        box.closest(".month").classList.toggle("done", on);
      });
    } catch (e) { /* storage unavailable: progress just won't persist */ }
    update();
  }

  function save() {
    var done = [];
    checks.forEach(function (box) {
      if (box.checked) done.push(box.getAttribute("data-month"));
    });
    try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {}
    update();
  }

  function update() {
    var total = checks.length, done = 0;
    checks.forEach(function (box) {
      if (box.checked) done++;
      box.closest(".month").classList.toggle("done", box.checked);
    });
    fill.style.width = (total ? (done / total) * 100 : 0) + "%";
    text.textContent = done + " / " + total + " months complete";
  }

  checks.forEach(function (box) { box.addEventListener("change", save); });
  resetBtn.addEventListener("click", function () {
    checks.forEach(function (box) { box.checked = false; });
    try { localStorage.removeItem(KEY); } catch (e) {}
    update();
  });

  load();
})();
