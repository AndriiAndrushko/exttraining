/**
 * Created by aandru on 31.03.2017.
 */
Ext.define('MyApp.store.Lessons',{
    extend:'Ext.data.Store',
    model: 'MyApp.model.Lesson',

    data: [
        {lesson: 'Biology',               score: 12, needImprovement: false},
        {lesson: 'Chemistry',             score: 9,  needImprovement: true},
        {lesson: 'Environmental Science', score: 10, needImprovement: false},
        {lesson: 'Geometry',              score: 11, needImprovement: false},
        {lesson: 'World History',         score: 10, needImprovement: false},
    ]

});