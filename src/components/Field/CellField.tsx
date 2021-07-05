import React, { FC } from "react";
import Cell from "./Cell";

const row = (y:number, xCount: number, clickMe: (x: number, y: number) => void) => {
  let x: number = 0;
  const mas_row = [];
  while (x < xCount) { 
    mas_row.push(<Cell width={40} height={40} key={`${x}_${y}`} x={x} y={y} clickMe={clickMe}>{`${x}_${y}`}</Cell>);
    x++; 
  }
  return mas_row;
}

const CellField: FC<CellFieldProps> = ({ xCount, yCount, clickMe }) => {
  const filed = []
  let y: number = 0;
  while(y < yCount) {
    filed.push(row(y, xCount, clickMe));
    filed.push(<br key={`${y}`}/>);
    y++;
  }
  return (
  <> 
    {filed}
  </>
  )
};

export default CellField;