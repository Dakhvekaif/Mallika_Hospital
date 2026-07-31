from locust import HttpUser, task, between

class MallikaHospitalUser(HttpUser):
    # Simulates a user waiting 1 to 3 seconds between messages
    wait_time = between(1, 3)

    @task
    def test_chatbot_speed(self):
        # Send the secret string to bypass the Gemini API
        payload = {
            "message": "LOCUST_MOCK_TEST",
            "history": []
        }
        
        # Post to your local Django server
        with self.client.post("/api/chat/", json=payload, catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Failed with status code: {response.status_code}")