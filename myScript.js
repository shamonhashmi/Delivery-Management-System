let NO_PARENT = -1;

function dijkstra ( adjMatrix , startVertex , Case , house)
{
    let Total_Vertices = adjMatrix[0].length;
   
        // Shortest_Distances_Array[i] will hold the
        // shortest distance from src to i
        let Shortest_Distances_Array = new Array(Total_Vertices);
        let Visited_Vertices = new Array(Total_Vertices);
   
        // Initialize all distances as
        // INFINITE and Visited_Vertices[] as false
        for ( let vertexIndex = 0 ;   vertexIndex < Total_Vertices  ;  vertexIndex++ )
        {
            Shortest_Distances_Array[vertexIndex] = Number.MAX_VALUE;
            Visited_Vertices[vertexIndex] = false;
        }
           
        // Distance of source vertex from
        // itself is always 0
        Shortest_Distances_Array[startVertex] = 0;
   
        // Parent array to store shortest
        // path tree
        let Parent_Array = new Array(Total_Vertices);
   
        // The starting vertex does not
        // have a parent
        Parent_Array[startVertex] = NO_PARENT;
   
        // Find shortest path for all
        // vertices
        for (let i = 1; i < Total_Vertices; i++)
        {
   
            // Pick the minimum distance vertex
            // from the set of vertices not yet
            // processed. nearestVertex is
            // always equal to startNode in
            // first iteration.
            let nearestVertex = -1;
            let shortestDistance = Number.MAX_VALUE;

            for ( let vertexIndex = 0;  vertexIndex < Total_Vertices ;  vertexIndex++ )
            {
                if (!Visited_Vertices[vertexIndex] && Shortest_Distances_Array[vertexIndex] <  shortestDistance)
                {
                    nearestVertex = vertexIndex;
                    shortestDistance = Shortest_Distances_Array[vertexIndex];
                }
            }
   
            // Mark the picked vertex as
            // processed
            Visited_Vertices[nearestVertex] = true;
   
            // Update dist value of the
            // adjacent vertices of the
            // picked vertex.
            for (let vertexIndex = 0; vertexIndex < Total_Vertices;  vertexIndex++)
            {
                let edgeDistance = adjMatrix[nearestVertex][vertexIndex];
       
                if (edgeDistance > 0 && ((shortestDistance + edgeDistance) < Shortest_Distances_Array[vertexIndex]))
                {
                    Parent_Array[vertexIndex] = nearestVertex;
                    Shortest_Distances_Array[vertexIndex] = shortestDistance + edgeDistance;
                }
            }

        }
        
        if(Case==1){
            
            return Shortest_Distances_Array[8];

        }else if(Case==2){

            printPath( 8 , Parent_Array , Case );

        }else if( Case==3){

            printPath( house , Parent_Array , Case , house);

        }


}
 

function printPath( currentVertex , Parent_Array , Case , flag)
{
    
     // Base case : Source node has
        // been processed
        if (currentVertex == NO_PARENT)
        {   

            return ;
        }

        printPath(Parent_Array[currentVertex], Parent_Array, Case);

        if(Case==2){

            if(currentVertex!=8){

                document.getElementById("path_boys").innerHTML = document.getElementById("path_boys").innerHTML + currentVertex + " <span>&#8594; </span>" ;

            }else{

                document.getElementById("path_boys").innerHTML = document.getElementById("path_boys").innerHTML + "R";

            }

        }
        else if(Case==3){

            if(currentVertex!=flag){
                if(currentVertex==8){
                    document.getElementById("delivery_path").innerHTML = document.getElementById("delivery_path").innerHTML + "R" + "<span> &#8594; </span>" ;
                }else{

                document.getElementById("delivery_path").innerHTML = document.getElementById("delivery_path").innerHTML + currentVertex + "<span> &#8594; </span>" ;

                }

            }else{

                document.getElementById("delivery_path").innerHTML = document.getElementById("delivery_path").innerHTML + flag;

            }
        }
    

}


 
            // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
let graph = [ [0, 4, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0],       //0
              [4, 0, 8, 0, 0, 0, 0, 11, 0, 2, 0, 0, 0, 0, 0, 4, 0, 0, 0],      //1
              [0, 8, 0, 7, 0, 4, 0, 0, 2, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0],       //2
              [0, 0, 7, 0, 9, 14, 0, 0, 0, 0, 9, 0, 0, 5, 0, 0, 0, 0, 0],      //3
              [0, 0, 0, 9, 0, 10, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 4, 0, 0],      //4
              [0, 0, 4, 14, 10, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],     //5
              [0, 0, 0, 0, 0, 2, 0, 1, 6, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0],       //6
              [8, 11, 0, 0, 0, 0, 1, 0, 7, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],      //7
              [0, 0, 2, 0, 0, 0, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],       //8
              [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0],       //9
              [0, 0, 7, 9, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],       //10
              [0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 9, 0, 0, 5, 0],       //11
              [0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],       //12
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 3, 0, 0],       //13
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 6, 0, 0, 0, 0, 0, 0],       //14
              [0, 4, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],       //15
              [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3],       //16
              [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],       //17
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 3, 0, 0]        //18
            ];


function submit_function() {

    let a= document.getElementById("house").value;
    let b= document.getElementById("boy_1").value;
    let c= document.getElementById("boy_2").value;

    if (a == "" || b == "" || c == "") {
        alert("Please Fill All Required Field");
    }else{

        var a1=parseInt(a);
        var b1=parseInt(b);
        var c1=parseInt(c);

        var selected;

        if(b=="R"){ 
            selected=8;
            document.getElementById("boy1_boy2").innerHTML="Boy-1 will Deliver";

        }else if(c=="R"){
            selected=8;
            document.getElementById("boy1_boy2").innerHTML="Boy-2 will Deliver";

        }else{

            var b1=parseInt(b);
            var c1=parseInt(c);

            var dist1=dijkstra(graph, b1 , 1);
            var dist2=dijkstra(graph, c1 , 1);
            
            if(dist1>dist2){
                selected=c1;
                document.getElementById("boy1_boy2").innerHTML="Boy-2 will Deliver";
            }else{
                selected=b1;
                document.getElementById("boy1_boy2").innerHTML="Boy-1 will Deliver";
            }

        }

        document.getElementById("boy_distance").innerHTML="Distance to Restaurant =  " + dijkstra(graph, selected , 1 , 0) + " km";

        document.getElementById("path_boys").innerHTML= "Path to Restaurant = ";
        dijkstra(graph, selected , 2 , 0) ;

        document.getElementById("delivery_distance").innerHTML="Distance to House =  " + dijkstra(graph, a1 , 1) + " km";

        document.getElementById("delivery_path").innerHTML= "Path to House = ";
        dijkstra(graph, 8 , 3 , a1) ;

    }

}

function clear_function(){
    document.getElementById("house").value="";
    document.getElementById("boy_1").value="";
    document.getElementById("boy_2").value="";

    document.getElementById("boy1_boy2").innerHTML="";
    document.getElementById("boy_distance").innerHTML="Please Fill All Required Field";
    document.getElementById("path_boys").innerHTML="";
    document.getElementById("delivery_distance").innerHTML="";
    document.getElementById("delivery_path").innerHTML="";

    mystring="";
    console.clear();
}