    const horizontalLine = '\u2500';
    const verticalLine = '\u2502';
    const topLeftCorner = '\u250C';
    const topRightCorner = '\u2510';
    const bottomLeftCorner = '\u2514';
    const bottomRightCorner = '\u2518';
    const verticalTopLine = '\u252C';
    const verticalBottomLine = '\u2534';
    const cross = '\u253C';
    const leftMop = '\u251C';
    const rightMop = '\u2524'
    

console.log (topLeftCorner +
            horizontalLine.repeat(7)+
            verticalTopLine + horizontalLine.repeat(4) +
            verticalTopLine +
            horizontalLine.repeat(6) +
            topRightCorner);     

console.log (verticalLine + ' '.repeat(7) + verticalLine + ' '.repeat(4) + verticalLine + ' '.repeat(6) + verticalLine);
            
console.log (leftMop + horizontalLine.repeat(7) + cross + horizontalLine.repeat(4) +
cross + horizontalLine.repeat(6) + rightMop );

console.log (verticalLine + ' '.repeat(7) + verticalLine + ' '.repeat(4) + verticalLine + ' '.repeat(6) + verticalLine);

console.log (leftMop + horizontalLine.repeat(7) + cross + horizontalLine.repeat(4) +
cross + horizontalLine.repeat(6) + rightMop );

console.log (verticalLine + ' '.repeat(7) + verticalLine + ' '.repeat(4) + verticalLine + ' '.repeat(6) + verticalLine);

console.log (leftMop + horizontalLine.repeat(7) + cross + horizontalLine.repeat(4) +
cross + horizontalLine.repeat(6) + rightMop );

console.log (verticalLine + ' '.repeat(7) + verticalLine + ' '.repeat(4) + verticalLine + ' '.repeat(6) + verticalLine);


console.log (bottomLeftCorner +
    horizontalLine.repeat(7)+
    verticalBottomLine + horizontalLine.repeat(4) +
    verticalBottomLine +
    horizontalLine.repeat(6) +
    bottomRightCorner);           

