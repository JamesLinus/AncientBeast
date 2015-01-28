module battle {

    export class State extends Phaser.State {

        create() {
            new Background(this, 0,0, 'background');

            // add tiles
            for(var y = 0; y<11; y++ ){

                if(y%2) {
                    for (var x = 0; x < 15; x++) {
                        new Tile(this, 285 + 90 * x, 380 + 62 * y, 'hex');
                    }
                } else{
                    for (var x = 0; x < 16; x++) {
                        new Tile(this, 285-45 + 90 * x, 380 + 62 * y, 'hex');
                    }
                }
            }

            new Wolf(this, 0,0, 'unit');
            new PathFinder(this, {xId:15, yId:11});
        }
    }

}