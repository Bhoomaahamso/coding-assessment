import React from 'react'
import './Puzzle.css'
import DragPuzzle from './DragPuzzle'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';

const Puzzle = () => {
    return (
        <div className='puzzle'>
            <div className="sidebar">
                <a href="#"><ArrowBackIosIcon className='back'/> Back</a>
                <h3>Logic</h3>
            </div>
            <div className="riddle">
                <p>Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
                <ul>
                    <li>Joseph is not the youngest.</li>
                    <li>Kevin is the oldest.</li>
                    <li>Nicholas is not the oldest.</li>
                </ul>
                <DragPuzzle/>
                <div className="btn">
                    <Button className='explain'>Show explanation</Button>
                    <Button className='answer'>Check answer</Button>
                </div>
            </div>
            <div className="progress">
                <button>Lesson 1</button>
                <h3>WARMUP PUZZLES</h3>
            <div className="progress-bar">
                <ArrowBackIosIcon className='back'/>
                <div className="bar"><span className='bar-box selected'></span></div>
                <div className="bar"><span className='bar-box'></span></div>
                <div className="bar"><span className='bar-box'></span></div>
                <div className="bar"><span className='bar-box'></span></div>
                <div className="bar"><span className='bar-box'></span></div>
                <div className="bar"><span className='bar-box'></span></div>
                <ChevronRightIcon className='forward'/>
            </div>
            </div>
        </div>
    )
}

export default Puzzle
