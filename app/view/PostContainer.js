Ext.define('Firstapp.view.PostContainer',{
	extend:'Ext.NavigationView',
	xtype:'PostContainer',
	config:{
		title : 'Post',
		iconCls : 'maps',
		items:[
		{
			xtype:'Places'
		}
		]
	}
});