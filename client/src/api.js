
   export function getTargetId(id){
    var str = `/users/targetid?targetid=${id}`;
    
    return fetch(str).then(
        function(data){
            return data.json()
        }
    )
}


