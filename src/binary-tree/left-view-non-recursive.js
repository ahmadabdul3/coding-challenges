// given binary tree, print left side of it
// -
/*
{
  left: a,
  right: b
}
 */

const finalStructure = [];
let children = [];
let prevChildren = [];
const maxIt = 9999;
let currIt = 0;

function printLeftView(rootNode) {
    if (!rootNode) return;
    currIt = 0;
    finalStructure.push(rootNode);
    assignChildren(rootNode, children);

    while (true) {
        // - protect against accidental stackoverflow
        if (currIt > maxIt) {
            return;
        }

        if (children.length === 0) {
            return;
        }

        finalStructure.push(children[0]);
        prevChildren = children;
        children = [];
        prevChildren.forEach(c => assignChildren(c, children));

        currIt++;
    }

}

function assignChildren(node, acc) {
    const { left, right } = node;
    if (left) acc.push(left);
    if (right) acc.push(right);
}

console.clear();
printLeftView(buildBinaryTree());
console.log('*** finalStructure', finalStructure);


function buildBinaryTree() {
    const node_root_1_right_2_left_3_left = { name: 'f', left: '', right: '' };

    const node_root_1_right_2_left = { name: 'e', left: node_root_1_right_2_left_3_left, right: '' };
    const node_root_1_left_2_right = { name: 'd', left: '', right: '' };

    const node_root_1_right = { name: 'c', left: node_root_1_right_2_left, right: '' };
    const node_root_1_left = { name: 'b', left: '', right: node_root_1_left_2_right };

    const node_root = { name: 'a', left: node_root_1_left, right: node_root_1_right };

    return node_root;
}
