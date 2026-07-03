const params = new URLSearchParams(window.location.search);
// utm source
document.getElementById("utm_source").value = params.get("utm_source") || "";
// utm medium
document.getElementById("utm_medium").value = params.get("utm_medium") || "";
// utm campaign
document.getElementById("utm_campaign").value =
  params.get("utm_campaign") || "";
// utm campaign id
document.getElementById("Campaign_ID").value = params.get("campaignid") || "";

document.querySelector("form").addEventListener("submit", function () {
  const DELIM_QA = "\u241F"; // 질문-답변 구분자 (일반 텍스트에 안 나오는 특수문자)
  const DELIM_PAIR = "\u241E"; // 질문쌍-질문쌍 구분자

  const fields = document.querySelectorAll("[data-question]");
  const parts = [];
  fields.forEach(function (field) {
    const question = field.getAttribute("data-question").trim();
    const answer = (field.value || "").trim();
    if (answer !== "") {
      parts.push(question + DELIM_QA + answer);
    }
  });
  const combined = parts.join(DELIM_PAIR);
  document.getElementById("Inquiry_Contents").value = combined;
});
