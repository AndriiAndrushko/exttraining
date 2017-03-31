/**
 * Created by aandru on 31.03.2017.
 */
 Ext.define('MyApp.store.LessonsStore', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.LessonsModel',

    fields: [
         'lesson', 'score', 'needImprovement'
    ],

    data:{items:  [
        {lesson: 'Biology',               score: 12, needImprovement: false},
        {lesson: 'Chemistry',             score: 9,  needImprovement: true},
        {lesson: 'Environmental Science', score: 10, needImprovement: false},
        {lesson: 'Geometry',              score: 11, needImprovement: false},
        {lesson: 'World History',         score: 10, needImprovement: false}
    ]},
    proxy: {
         type: 'memory',
         reader: {
             type: 'json',
             rootProperty: 'items'
         }
    }
});