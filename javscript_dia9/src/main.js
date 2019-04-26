//console.log(document.getElementsByTagName("div")[0]);
//console.log(document.getElementsByTagName("ul")[0]);
//console.log(document.getElementsByClassName("even"));
//console.log(document.getElementsByTagName("li")[3]);



console.log(document.querySelectorAll("div ul li.even"));
console.log(document.querySelectorAll("div ul li")[3]);
console.log(document.querySelectorAll("div ul")[0].lastElementChild);

var cadena="";
var separador= 4;
for (let i = 0; i < 300; i++) {
    var node = document.createElement("span");
    node.className="fractal";
    node.style.top=(i*separador)+"px";
    node.style.left=(i*separador)+"px";
    node.style.transform= "rotate("+(i*3)+"deg)";
    node.style.width=(50+i)+"px";
    node.style.height=(50+i)+"px";
    node.style.opacity=1;
    node.style.borderColor="hsla(0, 100%, 0%, "+(i*.0009)+")";
    var texto = document.createTextNode("Texto: "+i);
    var obj = node.appendChild(texto);
    document.getElementsByTagName("body")[0].appendChild(node);
    //setTimeout(function(){obj.style.opacity=1;console.log(node); }, 100);

}


for (var item of  document.getElementsByTagName("ul")) {
    item.style.border="solid red 1px";
}

/*document.querySelectorAll("li").forEach(function (item) {
    item.style.border="solid peru 1px";
    item.style.margin="20px";
    item.style.padding="10px";
    item.style.listStyle="none"; 
});*/

for (var item of  document.getElementsByTagName("li")) {
    item.style.border="solid peru 1px";
    item.style.margin="20px";
    item.style.padding="10px";
    item.style.listStyle="none"; 
}


for(var i=0; i<document.getElementsByTagName("ul").length; i++){
    for(var ii=0; ii < document.getElementsByTagName("ul")[i].getElementsByTagName("li").length;ii++){
        document.getElementsByTagName("ul")[i].getElementsByTagName("li")[ii].style.backgroundColor="grey";
    }
}

var node_obj=[
    {
        "tag":"div",
        "childs":[
            {
                "tag":"h2",
                "text":"hello one"
            },
            {
                "tag":"h2",
                "text":"hello one"
            },
            {
                "tag":"h2",
                "text":"hello one"
            },
        ]
    },
    {
        "tag":"div",
        "childs":[
            {
                "tag":"h3",
                "text":"hello two"
            },
            {
                "tag":"h3",
                "text":"hello two"
            },
            {
                "tag":"h3",
                "text":"hello two"
            },
        ]
    },
    {
        "tag":"div",
        "childs":[
            {
                "tag":"h4",
                "text":"hello three"
            },
            {
                "tag":"h4",
                "text":"hello three"
            },
            {
                "tag":"h4",
                "text":"hello three"
            },
        ]
    },
    {
        "tag":"ol",
        "childs":[
            {
                "tag":"li",
                "text":"hello four"
            },
            {
                "tag":"li",
                "text":"hello four"
            },
            {
                "tag":"li",
                "text":"hello four"
            },
        ]
    }
];

node_obj.forEach(function (item) {
    var node = document.createElement(item.tag);
    item.childs.forEach(function (childitem) {
        var child_item= document.createElement(childitem.tag);
        var child_text= document.createTextNode(childitem.text);
        child_item.appendChild(child_text);
        node.appendChild(child_item);
    })
   document.getElementsByTagName("body")[0].appendChild(node);
}); 
    
var obj={
    "tag":"div",
    "childs":[
        {
            "tag":"h2",
            "text":"hello four"
        },
        {
            "tag":"h2",
            "text":"hello fourfdsfsd"
        },
        {
            "tag":"h2",
            "text":"hello ana"
        },
    ]
}


var node = document.createElement(obj.tag);
obj.childs.forEach(function (childitem) {
    var child_item= document.createElement(childitem.tag);
    var child_text= document.createTextNode(childitem.text);
    child_item.appendChild(child_text);
    node.appendChild(child_item);
})
//document.getElementsByTagName("body")[0].appendChild(node);