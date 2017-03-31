Ext.define('MyApp.view.main.SchoolTree',{
    extend: 'Ext.tree.Panel',
    renderTo: document.body,
    title: 'School Tree',
    flex: 0.2,
    // store: schooltreeData,
    xtype:'school-tree',
    region:'west',
    margin: '5 5 5 5',
    root: {
        text: 'Our School',
        expanded: true,
        expandable: false,
        children: [
            {
                text: '1',
                children:[{
                    text: 'Joen Doe',
                    leaf: true
                },{
                    text: 'John Rambo',
                    leaf: true
                },{
                    text: 'Sylvester Stallone',
                    leaf: true
                }]
            },
            {
                text: '2',
                children:[{
                    text: 'Jhon Papa',
                    leaf: true
                },{
                    text: 'Todd Moto',
                    leaf: true
                },{
                    text: 'Misko Hevery',
                    leaf: true
                }]
            },
            {
                text: '3',
                children: [
                    {
                        text: 'Andrii Andrushko',
                        leaf: true
                    }
                ]
            }
        ]
    }
});