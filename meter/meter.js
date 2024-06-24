document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('meterCanvas');
    const context = canvas.getContext('2d');

    let angleDegrees = 90; 
    const velocity = 9; 
    const maxVelocity = 10; 

    const meterRadius = 150;

    const arrowLength = (velocity / maxVelocity) * meterRadius;

    const angleRadians = (angleDegrees - 90) * (Math.PI / 180);

    const arrowX = canvas.width / 2 + Math.cos(angleRadians) * arrowLength;
    const arrowY = canvas.height / 2 + Math.sin(angleRadians) * arrowLength;

    function drawMeter() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.arc(
            canvas.width / 2,
            canvas.height / 2,
            meterRadius,
            0,
            2 * Math.PI
        );
        context.lineWidth = 4;
        context.strokeStyle = '#d35400';
        context.stroke();

        const gradient = context.createLinearGradient(
            canvas.width / 2,
            canvas.height / 2,
            arrowX,
            arrowY
        );
        gradient.addColorStop(0, 'rgba(255, 165, 0, 1)');
        gradient.addColorStop(1, 'rgba(255, 215, 0, 1)');

        // Draw the arrow sector
        context.beginPath();
        context.moveTo(canvas.width / 2, canvas.height / 2);
        context.arc(
            canvas.width / 2,
            canvas.height / 2,
            arrowLength,
            (angleDegrees - 10) * (Math.PI / 180),
            (angleDegrees + 10) * (Math.PI / 180),
            false
        );
        context.closePath();
        context.fillStyle = gradient;
        context.fill();
    }

    drawMeter();

    canvas.addEventListener('mousemove', handleHover);
    canvas.addEventListener('mouseout', handleHover);

    function handleHover(event) {
        drawMeter();

        if (event.type === 'mousemove') {
            context.shadowBlur = 20;
            context.shadowColor = 'orange';
        } else if (event.type === 'mouseout') {
            context.shadowBlur = 0;
        }
    }
});
