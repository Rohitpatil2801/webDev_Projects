from flask import Flask, jsonify
from flask_cors import CORS
from students_data import students

app = Flask(__name__)
CORS(app)

@app.route('/api/students', methods=['GET'])
def get_users():
    return jsonify(students)

@app.route('/api/students/<int:student_id>', methods=['GET'])
def get_user(student_id):
    student = None
    for s in students:
        if s['id'] == student_id:
            student = s
            break
    if student:
        return jsonify(student)
    else:
        return jsonify({'error': 'student not found'}), 404
    

if __name__ == "__main__":
    app.run(debug=True)
