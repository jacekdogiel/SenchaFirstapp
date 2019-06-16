Ext.define("Firstapp.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'Main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
		{xtype:'Home'},
		{xtype:'PostContainer'}
        ]
    }
});