/**
 * 樱花/花瓣飘落特效
 */
(function() {
    'use strict';
    var canvas = document.createElement('canvas');
    canvas.id = 'sakura';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99997;pointer-events:none';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var width, height;
    var petals = [];
    var PETAL_COUNT = 30;
    var running = false;
    var animFrame;

    var colors = ['#ffb7c5','#ffccd5','#ffe0e6','#ffc0cb','#f8c8d2','#f4a4b8'];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function randomPetal() {
        return {
            x: Math.random() * width * 1.5 - width * 0.25,
            y: Math.random() * -height,
            r: Math.random() * 6 + 2,
            speed: Math.random() * 1.5 + 0.5,
            wind: Math.random() * 1 - 0.5,
            swing: Math.random() * 0.03 + 0.01,
            swingAmp: Math.random() * 30 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.04
        };
    }

    function initPetals() {
        petals = [];
        for (var i = 0; i < PETAL_COUNT; i++) {
            petals.push(randomPetal());
        }
    }

    function drawPetal(p) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function draw() {
        if (!running) return;
        ctx.clearRect(0, 0, width, height);
        for (var i = 0; i < petals.length; i++) {
            var p = petals[i];
            drawPetal(p);
            p.y += p.speed;
            p.x += p.wind + Math.sin(p.y * p.swing) * p.swingAmp * 0.1;
            p.rotation += p.rotSpeed;
            if (p.y > height + 20) {
                p.y = -20;
                p.x = Math.random() * width * 1.5 - width * 0.25;
            }
            if (p.x > width + 50) p.x = -50;
            if (p.x < -50) p.x = width + 50;
        }
        animFrame = requestAnimationFrame(draw);
    }

    window.sakuraControl = {
        start: function() {
            if (running) return;
            running = true;
            resize();
            initPetals();
            draw();
            canvas.style.display = 'block';
        },
        stop: function() {
            running = false;
            if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = 'none';
        },
        isRunning: function() { return running; }
    };

    window.addEventListener('resize', function() {
        resize();
        initPetals();
    });

    // 初始隐藏
    canvas.style.display = 'none';
    resize();
    initPetals();
})();
