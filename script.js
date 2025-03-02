const lyricsElement = document.getElementById('lyrics');
const pasteTextArea = document.getElementById('paste-text');
let fontSize = 18;

function updateLyrics() {
  const pastedText = pasteTextArea.value.trim();
  if (pastedText) {
    lyricsElement.textContent = pastedText;
    alert("Lyrics updated successfully!");
  } else {
    alert("Please paste some lyrics first!");
  }
}

function zoomIn() {
  fontSize += 2;
  lyricsElement.style.fontSize = `${fontSize}px`;
}

function zoomOut() {
  fontSize -= 2;
  if (fontSize < 10) fontSize = 10;
  lyricsElement.style.fontSize = `${fontSize}px`;
}

function changeFontColor() {
  const colors = ["#333", "#007bff", "#28a745", "#dc3545", "#ffc107"];
  const currentColor = lyricsElement.style.color || "#333";
  const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length] || colors[0];
  lyricsElement.style.color = nextColor;
}

function exportContent() {
  const lyricsText = lyricsElement.textContent;
  const filename = prompt("Enter a filename (e.g., lyrics.txt):", "lyrics.txt");
  if (filename) {
    const blob = new Blob([lyricsText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}

function createEmailDraft() {
  const lyricsText = lyricsElement.textContent;
  const subject = encodeURIComponent("Check out these song lyrics!");
  const body = encodeURIComponent(`Here are the lyrics:\n\n${lyricsText}`);
  const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
}

function clearLyrics() {
  pasteTextArea.value = "";
  lyricsElement.textContent = "[Default Lyrics]\nPaste your lyrics above to replace this text.";
  resetStyles();
}

function resetStyles() {
  fontSize = 18;
  lyricsElement.style.fontSize = `${fontSize}px`;
  lyricsElement.style.color = "#333";
}
