


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