new Vue({
	el:"#app",
	data:{
		title:"This is Flexible",
		areaTitle:"",
		name:"",
		a: "Hello",
		b: "Baby"
		
	},
	methods:{
		fillArea: function(){
			this.title = "This is Flexible too";
		},
		sayHello: function(){
			this.title = arguments.length;
			this.areaTitle = this.a+this.b;
		}
	},
	watch:{
		title: function(value){
			var vm = this;
			console.log("Hello");
			setTimeout(function(){
				vm.areaTitle = "\tэта инфа появится при изменениее title";
	              },2000)
			
			
		}
	}
})




































