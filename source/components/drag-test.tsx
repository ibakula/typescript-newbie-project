import React, { Component, DragEventHandler } from 'react';
import style from './drag-test.module.css';
import img from './images/test.png';

type Props = {
};

type droppedStateObject = {
  __html: string;
}

type State = {
  dragged: null | React.ReactNode | Node;
  dropped: null | droppedStateObject;
};

function isDroppedObj(dropped: null | droppedStateObject): dropped is droppedStateObject {
  return dropped != null;
}

export default class DragTestComponent extends Component<Props, State> {
  state: State = {
    dragged: null,
    dropped: null
  };

  handleDragStart: React.DragEventHandler = (e) => {
    this.setState({dragged: e.target as Node});
  }

  handleDragEnd: React.DragEventHandler = (e) => {
    e.preventDefault();
    this.setState({dragged: null});
  }

  handleDrop: React.DragEventHandler = (e) => {
    e.preventDefault();
    this.setState({dragged: null, dropped: { __html: (this.state.dragged as HTMLImageElement).outerHTML }});
  }

  handleDragOver: React.DragEventHandler = function(e) {
    e.preventDefault();
    e.nativeEvent.dataTransfer!.dropEffect = "move";
  }

  render() {
    return (
      <div>
        <div className={style.container}>
          {(!this.state.dropped) && <img src={img} onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} draggable />}
        </div>
        <div
          dangerouslySetInnerHTML={isDroppedObj(this.state?.dropped) ? this.state.dropped : ({__html: ""} as droppedStateObject)} 
          className={style.container} 
          onDragOver={this.handleDragOver} 
          onDrop={this.handleDrop} 
        />
      </div>
    );
  }
};