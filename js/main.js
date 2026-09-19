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

  // Pre-select an activity from ?interest=slug
  var params = new URLSearchParams(window.location.search);
  var wanted = params.get("interest");
  var select = document.getElementById("f-interest");
  if (wanted && select) {
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value === wanted) { select.selectedIndex = i; break; }
    }
  }

  // No backend: build a mailto: link so the visitor can review before sending.
  // TODO: real contact details — swap for a real address (or a form service) when available.
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("f-name").value.trim();
    var interest = select.options[select.selectedIndex].text;
    var msg = document.getElementById("f-msg").value.trim();
    var subject = "Interest in Yorkshire Fell & Field" + (select.value ? ": " + interest : "");
    var body = "Hello,\n\nI\u2019d like to register my interest.\n\n" +
      "Name: " + name + "\nInterested in: " + interest + "\n\n" + (msg ? msg + "\n\n" : "") + "Thanks";
    window.location.href = "mailto:hello@yorkshirefellandfield.co.uk?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
