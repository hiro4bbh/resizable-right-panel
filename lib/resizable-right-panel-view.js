'use babel';

export default class ResizableRightPanelView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tool-panel', 'resizable-right-panel');
    this.element.tabIndex = -1;

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The ResizableRightPanel package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);

    this.visible = false;
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

  // The followings are the interface for the item in the pane.
  // See also: https://github.com/atom/atom/blob/995b0737abce58f9ec6a4cdee7503a12cbc4fa5b/src/workspace.js.
  getTitle() {
    console.log('ResizableRightPanelView.getTitle');
    return 'ResizableRightPanel';
  }
  getURI() {
    console.log('ResizableRightPanelView.getURI');
    return 'atom://resizable-right-panel';
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
    console.log('ResizableRightPanelView.toggle', atom.workspace.itemOpened(this));
    this.visible = !this.visible;
    if (this.visible) {
      this.element.style.display = null;
    } else {
      this.element.style.display = 'none';
    }
    return atom.workspace.toggle(this);
  }

  isVisible() {
    return this.visible;
  }

}
