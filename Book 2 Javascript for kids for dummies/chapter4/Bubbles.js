// Use YUI and load required modules: 'node', 'anim', and 'anim-node-plugin'
YUI().use('node', 'anim', 'anim-node-plugin', function(Y) {

    // Select the container element with ID 'o'
    var o = Y.one('#o'),

        // Get the width and height of the container element
        oW = o.get('offsetWidth'),
        oH = o.get('offsetHeight'),

        // Maximum and minimum size for the bubbles
        max = 80,
        min = 12,

        // Number of bubbles to create
        bubbles = 200,

        // Maximum delay between bubble appearances
        timerDelay = 8000;

    // Function to create and animate a bubble
    function makeBubble() {
        // Create a new <span> element with class 'bubble'
        var b = Y.Node.create('<span class="bubble"></span>');

        // Add animation plugin to the bubble
        b.plug(Y.Plugin.NodeFX, {
            duration: 7, // Duration of the animation in seconds
            easing: Y.Easing.easeOut, // Use easing function for smooth animation
            to: {
                top: 0,        // Animate upward (top = 0)
                opacity: 0     // Fade out at the end
            },
            on: {
                // After animation ends, reanimate the bubble after 10 seconds
                end: function() {
                    Y.later(10000, this, function() {
                        animBubble(this.get('node'));
                    });
                }
            }
        });

        // Append the bubble to the container
        o.append(b);

        // Start the animation for this bubble
        animBubble(b);
    }

    // Function to animate a given bubble
    function animBubble(b) {
        // Randomly determine size of the bubble between min and max
        var v = Math.floor(Math.random() * (max - min)) + min;

        // Set the style properties for the bubble
        b.setStyles({
            height: v + 'px',             // Set height
            width: v + 'px',              // Set width
            borderRadius: v + 'px',       // Make it a circle
            top: (oH + 2) + 'px',         // Position below the container initially
            opacity: 1                    // Make it fully visible
        });

        // Randomly position the bubble horizontally within the container
        b.setStyle('left', Math.floor(Math.random() * (oW - v)));

        // Randomize animation duration (between 3 and 5 seconds)
        b.fx.set('duration', Math.floor(Math.random() * 2 + 3));

        // Set the final top position to somewhere in the top half of the container
        b.fx.set('to.top', Math.floor(Math.random() * (oH / 2)));

        // Start the animation
        b.fx.run();
    }

    // Create multiple bubbles with random delays
    for (i = 0; i < bubbles; i++) {
        // Use Y.later to delay each bubble's creation randomly up to `timerDelay` milliseconds
        Y.later(Math.random() * timerDelay, this, function() {
            makeBubble();
        });
    }

});
