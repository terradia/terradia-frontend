import React from "react";
import Home from "./Home"

export default function Start() {
    return (
        <Home/>
    );
}

// export default function Blog() {
//     let list = todoList();
//
//     function changeColor(id, done) {
//         list.map(task => {
//             if (task.id === id) {
//                 task.done = done;
//                 console.log('done', task);
//             }
//         });
//         console.log('task', list);
//         return list;
//     }
//
//     return (
//         <Layout>
//             <h1>My TODOList</h1>
//             <ul>
//                 {list.map(tasktt => (
//                     <Task key={tasktt.id} task={tasktt} change={changeColor}/>
//                 ))
//                 }
//             </ul>
//         </Layout>
//     );
// }