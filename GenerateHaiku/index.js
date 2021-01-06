module.exports = async function (context, req) {
    context.log('Generating Haiku...');
    let rndNo = function(min, max) {
        let rnd = Math.floor(Math.random() * (max - min + 1) + min);
        return rnd;
      }
    let choose_from = function(array){
        let chosen = '';
        let rnd = 0;
        do
        {
            chosen = '';
            rnd = rndNo(0,array.length);
            chosen += array[rnd];
        }
        while (chosen == '' | chosen == null | chosen == 'undefined')
        if(chosen == null | chosen == 'undefined'){
            let foo = 'bar';
        }
        return chosen;
    };
    let gen_line = function(adj01,adj02,adj03,noun01,noun02,noun03,syllables){
        let line = '';
        let longest = rndNo(2,3);
        let adj = [];
        let noun = [];
        let isAdj = true;
        while(syllables > 0){
            let syl = rndNo(1,3);
            if(longest>0){
                syl = longest;
                longest = 0;
            }
            if((syllables-syl) < 0){ continue; }
            switch(syl){
                case 1:
                    adj = adj01;
                    noun = noun01;
                    break;
                case 2:
                    adj = adj02;
                    noun = noun02;
                    break;
                case 3:
                    adj = adj03;
                    noun = noun03;
                    break;
            }
            let list = [];
            if(isAdj){
                list = adj;
            }
            else{
                list = noun;
            }
            let chosen = choose_from(list);
            if(line.includes(chosen)){
                continue;
            }
            line += ` ${chosen}`;            
            isAdj = !isAdj;
            syllables -= syl;
        }
        return line.trim();
    };

    let springadj01 = ['blue','bright','lush','soft','light','sweet','green','pure'];
    let springadj02 = ['blossom','alive','sunny','happy','grassy','verdant','warming','teeming','sprouting'];
    let springadj03 = ['refreshing','colourful','scampering','blossoming','bucolic','heavenly'];
    let springnoun01 = ['birth','birds','mud','spade','nest','rain','grass','seed'];
    let springnoun02 = ['tulip','duckling','insects','robin','sapling','valley','woodland','flower','petals'];
    let springnoun03 = ['gardening','renewal','transition','lemonade','thunderstorm','begining'];
    let summeradj01 = ['sun','hot','sweet','tan','bright','free','fresh','clear','ripe','light'];    
    let summeradj02 = ['ablaze','growing','fragrant','stifling','sweaty','sizling','lazy','verdant'];
    let summeradj03 = ['natural','heavenly','blistering','delightful','allergic','oppressive','refreshing'];
    let summernoun01 = ['sun','pool','grass','heat','boat','sand','tent','daisy','lake','trail'];    
    let summernoun02 = ['leisure','desert','cornfields','seaside','tennis','campfire','garden','freedom'];
    let summernoun03 = ['parasol','paradise','barbecue','vacation','midsummer','sunflower','happiness'];
    let autumnadj01 = ['brisk','crisp','gold','gray','red','ripe','raked'];
    let autumnadj02 = ['gusty','gusty','orange','vivid','windy','foggy','fallen','chilly'];
    let autumnadj03 = ['comfortable','foraging','overgrown','wondrous','rust-coloured','enchanting'];
    let autumnnoun01 = ['moon','corn','hay','cough','leaves','rain','spice','wind'];
    let autumnnoun02 = ['acorn','harvest','bonfire','cider','orchards','bushel','blanket','spider'];
    let autumnnoun03 = ['cranberry','festival','traditions'];
    let winteradj01 = ['cold','clear','bare','long','gray','harsh','dark','wet','white','bleak'];
    let winteradj02 = ['chilly','biting','crunchy','jingling','nippy','toasty','windy','severe'];
    let winteradj03 = ['crystalline','depressing','blustery','enchanted','overcast','powdery'];
    let winternoun01 = ['frost','mug','pine','gale','glare','stew','boots','hat','coat','ice','sled'];
    let winternoun02 = ['pinecone','heater','snowfall','blanket','skiing','snowman','frostbite','chimney'];
    let winternoun03 = ['hazardous','poinsettia','vacation','avalanche','chocolate','pyjamas'];

    let seasons = ['spring','summer','autumn','winter'];
    let chosenSeason = choose_from(seasons);
    let adj01 = [];
    let adj02 = [];
    let adj03 = [];
    let noun01 = [];
    let noun02 = [];
    let noun03 = [];

    switch(chosenSeason){
        case 'spring':
            adj01 = springadj01;
            adj02 = springadj02;
            adj03 = springadj03;
            noun01 = springnoun01;
            noun02 = springnoun02;
            noun03 = springnoun03;
            break;
        case 'summer':
            adj01 = summeradj01;
            adj02 = summeradj02;
            adj03 = summeradj03;
            noun01 = summernoun01;
            noun02 = summernoun02;
            noun03 = summernoun03;
            break;
        case 'autumn':
            adj01 = autumnadj01;
            adj02 = autumnadj02;
            adj03 = autumnadj03;
            noun01 = autumnnoun01;
            noun02 = autumnnoun02;
            noun03 = autumnnoun03;
            break;
        case 'winter':
            adj01 = winteradj01;
            adj02 = winteradj02;
            adj03 = winteradj03;
            noun01 = winternoun01;
            noun02 = winternoun02;
            noun03 = winternoun03;       
            break;
    }

    let haiku = `${gen_line(adj01,adj02,adj03,noun01,noun02,noun03,5)}\n${gen_line(adj01,adj02,adj03,noun01,noun02,noun03,7)}\n${gen_line(adj01,adj02,adj03,noun01,noun02,noun03,5)}\n\n#haiku #twitterbot #bot #ai`;

    context.res = {
        body: haiku
    };
};