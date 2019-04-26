var nodeObj = [
  {
    "name": "1 Abuelito",
    "children":[
      {
        "name": "Papa",
        "children":[
          {"name": "hijo",
            "children":[
              {"name":"nieto1"},
              {"name":"nieto2",
                "children":[
                  {"name":"bisnieto1"},
                  {"name":"bisnieto2"},
                  {"name":"bisnieto3"},
                  {"name":"bisnieto4",
                    "children":[
                      {"name":"tataranieto1"},
                      {"name":"tataranieto2",
                        "children":[
                          {"name":"tantatataranieto"},
                        ]
                      },
                    ]
                  },

                ]
            }

            ]
          },
        ]
      },
    ]
  },
  {
    "name": "2 Abuelito", 
  },
  {
    "name": "3 Abuelito", 
  }
]


function createParentAndChildrens(node,parent) {
  node.forEach(function (element) {
    var parentNode = createParentNode(element)
    if(element.children){
      createParentAndChildrens(element.children, parentNode);
    }
    parent.appendChild(parentNode);
  });
}

function createParentNode(element) {
  var parentNode = document.createElement("ul");
  var childNode=  document.createElement("li");
  var textNode = document.createTextNode(element.name);
  childNode.appendChild(textNode)
  parentNode.appendChild(childNode);
  return parentNode;
}



function init() {
  parent=document.getElementsByTagName("body")[0];
  createParentAndChildrens(nodeObj,parent);
}

init();