from flask import Flask, request, jsonify
from summarizer import summarize_text
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # add this line to enable CORS for your app


@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data['text']
    summary = summarize_text(text) # call your text summarization function here
    response = jsonify(summary=summary)
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response

if __name__ == '__main__':
    app.run(debug=True)
