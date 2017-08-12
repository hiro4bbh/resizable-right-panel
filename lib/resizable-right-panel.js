'use babel';

import ResizableRightPanelView from './resizable-right-panel-view';
import { CompositeDisposable } from 'atom';

export default {

  resizableRightPanelView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.resizableRightPanelView = new ResizableRightPanelView(state.resizableRightPanelViewState);
    atom.workspace.open(this.resizableRightPanelView, {});

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'resizable-right-panel:toggle': () => this.resizableRightPanelView.toggle(),
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
    this.resizableRightPanelView.destroy();
  },

  serialize() {
    return {
      resizableRightPanelViewState: this.resizableRightPanelView.serialize()
    };
  },

};
