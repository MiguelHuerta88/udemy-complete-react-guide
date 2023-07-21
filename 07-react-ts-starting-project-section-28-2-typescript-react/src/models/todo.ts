class Todo {
  id: string;
  text: string;

  /**
   * Constructor
   * @param todoText
   */
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
