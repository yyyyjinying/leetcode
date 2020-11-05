import BinarySearchTree from "./BinarySearchTree";

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6);

console.log(tree.getRoot());

// 中序排序
tree.inOrderTraverse();

// 查询最小值
console.log(tree.min());

// 查找key
console.log(tree.search(5))

// 删除节点
console.log(tree.remove(15))

console.log(tree.getRoot());
