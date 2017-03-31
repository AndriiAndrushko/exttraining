var scoreData = Ext.create('Ext.data.Store', {
    model: 'MyApp.model.LessonsModel',
    data: [
        {lesson: 'Biology',               score: 12, needImprovement: false},
        {lesson: 'Chemistry',             score: 9,  needImprovement: true},
        {lesson: 'Environmental Science', score: 10, needImprovement: false},
        {lesson: 'Geometry',              score: 11, needImprovement: false},
        {lesson: 'World History',         score: 10, needImprovement: false}
    ]
});
Ext.define('MyApp.view.main.LessonsGrid', {
    extend: 'Ext.grid.Panel',
    renderTo: document.body,
    store: scoreData,
    xtype:'lessons-grid',
    width: 400,
    height: 200,
    columns: [
        {
            text: 'Lesson',
            flex: 1,
            dataIndex: 'lesson'
        },
        {
            text: 'Score',
            flex:0.4,
            dataIndex: 'score'
        },
        {
            text: 'Need Improvement',
            flex: 1,
            dataIndex: 'needImprovement'
        }

    ]
});