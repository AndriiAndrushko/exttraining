
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.main.MainController',
        // 'MyApp.store.School',
        'MyApp.view.main.SchoolTree',
        'MyApp.model.LessonsModel',
        'MyApp.view.main.LessonsGrid'
    ],
    viewModel: 'main',
    controller: 'main',
    layout: 'border',
    border: true,
    items: [
        {
            title: 'First',
            xtype:'school-tree',
            flex: 0.2,
            margin: '5 5 5 5',
            region: 'west'
        },
        {
            title: 'Second',
            xtype: 'lessons-grid',
            flex: 0.8,
            margin: '5 5 5 5',
            region: 'center'
        }

    ]
});
