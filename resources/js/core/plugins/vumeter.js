/*
 Modified for use by: Kodemint Team
 Credit: Vumeter by tomnomnom
 Open-Sourced: https://github.com/tomnomnom/vumeter
*/

export default function VuMeter(elem, config){

    if(!config) {
        config = {}
    }

    // Settings
    let max             = config.max || 100;
    let boxCount        = config.boxCount || 50;
    let boxCountRed     = config.boxCountRed || 5;
    let boxCountYellow  = config.boxCountYellow || 5;
    let boxGapFraction  = config.boxGapFraction || 0;
    let jitter          = config.jitter || 0.02;
    let widthConfig     = config.width || 'auto';

    // Colours
    let redOn     = 'rgba(255,47,30,0.9)';
    let redOff    = 'rgba(64,12,8,0.9)';
    let yellowOn  = 'rgba(255,215,5,0.9)';
    let yellowOff = 'rgba(64,53,0,0.9)';
    let greenOn   = 'rgba(53,255,30,0.9)';
    let greenOff  = 'rgba(13,64,8,0.9)';

    // Derived and starting values
    let width = elem.width;
    let height = elem.height;
    let curVal = 0;
    let parent = elem.parentElement;
    let sibling = elem.nextElementSibling || elem.previousElementSibling;

    if((widthConfig === 'auto' || widthConfig === 'parent') && parent.clientWidth) {
        width = parent.clientWidth;
        elem.width = width;
    } else if(widthConfig === 'sibling' && sibling.clientWidth) {
        width = sibling.clientWidth;
        elem.width = width;
    }

    // Gap between boxes and box width
    let boxWidth = width / (boxCount + (boxCount+1)*boxGapFraction);
    let boxGapX = boxWidth * boxGapFraction;

    let boxHeight = height - (boxGapX*2);
    let boxGapY = (height - boxHeight) / 2;

    // Canvas starting state
    let c = elem.getContext('2d');

    // Main draw loop
    let draw = function(){

        let targetVal = parseInt(elem.dataset.val, 10);

        // Gradual approach
        if (curVal <= targetVal){
            curVal += (targetVal - curVal) / 5;
        } else {
            curVal -= (curVal - targetVal) / 5;
        }

        // Apply jitter
        if (jitter > 0 && curVal > 0){
            let amount = (Math.random()*jitter*max);
            if (Math.random() > 0.5){
                amount = -amount;
            }
            curVal += amount;
        }
        if (curVal < 0) {
            curVal = 0;
        }

        c.save();
        c.beginPath();
        c.rect(0, 0, width, height);
        c.fillStyle = 'rgb(32,32,32)';
        c.fill();
        c.restore();
        drawBoxes(c, curVal);

        requestAnimationFrame(draw);
    };

    // Draw the boxes
    function drawBoxes(c, val){
        c.save();
        c.translate(boxGapY, boxGapX);
        for (let i = 0; i < boxCount; i++){
            let id = getId(i);

            c.beginPath();
            c.rect(0, 0, boxWidth, boxHeight);
            c.fillStyle = getBoxColor(id, val);
            c.fill();
            c.translate(boxWidth + boxGapX, 0);
        }
        c.restore();
    }

    // Get the color of a box given it's ID and the current value
    function getBoxColor(id, val){
        // on colours
        if (id > boxCount - boxCountRed){
            return isOn(id, val)? redOn : redOff;
        }
        if (id > boxCount - boxCountRed - boxCountYellow){
            return isOn(id, val)? yellowOn : yellowOff;
        }
        return isOn(id, val)? greenOn : greenOff;
    }

    function getId(index){
        // The ids are flipped, so zero is at the top and
        // boxCount-1 is at the bottom. The values work
        // the other way around, so align them first to
        // make things easier to think about.
        return Math.abs(index) + 1;
    }

    function isOn(id, val){
        // We need to scale the input value (0-max)
        // so that it fits into the number of boxes
        let maxOn = Math.ceil((val/max) * boxCount);
        return (id <= maxOn);
    }

    // Trigger the animation
    draw();
}