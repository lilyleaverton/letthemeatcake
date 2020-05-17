
// l = the length of each "slice"
// i = the number of pieces
// s = the potential string of m&ms on each slice

function eat_cake(string){
    var l = 0;
    var s = "";

    for(var i=string.length; i>0; i--){
        if(string.length % i == 0){

            l = string.length / i;
            s = string.substring(0,l);

            for(var e=1; e<i; e++){
                if(string.substring(e*l,(e+1)*l) != s){
                    e=i;
                }else{
                    if(e==i-1){
                        return i;
                    }
                }
            }

        }
    }
    return 1;
}

function go(){
    document.getElementById("output").innerHTML += eat_cake("hihihihihihihihihi");
}
