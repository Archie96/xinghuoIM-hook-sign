Java.perform(function(){

	var AyWelcome = Java.use("com.socialapp.chat.民主诚信敬业诚信自由和谐爱国爱国.民主友善自由平等爱国民主富强"); //你要hook Java.use("包名.类名")
	AyWelcome.民主法治富强民主公正法治平等.implementation=function(str){  //通过上面的包名.类名找到你的方法名然后通过.implementation定义一个匿名函数进行获取参数的效果
        console.log("Hook_class: " + str); //通过console.log()打印出来你需要参数
        this.民主法治富强民主公正法治平等(str); //最后别忘了把参数返还给该函数
        
    }
});
