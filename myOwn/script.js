
new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    arr: []
      },

   methods:{
   	fibon: function(){
   		
   		return "fibon";
   	},
   	putElements: function(event){
   		var texarea = getElementsByTagName('textarea');
   		texarea.style.display = "block";
   		console.log('put');
   		for(var i = 0; i< this.arr.length; i++){
   			texarea.append(this.arr[i]);
   		}
   	}
   }

}); 

