import React from "react";
import Board from "./Board";
import Card from "./Card";
import "./DragPuzzle.css";

const DragPuzzle = () => {
  return (
    <div className="drag-puzzle">
      <p>Drag the characters into the dotted boxes.</p>

      <div className="drag-to">
        <Board id="board-1" className="board"></Board>
        <Board id="board-2" className="board middle"></Board>
        <Board id="board-3" className="board"></Board>
      </div>
      <div className="drag-from">
        <Board id="board-4" className="board">
          <Card id="card-1" className="card" draggable="true">
            <div className="drag">
              <span>Joseph</span>
              <img
                src="https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png"
                alt=""
              />
            </div>
          </Card>
        </Board>
        <Board id="board-5" className="board middle">
          <Card id="card-2" className="card" draggable="true">
            <div className="drag">
              <span>Kevin</span>
              <img
                src="https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png"
                alt=""
              />
            </div>
          </Card>
        </Board>
        <Board id="board-6" className="board">
          <Card id="card-3" className="card" draggable="true">
            <div className="drag">
              <span>Nicholas</span>
              <img
                src="https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png"
                alt=""
              />
            </div>
          </Card>
        </Board>
      </div>
    </div>
  );
};

export default DragPuzzle;
