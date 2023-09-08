import counterComment from './counterComments.js';

describe('counterComment.js', () => {
  it('should count the number of comments on the page', () => {
    // Arrange
    document.body.innerHTML = '<div class="list-items">hello</div><div class="list-items">hello</div><div class="list-items">hello</div>';
    // Act
    const list = document.querySelectorAll('.list-items');
    const result = counterComment(list);
    // Assert
    expect(result).toBe(3);
  });

  it('should return 0 when there are no comments on the page', () => {
    // Arrange
    document.body.innerHTML = ''; // Empty the body
    // Act
    const list = document.querySelectorAll('.list-items');
    const result = counterComment(list);
    // Assert
    expect(result).toBe(0);
  });
});
