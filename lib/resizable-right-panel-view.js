'use babel';

export default class ResizableRightPanelView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tool-panel', 'resizable-right-panel');
    this.element.tabIndex = -1;
    this.list = document.createElement('ol');
    this.list.classList.add('full-menu', 'focusable-panel');
    this.element.appendChild(this.list);

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The ResizableRightPanel package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.list.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  getTitle() {
    console.log('ResizableRightPanelView.getTitle');
    return 'ResizableRightPanel';
  }

  getAllowedLocations() {
    console.log('ResizableRightPanelView.getAllowedLocations');
    return ["right"];
  }
  getPreferredLocation() {
    console.log('ResizableRightPanelView.getPreferredLocation');
    return "right";
  }

  toggle() {
    console.log('ResizableRightPanelView.toggle');
    return atom.workspace.toggle(this);
  }

}
