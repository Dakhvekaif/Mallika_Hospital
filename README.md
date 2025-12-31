# 🏥 Mallika Hospital Backend API

This is the Django backend for Mallika Hospital. It exposes a RESTful API to manage departments, doctors, and patient appointments. This guide outlines all available endpoints that the frontend can consume.

---

## 🔌 Base URL

- **Local:** `http://localhost:8000/api/`
- **Production:** `https://mallika-hospital.onrender.com/api/`

---

## 📚 API Endpoints

### 📁 Departments

| Method | Endpoint                 | Description                          |
|--------|--------------------------|--------------------------------------|
| GET    | `/departments/`          | Returns a list of all departments.  |
| GET    | `/department-count/`     | Returns total number of departments.|

---

### 🧑‍⚕️ Doctors

| Method | Endpoint                       | Description                                      |
|--------|--------------------------------|--------------------------------------------------|
| GET    | `/doctors/`                    | Lists all **active** doctors.                   |
| GET    | `/doctors/?department=<id>`    | Filters doctors by department ID.              |
| GET    | `/total-doctors/`              | Returns total number of doctors.               |

---

### 📅 Appointments

| Method | Endpoint            | Description                                              |
|--------|---------------------|----------------------------------------------------------|
| POST   | `/appointments/`     | Creates a new appointment. Requires payload (see below).|
| GET    | `/appointments-list/`| Lists all stored appointments (for admin/testing).       |
| GET    | `/total-appointments/` | Returns the total count of appointments.              |

#### ✅ Appointment POST Payload Example

```json
{
  "patient_name": "John Doe",
  "phone": "9876543210",
  "department": 2,
  "doctor": 1,
  "date": "2025-12-31",
  "time": "14:00",
  "reason": "Consultation for back pain"
}


