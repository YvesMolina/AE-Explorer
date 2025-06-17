from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS
from utils import summarize_ae_data

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    df = pd.read_csv(file)
    summary = summarize_ae_data(df)
    return jsonify({
        "rows": df.to_dict(orient='records'),
        "summary": summary
    })

if __name__ == '__main__':
    app.run(debug=True)
