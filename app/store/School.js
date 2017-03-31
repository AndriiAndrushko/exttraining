Ext.define('MyApp.store.School', {
    extend: 'Ext.data.TreeStore',
    root: {
        text: 'Our School',
        expanded: true,
        expandable: false,
        children: [
            {
                text: '1',
                leaf: true
            },
            {
                text: '2',
                leaf: true
            },
            {
                text: '3',
                expanded: true,
                children: [
                    {
                        text: 'Grandchild',
                        leaf: true
                    }
                ]
            }
        ]
    }
});
