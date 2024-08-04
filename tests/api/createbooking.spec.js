const { test, expect } = require('@playwright/test');
const bookingData = require('../../data/bookingData.json');

test.describe('Create Booking', () => {
  test('Create a new booking', async ({ request }) => {
    const response = await request.post('/booking', {
      data: bookingData.booking,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Log the response status and data for debugging
    const responseData = await response.json();
    console.log('Response Status:', response.status());
    console.log('Response Data:', responseData);

    expect(response.status()).toBe(200); // Ensure this is the expected status
    expect(responseData.booking.firstname).toBe(bookingData.booking.firstname);
  });
});
