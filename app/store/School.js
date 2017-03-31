Ext.define('MyApp.store.School', {
    extend: 'Ext.data.Store',

    alias: 'store.school',

    fields: [
        'firstname', 'lastname'
    ],

    data: { items: [
        { firstname: 'Jhon',    lastname: "Papa"       },
        { firstname: 'Misko',   lastname: "Hevery"     },
        { firstname: 'Todd',    lastname: "Moto"       },
        { firstname: 'Google',  lastname: "Developers" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});/**
 * Created by aandru on 30.03.2017.
 */
