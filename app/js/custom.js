$(function(){
    var item= [
				{ "userpic":"images/avatar.png" , "fullName":"Kerem suer", "atName":"@kerem", "tweetTime":"3m","tweetMessage":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, 
				{ "userpic":"images/avatar.png" , "fullName":"AxelHarmenn", "atName":"@axel_harmenn", "tweetTime":"1h","tweetMessage":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 
				{ "userpic":"images/avatar.png" , "fullName":"Ausan Singh", "atName":"@kerem", "tweetTime":"2h","tweetMessage":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim " }, 
				{ "userpic":"images/avatar.png" , "fullName":"Ausan Singh", "atName":"@kerem", "tweetTime":"4h","tweetMessage":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" }
				
			]
			

    $.each(item, function(index,item) {    
        $('.tweet-container').append('<div class="tweet-box"><div class="left-user-pic">'+
        	'<a href="" class="tweet-user-pic"><img src="'+item.userpic+'" alt=""> </a> </div>'+
        	'<div class="tweet-text-box">'+
        	'<div class="name-row"><div class="user-name"><span class="full-name"> '+item.fullName+'</span>'+
			'<span class="at-user-name"> '+item.atName+'</span></div><div class="tweet-time">'+item.tweetTime+'</div></div>'+
			'<div class="tweet-message">'+item.tweetMessage+'</div>'+
			'<div class="action-row">' +
				'<ul>'+
					'<li><i class="fa fa-share"></i></li>'+	
					'<li><i class="fa fa-star"></i></li>	'+
					'<li><i class="fa fa-refresh"></i></li>	'+
					'<li><i class="fa fa-ellipsis-h"></i></li>	'+
				'</ul>'+

				'<div class="expend-tweet"><i class="fa fa-expand"></i></div>'+
			'</div>'+
        	'</div></div>'
        	);
    });

});