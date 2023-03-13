const form = document.getElementById('summarize-form');
const textInput = document.getElementById('text-input');
const summaryOutput = document.getElementById('summary-output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = textInput.value.trim();
  if (text === '') {
    alert('Please enter text to summarize');
    return;
  }
  summarizeText(text);
});

async function summarizeText(text) {
  try {
    const response = await fetch('http://127.0.0.1:5000/summarize', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    summaryOutput.innerText = data.summary;
  } catch (error) {
    console.error('Error:', error);
  }
}
