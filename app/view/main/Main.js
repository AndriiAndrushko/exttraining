// var schoolTree = Ext.create('Ext.tree.Panel', {
//     renderTo: document.body,
//     title: 'School Tree',
//     flex: 0.2,
//     xtype:'panel',
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
// var lessonsGrid = Ext.create('Ext.grid.Panel')

Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.main.MainController',
        'MyApp.view.main.SchoolTree'
    ],
    viewModel: 'main',
    controller: 'main',
    layout: 'border',
    border: true,
    items: [
        {
            title: 'Firrst',
            xtype:'school-tree',
            flex: 0.2,
            margin: '5 5 5 5',
            region: 'west'
        },
        {
        title: 'Second',
        xtype:'panel',
        flex: 0.7,
        margin: '5 5 5 5',
        region: 'center'
      }
    ]
});
