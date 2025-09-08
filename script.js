function showResult() {
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let resultBox = document.getElementById("result");
  let suggestion = "";

  if (q1 === "science" || q2 === "research") {
    suggestion = "🔬 You may enjoy pursuing <b>Engineering or Medical</b> fields.";
  } else if (q1 === "math" || q2 === "numbers") {
    suggestion = "📊 You might excel in <b>Data Science, Statistics, or Finance</b>.";
  } else if (q1 === "arts" || q2 === "creativity") {
    suggestion = "🎨 You could shine in <b>Design, Media, or Humanities</b>.";
  } else if (q1 === "commerce" || q2 === "business") {
    suggestion = "💼 You are suited for <b>Business, Management, or Entrepreneurship</b>.";
  }

  resultBox.innerHTML = suggestion;
  resultBox.classList.remove("hidden");
}
