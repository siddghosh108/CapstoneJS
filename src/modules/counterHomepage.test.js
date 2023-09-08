import counterHomepage from './counterHomepage.js';

describe('counterHomepage', () => {
  test('should count the number of items on the homepage', () => {
    const data = [
      { itemID: 58695, comment: 'good' },
      { itemID: 56675, comment: 'good' },
      { itemID: 57695, comment: 'good' },
    ];
    const result = counterHomepage(data);
    expect(result).toBe(3);
  });

  test('should return 0 when there are no items on the homepage', () => {
    // Arrange: Provide an empty data array
    const data = [];
    // Act
    const result = counterHomepage(data);
    // Assert
    expect(result).toBe(0);
  });
});
