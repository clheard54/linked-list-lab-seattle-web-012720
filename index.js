let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
    ntrandm: {name: 'Juliet', next: null}
  }

function getName(node){
    return node.name
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next(head, collection){
    return collection[head.next]
}

function nodeAt(index, linkedList, collection){
    let node = collection[linkedList];
    for (let i=0; i<index; i++){
        node = next(node, collection)
    }
    return node
}


function addressAt(index, linkedList, collection){
    if(index == 0){
        return linkedList
      } else {
        let node = nodeAt(index-1, linkedList, collection);
            return node.next
      }
}


function indexAt(node, collection, linkedList){
    let currentNode = collection[linkedList];
    let index = 0
    while ( currentNode !== node){
        currentNode = next(currentNode, collection)
        index ++
    }
    return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let bumped = nodeAt(index, linkedList, collection)
    let previous = nodeAt(index-1, linkedList, collection)

    let bumpedIndex = indexAt(bumped, collection, linkedList)
    let previousIndex = indexAt(previous, collection, linkedList)
    let bumpedAddress = addressAt(bumpedIndex, linkedList, collection)
    let previousAddress = addressAt(previousIndex, linkedList, collection)

    previous.next=newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next=bumpedAddress
}


function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = collection[linkedList]
    for(let i = 0; i < index; i++){
       previousNode = currentNode
       currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
  }