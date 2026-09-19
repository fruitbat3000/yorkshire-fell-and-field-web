(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }

  var form = document.getElementById("enquiry-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var send = document.getElementById("f-send");
  var select = document.getElementById("f-interest");

  function show(kind, text) {
    status.hidden = false;
    status.className = "form-msg " + kind;
    status.textContent = text;
    status.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Pre-select an activity from ?interest=slug; show thanks after a no-JS submit (?sent=1)
  var params = new URLSearchParams(window.location.search);
  var wanted = params.get("interest");
  if (wanted && select) {
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value === wanted) { select.selectedIndex = i; break; }
    }
  }
  if (params.get("sent") === "1") {
    show("ok", "Thank you \u2014 your message has gone. We\u2019ll be in touch by email.");
  }

  // Send with fetch so the visitor stays on the page; without JS the form posts normally.
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var data = new FormData(form);
    data.delete("redirect");
    data.set("interest", select.value ? select.options[select.selectedIndex].text : "Not specified");
    send.disabled = true; send.textContent = "Sending\u2026";
    fetch(form.action, { method: "POST", body: data, headers: { "Accept": "application/json" } })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.success, j: j }; }); })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          show("ok", "Thank you \u2014 your message has gone. We\u2019ll be in touch by email.");
        } else {
          show("err", "Sorry, that didn\u2019t go through. Please try again in a little while.");
        }
      })
      .catch(function () { show("err", "Sorry, that didn\u2019t go through. Please check your connection and try again."); })
      .then(function () { send.disabled = false; send.textContent = "Send enquiry"; });
  });
})();
