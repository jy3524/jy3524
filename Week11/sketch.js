// Modified from http://embed.plnkr.co/4yaGKaA38bE9lmV0W6UR/

$(function() {
    var colors = $('#colors li');
    var start = $('#start');
    var gameState = 'waiting';
    var gameSequence = new Array();
    var level = 1;
    var flashNo;
    var clickedNo;

    var setupLightSequence = function() {
        var randomNum = Math.floor(Math.random() * 4);
        gameSequence[level-1] = randomNum;
        showLightSequence();
    };

    var lightOn = function(no) {
        colors.eq(gameSequence[no]).addClass('on');
    };
    
    var lightOff = function() {
        colors.removeClass('on');
    };

    var showLightSequence = function() {
        lightOff();

        if(flashNo < level) {
            var on = setTimeout(function() { 
                var off = setTimeout(function() { 
                    showLightSequence(); 
                    flashNo++; 
                }, 500);
                lightOn(flashNo);
            }, 500);
        }
        else {
            gameState = 'playing';
            $('body').addClass('playing');
            start.text('Your Turn');
            clearTimeout(on);
        }	
    };

    colors.click(function() {
        if(gameState === 'playing') {
            var selectedSquare = $(this).index(); 

            if(gameSequence[clickedNo] === selectedSquare) {
                if(clickedNo === level-1) {
                    gameState = 'waiting';
                    $('body').removeClass('playing');
                    start.text('Next Level ->');
                    level++;
                }
                                        
                lightOn(clickedNo);
                var off = setTimeout(function() { 
                    lightOff();
                    clickedNo++;
                }, 200);
            }
            else {
                gameState = 'waiting';
                $('body').removeClass('playing');
                start.text('GAME OVER. Press Refresh Button');
                $('body').removeClass('playing').addClass('game-over');
                gameSequence = new Array();	
            }
        }
    });

    var init = function() {
        $('#level').text('Level ' + level);
        flashNo = 0;
        clickedNo = 0;
        $(this).text('Dumb Machine Says...');
        $('body').removeClass('game-over');
        setupLightSequence();
    }
    start.click(init);
    
    $('#button').click(function() {
        window.location.reload();
    });

});
