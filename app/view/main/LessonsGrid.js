Ext.define('MyApp.view.main.LessonsGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'lessons-grid',
    renderTo: document.body,
    requires: [
        'MyApp.store.Lessons',
        'MyApp.model.Lesson'
    ],
    flex: 0.7,
    region: 'center',
    margin: '5 5 5 5',
    width: 400,
    height: 200,
    columns: [

    ]

});
// Ext.create('Ext.grid.Panel', {
//     renderTo: document.body,
//     store: userStore,
//     width: 400,
//     height: 200,
//     title: 'Application Users',
//     columns: [
//         {
//             text: 'Name',
//             width: 100,
//             sortable: false,
//             hideable: false,
//             dataIndex: 'name'
//         },
//         {
//             text: 'Email Address',
//             width: 150,
//             dataIndex: 'email',
//             hidden: true
//         },
//         {
//             text: 'Phone Number',
//             flex: 1,
//             dataIndex: 'phone'
//         }
//     ]
// });


//
//
// Ext.define('MyApp.view.main.SchoolTree', {
//     extend: 'Ext.tree.Panel',
//     renderTo: document.body,
//     title: 'School Tree',
//     flex: 0.2,
//     xtype:'school-tree',
//     region:'west',
//     margin: '5 5 5 5',
//     root: {
//         text: 'Root',
//         expanded: true,
//         children: [
//             {
//                 text: 'Child 1',
//                 leaf: true
//             },
//             {
//                 text: 'Child 2',
//                 leaf: true
//             },
//             {
//                 text: 'Child 3',
//                 expanded: true,
//                 children: [
//                     {
//                         text: 'Grandchild',
//                         leaf: true
//                     }
//                 ]
//             }
//         ]
//     }});