from flask import Flask, request, jsonify
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib
from flask_cors import CORS


# Loading the model
model = joblib.load('./random_forest_model.joblib')

app = Flask(__name__)
CORS(app)

@app.route('/priority', methods=['POST'])
def predict_priority():
    try:
        # Getting the input data 
        data = request.get_json(force=True)

        # Setting up the pararmeters
        features = [data["publicAffairs"], data["oldCasesByDates"], data["childrenInvolved"], data["soleEarningMembers"]]
        features = np.array(features).reshape(1, -1)

        # Make prediction using the pre-trained model
        prediction = model.predict(features)[0]

        # Map numerical prediction back to priority labels
        priority_mapping_reverse = {
            0: 'Low Priority',
            1: 'Medium Priority',
            2: 'High Priority',
            3: 'Highest Priority'
        }

        priority = priority_mapping_reverse[prediction]

        # Return the result as JSON
        response = {
            'caseNumber': data['caseNumber'],
            'priority': priority
        }
        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    

    app.run(port=5000, debug=True)


