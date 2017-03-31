Ext.define('MyApp.view.main.SchoolTree', {
    extend: 'Ext.tree.Panel',
    renderTo: document.body,
    title: 'School Tree',
    flex: 0.2,
    xtype:'school-tree',
    region:'west',
    margin: '5 5 5 5',
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Child 1',
                leaf: true
            },
            {
                text: 'Child 2',
                leaf: true
            },
            {
                text: 'Child 3',
                expanded: true,
                children: [
                    {
                        text: 'Grandchild',
                        leaf: true
                    }
                ]
            }
        ]
    }});