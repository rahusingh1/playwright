const { test, expect } = require('@playwright/test');

test.describe('Get Bookings', () => {
  test('Fetch all bookings', async ({ request }) => {
    const response = await request.get('/booking', {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Log the response status and data for debugging
    const responseData = await response.json();
    console.log('Response Status:', response.status());
    console.log('Response Data:', responseData);

    expect(response.status()).toBe(200); // Ensure this is the expected status
    expect(Array.isArray(responseData)).toBeTruthy();
  });
});
