

var nodeObj = {
    "tag": "div",
    "children": [
        {
            "tag": "h2",
            "text": "Hello"
        },
        {
          "tag": "h2",
          "text": "World"
        },
        {
          "tag": "p",
          "text": "holi"
        },
        {
          "tag": "span",
          "text": "ontas?"
        }
    ]
  }
  
  
  function createParent(tag) {
    return document.createElement(tag)
  }
  
  function createChild(child) {
    var element = document.createElement(child.tag)
    var textElement = document.createTextNode(child.text)
    element.appendChild(textElement)
    return element
  }
  
  function buildStructure(nodeObj) {
    var parentNode = createParent(nodeObj.tag)
    nodeObj.children.forEach(function(child) {
        var childNode = createChild(child)
        parentNode.appendChild(childNode)
    })
    return parentNode
  }
  
  function init() {
    var structureNode = buildStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  init()