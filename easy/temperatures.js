var n = parseInt(readline());
var temps = readline().split(' ');

function closestToGoal(temps, goal){
    if(n === 0 || n === null || n === undefined){
        return 0;
    }
    else{
        var oldDif = 0;
        var ans;
        temps.forEach(function(temp){
            var absTemp = Math.abs(temp);
            var newDif = Math.abs(absTemp - goal);
            
            if(oldDif === 0){
                oldDif = newDif;
                ans = temp;
            }
            else if(newDif < oldDif){
                oldDif = newDif;
                ans = temp;
            }
            else if(newDif === oldDif){
                if(temp === ans){
                    ans = temp;
                }
                else if(temp !== ans){
                    ans = absTemp;
                }
            }
        })
        return ans;
    }
}
print(closestToGoal(temps, 0));